# 實人教育 少年導覽隊 | 台灣

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Active-success?style=flat-square)](https://shirenschool.github.io/wonder-scouts/)
[![Code Size](https://img.shields.io/badge/HTML%20Size-24%20KB%20(Originally%202%20MB)-blue?style=flat-square)]()

本專案為「實人實驗教育 少年導覽隊」非營利文化共創計畫之官方網頁。本版本為基於原始概念進行**全新重構、效能優化與安全性修復**的獨立維護版本。

## 🚀 重構重點與優化成果

原始網頁檔案存在大量的 AI 生成冗餘程式碼、架構混亂以及嚴重的效能瓶頸。本次重構主要達成以下優化：

### 1. 核心檔案瘦身 (體積暴跌 98%+，快做完了)
* **問題：** 原始 `index.html` 體積高達 **2 MB**，主因為高解析度背景圖片被轉為 Base64 字串硬編碼於 HTML 中，導致網頁載入極度卡頓。
* **優化：** 將 Base64 圖片完整提取，還原為獨立影像檔案並進行 `.webp` 現代化網頁格式壓縮，存放於 `images/` 目錄。**HTML 檔案體積由 2 MB 降至 24 KB**。

### 2. 網頁三劍客解耦
* **問題：** 原始專案將 HTML 結構、數千行 CSS 樣式與 JavaScript 邏輯全塞在單一檔案中，缺乏可維護性。
* **優化：** 遵循現代前端標準，將專案結構化分割：
```
  ├── index.html
  └── style.css
  └── script.js 
  └── images/
```

### 3. JavaScript 效能與 UX 優化

* **頁籤切換 (`switchTab`)：** 移除原本高頻率查詢 DOM 的舊寫法，改用現代 CSS 變數與 `classList.toggle` 配合 `dataset` 屬性，實作更具擴充性、避免多組元件污染的封閉邏輯。
* **影片延遲載入 (`loadYT`)：** 修正原本動態替換 `iframe` 導致的佈局跳動問題。加入原生 `loading="lazy"` 屬性，並結合 `onload` 事件監聽，確保 YouTube 框架完全載入後才流暢淡入，大幅提升 ChromeOS 等輕量設備的順暢度。

### 4. 移除行內樣式與安全性修復

* 全面消滅 HTML 中的 `style="..."` 與 `onmouseover` 等行內事件，全面回歸 CSS 偽類別（`:hover`）控制。
* 移除潛在含有不安全資安隱患的程式碼片段。

## 🛠️ 開發與佈署

* **本地預覽：** 本專案已完全靜態化與模組化，直接於瀏覽器開啟 `index.html` 即可完整預覽。

## 📄 聲明與致敬

* 本專案基於「實人實驗教育 少年導覽隊」原創文化共創計畫概念進行重構。
* 網頁內容與商標版權歸原策劃團隊與實人實驗教育所有。
* 本儲存庫由 **[Pig-ci(Lynx)]** 進行技術重構與非營利開源維護。