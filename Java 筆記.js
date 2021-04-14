
# java 版本介紹:
	
	SE 基礎版
  v EE 企業版(做網站的版本)，[API]
	ME 行動裝置版

# 開發環境 IED 介紹:

	Eclipse (JEE 版本)
	or My Eclipse (功能太齊全、檔案太大，先不用)(要錢)
	or Intellij IDEA(和 Eclipse 一樣為開發工具)(要錢)

# Web Server: Tomcat

Servlet
JSP
JSTL
Expression Language
WebSocket
JDBC
JTA
JPA
Bean
EJB
JasonP
JasonB
XML
Java mail
-----------------------------------------------------------------------------------
Java 運作原理:

	參閱筆記:

		1. Java EE 結構。
		2. Java Web 外部請求過程。
		3. Java 專案(解釋專案架構)
		4. Java 物件導向程式(解釋物件導向程式)
		5. 物件導向程式特性。
		6. JDK、JRE、JVM (也包含編譯流程)

-----------------------------------------------------------------------------------
建立環境:

# 安裝 JDK SE( java 的運行環境 ): 

	JDK (開發工具包)
	JRE	(運行環境)
	兩個都會同時被安裝

  安裝完，加入環境變數:

  	有設定， Tomcat 才能使用 ，Path 的變數
  	參閱: https://www.kjnotes.com/devtools/35


  	新增環境變數: 
  		
  		JAVA HOME: C:\Program Files\Java\jdk-16

	編輯環境變數 Path: 
		
		新增 %JAVA_HOME%\bin

	環境變數 CLASSPATH 在 java 5 版本 以後已經有預設，不需要特別設定。( 現在是 Java 16 )
	參閱: https://iter01.com/476553.html
		  https://caterpillar.gitbooks.io/javase6tutorial/content/c2_2.html 的2.2.2

	
# IDE 工具: 
	
	Eclipse IDE for Enterprise Java Developers ( Eclipse 有很多版，要 JEE 企業版)

# Server 環境: Tomcat

	Tomcat (下載壓縮檔，方便開啟 & 關閉伺服器)

		下載 JDK 時，有設定 JAVA_HOME 環境變數，Tomcat 才可以啟動

	加入環境變數:

		新增變數參閱:
		https://www.it145.com/9/20891.html
		https://medium.com/@iloveitone/tomcat%E7%92%B0%E5%A2%83%E8%AE%8A%E6%95%B8%E9%85%8D%E7%BD%AE-c4670bd73984


		新增環境變數: 
			
			CATALIA_HOME: C:\apache-tomcat-9.0.45
		
		編輯環境變數 Path: 

			新增 %CATALIA_HOME%\bin


	bin 裡面直接點擊開檔案: 

		startup.bat		啟動 server
		shutdown.bat	關閉 server
		( 開啟後不要直接關掉執行視窗，否則可能會有埠殘留佔用問題，Node 筆記有 )

	conf 資料夾裡 server.xml 文件可以改埠號:

		port="8080" 可以改掉(實測 ok)

-----------------------------------------------------------------------------------
語法:

# package VS import: 
	
	package( 套件 ): 檔案中只能有一個，代表這個類別( 也就是這個 .java 檔 )被裝在某特定套件裡。
					 內容放 package 。

	import: 用來引用別的 類別 或 類別集合。 (只有被 public 的類別才能被 import)
			內容放 package.類別名稱 。

# public VS private VS package

	用來定義 "類別" 以及 "類別裡面的屬性" & "類別裡面的方法" 的封裝等級。
	而且不可以使用在方法 (method) 裡面。

	public: 任何地方都可以使用。

	private: 只能被同個類別的函式存取。

	package(預設):只能被同一個 Package 類別存取。 

	類別的封裝等級只有 public 跟 不出現兩種。

# final:
	
	可以被使用在類別、屬性、方法、方法裡的區域變數。

	對於屬性、方法、方法裡的區域變數:

		效果同 const，只讀不可改。
		
		陣列只能確保其 reference 不改變，不能阻止內容被更改。

	對於類別:

		該類別無法被繼承。

