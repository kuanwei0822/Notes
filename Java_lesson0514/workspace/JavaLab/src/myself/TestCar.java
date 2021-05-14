package myself;

public class TestCar {

	public static void main(String[] args) {
		Car c1 = new Car();
		c1.setModel("pin");
		System.out.println(c1.getModel());
		
		Car c2 = new Car(5);
		Car c3 = new Car(5,'r');
	}

}
