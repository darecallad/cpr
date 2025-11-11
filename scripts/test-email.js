// 快速測試 Gmail 配置的腳本
// 執行方式：node scripts/test-email.js

const nodemailer = require("nodemailer");
require("dotenv").config({ path: ".env.local" });

async function testEmail() {
  console.log("🔍 檢查環境變數...");
  console.log(`EMAIL_USER: ${process.env.EMAIL_USER ? "✅ 已設置" : "❌ 未設置"}`);
  console.log(`EMAIL_PASSWORD: ${process.env.EMAIL_PASSWORD ? "✅ 已設置" : "❌ 未設置"}`);
  console.log(`EMAIL_TO: ${process.env.EMAIL_TO ? "✅ 已設置" : "❌ 未設置"}`);

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.error("\n❌ 請先在 .env.local 中設置 EMAIL_USER 和 EMAIL_PASSWORD");
    process.exit(1);
  }

  console.log("\n📧 創建 SMTP transporter...");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    console.log("🔌 驗證 SMTP 連接...");
    await transporter.verify();
    console.log("✅ SMTP 連接成功！");

    console.log("\n📤 發送測試郵件...");
    const info = await transporter.sendMail({
      from: `"Waymaker CPR Test" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: "🧪 測試郵件 / Test Email",
      text: "如果你看到這封郵件，代表設置成功！\nIf you receive this email, the setup is working!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #0F6C8C;">🎉 郵件設置成功！</h2>
          <p>如果你看到這封郵件，代表 Gmail SMTP 設置成功！</p>
          <hr style="border: 1px solid #ccc; margin: 20px 0;">
          <h2 style="color: #0F6C8C;">🎉 Email Setup Successful!</h2>
          <p>If you receive this email, your Gmail SMTP setup is working!</p>
        </div>
      `,
    });

    console.log("✅ 測試郵件已發送！");
    console.log(`📬 Message ID: ${info.messageId}`);
    console.log(`📧 發送到: ${process.env.EMAIL_TO || process.env.EMAIL_USER}`);
    console.log("\n🎉 所有測試通過！你可以開始使用郵件功能了。");
  } catch (error) {
    console.error("\n❌ 錯誤：", error.message);
    console.error("\n常見解決方案：");
    console.error("1. 確認 EMAIL_PASSWORD 是 App Password（不是 Gmail 密碼）");
    console.error("2. 檢查 Gmail 是否開啟兩步驟驗證");
    console.error("3. 重新生成 App Password");
    console.error("4. 確認沒有複製到多餘的空格");
    process.exit(1);
  }
}

testEmail();
