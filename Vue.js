嵌入 CDN :
	注意跟許多其他 CDN 一樣，程式碼要放 body 最底部或直接放在 body 下面，
	不可放在head中，因為一開始時 DOM 還沒被解析完成，放在 head 中會無法建立 Vue 實例。

	</script><script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.9/vue.js'></script>		'
	// 2.6.9 版本
	
起手式 :
	// 類似於模板引擎用法

	<body>
		<div id="app">				// id 設為 app ，使待會 vue 有依據的對象
			{{ message }}			// 被綁定的元素中要帶入的資料。
									// content 為綁在一起的資料，會從被綁的資料中找到 message
     </div>
		
		</script><script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.9/vue.js'></script>
									// Vue 的 CDN ，務必要 DOM 資料準備好才讀取
		<script>
			var content = {			// 宣告物件 content : 裡面包含一個訊息"fff"
        		message:"fff"
      	}			

     	var vm = new Vue({		// 宣告 vue 來實現綁定元素 & 資料
         	el:"#app",			// 1. 設定綁定元素，el 為保留字。
         	data:content		// 2. 設定要綁定上去的資料，data 為保留字。 
									//    這邊綁定了剛剛的物件。
       	});

		</script>
	</body>

-----------------------------------------------------------------------------------
HTML 綁定:

	1. 綁定 txt 內容: 
		使用: {{ ... }}

		html:
		
		/	<div> {{ message }} </div>				
		
		/	Vue:
		/		var obj = {
		/	 	message:"123"
		/	 }
		/
		/
		/	 var vm = new Vue({
		/		el:"#app",	
		/		data:obj
		/	 })	
		

	2. 綁定屬性:
		// 使用 :src:"..."

		// html
		//   <img :src="src">

		// Vue:
		//   var obj = {
		//	 	src:"source/圖片變換_1.png"
		//	 }

		//	 var vm = new Vue({
		//		el:"#app",	
		//		data:obj
		//	 })

		// 使用其他綁定: :value:"..."
	
	3. 表單元素專用-雙向綁定:
		// 表單元素可以更改到資料包內的資料(即時)
		// 使用 v-model="xxx"
		// 重點: type 什麼人、 v-model 傳給誰、 value 傳什麼

		// html:
		//   <input type="text" v-model="aaa" />

			// aaa 為要資料包裡傳入的對象。
			// 傳送的內容為 input 的 value 值。
			// 其他 input 元素: "select",type="radio","checkbox"...也都是以 value 值作為傳送內容，
			// So, "select", type="radio","checkbox" 元素要記得自訂 value 值。 

		// Vue:
		//   var content = {	
		//	   aaa:"test",		// 若原本有內容，則會累積上去
		//     bbb:[]
		//	 }
		//   var vm = new Vue({
		//	   el:"#app",   
		//	   data : content
		//	 });
			
			// 如果遇到多選類型的 input，裡面一次可能會塞 0 至多筆資料，可以使用陣列儲存。
			// But 記得，一次顯示全部在 html 端需要用到 {{ XXX.join(",") }} 陣列轉字串函式。

		額外功能: 修飾符
		// 加入 .trim 去首尾空白字元
		// 使用 v-model.trim 可以忽略輸入的 '首尾空白字元'

	4. 綁定事件:

		html:

			i. 若呼叫的 function 不需要參數，則可以不用加()
				硬要加()也可以，實測不會錯誤。

				EX: @click = "func1"

			ii. 若呼叫的 function 需要傳入參數，一樣可以用()加入參數

				EX: @click = "func2(index, ...)"

		// 使用 @click or v-on:click

		// html
		//   <a @click="clickfunc()" >button</a>

		// Vue:
		//   var obj = {
		//	 	src:"source/圖片變換_1.png"	// 這邊此功能用不到
		//	 }

		//	 var vm = new Vue({
		//		el   :"#app",	
		//		data :obj,
		//		method :{
		//			clickfunc(){ ... this.src };	// this.XXX 會指向被綁定的資料包裡的參數
		//		}
		//	 })

		事件種類:
			i. @click 滑鼠點擊
			ii. @keyup.enter 鍵盤enter事件

