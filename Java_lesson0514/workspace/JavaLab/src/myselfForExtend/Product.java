package myselfForExtend;


public class Product {
	
	private String name;
	private int price;
	
	public Product() {
		System.out.println("父類別方法()被呼叫");
	}

	public Product(String name,int price ) {
		this.name = name;
		this.price = price;
		// 父類別建構函式幫忙存 name, price
	}
	
	public String desc() {
		return String.format("name:%s , price:%d",this.name,this.price);
		// 父類別方法幫忙帶出 name, price 參數
	}

}
