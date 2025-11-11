# Gmail 郵件發送設置指南

## ✅ 已完成的工作

1. ✅ 安裝 `nodemailer` 套件
2. ✅ 創建 `.env.local` 環境變數配置文件
3. ✅ 創建 `src/lib/email.ts` 郵件工具函數
4. ✅ 創建 `/api/booking` API endpoint
5. ✅ 創建 `/api/contact` API endpoint
6. ✅ 更新 booking 表單連接到 API
7. ✅ 更新 contact 表單連接到 API

---

## 🔧 接下來你需要做的設置

### 1️⃣ 取得 Gmail App Password

因為 Gmail 有雙重驗證（2FA），你不能直接使用密碼，需要生成專用的 **App Password**。

#### 步驟：

1. 登入你的 Gmail 帳號
2. 前往 Google Account: https://myaccount.google.com/
3. 點擊左側選單 **「安全性」(Security)**
4. 確保已開啟 **「兩步驟驗證」(2-Step Verification)**
5. 在搜尋框搜尋 **"App passwords"** 或直接訪問: https://myaccount.google.com/apppasswords
6. 選擇 **「郵件」(Mail)** 和 **「Windows 電腦」(Windows Computer)**
7. 點擊 **「產生」(Generate)**
8. Google 會給你一個 **16 位數的密碼**（例如：`abcd efgh ijkl mnop`）
9. **複製這個密碼！** 你只會看到一次

---

### 2️⃣ 更新 `.env.local` 文件

打開專案根目錄的 `.env.local` 文件，填入你的資訊：

\`\`\`env
# Gmail SMTP Configuration
EMAIL_USER=your-email@gmail.com          # 👈 改成你的 Gmail 地址
EMAIL_PASSWORD=abcd efgh ijkl mnop       # 👈 改成剛才生成的 App Password
EMAIL_TO=info@waymakerbiz.com            # 接收郵件的信箱（可以是同一個或不同的）
\`\`\`

**注意：**
- `EMAIL_USER` - 你用來發送郵件的 Gmail 帳號
- `EMAIL_PASSWORD` - 剛才產生的 16 位數 App Password（可以有空格或沒有空格都行）
- `EMAIL_TO` - 接收表單通知的信箱（通常是 info@waymakerbiz.com）

---

### 3️⃣ 重啟開發伺服器

因為環境變數需要重新載入：

\`\`\`powershell
# 停止目前的 dev server（Ctrl + C）
# 然後重新啟動
npm run dev
\`\`\`

---

## 🧪 測試郵件功能

### 測試 1：Booking 表單

1. 訪問 http://localhost:3000/booking
2. 填寫所有必填欄位
3. 提交表單
4. 檢查 `info@waymakerbiz.com` 是否收到郵件

### 測試 2：Contact 表單

1. 訪問 http://localhost:3000/contact
2. 填寫所有必填欄位
3. 提交表單
4. 檢查 `info@waymakerbiz.com` 是否收到郵件

---

## 📧 郵件格式

### Booking 郵件包含：
- 姓名 / Full Name
- 電話 / Phone
- Email
- 機構名稱 / Organization（選填）
- 課程類型 / Course Type
- 期望日期 / Preferred Date
- 學員人數 / Number of Students（選填）
- 付款方式 / Payment Method
- 特殊需求 / Special Requests（選填）
- 語言 / Language

### Contact 郵件包含：
- 姓名 / Name
- Email
- 類別 / Category
- 訊息內容 / Message
- 語言 / Language

所有郵件都使用 **HTML 格式**，帶有品牌色彩和清晰的排版。

---

## 🛡️ 安全注意事項

1. **永遠不要把 `.env.local` 提交到 Git**
   - 已自動在 `.gitignore` 中排除
   - `.env.example` 可以提交（不含真實密碼）

2. **App Password 安全性**
   - 這個密碼只能發送郵件，不能登入你的帳號
   - 如果外洩，可以在 Google Account 中隨時刪除並重新生成

3. **生產環境**
   - 部署到 Vercel 時，在 Vercel Dashboard 中設置環境變數
   - Settings → Environment Variables
   - 添加 `EMAIL_USER`, `EMAIL_PASSWORD`, `EMAIL_TO`

---

## ❌ 常見問題排解

### 問題 1：郵件沒有發送

檢查 Terminal 中是否有錯誤訊息：
- `Invalid login` → App Password 錯誤
- `Missing credentials` → 環境變數未設置或未重啟伺服器

### 問題 2：郵件進入垃圾郵件

這是正常的，因為：
- 新的發送帳號信譽較低
- 可以把發件人地址加入通訊錄
- 或者使用專業的郵件服務（如 SendGrid, Resend）

### 問題 3：Gmail 每日發送限制

免費 Gmail 帳號：
- **每天最多 500 封郵件**
- **每分鐘最多約 10 封**

如果超過限制，考慮使用：
- Google Workspace (付費)
- 第三方郵件服務：Resend, SendGrid, AWS SES

---

## 📝 下一步優化建議

1. **添加 Email 模板**
   - 使用 React Email 或 MJML
   - 更專業的郵件設計

2. **改用專業郵件服務**
   - Resend (推薦，API 簡單)
   - SendGrid
   - AWS SES

3. **添加自動回覆**
   - 用戶提交後自動發送確認郵件給客戶
   - 提升用戶體驗

4. **郵件記錄**
   - 儲存到資料庫（Supabase）
   - 方便追蹤和管理

---

## 🎉 完成！

現在你的網站已經可以發送郵件了！

有任何問題隨時問我 🙌