# static(靜態):
	
	有此修飾符時，這個被宣告物會在程式一開始就被建立。
	不需要藉著產生物件就可以直接使用。 屬性、方法皆如此。

	對於屬性:

		該屬性值具有唯一性。當一物件更改到，其他物件的此值也會被更動到。
		可以視為只屬於類別的屬性，而不屬於物件(但物件仍可以更改、讀取)。

		靜態屬性( 又稱類別變數 )。要使用此屬性，也無需建立物件即可使用。

	對於方法:

		靜態方法( 又稱類別方法 )。要使用此方法，不需要建立物件即可以使用。

		若靜態方法要使用全域變數，該變數也一定要是靜態的( 呼叫的方法也要是靜態的 )。
		( 因為程式一開始就被建立，需要的變數當然也要被建立 )

		不能使用 this 。

# abstract 抽象:

	類別使用: 只要有方法使用到 abstract ，該類別就要被宣告為抽象類別。該抽象類別無法產生物件。
			 通常用於被繼承。其繼承的子類別改寫 abstract 方法後，
			 該子類別可以不用 abstract ( 也就是該類別可以產生物件了! )。

	方法使用: 該類別不用 {...} 內容，交給子類別的方法改寫。

# 主類別 VS 一般類別:
	
	主類別:

		1. 檔案必須要有主類別，而且只能有一個。必須 public (也只有他可以) 、名稱和檔名一樣。
		2. 內部使用主函式 main(){} 做為程式進入點。
		3. 包含變數定義區和方法區。

	一般類別:

		1. 不行 public。
		2. 也包含變數定義區和方法區。

# 屬性 & 方法:

	1. 都會定義封裝等級 (public、private...)

	方法:

		1. 都需要宣告回傳值型態: void(不用回傳)、int ... 。
		
		2. 正常一個類別的一般方法，需要類別產生出一個物件，才能使用裡面的方法。
		   如果使用 static 修飾符，不須產生物件，可以直接使用。

		   EX:
		   
			Data.show1();	// 使用靜態方法
			
			Data data = new Data();
			data.show2();	// 使用一般方法

# 多載:

	針對方法，如果有遇到同名函式，其參數資料型態不同 或是 參數個數不同 仍然可以合法使用。

# 建構函式:

	當類別要建立一個物件的時候，才會啟動。可以使用建立物件時回傳的引數。
	名稱要和類別一樣，通常用 public，沒有修飾字，沒有回傳值或 void (不然就變成方法了)。

	EX:

	class C1{

		public C1(){
			...
		} 

	}

# 無名函式: 
	
	{...} 不使用任何名稱、修飾符。當類別要建立一個物件的時候，才會啟動。
	比建構函式還要早觸發。

# 靜態建構函式:

	當類別第一次被載入的時候，才會啟動。也就是說通常只會觸發一次。
	通常是要第一次對此類別做動作的時候( 建立物件、使用類別函數之類的... )，程式才會載入此類別。

# this: 

	類別中使用 this ，代表類別產生出來的物件自己。
	建構函式內 this(...) 呼叫其他建構函式。必須是第一行使用。

# 繼承:

	使用 extends 繼承父類別。
	當子類別被載入時，會先載入父類別再載入子類別。靜態建構函式: 先觸發 父元素的 再觸發子元素的。

	當子類別建立一個物件時。建構子: 先觸發 父元素的()建構子 再觸發子元素的建構子。
	建立元素時不管有無帶入參數，父元素都是觸發 引數為空的 ()建構子，在子元素建構子加入 super(i) 
	則可以使父類別改觸發 (int i)建構子。

# super:

	子類別中如果出現同名屬性，不會覆蓋父類別的。但如果要使用到父類別的同名屬性，
	要使用 super.XXX ( private 則不行 )。 
	建構函式內使用 super(...) 則可以指定父類別觸發的建構函式。必須是第一行使用。
	super 指向父類別。

