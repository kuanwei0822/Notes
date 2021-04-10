安裝:
	
	先安裝
	1. python 3.8
	2. visual studio community 2019(包含資料庫附加功能) + MySQL for visual studio (https://dev.mysql.com/downloads/windows/visualstudio/)

	再安裝:
	1. MySQL Installer  => 裏頭安裝 ＭySQL serve　
	   (https://dev.mysql.com/downloads/installer/ )

安裝疑難雜症: 
	1. 先安裝的部分 要記得要安裝對的版本
	2. 安裝完可能會無法登錄:( https://blog.csdn.net/sinat_35821976/article/details/99291551 )

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