Vue 功能:
	var vm = new Vue({
		el:"#app",
		data:data,
		methods:{...},		// 事件
		computed:{...},		// 一些函式功能
		watch:{...}			// 觀測數據
	})

	1. methods:{...}

		事件綁定功能

		i. 以函式來寫入 html 傳來的事件

			HTML:

			I. 若呼叫的 function 不需要參數，則可以不用加()
				硬要加()也可以，實測不會錯誤。

				EX: @click = "func1"

			II. 若呼叫的 function 需要傳入參數，一樣可以用()加入參數

				EX: @click = "func2(index, ...)"	


			Vue:

			method :{
				clickfunc(){ ... this.src };		// 同一般事件處理
			}

	2. computed:{...}
		
		Vue 的計算功能
		可以直接寫入想要的函式
		this.XXX 和 method 一樣會指向被綁定的資料包裡的參數
		當函式內部有任何資料更動時，整個函式都會在 Run 一次，達成刷新的動作。
		
		i. 用於變數代換的功能

		// html:
		// 		<h1>{{ picture[index] }}</h1>
		// 		可以變 :
		// 		<h1>{{ check }}</h1>

		// Vue:
		//   var obj = {
		//	 	src:"source/圖片變換_1.png"	// 這邊此功能用不到
		//	 }

		//	 var vm = new Vue({
		//		el   :"#app",	
		//		data :obj,
		//		method :{
		//			clickfunc(){ ... this.src };
		//		}
		//		computed :{
        //      	check(){
        //		    	return this.picture[this.index];
        //				// check 可以代替 picture[index] 來被使用在 html
        //   		}
        //  	}
		//	 })

		ii. getter(讀取) & setter(設定) 功能:

				一般 computed 作為運算資料。如果 function 中有資料改變，那麼運算出的結果也會即時算出。
				EX:
					computed:{
						test(){
							return this.data1 + this.data2
						}
					}
				
				當資料包中的 data1 & data2 改變，test() 也會及時刷新 return 出的結果。
				原因是因為，getter 會觀察裡面的資料，data1 & data2 改變將會觸發 getter ，刷新結果。
				一般 computed 原理如上，只有使用到 getter ，一開始載入網頁得時候會固定刷新一次。

				當 computed 內的項目(函式 or 物件)被直接更改時，就會觸發該項目的 setter。


			I. getter(讀取):

				要單獨使用到　getter 時，可以在 computed 中使用物件:
				
				一般 function: 
					test1(){				// 自帶 getter ，會觀測函式內容。
						return ...		
					}

				使用 getter 時:
					test2:{					// 使用物件當作 function，內部則用 get 函式。
											// 使用上，一樣當做 function 使用在 html 即可。
						get(){ return... }	// get(){} 為特定字，專們用於 getter。
					}

			II. setter(設定):

				要單獨使用到 setter 時，和 getter 一樣可以使用物件的方式:

				使用 setting 時:
					HTML:
					<input v-model="test3" />	// html 中，當 input 內的 v-model 屬性更改對象為 computed 項目時，
												// 一但 input 裡改變內容，當然就更改到 computed 的項目

					test3:{					// 一樣使用物件當作 function，內部使用 set 函式。
						set(value){			// 當中會有一個參數 value，為更改後的值
							...				
						}
					}



	3. watch:{...}: 

		i. 一般變數: 
			要觀測可以直接以 function 的形式來使用，
			第一個參數 val 顯示變數改變後的狀態，
			第二個參數 oldVal 顯示變數改變前的狀態 

			I. 一般變數:
				number(val,oldVal){
					console.log("number =",val,oldVal)
				}

			II. 物件內的變數:
				// obj={ num = 0 }

				['obj.num'](val,oldVal){				// ["物件.項目"]可以觀測物件內部的物件變化
	                console.log("obj.num =",val,oldVal);
	            }

	   	ii. 陣列:
	   		注意: 前提為陣列的改變方式是以 $set() 來更改，若沒有則監聽不到。

	   		要觀測也可以直接以 function 的形式來使用，同樣有 val,oldVal 可以使用
	   		但是陣列是 call by reference ，所以 val,oldVal 都將指向當前同一塊記憶體，
        	所以不管是 val 還是 oldVal 都將會是當下陣列的狀態。

        		array(val,oldVal){
					console.log("array =",val,oldVal)	// val == oldVal
				}

        iii. 物件:
        	若是要觀測物件本身則要用 物件的形式來觀測，一樣可以使用要觀測的物件本身作為名子，
        	物件內部包含 handler 函式， deep 深度觀察選項。
        	handler 函式如同一般變數的 function ，也有 val,oldVal 作為參數
        	deep 則是是否要深度觀察，call by reference (物件、陣列) 都需要深度觀察才能觸發監聽器，
        	一般預設不會深度觀察，而啟用深度觀察只需要 deep : true

        	I. 物件本身:
        		// obj={ num = 0}

        		obj:{
        			handler(val,oldVal){...},		// val == oldVal
        			deep:true
        		}	

        		物件內部只要有任何數值改變，就會觸發監聽。
        		但是要注意，因為物件是 call by reference ，所以 val,oldVal 都將指向當前同一塊記憶體，
        		所以不管是 val 還是 oldVal 都將會是當下物件的狀態。

        iv. 陣列包物件: [{},{},{}]
        	因為改變的還是物件，並非陣列本身，所以我們仍然以物件方式監聽，只是對象變為陣列，並且要深度觀察。

        		// arrayObj = [ { num = 0},{ num = 0},{ num = 0} ]

        		arrayObj:{
        			handler(val,oldVal){...},		// val == oldVal
                    deep: true
        		}

