環境設定:

	Eclipse 建立 workspace 後需要做的設定:

	1. 更改 JDK 版本( Installed JREs )

	2. 設定 compiler 版本( Compiler )

	3. 編碼設定: UTF-8 ( Workspace )

	4. 額外: 如果有用到 CSS、HTML: 他們預設的編碼也要改成 UTF-8 ( CSS File、 HTML File )

建立 Server:

	1. New -> Server

		i. 第一頁: Apache -> 選 tomcat v9.0 版本

		ii. 第二頁: Tomcat Installation directory 路徑選擇: 已裝好的 Tomcat 資料夾 ( D:\apache-tomcat-9.0.46 ) -> Finish

建立 Servlet 專案:

	1. New -> Dynamic Web Project

		i. 第一頁: 不用改，只要確認: 

			確認 Target runtime: Apache Tomcat v9.0  OK

			確認 Configuration: Default Configuration for Apache Tomcat v9.0  OK

		ii. 第二頁: 不用改

		iii. 第三頁: Generate web.xml 要勾起來

匯入 Servlet 專案:
	
	1. Import -> Existing Project into Workspace

		i. 第一頁: select root directory 路徑選擇: 選擇要匯入的專案，選好之後要確認 Projects 大框框內的專案是被勾起來的。

			並勾下方的 Copy Projects into workspace 確保是複製一份副本到自己專案，而不是改到原本的檔案。 -> Finish

	2. 做專案確認: 

		Properties -> Java Building Path -> Libraries 確認 Library 都沒有變紅字 OK
		
		Properties -> Project Facets 確認 Java 版本使用 1.8 版 OK

匯出 war 檔:

	1. 專案右鍵 -> Export -> WAR file -> 選擇要匯出的地方 -> finish

讓 Tomcat Run war 專案:

	1. 進到 apache-tomcat-9.0.46 資料夾 -> webapps 中，war 檔丟裡面。

	2. 進到 apache-tomcat-9.0.46 資料夾 -> bin 中，打開 startup.bat 開啟伺服器。此時 war 檔會被解壓縮並在伺服器上執行。

	3. 關伺服器: 點 shutdown.bat 關閉伺服器。webapps 中的 war 檔跟被解壓縮的同名專案都要刪掉，才算復原。