# 宣告:

	資料型態(8 種):

		正負整數:byte,short,int,long
		byte: 	-128 ~ 127
		short: 	-32768 ~ 32767
		int:		-2147483648 ~ 2147483647
		long:	-9223372036854775808 ~ 9223372036854775807

		浮點數: float,double
		float: 	-3.4028234663852886 x 10^38 ~ 3.4028234663852886 x 10^38
		double:	-1.7976931348623157 x 10^308 ~ 1.7976931348623157 x 10^308
		
		char: 字元(ASCII 碼)			// 字元要用 ''
		boolean: 布林 TRUE & FALSE

	常用宣告:

		String: 字串(以物件方式存在)	// 字串要用 " " ，不可與 ''混用
		
		陣列宣告: char[] a = new char[]{...}	或 
				 char a[] = new char[]{...}	或
				 char[] a = new char[10]	或
				 char a[] = new char[10]	或
				 char[] a ={...}	或
				 chara[] ={...}

		注意: java 的陣列長度宣告後不可再更改，也就是不可以 push 增加或減少。

	注意: 程式碼中的變數宣告中，數字都被當作是 int 資料型態，然後才被指定為變數。
		  所以當數字超出 int 範圍要加上 L ，浮點數要加上 f 或 d 。

		  EX:

		  	long a = 1000000000000; 	// error ，1000000000000 超出 int 範圍
			long a = 1000000000000L; 	// 正確

			float b = 0.123;		// error ，0.123 非 int 範圍
			float b = 0.123f;		// 正確

	字串宣告:

		有順序，不可變。

		字串變數存的非字串內容，而是 reference ，此 reference 指向字串物件。

		宣告:

			i. String a = "abc";

			ii. String a = new String("abc");
 
			這兩種宣告方式不同。
			i 方式，程式會在 String pool(字串池) 裡新增一個 "abc" 字串物件，並指向他。
			String pool (字串池) 是共用的，之後遇到 String b = "abc"; 也將指向同一字串物件。

			ii 方式，程式會創造一個字串物件( 字串池之外 )，視為一個獨立物件。
			之後再遇到 String b = new String("abc"); 將會再創造另一個全新物件。

			注意: String c = a + b ; 這種方式，不管a,b 是不是來自字串池，都會再創造另一個全新物件。

		比較:

			==: 用在比較記憶體位置( reference )，並非字串內容。
				
				如果遇到 獨立物件 & 字串池 或是 獨立物件 & 獨立物件 的比較，都會因為 reference 不同 False

			.equals(): 用在比較字串內容。

				str1.equals(str2) 單純比較 str1 跟 str2 內容。


# 區域變數 VS 全域變數:

	區域變數: 類別裡的方法裡面宣告的變數就是區域變數。就算同類的方法也不能直接拿來用。

	全域變數: 類別裡宣告的屬性，該類別裡所有方法都可以拿來用。
			 But 別的類別一樣不可以直接亂用。

# call by value VS call by reference

	call by value: U know 的。

	call by reference: 

		java 中的 陣列 & 物件都是此種方法。
		被傳到函式內的陣列、物件，如果被改變了，都會直接被更動到本體。

# 輸出 & 輸入:

	輸出:

		i. System.out.println();

			套件自動引入。印出後換行。

	輸入:

		i. str1 = strInput.nextLine();

			引入類別，建立物件後，可以使用物件方法來輸入。輸入後換行。

			import java.util.Scanner;	// 引入類別
			Scanner strInput = new Sanner(System.in)	// 以 Scanner 類別建立物件，並輸入參數 System.in

			str1 = strInput.nextLine();	// 即可使用物件內的 nextLine() 方法輸入

			輸入皆為字串形式，若要轉為數字可用 Integer.parseInt()
			Integer.parseInt(strInput.nextLine());

# 記憶體規則:
	
	函式內的記憶體在函示結束的時候將會被釋放。

	But 如果是函式內建立的陣列，又被 return，陣列的記憶體將不會被清除(只會清除在函式的指向)，
	陣列的記憶體原址仍能保留，而被使用。

