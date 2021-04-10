基本觀念:

	i. 特別單位: module (模組)

		 I. Core Module 原生模組
		 	// 原本就有的模組

		 II. Local Module 自建模組
		 	// 自己建立的模組

		 III. Third Module 第三方模組

# 屬於非同步語言(不會塞住)

--------------------------------------------------
命令提示字元:

# 桌面路徑:
	C:\Users\orange\Desktop

# node -v 	
	// node 版本

# npm -v
	// npm 版本

# 安裝模組:
	*為特別建議安裝的 npm

	全域(指令哪裡打都可以): npm install XXX -g
	特定專案(指令要打在專案裡): npm install XXX --save

		已安裝:

		Express系列:

		*> nodemon 
			(方便 build ，命令提示字元:node XXX.js 改為 nodemon XXX.js 
			 Sublime 不用再 Cancel Build 了，直接存檔重新整理網頁就可以再次執行了，超級方便)
		*> express
			(express 本身)

		*> express-generator
			( Express 應用程式產生器和直接安裝 express 不一樣，這個可以幫助我們使用特殊指令新增專案，通常都是全域安裝 )

		 > body-parser
		 	(環境中 Server 端接收 POST 時需要用到的中介程式，用來解析以 URL 編碼的內文)

		 > mongodb
		 	(安裝 Mongo DB driver，讓 node 可以連結並使用 mongodb 資料庫)

		 > pug
		 	( 安裝pug樣板引擎，之前叫 jade 改名)
		

		Vue 系列: 	

		*> @vue/cli        				                      									//
		 	( 這個套件和 express-generator 一樣，讓我們可以用指令建立一個 Vue 專案，通常也都是全域安裝 )

		*> json-server
		 	能使用 JSON　檔當作資料庫來使用，並能用 RESTful 的方式取得、修改資料。
		 	( 以 JSON 檔當作一個 API server )

		 > @vue/cli-service-global																//
		 	需要全域安裝，可以直接把一個 .vue 的檔案當作 serve 來跑網頁。
		 	在 app.vue(名子請一樣) 所在資料夾輸入 vue serve。

		 > npm install vue-router
		 	在要的專案內安裝，不須 --save，安裝的套件會預設自動加入 dependency。
		 	住要功能為 單頁式網頁 + 路由功能。

		 	指令: vue add router 
		 	對 Vue 專案新增 router 資料夾 & main.js import 引入 router 中的檔案，
		 	但原有 code 將會被取代掉，適用於已經備份好的專案，或是新增的專案。

		 > npm install --save-dev webpack
		 	安裝 webpack，通常在要用的專案裡安裝

--------------------------------------------------
建立單一資料夾環境 + 替專案安裝express套件:
	// 官方說明: https://expressjs.com/zh-tw/starter/installing.html

	1. 手動新增資料夾 or 命令提示字元 mkdir name 建立資料夾

	2. 命令提示字元輸入 npm init，並Enter掉預設的設定
	   將產生一個 package 檔案。

	   注意: index.js 為主要檔名稱，如果預設設定改為別的名子，那主要檔名也必須跟自己設的一樣。

	3. 命令提示字元輸入 npm install express --save 
	   package 檔案，會記錄已安裝 express 並顯示版本。

	4. 新增一個名為 index.js 檔案，開始coding

建立專案:
	// 官方說明: http://expressjs.com/zh-tw/starter/generator.html

	1. 全域安裝 npm install express-generator -g

	2. 命令提示字元到要建立專案的地方輸入: express -h

	3. 輸入: express --view=pug todolist 即可建立專案

--------------------------------------------------
有關 Build 以及 port(埠)佔用問題:
	// 當 Build 時會佔用到 port，如果不停止 Build ，再次執行時會因為 port 被佔用而執行失敗，
	// 所以 Build 之後，必須要終止 Build 才能再次執行。
	// 有兩種 Build 方式:

	i. 命令提示字元
		Build:  node index.js
		Cancel: Ctrl + c 

	ii. Sublime
		Build:  Ctrl + b
		Cancel: Tool -> Cancel Build

	// 命令提示字元中可查詢 

	i. port 有無被使用:
		// netstat -ano | findstr :5000 
		// 查詢該埠 5000 是否被占用

	ii. 強制砍...執行(要用查詢來找該序號停止，不建議使用，偶爾 Error 導致 Port 被莫名佔用)，來清空 Port :
		// taskkill /F /PID ...

--------------------------------------------------
# 使程式碼變為一個模組，讓任何程式使用 require 可以調用這個模組(module):
  可以將 javascript 裡任何型別的宣告，變成一個模組(EX: 字串、物件、函式、類別函式 模組)。
  功能類似 Return

	module.exports = log
	// 算是一種宣告，放在程式最尾巴

	exports.abc = obj;
	// module 被省略，加入自定義的一個屬性，這個模組會變成 物件類的模組
	// 當被引用時也被當作物件引用