其他:

	1. v-if + v-else: 
		
		元素顯示的條件判斷
		html 元素中可以使用，符合條件顯示，不符合則會被註解掉。
		v-else 則會和 v-if 的元素相反，且 v-else 不用填入值
		注意: v-else 只能用一個，不然顯示會出問題

		// <h1 v-if="index != 0" >{{ message }}</h1>
		// <h1 v-else >{{ message2 }}</h1>

	2. v-for:

		可以依照資料內的參數數量來重複印出html( 如同板模引擎一樣的效果 )
		v-for=" item in X"		// X 為資料包裡面的資料
		{{ item.x }}			// item 可以視為 X[?]，作為資料下的項目
		{{ item.y }}
		{{ item.z }}

		// v-for=" (item,index) in X"	// index 為第二個參數，固定會從 0~? ，作為一個方便的序號
		// item,index 皆可以更名，使用自己習慣的

		// html:
		//   <div v-for=" item in list">
		//     topic: {{ item.topic }},content: {{ items.content }}
		//   </div>
		//
		// Vue:
		//   var data = {
		//	   list:[
		//	     { topic:'A',content:'aaabbb' }
		//	     { topic:'B',content:'cccddd' }
		//		]
		//   }
		//   ...Vue 綁定資料(略)...

		項目個別綁定: :key="xxx"
			html 標籤裏頭，使用 v-for 可以重複渲染完素。 but 因為考慮到效能， v-for 的預設是
			盡量使用已經 render 的元素。若要個別處理元素，則需要加上 :key="xxx" 屬性，確保每個
			元素都是獨立的，xxx 使用變數，確保每個元素有不一樣的 key 值，否則會出錯。 
			靈活的使用 item.xxx 也都是可以被當作 key 值的。


	3. 動畫套用:

		i. 以 CSS 做動畫

			I. html 以<transition name="fade" mode="out-in" appear>...</transition> 包住要套用動畫的元素/ 
				
				屬性包含: 
					I. name 代表此動畫的名子，用來在 CSS 設定動畫細節

					II. mode 為動畫的切換方式:
						out-in : 一次只會出現一個動畫元素(常用)
						in-out : 一次會出現兩個動畫元素

					III. appear 剛進入網頁時就會有動畫效果
			
			II. CSS 中，可以使用特殊 class 來設定此動畫:

				( 以 opacity 示範 )
				進入的動畫:
					fade-enter{ opacity:0 }							動畫前狀態(靜態)
					fade-enter-active{ transition:opacity 1s }		動畫中狀態(動態)
					fade-enter-to{ opacity:1 }						動畫後狀態(靜態)

				淡出的動畫:
					fade-leave{ opacity:1 }							動畫前狀態(靜態)
					fade-leave-active{ transition:opacity 1s }		動畫中狀態(動態)
					fade-leave-to{ opacity:0 }						動畫後狀態(靜態)

		ii. 以 jQuery 做動畫( 記得要引入 jQuery CDN )
			
			I. html 和上面方法很像 以 <transition mode="out-in" appear :css="false">...
			 						</transition> 包住要套用動畫的元素 /
				
				屬性包含: 
					I. mode 為動畫的切換方式:
						out-in : 一次只會出現一個動畫元素(常用)
						in-out : 一次會出現兩個動畫元素

					II. appear 剛進入網頁時就會有動畫效果

					III. :css="false" 避免 CSS 干擾動畫
			
			II. html 加入動畫專用事件:

				@before-enter 	="beforeEnter()"	// 動畫開始前
				@enter 			="enter()"			// 動畫中
				@after-enter	="afterEnter()"		// 動畫完
				@enter-cancelled="beforeEnter()"	// 意外處理:可以和動畫開始前 call 一樣的函式

				@befoe-leave
				@leave
				@after-leave
				@leave-cancelled

				method = {
					beforeEnter(el){... $(el).css({opacity:0}) ...},
					enter(el,down){...  $(el).animate({opacity:1},1000,down) ...},
					beforeEnter(el){... $(el).css({opacity:""}) ...},

					// el 為此事件自動帶入的 當前對象元素
					// down 為動畫完成要呼叫，牽涉到非同步問題
					// opacity:"" 可以將殘留的 opacity 屬性完全清除，避免有無法預期的影響
				}