-----------------------------------------------------------------------------------
Java servlet:

# 專案 & 伺服器 環境:
	
	1. 建立 dynamic Web Project 專案。target runtime 設定 tomcat 版本 & 路徑。勾選要 xml檔案。
	2. src 新增 servlet 檔案(可以設定 package)，寫入內容。
	3. xml 檔案配置設定:砍掉 Hello World ，新增 servlet、 servlet-mapping 。
	4. 確認 Eclipse 已經配置好 tomcat (這樣才能從 Eclipse 啟動 tomcat)
		window -> Preference -> Server -> Runtime Environment 中新增
		// 參考: https://www.itread01.com/content/1546276880.html

	5. Eclipse 上還需要建立一個伺服器。
		window -> Show View -> other 裡面搜尋 Servers -> 點擊後下方功能表就會出現 Servers 功能
		從下方 Servers 點擊連結 -> 選擇 tomcat 版本 -> next add 我們的專案
		// 參考: https://www.itread01.com/content/1546276880.html

	6. 啟動伺服器:
		下方 Servers 會出現建立好的伺服器，右鍵 Start 伺服器就會啟動。 
		// 參考: https://kknews.cc/zh-tw/code/vl36m4l.html
		// 有連到靜態 html 檔案的例子。

	7. 關閉伺服器:
		一樣右鍵 Stop 就可以停止伺服器。

	8. 當時遇到的問題 & 處理:
		
		i. 處理 jdk 和 Eclipse附帶的 jdk 衝突問題。
		window -> Preference -> installs JREs -> add 一個 我們的 jdk 15 -> 勾選並 apply and close

		ii. 處理 @WebServlet 導致無法啟動 tomcat 服務問題。
		傳案右鍵 build path -> Libraries -> add Library -> 選 Server Runtime -> 選擇 tomcat9
		沒甚麼用，直接註解掉 @WebServlet

		iii.檢查 tomcat9 安裝時未新增環境變數，(參閱 建立環境 中的 tomcat 安裝 )
		cmd 中 tomcat bin 資料夾下執行 service.bat install ，自動安裝環境變數。

		iv. 有查到更改 下方 server 點兩下選項的 Server Locations 第一項( Use workspace metadata)
		改成 第二項( Use Tomcat installation )。實測則並無影響 xml 部屬的連線。
		差別在於網址 localhost:8080 勾第一項會 404，勾第二項會連至 tomcat 首頁。
		參閱: https://www.twblogs.net/a/5b7cb7dd2b71770a43dc4109

		額外: Server Locations 選項說明
			
			JSP 檔案編譯過程:
			 
				JSP 檔 -> servlet(.java 檔) -> .class 檔 -> 機器語言 1010001...

			由 Server Locations 可以決定產生的 .java 檔 和 .class 檔放在哪裡:

			第一項: 放在我們的 workspace 中( 實際為裡面的.metadata/work... 深處的資料夾中，看參閱 )
				   必須要發出請求，JSP 檔被編譯過後，才能看到 .class .java檔案。

			第二項: 會放在 tomcat 的資料夾中。(應該是在 webapps 中)

			第三項: 自己決定 .class .java 檔在哪生成!

		v. XML 正確設定:

		注意如果 XML 檔案如果 <url-pattern> 標籤設定錯誤會導致伺服器開啟錯誤	。<servlet-class> 設定錯誤會導致頁面載入錯誤。

		EX:
			// 以下標籤的斜槓號皆省略
			<servlet>
  				<servlet-name>Hello1<servlet-name>
  				<servlet-class>com.fu.Hello1<servlet-class> // 注意:這邊是 package名稱 . class名稱
  			<servlet>
  			<servlet-mapping>
  				<servlet-name>Hello1<servlet-name>
  				<url-pattern>/My</url-pattern>	// 注意: 這邊的 url 一定要加 / 號
  			<servlet-mapping>


		vi. 正確路由:

		<url-pattern> 標籤中的 /Hello1
		網址要輸入: http://localhost:8080/Test/Hello1
		路由要經過專案名稱(這邊是 Test )

		而 WebContent 下的 XXX.html 靜態檔也一樣。
		要輸入: http://localhost:8080/Test/XXX.html

		額外: xml 檔路由更改後，伺服器要 restart 才會生效。
		
		額外: Test 根路由也可以改: 專案右鍵 -> properties -> Web Project Setting 可以更改
			  更改完，伺服器要 stop ，然後重新 public 再 start 才會生效。  

