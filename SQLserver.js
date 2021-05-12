SQL server 安裝:

	SQL + SSMS

-----------------------------------------------------------------------------------
觀念:

# NULL:

	NULL 與任何數運算結果都會是 NULL

	EX: 
		5 + NULL = NULL
		10*NULL = NULL

-----------------------------------------------------------------------------------
語法:

# select:
	
	i. select 欄位 from table : 

		查詢 table 的特定欄位

	ii. select 欄位 AS XXX from table

		AS 讓該欄位顯示的表頭名子改為 XXX，有空白則要加雙引號 "XXX X"

	iii. select 欄位1 + '...' + 欄位2 from table

		+ 號 可以合併欄位，以單引號''加入字串

	iv. select distinct 欄位 from table

		可以顯示該 table 的欄位組成、詳細資料。

# ISNULL(A,X):

	若 A 為 null ，則回傳 X 值。

-----------------------------------------------------------------------------------