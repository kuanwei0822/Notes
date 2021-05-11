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

服務啟動:(雷同 mongoDB)
	
	啟動服務: net start mysql

	停止服務: net stop mysql


登入 mysql 命令:
	
	mysql -h localhost -u root -p

	輸入密碼

離開 mysql 登錄環境:

	exit
--------------------------------------------------