-----------------------------------------------------------------------------------
Vue CLI:

安裝環境: 
	
	node 筆記有詳細步驟: 1. 建立專案 2. npm run serve

架構概念:

	public - 靜態檔案 

		index.html: 
			原始第一支 html 檔，內函一個 id ="app" 的根元素 


	src - 專案內容主要在此新增

		main.js: 
			一般只會有一個，沒事不會動。
			專案的進入檔，import 一個 App.vue 檔案。
			然後 render 至 index.html 的 #app 根元素。

		App.vue:
			一般只會有一個，有新的 component 加入就要記得 import 。
			此檔案可以視為眾多 component 的老大，負責管理底下所有的子組件。
			資料包通常只有一個，也會放在這邊。

		component - 內含很多不同的自訂組件

			HelloWorld.vue 官方示範的子組件

	所以大概可以分成這樣:

		component子組件*n  =>  
		
		App.vue 管理並整理成單一窗口  =>  
		
		main.js 將 App.vue 的內容 render 至 index.html  =>  index.html 最終板模，基本上不會動


語法:
	
	i. XXX.vue 檔案:

		vue 檔案大都分成三份: 
			<template>	: 寫html

				注意: 內部第一層只能有一個標籤，可以使用 div 比較方便，否則會 Error

		
			<script>	: 寫javascript
				
				import 可以掛載其他子組件 component
				export default 可以向上提供可以 import 的窗口

			<style>		: 寫CSS 

				注意: CSS 基本上會被共用到其他 component 上，盡量使用 class 規範，
				或是使用 scoped 把這塊 CSS 和其他 component 區分開來(方便，but 比較耗效能)。

App.vue:

	<template>

		基本 html 架構，架構在這邊可以配合 componet 的 tag 更改。
		EX: <component1 /> 

		i. 當需要傳資料到子組件時( 父組件傳資料到子組件時 ):
			
			需要使用 :data1="xxx" 屬性來傳輸資料至子組件，子組件需要有 props 接到傳過來的資料。

	<script>

		import XXX from '...' 		// 引入檔案

		export default{				// 將檔案加入為組件
			name:'App',
			component:{
				component1,
				component2,
				component3,
				...
			}
		}

	當有新組件加入:
		i. 引入 component 檔案，import XXX
		ii. 將檔案加入為組件， component:{...,XXX}
		iii. 使用組件 tag 在 template 


component 子組件:

	<template>

		組件的 html 架構

	<script>

		export default{			// export default 組件對外的出口，export default 只能有一個。
								// name,data,props 都是保留字，不能亂改。
			name:'XXX',			// 瀏覽器中 F12 組件名稱將會以此名稱顯示。
								// 必須要有此項目，否則會 Error。

			data(){				// data 需要以函式形式來使用，否則所有組件都是共用一個資料庫，
								// 有可能會有重複命名的情況。
				return{ data1:'xxxxx' }
			},

			props:{				// 父組件傳資料到子組件(此組件)時，需要使用到 props 接收資料
				data2:{					// 父組件中，tag 中以此當作屬性傳回資料
					type:String,		// type: 資料型態
					require:true		// require: 是否必須要有值(不一定要有此項目)
				}
			}

		}

	<style>

		CSS 會與其他組件共用到，要使用 class 或是 scoped 屬性來侷限此組件的 CSS 


