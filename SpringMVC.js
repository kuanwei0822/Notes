
1. 新建 Dynamic Web project  專案

2. 專案轉 Maven 專案

3. pom.xml 組態設定

	5 Spring 核心 + 2 Spring web

4. web.xml 組態設定

	加入: DispatcherServlet 結合 mvc-servlet.xml，用來管理已經註冊的 Bean
	這樣之後才找的到 Bean


5. 建立 mvc-servlet.xml (有特殊設定)
	
	設定類別( Controller )的映射關係
	( 一個網址可以找到某個類別 )

6. AbstractController 類別的使用、導向其他頁面、傳資料(之後不會再用到)

----------------------------------------------------------------------------

7. Controller 使用 : 經典Conroller
	 @Controller
	 @RequestMapping(path="..." method="...")
	 @SessionAttributes(names={"..."})
	 @ModelAttribute(name="...")
	 @RequestParam(name="...")

	使用前設定:

	mvc-servlet.xml 要設定 namespace: context、mvc

	mvc-servlet.xml 加入:

		<context:annotation-config/>							<!-- 使用到 annotation -->
		<context:component-scan base-package="tw"/>				<!-- Bean 的效力範圍(常用package) -->	
		<mvc:annotation-driven/>								<!-- 使用到 SpringMVC 的註解-->

8. SpringMVCJavaConfig 取代 mvc-servlet.xml
	
	
	設定:

	implements WebMvcConfigurer

	@Configuration							// 我是組態檔
	@EnableWebMvc							// 等同於 <mvc:annotation-driven/>
	@ComponentScan(basePackages = {"..."})	// 等同於 <context:component-scan base-package="tw.leonchen"/>

	// 必加。幫助 Bean 的註冊、運作
	@Override
	public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
		configurer.enable(); 
	}


9. WebAppServletInitializer 取代 web.xml

	設定: 

	extends AbstractAnnotationConfigDispatcherServletInitializer

	@Override  //設定等同於 beans.config.xml
	protected Class<?>[] getRootConfigClasses() { 
/*		return new Class[] {RootAppConfig.class}; */
		return null;
	}

	@Override  //設定等同於 mvc-servlet.xml
	protected Class<?>[] getServletConfigClasses() {
		return new Class[] {SpringMVCJavaConfig.class};
//		return null;
	}


	@Override  // 組態設定套用的區域
	protected String[] getServletMappings() {
		return new String[] {"/"};
	}

	@Override  // 設定 Filter 來強迫編碼輸入、輸出都是 UTF-8
	protected Filter[] getServletFilters() {
		CharacterEncodingFilter encodeFilter = new CharacterEncodingFilter();
		encodeFilter.setEncoding("UTF-8");
		encodeFilter.setForceEncoding(true);
		return new Filter[] {encodeFilter};
	}	

10. 以 Controller 間接進入 代替 JSP 直接進入

11. 加入 bean.config.xml

	設定 spacesname:tx

	<!-- mvc-servlet.xml 有，但仍然可以寫在這 -->
	<context:annotation-config/>
    <context:component-scan base-package="tw"/> 

    <aop:aspectj-autoproxy/>  											<!-- 忘記是幹嘛的 -->
    <tx:annotation-driven transaction-manager="transactionManager"/>    <!-- 交易管理員 -->
   
    <!-- 交易管理員註冊 Bean -->
    <!-- JNDI 連線 Bean 註冊 -->
    <!-- hibernate 的設定 -->


12. RootAppConfig.java 取代 bean.config.xml

	@Configuration
	@ComponentScan(basePackages = { "tw.leonchen" })
	@EnableTransactionManagement
	@EnableAspectJAutoProxy  // 忘記是幹嘛的

	// 註冊JNDI連線 Bean
    @Bean
	public DataSource ...

    // 註冊 Bean: Hibernate 設定( 注意:內有Scan範圍)
    @Bean(destroyMethod = "destroy")
    public LocalSessionFactoryBean ...

	// 交易管理員註冊 Bean
	@Bean(name="transactionManager") 
	@Autowired
	public HibernateTransactionManager .../

13. 表單綁定 JavaBean:

	JSP: 引入特定 class

	JavaBean: 一般

	前置 Controller : 帶入 JavaBean 到 Model

	接資料 Controller : 接整個 JavaBean

14. 靜態資源管理:
	
	SpringMVCJavaConfig.jvav:

	@Override
	public void addResourceHandlers.../

15. 重導設定:

	SpringMVCJavaConfig.jvav:

	@Override
	public void addViewControllers.../


16. 用 return 網頁直接秀 文字，回應狀態、圖片(inputStream)

17. 檔案上傳設定:

	SpringMVCJavaConfig.jvav:	

	// 提供上傳檔案功能，並固定以 UTF-8 編碼方式
	@Bean
	public CommonsMultipartResolver

	步驟詳細看影片

18. Json 處理:

19. 例外處理: