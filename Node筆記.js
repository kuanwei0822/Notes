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
	
	全域(指令哪裡打都可以): npm install XXX -g
		已安裝:
		*> nodemon 
			(方便 build ，命令提示字元:node XXX.js 改為 nodemon XXX.js 
			 Sublime 不用再 Cancel Build 了，直接存檔重新整理網頁就可以再次執行了，超級方便)
		*> express

		 > body-parser
		 	(環境中 Server 端接收 POST 時需要用到的中介程式，用來解析以 URL 編碼的內文)

		 > mongodb
		 	(安裝 Mongo DB driver，讓 node 可以連結並使用 mongodb 資料庫)

	特定專案(指令要打在專案裡): npm install XXX --save

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
// todolist 功能解說
// node 專案結構解說 + 建立專案指令
// jade教學: https://ithelp.ithome.com.tw/articles/10186637
	

	
// express3->4 版本的變更: https://expressjs.com/zh-tw/guide/migrating-4.html
