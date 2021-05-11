安裝:
	
	可以不先安裝: ( 實測 java 目前沒安裝也沒關系 )
	1. python 3.8
	2. visual studio community 2019(包含資料庫附加功能) + MySQL for visual studio (https://dev.mysql.com/downloads/windows/visualstudio/)

	再安裝:
	1. MySQL Installer  => 裏頭安裝 ＭySQL serve　
	   (https://dev.mysql.com/downloads/installer/ )

安裝疑難雜症: 
	1. 先安裝的部分 要記得要安裝對的版本
	2. 安裝完可能會無法登錄:( https://blog.csdn.net/sinat_35821976/article/details/99291551 )
--------------------------------------------------
MySQL 安裝: 第一次安裝

	參閱: https://pclevinblog.pixnet.net/blog/post/314562667-%5Bmysql%5Dmysql-%E4%B8%8B%E8%BC%89%E5%AE%89%E8%A3%9D--windows

	i. 下載: mysql-installer-community-X.xxx 安裝檔，並執行

		下載網址: https://dev.mysql.com/downloads/installer/

	ii. 選擇安裝類型 Setup Type: Developer default ( 開發者 )
	
	iii. Check Requirem: 會一併安裝需要的程式，執行安裝。

		visual studio & python 目前沒有要用到所以跳過。

	iv. 設定密碼。下方的為新增額外的帳戶，沒有需要的話可以不用動。

	v. Authentication method: 選擇密碼加密模式。第一個是比較新的，下面的比較舊。選第一個。

	vi. 剩下都無腦下一步 -> 安裝完成


MySQL 安裝: 第二次以上安裝

	i. 打開安裝包，會顯示已經安裝的 MySQL 相關軟體。右邊 Add 可以增加想安裝的其他 MySQL 套件。

	

--------------------------------------------------
系統指令:

# 登入 mysql 命令:
	
	要編輯環境變數 Path: 新增 C:\Program Files\MySQL\MySQL Server 8.0\bin 才能直接下指令。否則要到該路徑才能使用以下命令。

	mysql -h localhost -u root -p

	輸入密碼


# 離開 mysql 登錄環境:

	exit

--------------------------------------------------
一般指令:

# 資料分層:
	
	i. databases 資料庫 : 有系統的、自己建立的資料庫。

	ii. table 資料表 : 每個資料庫裡可以有多個 table ，每個 table 規則內容可能都不一樣。

	iii. describe : 這個 table 的結構，裡面包含這個 table 的資料規則。

	iv. Data : 這個 table 裏頭真正的資料表，依照資料的結構規則而成。可以 新增，修改、查詢。


# 資料庫:

	i. show databases; 查看資料庫 

		顯示現有資料庫。基本上我們只使用 mysqul 或 自己建立的 當作儲存資料的資料庫。

	ii. create database name; 創造資料庫

		name 為資料庫名。

	iii. drop database name; 刪除資料庫

		name 為資料庫名。

	iv. use name; 進入資料庫

		進入建立好的資料庫，name 為資料庫名。


# table :
	
	使用 use 進入資料庫之後可以做的動作。

	i. show tables; 查看 table

	ii. create table tab_name(
			col_name col_type ... 
		)

	iii. drop table tab_name; 刪除 table

# 查看 table 結構 & 裏頭資料:

	i. desc tab_name; 查看 tab 結構

	ii. select * from tab_name; 查看 tab 表的資料。


--------------------------------------------------
Java 上 MySQL code 請參閱 Java 筆記。


--------------------------------------------------
// 服務啟動:(雷同 mongoDB)
	
// 	啟動服務: net start mysql

// 	停止服務: net stop mysql
--------------------------------------------------

