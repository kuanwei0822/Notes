package myself;

public class Car {
	// 封裝、建構方法+覆載
	
	private String model;
	private int price;
	private int number;
	private char color;
	
	public Car(){
		System.out.println("u new a obj");
	}
	public Car(int number){
		this(number,'i');
		//		System.out.printf("u new a obj ,including number: %d%n",number);
	}
	public Car(int number,char color){
		System.out.printf("u new a obj ,including number: %d,include color: %c%n",number,color);
	}
	
	
	public void setModel(String model) {
		this.model = model;
	}
	public String getModel() {
		return this.model;
	}
}