-----------------------------------------------------------------------------------
servlet 函式:

# 路由設定:

	servlet 3.0 才能使用。 .java 檔案內使用，可以取代 .xml 檔的路由設定。
	
	@WebServlet("/MyURL") // 只有一個參數，視為直接設定路由: urlPatterns
	
	@WebServlet(name="Myname",urlPatterns="/MyURL");
	// 兩個參數: 一個設定名子 name，一個設定路由 urlPatterns。

# 設定回應內容的型別:

	response.setContentType("text/html; charset=utf-8");

	回傳: .html 檔案
	使用: utf-8 編碼( 重要:沒有的話會亂碼 ) 

	等於:
	response.setContentType("text/html");
	response.setCharacterEncoding("utf-8");

# 取得 get 請求或表單送出的參數:

	取得單一參數:
		
		String str = request.getParameter("name");	// 取得名為 name 參數的值

		URL: localhost:8080/Test/My?name=John&name2=Anny	// 參數 name = "John",name2 = "Anny"

	讀取陣列參數(多選時好用):

		String[] strArray = request.getParameterValues("name");

# 設定讀取參數時，用的編碼方式:

	request.setCharacterEncoding("utf-8"); 

	編碼方式不同，中文會導致亂碼。
	這邊可以規定讀取 request 的參數時，以 utf-8 規則讀取。



# html 檔案內，form 表單 action 屬性:

	絕對路徑: 以 / 開頭

		EX: action="/My"
		連至: localhost:8080/My

	相對路徑: 不以 / 開頭，以當前目錄維為基準

		EX: action="My"
		當前位置: localhost:8080/Test/New1.html
		連至: localhost:8080/Test/My
		// Test 為當前目錄(也就是裝這個檔案的資料夾)

# cookie 使用
	
	建立 cookie ，並給予值:

		cookie c = new cookie("name","3600");
		// 創造一個 cookie 物件，包含:名稱、值
		//   名稱為此 cookie 的名字
		//   值為此 cookie 存在的時間，單位:秒。

		c.setMaxAge(7200)
		// 也可以直接更改存在時間，設為 0 ，視同刪除此 cookie 。

		response.addcookie(c);
		// 伴隨 response 將此 cookie 一起送出。
	
	取得 cookie 值:

		取得的 cookie 以陣列形式回傳。

		cookie[] cookies;
		cookies = request.getCookies();

		通常以 foreach 方式可以找到要的 cookie

		EX:
		for(cookie item : cookies){
			if( item.getName().equals("name") ){...}
		}

# Session 使用:
	
	和 cookie 不同，cookie 存至使用者瀏覽器。
	Session 存至伺服器，如果超時 或 瀏覽器關掉 將會刪除此 Session。

	建立 Session ，並給予值:

		HttpSession se = request.getSession();
		// request 方法中建立 Session 物件

		se.setAttribute("name",value);
		// 此 Session 物件可以設定名子 & 值

	取得 Session 值:

		HttpSession se = request.getSession();
		// request 方法中建立 Session 物件

		String a ; 
		a = (String)se.getAttribute("name");
		// 利用此 Session 物件，取得對應 name 的 Session 值
		// 回傳的是 obj 型態，故要用強制轉換。轉換的類型要和當初設定的一樣，不可混用，否則會 Error
		// EX: 設定: 10 -> 用 int，設定 "abc" -> 用 String
		
		比較好的寫法:
		String a = null;
		a = ( se.getAttribute("name")!=null )?(String)se.getAttribute("name"):null;
		// 若沒有 session 則顯示 null 。如果沒有此 if 判斷式，session 沒有內容會 Error。

	設定時間:

		.xml 檔案中設定:

		<session-config>
			<session-timeout>30<session-timeout>	// 單位: 分鐘							
		<session-config>