父組件(App.vue) 與 子組件 資料傳輸:
	
	i. 父組件 傳輸資料到 子組件: Easy
		
		同上方範例，子組件需要使用 props:{...data2...} 來承接父組件傳來的資料。
		而父組件需要子組件的 tag 中使用 :data2="..." 屬性來傳出要傳的資料。


	ii. 子組件 傳輸資料到 父組件: 有點麻煩
		
		Vue 中 子組件無法直接更改 父組件內部的資料。
		以上方範例來說，父組件 tag 中使用 :data2="..."，子組件以 props:{...data2...} 來承接父組件資料。
		目前都正確。然後 子組件 html 有個 input 標籤 使用 v-model="data2"，
		父組件 的資料一開始會正確的傳出資料到 子組件的 input 顯示變數改變後的狀態，
		但是當 input 內容被改變，因為子組件無法改變父組件的資料，所以會產生 Error 。

		解決:
		要間接傳資料到父組件，v-model="data2" 無法使用。要用事件的方式傳出資料。
		
		流程:
			I. 父組件藉子組件的 props 傳入父層資料
			
			II. 當網頁開啟時，子組件 computed 中的 inputfunc1 因為有 this.data2 會監控他，
				所以 getter 會先觸發一次，return this.data2。
				此時 input 內容會是 父層資料。

			III. 當 input 內容被改變，會觸發 inputfunc1 中的 setter，
				 set 函式中，會因為 this.$emit() 設定並觸發在父組件的自定義事件 @data2Chang，
				 同時傳出 this.$emit() 第二個參數 value 值。

			IV. 定義事件 @data2Chang 被觸發，執行 methods 中的 data2handler 函式，
				此時 data2handler(value){...} 中的 value 值為子組件 this.$emit() 第二個參數。
				對 this.父層資料 進行更改。

			V. 更改完還沒完，因為子組件有綁父組件的 父層資料 到 props ，所以 父層資料 被更改了，
			   子組件 props 中的 this.data2 也會更改，
			   而 inputfunc1 正監控著 this.data2 資料，一旦更改了，將會觸發 getter ，
			   get 函式會 return 更改後的 this.data2 到 input 裡面。

		流程參閱以下示範:

		父組件:

			<template>

				<component1 :data2="父層資料" @data2Chang="data2handler" />
				// @data2Chang 源自於子組件中的 this.$emit(...) 產生的自定義事件 
				// 子組件遇到 $emit(...) 將會立即觸發此事件

			<script>
				export default{
					name:'App',
					methods:{
						data2handler(value){		// value 源自於子組件 this.$emit() 中第二個參數
							this.父層資料 = value 	// 將父層資料以 this.$emit() 傳來的參數更改
						}
					}
				}

		子組件:

			<template>

				<input type="text" v-model="inputfunc1" />	// v-model 改以接收 computed 的物件

			<script>

				export default{
					name:component1,
					
					props:{
						data2:{				// 接收父層資料
							type:String
						}
					},
					computed:{
						inputfunc1:{		// 以物件代替函式，才能將 getter、setter 觸發分離出來處理
											// 詳閱: computed 的 ii. getter(讀取) & setter(設定) 功能
							
							get(){			// get 在網頁載入時會觸發一次，所以會先 return 一次	
											// 父層的資料被更改後，this.data2 跟著更改也會再次 return

								return this.data2
							},

							set(value){		// set 只有在 input 內容被改變時會被觸發
								this.$emit("data2Chang",value)
											// $emit 很重要:
											// 1. 為父元素 tag 中屬性定義一個事件 data2Chang 事件
											// 2. 並立即觸發此事件，且傳出第二個參數(value)值
							}
						}
					}
				}