-----------------------------------------------------------------------------------
2020/6/19

	基本功能:

		i. request.setCharacterEncoding("UTF-8");

			設定讀取 request 編碼。
			注意: 必須在讀取任何參數之前

		ii. response.setCharacterEncoding("UTF-8");
			response.setContentType("text/html");

			設定回應格式、編碼
			可以合併: response.setContentType("text/html;charset=UTF-8");	
			// 注意: 實測 charset=UTF-8 才有效，charset=UTF8 無效

		iii. PrintWriter out = response.getWriter();

			取得 PrintWriter 物件，可以把字串印在網頁上

		
	前端參數:

		參考 ThreeParams.java 範例
		參考 Basic.java 範例

		i. request.getParameterNames();

			取得所有參數的"名稱"，回傳一個 Enumeration<String>

			使用方式:

				Enumeration<String> params = request.getParameterNames();

				while (params.hasMoreElements()) {
					String string = (String) params.nextElement();
					out.print(string);		// 用來顯示
				}

		ii. request.getParameter("name1");

			取得 request 傳來的一個參數

		iii. request.getParameterValues("name1");

			取得 request 傳來的一個陣列參數，並回傳陣列


		**奇怪功能:

			request.getContentLength() 

				回傳 int，判斷傳送資料的長度

			request.getContentType()

				回傳 String，取得傳送的資料型態


	上傳檔案: 

		參考 UploadServlet.java

		**尚未練習

		getWriter、getOutputStream 只能選一個回應。



	導向其他網頁:

		重導其他網頁之前，都不能 response 回應

		i. response.setHeader("refresh","5"); 隔5秒重新刷新此網頁

			注意: 此刷新相當於打網址+Enter，所以刷新是用 Get 方法刷新。

			參考 RefreshHelloWorldServlet.java 範例
			參考 ReLoadWeb.java 練習


		ii. response.setStatus(response.SC_MOVED_TEMPORARILY); // 302，資源臨時移動至別的網頁
			response.setHeader("location","http..."); 重新導向別的網頁

			注意: 第一行，必須要加，否則預設回傳 200 成功，網頁就不會再重導向了。

			參考 SearchNewsServlet.java 範例
			參考 SendRedirect.java 練習

		iii. response.sendRedirect("http..."); 重新導向別的網頁 

			注意: 網址也會改變

			參考 SearchNewsServlet.java 範例
			參考 SendRedirect.java 練習

	回應狀態碼:

		參考 SearchNewsServlet.java 範例
		參考 StatusCode.java & StatusCodeError.java 練習

		i. response.setStatus(...); 回應指定的狀態碼

			狀態碼內容:

				HttpServletResponse.SC_OK -> 200 成功
				HttpServletResponse.SC_MOVED_PERMANENTLY -> 301 重新導向頁面
				HttpServletResponse.SC_MOVED_TEMPORARILY -> 302 Found，資源在別處
				其他狀態碼查詢:" https://tomcat.apache.org/tomcat-5.5-doc/servletapi/javax/servlet/http/HttpServletResponse.html "
				其他狀態碼查詢:" https://javaee.github.io/javaee-spec/javadocs/ "
			注意: Eclipse 內部顯示，可能會被瀏覽器預設顯示擋掉，請到瀏覽器使用 F12 的 Network 看 Status 狀態。


		ii. response.sendError(...); 回應指定的錯誤狀態碼

			狀態碼內容:

				HttpServletResponse.SC_FORBIDDEN -> 403
				HttpServletResponse.SC_NOT_FOUND -> 404 
				其他狀態碼查詢:" https://tomcat.apache.org/tomcat-5.5-doc/servletapi/javax/servlet/http/HttpServletResponse.html "
				裏頭的 4XX 狀態碼都可以使用。

			可以放自訂訊息:

				response.sendError(HttpServletResponse.SC_NOT_FOUND,"This is 404!");


	Filter 用法:

		參考 FilterDwmo 專案

		**尚未練習


	設定、取得 Servlet 起始參數( servlet 等級 ):

		生命週期: Loading --> Initialize (只初始化一次) --> Execute 接受請求並回應*n --> Destroy

		參考 ShowMessage.java & GreetingServlet.java 範例
		參考 InitParameter1~2.java 練習

		i. 創專案時，請勾 init 選項。 取消註記、編輯 .xml 檔

			方法一:
				public void init(ServletConfig config) throws ServletException {
		
					super.init(config);	// 呼叫父元素的 init() 函數，固定寫法必須要寫
					...
				}

			方法二:
				public void init() throws ServletException {

					ServletConfig config = this.getServletConfig(); // getServletConfig 可以取得 config，而且不用 super.init(config);
					...
				}
				方法二不一定要在 init() 才能用，doGet、doPost 也可以使用，所以也能每次執行都做拿初始參數這個動作。

		ii. config.getInitParameterNames();

			取得所有參數的"名稱"，回傳一個 Enumeration<String>

			使用方式:

				Enumeration<String> params = request.getInitParameterNames();

				while (params.hasMoreElements()) {
					String string = (String) params.nextElement();
					out.print(string);		// 用來顯示
				}


		iii. config.getInitParameter("param");

			取得一個 Servlet 的初始化參數


		iv.  config.getServletName()

			取得 <servlet-name> 的值


		v.  .getServletContext()

			取得 ServletContext，代表 xml 中的那個 <servlet> ，還不知道功能。


	共用的資源( ServletRequest ):

		參考 LoginServlet.java & AccountServlet.java 範例
		參考 ShareDataAndDispatcher1~3.java 練習

		用來儲存資料。同一個 request 有效

		i. request.setAttribute("name" , object )
		   存入一個物件在 request 中，取名子為 name，這個物件就可以跟著 request 跑。存入的東西只能是 object ( EX: String )

		ii. String message = (String)request.getAttribute("name");
			取出物件，取出的物件型態一律是 object，所以要記得轉型回來( 這邊是用 String )。


		iii. 另有: 
			HttpSession : 一段時間內有效
		 	ServletContext : 伺服器關閉前都有效


	Request 派遣:

		參考 LoginServlet.java & AccountServlet.java 範例
		參考 ShareDataAndDispatcher1~3.java 練習

		可以回應 response 一些東西之後再分派出 Request，這是 ok 的( EX: print 一部分，再由另一 servlet 再 print 剩下的 )。


		把 request 交給另一 servlet ，有兩種方式。

		i. forward: A 把 request 交給 B servlet ，由 B servlet 回應，且網址還是 A 的網址	

			RequestDispatcher requestDispatcher = request.getRequestDispatcher("/AAA");  // 這邊填入要連去的 servlet
			requestDispatcher.forward(request, response);	// 正式連過去

			request.getRequestDispatcher("/AAA").forward(req, res);// 更簡潔的寫法，同樣效果


		ii. include: A servlet 將 request 交到 B servlet，servlet B 處理完還是要回到 A servlet，由 A 來回應

			參考網址:" https://openhome.cc/Gossip/ServletJSP/DispatchRequest.html "

			RequestDispatcher requestDispatcher = request.getRequestDispatcher("/AAA");  // 這邊填入要連去的 servlet
			requestDispatcher.include(request, response);	// 正式連過去

			request.getRequestDispatcher("/AAA").include(req, res);// 更簡潔的寫法，同樣效果


	Context 伺服器等級參數:

		參考: ContactInfoServlet.java & CounterServlet.java 範例
		參考 ContextInitParamter.java 練習

		i. 取得 ServletContext 物件 context，當然方法一會比較方便。

			方法一:
			ServletContext context = this.getServletContext();
			
			方法二:
			ServletContext context = config.getServletContext();
			

		ii. context.getInitParameter();

			取得一個 Context 初始參數。


	共用的資源( HttpSession ):

		參考: SessionCreateServlet.java & SessionDestroyServlet.java 範例
		參考: UseSession.java 練習

		用來儲存資料。一段時間內有效

		i. HttpSession session = request.getSession(True) ，分(True),(False),()

			取得一個 Session。

			True: 取得 Session 。若原本該 request 就有 Session 就使用原本就有的。若原本沒有就建立一個新的。
			False: 取得 Session 。若原本該 request 就有 Session 就使用原本就有的。若原本沒有就回傳 Null。
			沒填則會預設 True。

		ii. session.setMaxInactiveInterval()

			設定該 Session 的時效 (單位: 秒)

		iii. session.setAttribute("AAA", obj)

			存入一個物件在 Seeion，存入的東西只能是 object ( EX: String )

		iv. String conunterString = (String)session.getAttribute("AAA");

			從 Session 裡取出參數，一律為 object 型態，所以記得要轉型。

		v. session.invalidate()

			Destroy 這個 Session。

		iv. XML 設定 Session 時間

			XML:
			"<web-app>"
			...
			"<session-config>"
  				"<session-timeout>1</session-timeout>"
  			"</session-config>"	
  			...
  			"</web-app>"
  			單位為: 分鐘

  			權重: setMaxInactiveInterval() 優先，沒設則使用 XML 的時效。


	事件:

		參考: SessionCreateServlet.java & SessionDestroyServlet.java & SessionLifeCycleEventExample.java 範例
		參考: Listener.java 練習

		當特定物件做某些動作時，會被 Listener 發現，並執行自訂的程式。

		註冊在 XML 的 <listener> 中才能用來監控，用一個一般類別來設定 Listener 並 implements 特定類別。

		i. XML 註冊 Listener 的類別，這樣伺服器才知道要使用哪個類別監控。

			"<listener>"
	  			"<listener-class> XXX </listener-class>"
	  		"</listener>"

  		ii. 該類別要根據要監控的東西來 implements 實作介面:

  			EX:
  				
  			implements ServletContextListener : 使用 Context 生命週期的 Listener
  			public void contextInitialized(ServletContextEvent sec) {...}	// 當 Context 被建立時
  			public void contextDestroyed(ServletContextEvent sec) {...}		// 當 Context 被結束時

  			還有其他一堆，可以參閱講義 P129~P136

  			注意: 物件觸發 Destroyed 時，當下物件就被消滅了，{...} 裡是沒辦法拿該物件有關參數，可能要使用 unbinding 等 Listener。

  		**待加強練習


  	例外處理:

  		**暫時跳過


  	P163
  	


	總結 XML 佈署設定:

		context-param
		session-config
		Listener
		一般 Servlet + mapping

