// 測試 Daycare Gmail 配置的腳本
// 執行方式：node scripts/test-daycare-email.js

const nodemailer = require("nodemailer");
require("dotenv").config({ path: ".env.local" });

async function testDaycareEmail() {
  console.log("🔍 檢查 Daycare 環境變數...");
  console.log(`DAYCARE_EMAIL_USER: ${process.env.DAYCARE_EMAIL_USER ? "✅ 已設置" : "❌ 未設置"}`);
  console.log(`DAYCARE_EMAIL_PASSWORD: ${process.env.DAYCARE_EMAIL_PASSWORD ? "✅ 已設置" : "❌ 未設置"}`);
  
  // 如果沒有設置 Daycare 專用帳號，通常會 fallback 到主帳號，但這裡我們要測試專用帳號
  if (!process.env.DAYCARE_EMAIL_USER || !process.env.DAYCARE_EMAIL_PASSWORD) {
    console.warn("\n⚠️ 未設置 DAYCARE_EMAIL_USER 或 DAYCARE_EMAIL_PASSWORD");
    console.warn("系統將會使用預設的 Waymaker Email 進行發送 (Fallback mode)");
    return;
  }

  console.log("\n📧 創建 Daycare SMTP transporter...");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.DAYCARE_EMAIL_USER,
      pass: process.env.DAYCARE_EMAIL_PASSWORD,
    },
  });

  try {
    console.log("🔌 驗證 Daycare SMTP 連接...");
    await transporter.verify();
    console.log("✅ Daycare SMTP 連接成功！");

    console.log("\n📤 發送 Daycare 測試郵件...");
    const info = await transporter.sendMail({
      from: `"Daycare Test" <${process.env.DAYCARE_EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.DAYCARE_EMAIL_USER, // 發送給測試接收者或自己
      subject: "🧪 Daycare 測試郵件 / Daycare Test Email",
      text: "這是一封來自 Daycare 帳號的測試郵件。\nThis is a test email from the Daycare account.",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #0F6C8C;">🎉 Daycare 郵件設置成功！</h2>
          <p>這封郵件是通過 <strong>${process.env.DAYCARE_EMAIL_USER}</strong> 發送的。</p>
          <hr style="border: 1px solid #ccc; margin: 20px 0;">
          <h2 style="color: #0F6C8C;">🎉 Daycare Email Setup Successful!</h2>
          <p>This email was sent via <strong>${process.env.DAYCARE_EMAIL_USER}</strong>.</p>
        </div>
      `,
    });

    console.log("✅ Daycare 測試郵件已發送！");
    console.log(`📬 Message ID: ${info.messageId}`);
    console.log(`📧 發送到: ${process.env.EMAIL_TO || process.env.DAYCARE_EMAIL_USER}`);

  } catch (error) {
    console.error("\n❌ Daycare Email 測試失敗:", error);
  }
}

testDaycareEmail();
