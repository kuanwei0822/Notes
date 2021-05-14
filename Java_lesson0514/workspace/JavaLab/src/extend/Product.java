package extend;

public abstract class Product {
	// 有抽象方法必為抽象類別
//	public abstract void calc();
	
	public static final double TAX ;
	
	static {
		TAX =0.05;
//		System.out.println("static black");
	}
	
	String name;
	int price;
	 
	public Product() {
		System.out.println("呼叫父類別建構方法");
	}
	
	public Product(int p1, int p2) {
//		System.out.printf("呼叫父類別(%d,%d)建構方法%n",p1,p2);
	}
	
	public Product(String name, int price) {
		this.name = name;
		this.price = price;
	}

	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}
	
	public String desc() {
		return String.format("名稱:%s,價錢:%d",name,price);
	}

	
}