-----------------------------------------------------------------------------------
Java JSP:

# 檔案設定:

	<%@ page ... %> 設定此檔案，包含:

	contentType="text/html;charset=utf-8" // 瀏覽器處理此頁面的編碼方式。 
	// html 中 <meta charset="Big5"> 如果衝突，以 contentType 優先。


# 腳本元素、指令元素:

	html 標籤為模板元素，Java 程式碼放在腳本元素，<%@ ... %> 則為指令元素。另有動作元素。

	腳本元素:

		用於宣告: <%! int a = 10; %>

		用於放變數:　<%= a %>

		用於放 java code : <% ... %>


	指令元素:
		
		用於檔案的特殊處理: <%@ ... %> 

		指令集名稱 + 其屬性 <%@ page contentType="..." %>

		指令集:

			i. page: 當前頁面的資訊。
			
				屬性:
				import: 引入 java 類別。
				contentType: 指定當前頁面類型。
				language: 此 JSP 檔使用的腳本語言。( 可以省略 )

			ii. include: 可以引入其他 JSP 檔案做為內容( html 也可以，但中文會有亂碼，所以應避免 )

				屬性:
				file: 指定要引入的 JSP 檔案。  // 此檔案也要設 contentType ，否則中文會亂碼。

	動作元素:

		以 <jsp:... ...> 開頭。包括 JavaBean 也是使用動作元素。

		裡面可以包一個 <jsp:param name="..." value="..."> 來傳遞參數。
		( 子檔案使用 request.getParameter("name") 取得參數 )

		注意: 動作元素 使用 <%-- --%> 註解，<!-- --> 會失效。

		
		i. jsp : include 可以引入其他 JSP 檔案作為內容( 相較於@ include，這是動態的 )

			<jsp:include page="file..." /> // 引入地檔案也要包含 contentType 或 pageEncoding ，且不能衝突。

		ii. jsp: forward 重新導向到另一頁。

			<jsp:forward page="file..." /> // 導向至另一頁後，仍然算是同個 request 對象( request 參數仍然有效 )

# JavaBean( 動作元素 ):

	JSP 引用其他地方類別的方法。比起一般方式方便。

	一般方式:

		<%@ page import="XXX.XX.Class" %>	// import 我們要的類別

		<% Class obj = new Class() %> // 建立類別物件

		<% obj.getA(50)... %>	// 使用 set, get 開始使用類別裡的變數

	JavaBean 方式:	

		<jsp:useBean id="obj" scope="page" class="XXX.XX.Class" />	
		// 此行相當於引入類別 + 建立類別物件( obj )
		// jsp: useBean 固定字
		// id: 視為此類別的物件名字
		// scape: 作用範圍( 預設:page )
		// class: 引用的類別，相當於 import 後面的內容

		<% obj.getA(50)... %>	// 可以直接使用 set、 get 方法更改變數。

		<jsp:setProperty name="obj" property="a" value="10" />	
		<jsp:getProperty name="obj" property="a" />
		// 也可以使用 JavaBean 方法來更改變數，相當於 set、get。

# JSP 內部自帶參數:

	request
		.getProperty("name") // 取得參數

		.getRequestDispatcher("XXX.jsp") // return RequestDispatcher 物件
			obj.forward(request,response) // 和 jsp:forward 一樣重新導向，並保留原有 request 參數。

	response
		.sendRedirect("XXX.jsp") 
		// 重定向。重定向之後和 jsp:forward 不同，就不再是原來的 request 了，相當於發出新的 request。
	out

