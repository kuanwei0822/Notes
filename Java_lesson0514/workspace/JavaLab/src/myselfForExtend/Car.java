package myselfForExtend;

public class Car extends Product{
	
	private char color;
	
	public Car(String name,int price,char color) {	
		super(name, price);
		// 屬性:
		// 藉著 super 讓父類別來存 name, price 參數。
		
		// 不管有沒有寫，必觸發父類別建構方法
		// 默認:super()
		// 指定 super(1,2) 可以改觸發 super(a,b)
		
		// 執行順序: 父類別(n...)建構方法 -> 子類別(n...)建構方法
		
		this.color = color;
		// Car 特有的屬性，在子類別直接存
		
	}

	@Override
	public String desc() {
		// 方法:
		// 改寫 父類別方法，But 也呼叫父類別方法取得 name, price
		String description= super.desc();
		return "Car:" + description + String.format(" , color:%c",this.color);
	}
	
	
	// get,set 測試用，可有可無
	public void setColor(char color) {
		this.color = color;
	}

	public char getColor() {
		return this.color;
	}
	
}
                                                          