# 引用模組:

	const name = require("./檔案.js");
	// 可以用 name 引用此 module

	const name = require("./檔案.js").abc;
	// 可以這樣引用物件類的模組

// 模組 還有 字串、物件、函式、類別函式 的模組

-------------------------------------------------
常用原生模組:http + node 起手式

const http = require("http");	// http 模組，用於建立伺服器功能
const port = 5000;				// 設定埠點
const host = "127.0.0.1" ;		// 本機位置

const server = http.createServer(		 	// 定義伺服器，用 http.createServer(function(request,response){})
	function(req,res){						// 以 req,res 簡寫，以位置為準
		res.statusCode = 200;
		// 回應成功:200 (在web瀏覽器可以查詢到)
		res.setHeader('Content-Type','text/html');
		// 設定回應的文件類型:text/html。Content-Type則寫法固定
		res.end("hello");
		// res.end 用來完成回應
	}
)

server.listen(port,host,function(){			//監聽 server 伺服器，一旦開始監聽，呼叫 function
	console.log("OK");
})
-------------------------------------------------
常用原生模組:fs + node 進階起手式 + req.url

const http = require("http");
const fs = require("fs");		// fs 模組用於傳輸檔案，相較上面的例子都是字串

const port = 5000;
const host = "127.0.0.1" ;

const server  = http.createServer(		 // 定義伺服器
	function(req,res){
		if( req.url == "/"){		// url 可以判斷回來的網址訊息來回應
        	
        	res.writeHead(200,'Content-Type','text/html');
        	res.write('<html><body>This is Home Page.</body></html>');

        }else if(req.url == "/book"){			// 傳輸 json 字串

        	res.writeHead(200,'Content-Type','application/json');
        	res.write(JSON.stringify({ message: "Hello World"}));
        	res.end();

        }else if(req.url == "/zzz"){

        	fs.readFile("page.html","utf-8",function(error,data){	//讀取 html 檔案並傳輸 
        		if(error){
        			res.writeHead(404,'Content-Type','text/plain');
        			res.end("not found");
        		}else{

        			res.writeHead(200,'Content-Type','text/html');
        			res.end(data);		// data 為這邊的特定字，為讀取的檔案內容。以end()顯示在網頁上
        		}
        	});
        }else if(req.url == "/write"){

        	fs.writeFile("text.txt","123",function(error,data){		// 寫入至要寫入的檔案，以覆寫方式(沒有檔案的話會新建一個)
        		console.log("write ok")
        	})

        }else if(req.url == "/add"){
        	fs.appendFile("text.txt","456",function(error,data){		// 新增至要寫入的檔案，以新增上去的方式
        		console.log("write ok")
        	})
        }else{
        	res.write('<html><body>Error</body></html>');
        }

        // fs.open 開啟檔案
        // fs.read 開啟檔案也讀取文件
        // fs.unlink 刪除檔案

	}
)

server.listen(port,host,function(){
	console.log("OK");
});	

-------------------------------------------------
常用原生模組:events 自定義事件

const events=require('events');	// 引入模組

const em = new events.EventEmitter();	// 定義 em 為一個事件

em.on('abc',function(arg1, arg2){		// 以 on 來設定事件
	console.log('abc:',arg1, arg2);
});

em.emit("abc")		// X.emit觸發事件

// EX: url 為特定字時觸發
// if(req.url == "/event"){
//             	em.emit("abc")
// }

-------------------------------------------------
Express 使用:大幅減少複雜程式碼，更簡單功能分類

1. express 下一般 API 使用
	
	const express = require("express");
	const app = express();

	app.get("/data1",function(req,res){		// get方法，route為/data1
		res.sendFile(__dirname+'./page.html');
	});

	app.post("/data2",function(req,res){	// post方法，route為/data2
		res.send(req.body.firstName + req.body.lastName);
	});

	var server = app.listen(5000,function(){
		console.log("ok")
	});

2. express 4 版本之後 API 可以使用 Router 來管理路由 
	
		const express = require("express");
		const router = express.Router();

		router.get("/data1",function(req,res){		// get方法，route為/data1
			res.sendFile(__dirname+'./page.html');
		});

		router.post("/data2",function(req,res){	// post方法，route為/data2
			res.send(req.body.firstName + req.body.lastName);
		});

		module.exports = router;

	可以被引用至主要檔案 app.js

		const data1 = require('./data1');

		app.use('/資料夾', data1);

-------------------------------------------------
資料庫安裝:
MongoDB


#服務啟動:

命令提示字元中(一定要從工作管理員中啟動)
路徑 C:\\Program Files\MongoDB\Server\4.4\bin 中

