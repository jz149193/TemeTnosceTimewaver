# TEMETNOSCE TimeWaver 預約系統

完整的 TimeWaver 身心健康中心線上預約系統

---

## 🚀 一步一步部署到 Vercel

### 📋 步驟 1: 下載並解壓縮

1. 下載 `temetnosce-timewaver.zip` 檔案
2. 在下載的檔案上按右鍵 → 選擇「解壓縮」
3. 會得到一個 `temetnosce-timewaver` 資料夾

### 🌐 步驟 2: 登入 Vercel

1. 打開瀏覽器,前往: **https://vercel.com**
2. 如果還沒帳號,點擊 **Sign Up** 註冊(建議用 GitHub 或 Google 登入)
3. 登入你的 Vercel 帳號

### 🗑️ 步驟 3: 刪除舊專案 (如果有)

1. 在 Vercel 首頁,找到你的舊專案 `teme-tnosce-timewaver`
2. 點擊專案進入
3. 點擊上方 **Settings** (設定)
4. 捲動到最底部,找到 **Delete Project** (刪除專案)
5. 輸入專案名稱確認刪除
6. 點擊刪除按鈕

### ⬆️ 步驟 4: 部署新專案

#### 方法 A: 拖拽上傳 (最簡單! 推薦)

1. 回到 Vercel 首頁
2. 點擊右上角 **Add New** → **Project**
3. 往下捲動,找到 **"Or, import a third-party Git repository"** 區塊
4. 再往下找到 **"Deploy without Git"** 或直接看到上傳區域
5. **把整個 `temetnosce-timewaver` 資料夾直接拖拽**到頁面上
6. Vercel 會自動開始上傳和部署
7. 等待 1-2 分鐘,完成!

#### 方法 B: 透過 GitHub (進階)

1. 在 GitHub 創建新倉庫
2. 將 `temetnosce-timewaver` 資料夾內容推送到 GitHub
3. 在 Vercel 點擊 **Import Project**
4. 選擇你的 GitHub 倉庫
5. 點擊 **Deploy**

### ✅ 步驟 5: 確認部署成功

1. 部署完成後,Vercel 會顯示一個網址 (類似: `https://temetnosce-timewaver.vercel.app`)
2. 點擊 **Visit** 按鈕查看你的網站
3. 確認以下內容:
   - ✅ 標題顯示: "TEMETNOSCE 身心健康中心"
   - ✅ 11 個服務項目都正確顯示
   - ✅ 可以順利完成預約流程
   - ✅ 成功頁面顯示 "感謝您預約 TEMETNOSCE 身心健康中心"

### 🎉 完成!

你的新網站已經上線了!

---

## 📱 功能特色

✅ **完整預約流程** - 服務選擇 → 日期時間 → 個人資料 → 確認
✅ **11 種療程服務** - 從身體平衡到商業分析
✅ **響應式設計** - 完美支援手機、平板、桌面
✅ **現代化介面** - 漂亮的漸層背景和動畫效果
✅ **中文繁體** - 完整的繁體中文介面

---

## 🛠️ 本地測試 (選用)

如果你想在自己電腦上測試:

```bash
# 1. 進入專案資料夾
cd temetnosce-timewaver

# 2. 安裝依賴
npm install

# 3. 啟動開發伺服器
npm run dev

# 4. 打開瀏覽器訪問
# http://localhost:3000
```

---

## 📝 自定義修改

### 修改服務項目

編輯 `components/TimeWaverBooking.js`:
- 找到 `services` 陣列
- 新增、刪除或修改服務項目
- 包含: 名稱、分類、時長、價格、描述

### 修改時間段

編輯 `components/TimeWaverBooking.js`:
- 找到 `timeSlots` 陣列
- 修改可預約的時間段

### 修改品牌資訊

編輯以下檔案:
- `app/layout.js` - 網頁標題和描述
- `components/TimeWaverBooking.js` - 頁面內容

---

## 📞 技術支援

如果遇到問題:
1. 確認所有檔案都在 `temetnosce-timewaver` 資料夾內
2. 確認資料夾結構完整
3. 嘗試重新上傳到 Vercel

---

## 📁 專案結構

```
temetnosce-timewaver/
├── app/
│   ├── layout.js          # 網站佈局和 metadata
│   ├── page.js            # 首頁
│   └── globals.css        # 全域樣式
├── components/
│   └── TimeWaverBooking.js # 主要預約組件
├── public/                 # 靜態資源
├── package.json           # 專案依賴
├── next.config.js         # Next.js 配置
├── tailwind.config.js     # Tailwind CSS 配置
└── postcss.config.js      # PostCSS 配置
```

---

## 🔧 技術棧

- **框架**: Next.js 14 (App Router)
- **樣式**: Tailwind CSS
- **圖標**: Lucide React
- **部署**: Vercel
- **語言**: JavaScript (React)

---

## 📄 授權

MIT License

---

## 🎯 快速檢查清單

部署前確認:
- [ ] 已下載 `temetnosce-timewaver.zip`
- [ ] 已解壓縮到 `temetnosce-timewaver` 資料夾
- [ ] 已註冊/登入 Vercel 帳號
- [ ] 已刪除舊專案 (如有)

部署後確認:
- [ ] 網站標題顯示 "TEMETNOSCE"
- [ ] 所有 11 個服務都正常顯示
- [ ] 預約流程可以完整走完
- [ ] 手機瀏覽正常
