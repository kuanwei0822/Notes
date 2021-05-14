package myself;

import sun.awt.SubRegionShowable;

public class Product {
	
	// 類別方法、屬性
	
	public static String description;
	public static int number;
	public static void showTatal(String description ,int number) {
		System.out.printf("%s&%d",description,number);
		System.out.println();
	}
	public static void showTatal() {
		System.out.printf("%s&%d",description,number);
		System.out.println();
	}
	
	
	// 物件方法、屬性
	
	public int price;
	public String name;
	
	public void showDetail() {
		System.out.printf("名子:%s,價格:%d%n",name,price);
	}
	// overloading 覆載
	public void showDetail(int number) {
		System.out.printf("名子:%s,價格:%d,數量:%d%n",name,price,number);
	}
	public void showDetail(int number,char color) {
		System.out.printf("名子:%s,價格:%d,數量:%d,顏色:%c%n",name,price,number,color);
	}
	
}