啟動服務: net start MongoDB

停止服務: net stop MongoDB

附註:
// log + window service 啟用命令:
// mongod --dbpath "D:\MongoDB\datd\db" --logpath "D:\MongoDB\data\log\mongodb.log"  --install --serviceName "MongoDB"


#MongoDB現狀查詢:  mongoDB shell

命令提示字元中
路徑 C:\\Program Files\MongoDB\Server\4.4\bin 中輸入 mongo.exe 啟動 mongoDB shell 環境

查看有那些資料庫: show dbs

查看當前連線在哪個資料庫: db

查看資料庫內容: 

	i. use xxx
	// xxx 為資料庫名子，預設為test，可以用 db查詢

	ii. show collections
	// 會顯示所有collection(資料表)

	iii. db.ccc.find()
	// ccc 為資料表名稱
	// 送出指令後會顯示出所有資料，每筆以{}包住

離開: exit


---------------------------------------------------
12/15
// todolist 功能解說
// node 專案結構解說 + 建立專案指令
// jade教學: https://ithelp.ithome.com.tw/articles/10186637
// 官方新版pug引入教學 https://expressjs.com/zh-tw/guide/using-template-engines.html
// 官方建立專案範例 http://expressjs.com/zh-tw/starter/generator.html
	
	
// express3->4 版本的變更: https://expressjs.com/zh-tw/guide/migrating-4.html

---------------------------------------------------
---------------------------------------------------
Vue 使用:

1. 建立專案:

	i. 安裝專案產生器: npm install @vue/cli -g  				/

	ii. 建立專案: vue create vuetext ( 專案名稱不能大寫 )

2. Run 專案:

	i. 專案內執行命令提示字元:

	   啟動 Server 端: npm run serve 
	   停止 Server 端: Ctrl + c

	ii. 或是輸入 vue ui 產生使用介面來 run

---------------------------------------------------
---------------------------------------------------
以 JSON 檔建立簡易 server 端

	i. 建立資料夾

	ii. 使用命令提示字元: npm init 使資料夾變為一個自訂傳案 

	iii. 安裝套件: npm install json-server --save

		專案建立時產生的 JSON 檔: 

		長這個樣子，其中有些需要修改
			{
			  "name": "vuetext8",		// 專案名稱
			  "version": "1.0.0",		// 版本
			  "description": "",		// 專案描述
			  "main": "index.js",		// 傳案的主要進入檔
			  "scripts": {				// <- 此項目需要修改成現在這樣 		
			    "json": "json-server --watch db.json --port 8888"
			  },						// 這邊可以寫入自訂的指令，可以在命令提示字元中使用:
			  							// EX: 輸入 npm run json
			  							// 這行意思為: 用 json-server 幫忙把專案裡的 db.json 當作 server
			  							// 			  並設定在埠: 8888
			  							// 如此一來，db.json 檔案就可以代替資料庫被更改。

			  "author": "",				// 作者
			  "license": "ISC",			// 許可商
			  "dependencies": {			// dependencies 將會紀錄所安裝的 npm 套件( local )
			    "json-server": "^0.16.3"
			    "XXX":"xxx"
			  }
			}

	iv. 命令提示字元中啟用 db.json 檔案當作 server : npm run json

		http://127.0.0.1:8888/content 即可看到 server 內容

	v. 安裝 Postman 並可以自由使用 GET、POST、PATCH、PUT、DELETE 來更改 db.json 檔案內容。

		I. 可以選擇 要使用哪種 RESTful API 方法
			
			GET: 讀取
			POST: 新增一整套資料
			PATCH: 部分修改單一項資料
			PUT: 一次修改一套資料
			DELETE: 刪除整套資料

		II. 網址部分:
				http://127.0.0.1:8888/content 		意思是全部的資料
				http://127.0.0.1:8888/content/2		則可以對第2筆資料做動作

		III. POST、PATCH、PUT 會用到輸入的資料:
			一律都在 Body -> row -> JSON 中輸入

		IV. 常用組合:

		GET + http://127.0.0.1:8888/content 可以看到全部資料
		GET + http://127.0.0.1:8888/content/2 可以單獨看到第二筆資料

		POST + http://127.0.0.1:8888/content 可以上傳一整套資料

		PUT + http://127.0.0.1:8888/content/2 可以修改第二筆資料的某一項

		PATCH + http://127.0.0.1:8888/content/2 可以修改第二筆資料全部(整個取代)

		DELETE + http://127.0.0.1:8888/content/2 可以刪除第二筆資料

---------------------------------------------------
使用 AXIOS :
	在 node 環境中，可以使用替代方法取代 AJAX 發送 POST、GET 請求。

	CDN:
	<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.js"></script>		/



---------------------------------------------------