加入 router :

	i. 環境設定:

		命令提示字元輸入: npm install vue-router 安裝 router
		輸入: vue add router 增加 router 其他檔案( 此動作會刪除原本 code )

	ii. router 設定:

		main.js 一樣為入口檔案

		App.vue 轉為一頁式網站的架構: 

			包含	<router-link> 會連結到已經設定好的路由
				<router-view> 會顯示 by 路由 連結到的子組件

		router - index.js 為統整 router 的檔案

			import Vue from 'vue'
			import VueRouter from 'vue-router'		
			import Home from '../views/Home.vue'	// 要綁定的組件必須要 import 引入

			Vue.use(VueRouter)
			const routes = [						// 裡頭放路由 & 與其綁定的組件
			  {
			    path: '/',			// 路由設定
			    name: 'Home',		// 組件在這邊的名稱
			    component: Home		// 放 import 進來的組件
			    // 主頁載入時，會一併載入此分頁
			  },
			  {
			    path: '/about',		// 此路由設定，上方不用先 import，
			    name: 'About',		// 在 loading 此分頁的時候才會 import ，載入進來
			    component: () => import('../views/About.vue')	// 設定要綁定的組件
			    // 主頁載入時，只會把此分頁做預處理(status:304)，不會真正 loading 進來
			    // 只有在點擊連結進入時才會完全載入(status:200)
			  }

			  // router 提供兩種綁定組件的的方式。
			  // 差別在於: 一個在主頁載入的時候會一併載入，一個是要進入分頁之後才會開始載入(根據專案大小使用)
			  
			  // 上面那種是主網頁載入的時候，會一併把分頁載入。
			  // 下面那種是只有在進入此分頁的時候才會載入。不用提前 import。

			]

			const router = new VueRouter({
			  mode: 'history',
			  base: process.env.BASE_URL,
			  routes
			})
			export default router

		views - XXX.vue 放要被綁定的組件。


	iii. 當有新路由 & 組件加入

		I. views 新增組件
		II. router - index.js 中 import 組件 + 綁定路由 (此時網址已經可以連到此頁)，[2 種載入法選一種]
		III. App.js 設定	 <router-link> 可以點即進入的入口。


	iv. CSS 提供 class : router-link-exact-active 以及 router-link-active 兩個 class 可以拿來使用。
		CSS 可以套用在 App.vue 檔案中，以主頁來修改比較直方便。

		router-link-active :當下分頁顯示時，在其經過路由的所有連結 class (一次可能會套用不只一個，不常用) 

		router-link-exact-active : 當下分頁顯示時，連結的 class (一次只會套用一個，常用)


加入子 router :
	和增加路由很像，三個原則 => 新增子組件，路由設定，父組件連結窗口設定

	I. views 中新增子組件 About.vue

	II. router - index.js 中設定子路由:

		...前後省略...
		{
			    path: '/about',		
			    name: 'About',		
			    component: () => import('../views/About.vue'),
			    children:[					// children 為特定字，作為新增子路由專用，為陣列裝物件型態
			    	{							// 物件裡面裝子路由

			    		path: 'aboutlink1',		// 一樣有 path 為路由，這邊不用斜線/
			    		name: 'AboutLink1',		// 一樣替這個路由命名，之後用得到
			    		component: () => import('../views/About.vue')	// 設定要綁定的組件
			    	}
			    ]
		}

	III. 回到父組件 About.vue 新增 連結<router-link> & 顯示區 <router-view>

		<router-link>: 

			作為子組件的連結，有兩種寫法。

			<router-link to="/about/aboutlink1" >這是子組件連結</router-link>						/
			to 屬性為要連到的路由 
			
			<router-link :to="{ name:'AboutLink1' }" >這是子組件連結</router-link>				/
			也可以使用 :to="{ name:'路由名稱' }" ，當路由漏漏長的時候可以使用。

		<router-view />:

			用法和之前一樣，電腦會自動判斷這是給子組件專用的。


