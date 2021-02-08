嵌入 CDN :
	// 注意跟許多其他 CDN 一樣，程式碼要放 body 最底部或直接放在 body 下面，
	// 不可放在head中，因為一開始時 DOM 還沒被解析完成，放在 head 中會無法建立 Vue 實例。

	// </script><script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.9/vue.js'></script>
	// 2.6.9 版本
	
起手式 :
	// 類似於模板引擎用法

//	<body>
//		<div id="app">				// id 設為 app ，使待會 vue 有依據的對象
//			{{ message }}			// 被綁定的元素中要帶入的資料。
//									// content 為綁在一起的資料，會從被綁的資料中找到 message
//      </div>
//		
//		</script><script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.9/vue.js'></script>
//									// Vue 的 CDN ，務必要 DOM 資料準備好才讀取
//		<script>
//			var content = {			// 宣告物件 content : 裡面包含一個訊息"fff"
//         		message:"fff"
//       	}			

//      	var vm = new Vue({		// 宣告 vue 來實現綁定元素 & 資料
//          	el:"#app",			// 1. 設定綁定元素，el 為保留字。
//          	data:content		// 2. 設定要綁定上去的資料，data 為保留字。 
//									//    這邊綁定了剛剛的物件。
//        	});

//		</script>
//	</body>

-----------------------------------------------------------------------------------
HTML 綁定:

	1. 綁定 txt 內容: 
		// 使用: {{ ... }}

		// html:
		//   <div>{{ message }}</div>

		// Vue:
		//   var obj = {
		//	 	message:"123"
		//	 }

		//	 var vm = new Vue({
		//		el:"#app",	
		//		data:obj
		//	 })	

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

	3. 綁定事件:

		html:

			i. 若呼叫的 function 不需要參數，則可以不用加()
				硬要加()也可以，實測不會錯誤。

				EX: @click = "func1"

			ii. 若呼叫的 function 需要傳入參數，一樣可以用()加入參數

				EX: @click = "func2(index, ...)"

		// 使用 @click

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


	4. 表單元素專用-雙向綁定:
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
Vue 功能:
	var vm = new Vue({
		el:"#app",
		data:data,
		methods:{...},
		computed:{...},
		watch:{...}		// 觀測數據
	})

	1. watch:{...}: 

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

	3. computed:
		// Vue 的計算功能
		// 可以直接寫入想要的函式
		// this.XXX 和 method 一樣會指向被綁定的資料包裡的參數
		// 當函式內部有任何資料更動時，整個函式都會在 Run 一次，達成刷新的動作。
		
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

	4. 動畫套用:

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

