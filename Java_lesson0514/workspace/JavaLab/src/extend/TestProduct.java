package extend;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class TestProduct {

	public static void main(String[] args) {
		
		// Note 具備2型態: 本身 Notebook、繼承來的 Product
		Notebook nb = new Notebook("Asus",30000,365);
		System.out.println(nb.desc());
		// nb.getWarranty(); 無法使用
		
		Product item = nb; // Notebook -> Product 子轉父類別
		System.out.println( item instanceof Notebook );
		System.out.println( item instanceof Food );
		if( item instanceof Notebook ) {
			Notebook nb1 = (Notebook)item; // Product -> Notebook (?)父轉子類別，必須強制轉型			
			System.out.println("保固:"+ nb1.getWarranty() );
		}
// 		Food f1 = (Food)item; // 錯誤的轉型
		
		
		
		// GregorianCalendar 西元歷
		// 先取得日曆 Calendar，再取得日期 Date, 月份 0 起算
		GregorianCalendar calendar = new GregorianCalendar(2021,Calendar.MAY,13);
		Date date = calendar.getTime();
		
		Food food = new Food("肉鬆",200,date);
		System.out.println(food.desc());
		
		Product[] items = new Product[]{nb, food};
		
		buy(items);
	}
	public static void buy( Product[] ps ) {
		
		int sum = 0;
		for(Product eachItem: ps ) {
			System.out.println("買入:"+ eachItem.desc());
			sum = sum + eachItem.getPrice();
		}
		System.out.println("總金額:"+ sum);
		
	}

}
