基本觀念:

	i. 特別單位: module (模組)

		 I. Core Module 原生模組
		 	// 原本就有的模組

		 II. Local Module 自建模組
		 	// 自己建立的模組

		 III. Third Module 第三方模組
--------------------------------------------------
命令提示字元:

# 桌面路徑:
	C:\Users\orange\Desktop
--------------------------------------------------
建立專案 + 替專案安裝express套件:
	// 官方說明: https://expressjs.com/zh-tw/starter/installing.html

	1. 手動新增資料夾 or 命令提示字元 mkdir name 建立資料夾

	2. 命令提示字元輸入 npm init，並Enter掉預設的設定
	   將產生一個 package 檔案。

	   注意: index.js 為主要檔名稱，如果預設設定改為別的名子，那主要檔名也必須跟自己設的一樣。

	3. 命令提示字元輸入 npm install express --save 
	   package 檔案，會記錄已安裝 express 並顯示版本。

	4. 新增一個名為 index.js 檔案，開始coding

--------------------------------------------------

# 使程式碼變為一個模組，讓任何程式使用 require 可以調用這個模組(module):
  可以將 javascript裡任何型別的宣告，變成一個模組。

	module.exports = log
	// 算是一種宣告，放在程式最尾巴

# 引用模組:
	const name = require("./檔案.js");
	// 可以用 name 引用此 module
