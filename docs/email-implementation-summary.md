# 📧 郵件功能實作總結

## ✅ 已完成的工作

### 1. 套件安裝
```powershell
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### 2. 創建的檔案

#### 核心功能
- **`src/lib/email.ts`** - Gmail SMTP transporter 配置
- **`src/app/api/booking/route.ts`** - Booking 表單 API endpoint
- **`src/app/api/contact/route.ts`** - Contact 表單 API endpoint

#### 配置檔案
- **`.env.local`** - 環境變數（需填入你的 Gmail 資訊）
- **`.env.example`** - 環境變數範例（可提交到 Git）

#### 文檔
- **`docs/email-setup-guide.md`** - 完整的設置指南
- **`scripts/test-email.js`** - 測試腳本

### 3. 更新的檔案

#### 表單連接
- **`src/app/booking/page.tsx`** - 連接到 `/api/booking`
  - 改為 async 函數
  - 使用 fetch POST 發送數據
  - 添加錯誤處理

- **`src/app/contact/page.tsx`** - 連接到 `/api/contact`
  - 改為 async 函數
  - 使用 fetch POST 發送數據
  - 添加錯誤處理

#### 文檔更新
- **`README.md`** - 添加郵件設置說明
- **`docs/CHANGELOG.md`** - 記錄所有變更

---

## 🎯 郵件功能特點

### Booking 表單郵件
當用戶提交課程預約時，會發送包含以下資訊的郵件：

- ✅ 姓名 / Full Name
- ✅ 電話 / Phone
- ✅ Email
- ✅ 機構名稱 / Organization（選填）
- ✅ 課程類型 / Course Type
- ✅ 期望日期 / Preferred Date
- ✅ 付款方式 / Payment Method
- ✅ 特殊需求 / Special Requests（選填）
- ✅ 語言 / Language（English or 繁體中文）

### Contact 表單郵件
當用戶提交聯絡表單時，會發送包含以下資訊的郵件：

- ✅ 姓名 / Name
- ✅ Email
- ✅ 類別 / Category
- ✅ 訊息內容 / Message
- ✅ 語言 / Language

### 郵件設計
- 📱 響應式 HTML 模板
- 🎨 品牌色彩（#2F4858 主色調）
- 🌐 雙語支持（中英文）
- 📧 Reply-To 功能（可直接回覆客戶）
- 📄 純文字備份（相容性更好）

---

## 🔧 接下來你需要做的

### 第 1 步：取得 Gmail App Password

1. 登入你的 Gmail 帳號
2. 前往 https://myaccount.google.com/apppasswords
3. 確保已開啟「兩步驟驗證」
4. 選擇「郵件」和「Windows 電腦」
5. 點擊「產生」
6. 複製 16 位數密碼（例如：`abcd efgh ijkl mnop`）

### 第 2 步：更新 `.env.local`

打開 `.env.local` 文件，填入：

```env
EMAIL_USER=your-email@gmail.com          # 👈 你的 Gmail
EMAIL_PASSWORD=abcd efgh ijkl mnop       # 👈 剛才生成的 App Password
EMAIL_TO=info@waymakerbiz.com            # 接收通知的信箱
```

### 第 3 步：重啟開發伺服器

```powershell
# 按 Ctrl + C 停止
npm run dev  # 重新啟動
```

### 第 4 步：測試郵件功能

#### 方法 1：使用測試腳本（推薦）
```powershell
node scripts/test-email.js
```

#### 方法 2：實際測試表單
1. 訪問 http://localhost:3000/booking
2. 填寫並提交表單
3. 檢查 `info@waymakerbiz.com` 是否收到郵件

---

## 📊 技術細節

### API Endpoints

#### POST /api/booking
```typescript
{
  fullName: string;
  phone: string;
  email: string;
  organization?: string;
  courseType: string;
  preferredDate?: string;
  numberOfStudents?: number;
  paymentMethod: string;
  specialRequests?: string;
  locale: "en" | "zh";
}
```

#### POST /api/contact
```typescript
{
  name: string;
  email: string;
  message: string;  // 包含類別標籤
  locale: "en" | "zh";
}
```

### 錯誤處理

前端會顯示友善的錯誤訊息：
- **English:** "Failed to submit booking. Please try again or contact us directly."
- **中文:** "提交失敗，請重試或直接聯絡我們。"

後端錯誤會記錄在 server console 中，方便除錯。

---

## 🔒 安全性

### 環境變數保護
- ✅ `.env.local` 已在 `.gitignore` 中
- ✅ 永遠不會提交到 Git
- ✅ `.env.example` 可以安全提交（不含真實密碼）

### App Password 安全性
- 只能用於發送郵件
- 無法登入 Gmail 帳號
- 可隨時在 Google Account 中撤銷
- 建議定期更換

### 生產環境部署
部署到 Vercel 時：
1. 進入 Vercel Dashboard
2. Settings → Environment Variables
3. 添加：
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `EMAIL_TO`

---

## ⚠️ Gmail 使用限制

### 免費帳號限制：
- 每天最多 **500 封郵件**
- 每分鐘約 **10 封**

### 如果超過限制：
1. 升級到 **Google Workspace**（付費）
2. 使用專業郵件服務：
   - **Resend** (推薦，API 簡單)
   - SendGrid
   - AWS SES
   - Postmark

---

## 🐛 常見問題排解

### ❌ 郵件沒有發送

**檢查步驟：**
1. 查看 Terminal 錯誤訊息
2. 確認 `.env.local` 正確填寫
3. 確認已重啟 dev server
4. 確認 Gmail App Password 正確
5. 檢查 Gmail 兩步驟驗證是否開啟

**常見錯誤：**
- `Invalid login` → App Password 錯誤
- `Missing credentials` → 環境變數未設置

### 📨 郵件進入垃圾郵件

這是正常的，原因：
- 新的發送帳號信譽較低
- Gmail 自動過濾機制

**解決方法：**
- 將發件人加入通訊錄
- 標記為「非垃圾郵件」
- 使用專業郵件服務（更高信譽）

---

## 🚀 未來優化建議

### 1. 郵件模板引擎
使用 React Email 或 MJML：
- 更容易維護的模板
- 更專業的設計
- 更好的響應式支持

### 2. 改用專業服務
推薦 **Resend**：
- 簡單的 API
- 更好的送達率
- 詳細的分析報告
- 免費額度夠用

### 3. 自動回覆郵件
給客戶發送確認郵件：
- "我們已收到您的預約"
- 提升用戶體驗
- 減少重複提交

### 4. 郵件記錄
儲存到資料庫（Supabase）：
- 追蹤所有提交
- 管理客戶關係
- 分析統計

### 5. 郵件佇列
使用 Bull 或 BullMQ：
- 處理大量郵件
- 失敗重試機制
- 更好的可靠性

---

## 📚 相關文件

- **[完整設置指南](email-setup-guide.md)** - 詳細的 Gmail 設置步驟
- **[CHANGELOG](CHANGELOG.md)** - 所有變更記錄
- **[README](../README.md)** - 專案總覽

---

## 🎉 完成！

你的網站現在已經具備完整的郵件發送功能！

**待辦事項：**
1. ✅ 安裝套件 - 已完成
2. ✅ 創建 API - 已完成
3. ✅ 連接表單 - 已完成
4. ⏳ 設置 Gmail - 需要你填入 `.env.local`
5. ⏳ 測試功能 - 設置完成後測試

有任何問題隨時問我！🙌
