// 測試 Booking API 的腳本
// 執行方式：
// 1. 確保 Next.js 開發伺服器正在運行 (npm run dev)
// 2. 在另一個終端機執行：node scripts/test-booking.js

const fetch = require('node-fetch'); // 如果環境沒有 fetch，可能需要這個，但在 Node 18+ 原生支援
// 為了兼容性，我們使用原生 fetch (Node 18+) 或動態導入

async function testBooking() {
  const url = 'http://localhost:3000/api/booking';
  
  // 計算明天的日期，以便測試 Redis 提醒功能
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dateString = tomorrow.toISOString().split('T')[0]; // YYYY-MM-DD

  const payload = {
    fullName: "Test User (Automated)",
    email: "test@example.com", // 請確保這是一個您可以接收郵件的地址，或者在 .env.local 中設置了 EMAIL_TO
    phone: "123-456-7890",
    courseType: "Standard First Aid & CPR/AED Level C",
    preferredDate: `${dateString}T09:00`,
    message: "This is an automated test booking.",
    locale: "en",
    organization: "Waymaker CPR"
  };

  console.log("🚀 正在發送測試預約請求...");
  console.log(`📅 預約日期: ${dateString} (明天)`);
  console.log(`🔗 目標 URL: ${url}`);
  console.log("📦 Payload:", JSON.stringify(payload, null, 2));

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    console.log("\n📡 伺服器回應:");
    console.log(`Status: ${response.status}`);
    console.log("Body:", data);

    if (response.ok) {
      console.log("\n✅ 預約測試成功！");
      console.log("1. 請檢查您的信箱是否收到「確認信」。");
      console.log("2. 請檢查 Redis 是否有寫入資料 (如果有的話)。");
    } else {
      console.error("\n❌ 預約測試失敗。");
    }

  } catch (error) {
    console.error("\n❌ 請求發送失敗。請確認您的 Next.js 伺服器是否正在運行 (npm run dev)。");
    console.error("Error:", error.message);
  }
}

testBooking();
