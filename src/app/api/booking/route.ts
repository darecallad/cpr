import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/email";

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

============================================
此郵件由 Waymaker CPR 網站自動發送
This email was automatically sent from Waymaker CPR website
    `;

    // 發送郵件
    const mailOptions = {
      from: `"Waymaker CPR Booking" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email, // 可以直接回覆給客戶
      subject: `🚨 新課程預約 / New Booking - ${fullName}`,
      text: textContent,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

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
