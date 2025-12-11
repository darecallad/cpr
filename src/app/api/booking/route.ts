import { NextRequest, NextResponse } from "next/server";
import { getTransporter, getSender } from "@/lib/email";
import { partners } from "@/data/partners";
import redis from "@/lib/redis";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      phone,
      email,
      organization,
      courseType,
      preferredDate,
      numberOfStudents,
      paymentMethod,
      specialRequests,
      locale,
    } = body;

    // 基本驗證
    if (!fullName || !email || !phone || !courseType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Determine target email
    const isDaycare = organization && organization !== "Waymaker CPR";
    const targetEmail = isDaycare ? "daycare@waymakerbiz.com" : "info@waymakerbiz.com";
    const bookingId = crypto.randomUUID();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.waymakerbiz.com";
    const cancellationLink = preferredDate && preferredDate.includes("T") 
      ? `${baseUrl}/booking/cancel?id=${bookingId}&date=${preferredDate.split("T")[0]}`
      : "";

    // Generate Calendar Link
    let calendarLink = "";
    if (preferredDate && preferredDate.includes("T")) {
      const partner = partners.find((p) => p.name === organization);
      const location = partner ? partner.address : "Waymaker CPR";
      const title = `CPR Course - ${organization}`;
      const details = `Course: ${courseType}\nName: ${fullName}\nPhone: ${phone}`;

      try {
        const startDate = new Date(preferredDate);
        const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);
        const format = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");
        const start = format(startDate);
        const end = format(endDate);
        calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
      } catch (e) {
        console.error("Error generating calendar link", e);
      }
    }

    // Save booking to Vercel KV for reminders
    // Key format: cpr:schedule:{YYYY-MM-DD}
    // We only save if there is a valid date
    if (preferredDate && preferredDate.includes("T")) {
      try {
        const dateOnly = preferredDate.split("T")[0]; // 2023-12-08
        const bookingRecord = {
          id: bookingId,
          fullName,
          email,
          courseType,
          organization,
          locale,
          preferredDate,
          phone
        };
        
        // Add to the list for that specific date
        // ioredis requires string for lpush
        await redis.lpush(`cpr:schedule:${dateOnly}`, JSON.stringify(bookingRecord));
        console.log(`Saved booking to Redis: cpr:schedule:${dateOnly}`);
      } catch (error) {
        console.error("Failed to save booking to Redis:", error);
        // We don't block the response if Redis fails, just log it
      }
    }

    // 準備郵件內容 - HTML 格式
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2F4858; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 30px; border-radius: 5px; margin-top: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #2F4858; }
            .value { margin-left: 10px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; font-size: 12px; }
            .btn { display: inline-block; background-color: #4285F4; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚨 新的課程預約</h1>
              <p>New Course Booking</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">姓名 / Full Name:</span>
                <span class="value">${fullName}</span>
              </div>
              <div class="field">
                <span class="label">電話 / Phone:</span>
                <span class="value">${phone}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value">${email}</span>
              </div>
              ${
                organization
                  ? `
              <div class="field">
                <span class="label">機構名稱 / Organization:</span>
                <span class="value">${organization}</span>
              </div>
              `
                  : ""
              }
              <div class="field">
                <span class="label">課程類型 / Course Type:</span>
                <span class="value">${courseType}</span>
              </div>
              ${
                preferredDate
                  ? `
              <div class="field">
                <span class="label">期望日期 / Preferred Date:</span>
                <span class="value">${preferredDate}</span>
              </div>
              `
                  : ""
              }
              ${
                numberOfStudents
                  ? `
              <div class="field">
                <span class="label">學員人數 / Number of Students:</span>
                <span class="value">${numberOfStudents}</span>
              </div>
              `
                  : ""
              }
              <div class="field">
                <span class="label">付款方式 / Payment Method:</span>
                <span class="value">${paymentMethod}</span>
              </div>
              ${
                specialRequests
                  ? `
              <div class="field">
                <span class="label">特殊需求 / Special Requests:</span>
                <span class="value">${specialRequests}</span>
              </div>
              `
                  : ""
              }
              <div class="field">
                <span class="label">語言 / Language:</span>
                <span class="value">${locale === "en" ? "English" : "繁體中文"}</span>
              </div>
              ${
                calendarLink
                  ? `
              <div class="field" style="margin-top: 20px; text-align: center;">
                <a href="${calendarLink}" class="btn">Add to Google Calendar</a>
              </div>
              `
                  : ""
              }
            </div>
            <div class="footer">
              <p>此郵件由 Waymaker CPR 網站自動發送</p>
              <p>This email was automatically sent from Waymaker CPR website</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // 準備純文字版本
    const textContent = `
新的課程預約 / New Course Booking
============================================

姓名 / Full Name: ${fullName}
電話 / Phone: ${phone}
Email: ${email}
${organization ? `機構名稱 / Organization: ${organization}\n` : ""}
課程類型 / Course Type: ${courseType}
${preferredDate ? `期望日期 / Preferred Date: ${preferredDate}\n` : ""}
${numberOfStudents ? `學員人數 / Number of Students: ${numberOfStudents}\n` : ""}
付款方式 / Payment Method: ${paymentMethod}
${specialRequests ? `特殊需求 / Special Requests: ${specialRequests}\n` : ""}
語言 / Language: ${locale === "en" ? "English" : "繁體中文"}
${calendarLink ? `\nAdd to Google Calendar: ${calendarLink}\n` : ""}

============================================
此郵件由 Waymaker CPR 網站自動發送
This email was automatically sent from Waymaker CPR website
    `;

    // 發送郵件
    const emailType = isDaycare ? "daycare" : "waymaker";
    const transporter = getTransporter(emailType);
    const sender = getSender(emailType);
    
    const mailOptions = {
      from: `"Waymaker CPR Booking" <${sender}>`,
      to: targetEmail,
      replyTo: email, // 可以直接回覆給客戶
      subject: `🚨 新課程預約 / New Booking - ${fullName}`,
      text: textContent,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    // Send confirmation email to user
    const userSubject = locale === "en" 
      ? "Booking Confirmation - Waymaker CPR" 
      : "預約確認 - Waymaker CPR";

    const userHtmlContent = locale === "en" ? `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2F4858; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 30px; border-radius: 5px; margin-top: 20px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; font-size: 12px; }
            .btn { display: inline-block; background-color: #4285F4; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Booking Confirmation</h1>
            </div>
            <div class="content">
              <p>Dear ${fullName},</p>
              <p>Thank you for booking with Waymaker CPR. We have received your request and will process it shortly.</p>
              <p><strong>Course:</strong> ${courseType}</p>
              ${preferredDate ? `<p><strong>Date:</strong> ${preferredDate}</p>` : ""}
              ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ""}
              
              ${calendarLink ? `
              <div style="margin-top: 20px; text-align: center;">
                <a href="${calendarLink}" class="btn">Add to Google Calendar</a>
              </div>
              ` : ""}

              ${cancellationLink ? `
              <div style="margin-top: 20px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
                <p style="font-size: 14px; color: #666;">Need to cancel?</p>
                <a href="${cancellationLink}" style="color: #dc2626; text-decoration: underline;">Cancel Booking</a>
              </div>
              ` : ""}
              
              <p>If you have any questions, please reply to this email.</p>
            </div>
            <div class="footer">
              <p>&copy; Waymaker CPR</p>
            </div>
          </div>
        </body>
      </html>
    ` : `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2F4858; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 30px; border-radius: 5px; margin-top: 20px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; font-size: 12px; }
            .btn { display: inline-block; background-color: #4285F4; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>預約確認通知</h1>
            </div>
            <div class="content">
              <p>親愛的 ${fullName} 您好，</p>
              <p>感謝您預約 Waymaker CPR 課程。我們已收到您的申請，將盡快為您處理。</p>
              <p><strong>課程：</strong> ${courseType}</p>
              ${preferredDate ? `<p><strong>日期：</strong> ${preferredDate}</p>` : ""}
              ${organization ? `<p><strong>機構：</strong> ${organization}</p>` : ""}
              
              ${calendarLink ? `
              <div style="margin-top: 20px; text-align: center;">
                <a href="${calendarLink}" class="btn">加入 Google 行事曆</a>
              </div>
              ` : ""}

              ${cancellationLink ? `
              <div style="margin-top: 20px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
                <p style="font-size: 14px; color: #666;">需要取消預約？</p>
                <a href="${cancellationLink}" style="color: #dc2626; text-decoration: underline;">取消預約</a>
              </div>
              ` : ""}
              
              <p>如有任何疑問，請直接回覆此郵件。</p>
            </div>
            <div class="footer">
              <p>&copy; Waymaker CPR</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const userTextContent = locale === "en" 
      ? `Dear ${fullName},\n\nThank you for booking with Waymaker CPR. We have received your request.\n\nCourse: ${courseType}\n${preferredDate ? `Date: ${preferredDate}\n` : ""}${calendarLink ? `\nAdd to Google Calendar: ${calendarLink}\n` : ""}\nIf you have any questions, please reply to this email.`
      : `親愛的 ${fullName} 您好，\n\n感謝您預約 Waymaker CPR 課程。我們已收到您的申請。\n\n課程：${courseType}\n${preferredDate ? `日期：${preferredDate}\n` : ""}${calendarLink ? `\n加入 Google 行事曆: ${calendarLink}\n` : ""}\n如有任何疑問，請直接回覆此郵件。`;

    const userMailOptions = {
      from: `"Waymaker CPR" <${sender}>`,
      to: email,
      subject: userSubject,
      text: userTextContent,
      html: userHtmlContent,
    };

    await transporter.sendMail(userMailOptions);

    return NextResponse.json({
      success: true,
      message: "Booking email sent successfully",
    });
  } catch (error) {
    console.error("Error sending booking email:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
