package myselfForExtend;

import java.util.Date;
import java.util.GregorianCalendar;

public class TestProduct {

	public static void main(String[] args) {
		Car car = new Car("Ts",5000,'R');
		System.out.println(car.desc());
		
		GregorianCalendar calendar = new GregorianCalendar( 2021 , 6 , 20 );
		Date date = calendar.getTime();
		
		Food food = new Food("fish",100,date);
		System.out.println(food.desc());
		
		GregorianCalendar calendar1 = new GregorianCalendar( 2021 , 6 , 30 );
		Date date1 = calendar.getTime();
		
		SimCard simCard = new SimCard("Taiwan",500,date1);
		System.out.println(simCard.desc());
		
		//-----------多型-----------//
		
		Product item = new Car("Yrs",3500,'W');
//		System.out.println(item.getColor()); //不能用 car 才有的方法
		System.out.println(item.desc()); 	 //可以用 puduct 有， car 改寫的方法	
		
		Product item1 = new Food("pig",200,date1);
		System.out.println(item1.desc()); 	 //可以用 puduct 有， food 改寫的方法	
		
		System.out.println("----------------------");
		
		buy(car);
		buy(food);
		
		
	}
	public static void buy( Product item ) {
		// 多型:
		// 一種 Product 就可以處理許多子類別，不需要因為子類別不一樣用多個方法
		System.out.println("買"+item.desc());
		// 限制: 只能用父類別有的方法，子類別改寫也ok
	}
}
