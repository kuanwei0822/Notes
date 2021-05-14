package myself;

public class TestProduct {

	public static void main(String[] args) {
		
		// 一般物件使用
		Product p1 = new Product();
		p1.name = "computer";
		p1.price = 100;
		p1.showDetail();
		
		
		// 靜態方法使用
		Product.description = "sss";
		Product.number = 456 ;
		String dd = "sss";
		int nn = 456;
		Product.showTatal(dd,nn);
		Product.showTatal();
		
		// overloading 覆載 使用
		System.out.println("overloading 使用");
		
		Product p2 = new Product();
		p2.name = "phone";
		p2.price = 20000;
		
		p2.showDetail();
		p2.showDetail(5);
		p2.showDetail(5,'r');
	}

}