# JSP 四個儲存域:
	
	和 request.getParameter() 儲存域不同。
	<% %> 中宣告的 String、int ... 不包含在任何一個儲存域中。

	i. page
		
		當前 JSP 頁面才有效。重定向或重新導向都會失效。

		pageContext.setAttribute("name","value");
		pageContext.getAttribute("name");

	ii. request
		
		此 request 範圍內都有效。重定向會失效。

		request.setAttribute("name","value");
		request.getAttribute("name");

	iii. session

		Session 有效時限內。瀏覽器關掉會失效。

		session.setAttribute("name","value");
		session.getAttribute("name");

	iv. application

		伺服器生命週期內都有效。

		application.setAttribute("name","value");
		application.getAttribute("name");

	v. pageContext 多載，一個函數可以實現以上四種的儲存方式，效果相同: 

		pageContext.setAttribute("name","value",pageContext.XXX);
		pageContext.getAttribute("name",pageContext.XXX);

		使用第三個參數: 

			I. pageContext.PAGE_SCOPE

				pageContext.setAttribute("name","value",pageContext.PAGE_SCOPE);
				pageContext.getAttribute("name",pageContext.PAGE_SCOPE);

			II. pageContext.REQUEST_SCOPE

				pageContext.setAttribute("name","value",pageContext.REQUEST_SCOPE);
				pageContext.getAttribute("name",pageContext.REQUEST_SCOPE);
			
			III. pageContext.SESSION_SCOPE

				pageContext.setAttribute("name","value",pageContext.SESSION_SCOPE);
				pageContext.getAttribute("name",pageContext.SESSION_SCOPE);
			
			IV. pageContext.APPLICATION_SCOPE

				pageContext.setAttribute("name","value",pageContext.APPLICATION_SCOPE);
				pageContext.getAttribute("name",pageContext.APPLICATION_SCOPE);

# EL 表達示語言:
	
	比起儲存域參數，表達示語言可以直接使用儲存物件的屬性、方法。
	遇到 + 字串會做自動型別轉換成數值。

	四個儲存域參數:
		
		XXX 可以為物件，yy 可以為屬性、方法。 屬性也可以用 pageScope.XXX["yy"] 來取得。
		可以先用 pageContext.setAttribute("name",obj) 設值，再用 ${ pageScope.XXX.yy } 取得屬性，兩者存取相通。

		${ pageScope.XXX.yy }
		${ requestScope.XXX.yy }
		${ sessionScope.XXX.yy }
		${ applicationScope.XXX.yy }

	request.getParameter() 中的參數:

		${ param.name1 }

# JSTL:

	安裝:

		i. 下載網址: http://archive.apache.org/dist/jakarta/taglibs/standard/binaries/
		   中的 jakarta-taglibs-standard-1.1.2.zip 

		ii. 下載下來的壓縮包解壓縮
			資料夾 jakarta-taglibs-standard-1.1.2 -> lib 下的 jstl.jar & standard.jar 兩個檔案拿出來( 只用這兩個檔案 )。

		iii. 兩個檔案放到專案中的 WEB-INF -> lib 中( 沒有 lib 就新增一個 )

			lib 是 Eclipse 中加入額外 Library 的地方。

		iv. [ 教學說 jar包 要加入 library 的動作，But 似乎 Eclipse 會自動加入 ]

				Project -> properties -> Java Build Path -> Libraries 中 Classpath 中 Web App Libraries -> 可以看到 jstl.jar & standard.jar 兩個 jar包

			[ So 以下這部分暫時沒有做 ]

				把 .jar 包( library )加入 build path
				https://stackoverflow.com/questions/2824515/how-to-add-external-library-properly-in-eclipse
		
				或是修改 xml
				https://www.twcode01.com/jsp/jsp-jstl.html

	使用:

		JSP 檔開頭都要貼 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 引用核心標籤庫。


		核心標籤庫: set、get、remove。

			存取的值在四個儲存域中，因此也可以用 表達式、getAttribute()、setAttribute() 方法 來存取值。

			設定值:

				<c:set var="name" value="value" scope="page" />
				// scope 為儲存域設定: page、require、session、application 
				// 可以不設定，預設為 page

			讀取值:

				<c:get var="${ pageScope.name }" />
				// var 為取得變數值，但要用表達式語言來顯示，<%= ... %> 也可以。

			移除:

				<c:remove var="name" scope="page" />
				// scope 可以不設定，預設為 page


		流程控制標籤庫: if、choose、when、otherwise

			if:

				<c:if test="${...}"> ... <c:if>	
				// 結尾 / 號省略
				// test 放表達式條件判斷

			choose、when、otherwise:

				<choose>
					<when test="${...}"> ... <when>

					<when test="${...}"> ... <when>

					<when test="${...}"> ... <when>

					<otherwise> ... <otherwise>

				<choose>
				// 結尾 / 號省略

		迭代操作: forEach

			forEach: 有兩種用法:

			<c:forEach items="..." var="elem" begin="0" end="10" varStatus="status" >
				...${status.index}...${elem}...
			<c:forEach>
			// 結尾 / 號省略
			// 特定字都要用表達式顯示。

			// items 放表達式語言，裏頭要有一個陣列。
			// var 指定某變數為: 當前的那個陣列項目。
			// begin/end 指定開始以及結束的 index
			// varStatus 指定迴圈此次的狀態，status.count 可以顯示第 n 次的迴圈，status.index 可以顯示當前 index


			<c:forEach var="elem" begin="0" end="10" >
				...
			<c:forEach>
			// 不使用陣列，直接使用 begin / end 來決定迴圈。

			// 結尾 / 號省略
			// 特定字都要用表達式顯示。




