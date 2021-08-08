
1. 新建 Dynamic Web project  專案

2. 專案轉 Maven 專案

3. pom.xml 組態設定( Spring 已講解，Hibernate 尚未講解 )，Update 專案
	
	- hibernate 版，但是尚未完全解說

	- 暫用 Spring



4. hibernate.cfg.xml 

	連線有兩種方式:

		1. XML 檔裡面設定好 DB 名稱、名子、密碼。

		2. XML 檔裡面設定變數 + server 的 context.xml 設定 DB 名稱、名子、密碼。

		建議用第一種

	SQL 表格建立方式: create(資料庫會 Reset)


5. 建立一個 Class 當作資料表的 Bean

	1. 加入 @Entity、@id 等標籤

	2. hibernate.cfg.xml 註冊永續物件


6. 建立 Session 工廠

	記得 hibernate.cfg.xml 路徑要改

7. 此時測試時，Session 工廠建立的同時，就會建立空的 table

--------------------------------------------------------------------------------
統一:
	
	連線方式( hibernate.cfg.xml 中 )
	
	pom.xml 中的各 jar 版本、哪些 jar

	hibernate.cfg.xml 表格建立方式: create

	hibernate.cfg.xml 放哪? resources