router 的自帶參數 query & params :
	此為一個路由中可以攜帶的參數，不必宣告本身就會有，只需要賦值給他即可。

	i. query & params 的型態:

		皆為物件型態,所以可以自訂要輸入的參數名稱。

	ii. 帶入參數:

		query:
			
			一開始 query:{ 預設為空 }

			輸入網址: .../about?day=5																	/
			即為連到路由 .../about 且 query 會帶入 day=5

			此時 query:{ day:'5' }

		params:

			一開始 params:{ 預設為空 }

			比起 query 需要額外做一個路由上的設定才會帶入，路由設定如下
			{
		        path:'newlist/:day',	// 其他都不用動，只有這行需要改，加入 /:day
		        component:  () => import(/* webpackChunkName: "Newlist" */ '../views/Newlist.vue')
		    },{
		    	path:'newlist/',		// 原本的路由留著
		    	name:'newList',			// name 要一到這邊，否則<router-link :to="{ name:'newList' }"> 會失效
		        redirect:'newlist/1'	// 並將原本的網址強制導向帶有 參數=1 的網址 
		    }
		    加上 /:day 即可為這個路由開啟輸入 params 的權限，其中 day 為參數名稱，也可以使用別的名稱。
		    因為原本的路由已經改為 'newlist/:day' 所以 'newlist/' 就被取代了(打這個網址跑不出東西)，
		    所以需要第二部分補足更改後缺少的 'newlist/' 路由，但需要給他一個參數，
		    否則  'newlist/' 路由就會變成不帶任何參數的路由，所以要導向 'newlist/1' 變成帶有 參數=1 。

		    另一種理解方式是，原本 'newlist/' 路由不需要動他，新增一個 'newlist/:day' 路由，
		    原本的變成 'newlist/1'。


		    輸入網址: .../about/5																
			即為連到路由 .../about 且 params 會帶入 day=5 (因為上面有設定參數名稱為 day 了)

			此時 params:{ day:'5' }


	iii. 使用參數:

		可以在 hook 函式中的 mounted 取得參數的值(一開始輸入網址就攜帶參數了，所以 mounted 時也就已經存在了)，
		
		query:

			mounted(){
				this.data1 = this.$route.query.day
			}
			
			上面 this.$route.query 可以得到 query 參數，再找出 day 。可以把值存入資料庫再應用。

		params:

			mounted(){
				this.data1 = this.$route.params.day
			}

			params 和 query 用法一樣，可以在 mounted 函式把值存入資料庫再應用。

	iv. 注意必看: 網址手動輸入 query & params 時，帶入參數有效，But 皆不會立即觸發頁面刷新(除非重新整理)。
		(因為 server 連線設定，輸入後皆會自動重新整理，所以練習時察覺不到)
		所以要使用 watch(){} 來監聽:

		query:

			watch:{
				$route(){									// 可能需要加入第一個參數 now
					this.data1 = this.$route.query.day		
					// 做的事情和上面一樣，我只是要監聽參數，並刷新頁面
				}
			}

		params: 和 query 一樣

			watch:{
				$route(){									// 可能需要加入第一個參數 now
					this.data1 = this.$route.params.day		
					// 做的事情和上面一樣，我只是要監聽參數，並刷新頁面
				}
			}
