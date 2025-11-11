# 🚀 郵件功能快速設定指南

## 📋 快速檢查清單

### ✅ 已完成（by AI）
- [x] 安裝 nodemailer
- [x] 創建 API endpoints (`/api/booking`, `/api/contact`)
- [x] 更新表單連接到 API
- [x] 創建郵件工具函數
- [x] 創建環境變數模板
- [x] 撰寫完整文檔

### ⏳ 你需要做的（5 分鐘）
- [ ] 取得 Gmail App Password
- [ ] 填寫 `.env.local`
- [ ] 重啟 dev server
- [ ] 測試郵件功能

---

## 🎯 3 步驟快速設定

### 1️⃣ 取得 Gmail App Password（2 分鐘）

訪問：https://myaccount.google.com/apppasswords

或手動：
```
Google Account → Security → 2-Step Verification → App passwords
```

選擇：**Mail** + **Windows Computer** → Generate

複製 16 位數密碼（例如：`abcd efgh ijkl mnop`）

### 2️⃣ 更新環境變數（1 分鐘）

打開 `.env.local`，填入：

```env
EMAIL_USER=your-email@gmail.com          # 👈 改這裡
EMAIL_PASSWORD=abcd efgh ijkl mnop       # 👈 貼上 App Password
EMAIL_TO=info@waymakerbiz.com            # 接收郵件的信箱
```

### 3️⃣ 重啟並測試（2 分鐘）

```powershell
# Terminal 中按 Ctrl + C 停止
npm run dev

# 測試郵件配置
node scripts/test-email.js
```

---

## 🧪 測試方法

### 方法 1：使用測試腳本（推薦）
```powershell
node scripts/test-email.js
```

看到這個表示成功：
```
✅ SMTP 連接成功！
✅ 測試郵件已發送！
🎉 所有測試通過！
```

### 方法 2：測試實際表單

#### 測試 Booking：
1. http://localhost:3000/booking
2. 填寫表單並提交
3. 檢查 `info@waymakerbiz.com` 信箱

#### 測試 Contact：
1. http://localhost:3000/contact
2. 填寫表單並提交
3. 檢查 `info@waymakerbiz.com` 信箱

---

## 🔍 疑難排解

### ❌ 錯誤：Invalid login
**原因：** App Password 錯誤或未開啟兩步驟驗證

**解決：**
1. 確認 Gmail 已開啟兩步驟驗證
2. 重新生成 App Password
3. 確認密碼沒有多餘空格
4. 重啟 dev server

### ❌ 錯誤：Missing credentials
**原因：** 環境變數未正確設置

**解決：**
1. 確認 `.env.local` 存在於專案根目錄
2. 確認所有變數都已填寫
3. 重啟 dev server

### 📨 郵件進入垃圾郵件
**這是正常的！**

**解決：**
- 將發件人加入通訊錄
- 標記為「非垃圾郵件」
- 或使用專業郵件服務（Resend、SendGrid）

---

## 📁 檔案結構

```
cpr/
├── .env.local                    # 👈 你需要填寫這個
├── .env.example                  # 參考範例
├── src/
│   ├── lib/
│   │   └── email.ts              # Gmail SMTP 配置
│   └── app/
│       └── api/
│           ├── booking/route.ts  # Booking API
│           └── contact/route.ts  # Contact API
├── scripts/
│   └── test-email.js             # 測試腳本
└── docs/
    ├── email-setup-guide.md      # 完整指南
    └── email-implementation-summary.md  # 技術總結
```

---

## 🌐 部署到 Vercel

當你準備部署時：

1. 進入 Vercel Dashboard
2. 選擇你的專案
3. Settings → Environment Variables
4. 添加三個變數：
   - `EMAIL_USER` = your-email@gmail.com
   - `EMAIL_PASSWORD` = your-app-password
   - `EMAIL_TO` = info@waymakerbiz.com
5. Redeploy

---

## 📞 需要幫助？

- **完整指南：** `docs/email-setup-guide.md`
- **技術細節：** `docs/email-implementation-summary.md`
- **變更記錄：** `docs/CHANGELOG.md`

---

## ✨ 就這樣！

設定完成後，你的網站就能：
- ✅ 自動接收課程預約通知
- ✅ 自動接收聯絡表單訊息
- ✅ 雙語支援（中英文）
- ✅ 專業的 HTML 郵件格式
- ✅ 可直接回覆客戶

**預計設定時間：5 分鐘** ⏱️
