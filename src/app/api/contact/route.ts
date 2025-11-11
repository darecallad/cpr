import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, locale } = body;

    // 基本驗證
    if (!name || !email || !message) {
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
            .message-box { background-color: white; padding: 20px; border-left: 4px solid #2F4858; margin-top: 20px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 新的聯絡訊息</h1>
              <p>New Contact Message</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">姓名 / Name:</span>
                <span class="value">${name}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value">${email}</span>
              </div>
              <div class="field">
                <span class="label">語言 / Language:</span>
                <span class="value">${locale === "en" ? "English" : "繁體中文"}</span>
              </div>
              <div class="message-box">
                <div class="label">訊息內容 / Message:</div>
                <div style="margin-top: 10px; white-space: pre-wrap;">${message}</div>
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
新的聯絡訊息 / New Contact Message
============================================

姓名 / Name: ${name}
Email: ${email}
語言 / Language: ${locale === "en" ? "English" : "繁體中文"}

訊息內容 / Message:
--------------------------------------------
${message}
--------------------------------------------

============================================
此郵件由 Waymaker CPR 網站自動發送
This email was automatically sent from Waymaker CPR website
    `;

    // 發送郵件
    const mailOptions = {
      from: `"Waymaker CPR Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email, // 可以直接回覆給客戶
      subject: `📧 新聯絡訊息 / New Contact - ${name}`,
      text: textContent,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Contact email sent successfully",
    });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