-----------------------------------------------------------------------------------
函式:

# 陣列複製另一份: clone()

	此函式可以連同記憶體複製一份出來。
	array2 = array1.clone();

# 陣列數值排列: Arrays.sort(array1)

	使陣列內的數值從小到大排列。(效能會比自己寫好一些)
	import java.util.Arrays;
	Arrays.sort(array1);

# 陣列轉字串: Arrays.toString(array1)

	使陣列轉成字串。
	import java.util.Arrays;
	System.out.println( Arrays.toString(Array1) );

# 強制轉型:
	
	可以將常數強制轉為想要的資料型態。最好是大範圍轉小範圍。
	long a;
	a = (long)100;

# 隨機亂數:

	產生隨機 0 ~ 1( 不含1 ) 的 double 小數
	double a = Math.random();

	(int)(Math.random()*k) 會產生 0 ~ k(不含k)的數

# 宣告專用於拼接的字串:
	
	專用於拼接的字串，比起使用一堆字串，比較省記憶體。( 嚴格來說不算 String ，但可以有方法轉成 String )

	StringBuffer strb = new StringBuffer("abc");	
	// 建立一個 StringBuffer 字串。參數可有可無，有的話就會被當作字串。 strb = "abc"

	strb.append("def")
	// StringBuffer 的方法，用於拼接字串。這時， strb = "abcdef"

	strb.toString();
	// 上面的字串嚴格來說只是 StringBuffer 內容，toString() 方法可以將 StringBuffer 內容轉為字串。

# 等於:

	1. == 比較記憶體位置( reference )

		i. 比較物件(字串)的 reference

		相同內容，但記憶體位置不一樣的物件(字串)也會 false

	2. .equals() 比較字串的內容。

		str1.equals(str2)

		因為 java 中，字串也算物件。( 兩個字串就算內容一樣 ，記憶體位置也會不一樣 )
		So 兩個字串的內容要相比，就要使用.equals()。

-----------------------------------------------------------------------------------
愛注意:

# Error: 變數在 if 外宣告，if 內賦值。

	int a;
	if(condition){ a = 10 ;}
	System.out.println(a);		// Error: not initial

	任何變數，如果要 if 內賦值，進入 if 前都先要初始化( 給一個值 )。
	否則 Java 會判定此變數有不被定義的風險，然後 Error

	// 參考
	// https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/629742/
	// 第十三項
	
# warning: "XXX" is never closed
	// 解答
	// https://stackoverflow.com/questions/12519335/resource-leak-in-is-never-closed

# foreach 只可讀不可改
	// 原因
	// https://www.itread01.com/content/1547985961.html