-----------------------------------------------------------------------------------
觀念:

	# 資料包 好習慣:

		// obj 為一個物件
		// 其中有一個資料包: information

		var obj = {
			title		:"hello",
			information	:[
				{ type:1, message:"aaa" },
				{ type:2, message:"bbb" },
				{ type:3, message:"ccc" }
			]
		}

		// 重點一: 資料包常以 陣列[]包物件{}來儲存。
		// 重點二: 物件常以 X.title 表示 ( 當然 X["title"] 也是合法用法)
		// 		   而陣列常以 A[0,1,2...] 表示，兩者比較不容搞混
		
		// EX: obj.information[0].message 很清楚是 obj > arry > obj 的 "aaa"。
		// 	   但如果是 obj["information"][0]["message"]也行，但是就不好分辨。

	# 厲害的數字循環演算法:

		// html:
		// <a  @click="clickfunc(1)"> Next </a>
		// <a  @click="clickfunc(-1)"> Previous </a>
		//
		// 資料包:
		// var obj = {
		// 	 index = 0;			// 要 0 ~ 3 循環
		// }
		// 
		// Vue: methods 觸發 clickfunc 的 par 可以是 1 or -1
		// var vm = new Vue({
        //   el   : "#app",
        //   data : obj,
        //   methods : {
        //     clickfunc(par){
        //       this.index = ( this.index + par + this.picture.length ) % this.picture.length;
        //       // 即可使 index 在 0~3 之間循環
        //		 // this.xxx 可以取得資料包裡的參數
        //     }
        //   }
        // });

    # 遇到 this? 小心!
    	// 一般 this 被使用在 Vue 內部時，都會指向 Vue 本身。但有例外，另外和使用的函數也有關系。

    	i. 一般狀況: 包括 computed,methods 的自訂函式內部，使用 this 都是指向 Vue 。

    	ii. 當使用到 setTimeout、filter... 等函式，內部通常會含有一個匿名函式。此時就要超級注意 this

    		I. 當使用 匿名函式: function(){...this...}
    			this 將會指向 window 全域物件，通常會導致程式有問題。
    		
    		II. 當使用 箭頭函式: ()=>{...this...}
    			this 將會重新指向 Vue 。通常會這樣使用。( 箭頭函式為ES6新增函式，算是原本函式的改良版本 )

    		EX: 在 Vue 中 methods 或 computed
    			setTimeout(function(){			// 一般匿名函式
                	console.log('this=',this);	// this = window 物件
                },500);

    			setTimeout(()=>{				// 箭頭匿名函式
                	console.log('this=',this);	// this = Vue 本身
                },500);

    # computed 使用自訂的函式，render 到網頁愛注意!

    	當 computed 定義一個 funcX(){...return...} 時，
    	在 html 中使用 {{ funcX }} 不會有問題，
    	But，使用 {{ funcX.xx }} 就要非常注意!!

    	如果 funcX 因為其他參數無法產生正確的 Data :
    	{{ funcX }} 會默認不顯示。
    	{{ funcX.xx }} 會產生 undefined 錯誤，而且如果是開啟網頁時錯誤，會直接整個網頁跑不出來。

    	解決:

    		i. html 元素使用 v-if="funcX" :
    			當 funcX 沒有被執行出結果，這個元素就不會被 render 到。
    			也當然不會出錯。

    		ii. funcX 內加入 if()else{ return [] } :
    			沒有 return 出要的結果前，都是 return []。
    			至少要 {{ [].xx }} 才不會 Error ，[].xx 會默認不顯示，不會錯誤。

    # 槽狀資料包結構:

    	obj = {
    		sort:['typeA','typeB'...],
    		map:{
    			typeA:...    			
    			typeB:...
    			...
    			typeZ:{
    				sort:['conA','conB'...];
    				map:{
    					conA:...
    					conB:...
    					...
    					conZ:{
    						content1:"aa"
    						content2:"bb",
    						...詳細內容
    					}
    				}
    			}
    		}
    	}

    # 使用 Vue 重要觀念，observe 監聽:

    	使用 Vue 時，把資料和畫面綁定，當資料改動，畫面就會即時 render 出要的結果。
    	但是 array 除外( 因為效能問題，Vue 中陣列內的數值改動，畫面不會 render ，但資料的改動仍然有效)。 

    	Observer 為 Vue 的觀察者，會監聽 data 資料包裡的所以有參數，一旦參數變動了，就會通知要 render 網頁。
    	( 這些會即時反映在網頁上的變數都有 getter 和 setter 屬性 )

    	一般變數、物件 都有 Observer 隨時監聽，但陣列考慮到效能並沒有 Observer 監聽。
    	但是陣列的一切運算都還是可以正常使用，只是缺少了立即刷新畫面的功能。
    	如果對一陣列運算，然後再運算另一變數，會因為變數有 Observer ，連同陣列的改變一並被刷新到畫面上。

    	結論:
    		使用陣列時需要特別小心，內部值改變可能不會被立即刷新至網頁( 尤其是 [0,1,2] 這種單純放數字的陣列 )

    	解決:
    		使用 $set(array,index,value);

    		array: 為要被觀察的陣列
    		index: 選定第?個項目要被更改
    		value: 要更改項目的的值
    		通常在 Vue 中會變成: this.$set(array,index,value...) 來使用。

    		$set() 將會賦予更改的對象 getter 和 setter 屬性 ，使其能夠被監聽到。

    # 生命週期 & hook:

    	生命週期: Vue 從初始化到被銷毀的過程。
    	hook( 鉤子 ): 處理生命週期的特殊函式。


    	初始化 Vue + 事件

    	--> beforeCreate

    	處理 observe,computed 功能

    	--> created

    	查看是否有設定 el 以及是否使用 template

    	-->beforeMount

    	-->mounted

    	元素已掛載完成， render 到網頁上，給我們操作
    	Root 跟子組件 component 都準備好之後才會一併 mounted 
    	

    	當資料改變會觸發以下兩個 hook

    	-->beforeUpdate

    	-->updated

    	資料更新完成
    	

    	當資料要被銷毀，會進入下面兩個 hook

    	--> beforeDestory

    	--> destroyed

