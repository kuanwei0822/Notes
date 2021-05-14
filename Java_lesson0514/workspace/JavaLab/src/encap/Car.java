package encap;

public class Car {
	
	public Car(char color) {
//		this.color = color;
		this("Yaris", color);
	}
	
	public Car( String model,char color ) {
//		this.model = model;
		setModel(model);
		this.color = color;
	}
	
	
	
	private String model;
	private int price;
	private char color;
	
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
		if ( model.equals("Yaris") ) {
			this.price = 570000;
		}else if( model.equals("Prius") ) {
			this.price = 1000000;
		}else {
			System.out.println("Error");
		}
	}
	public int getPrice() {
		return price;
	}
	
	
	public char getColor() {
		return color;
	}
	public void setColor(char color) {
		this.color = color;
	}
	
	
	
	
//	public void setModel( String model ) {
////		if( m.equals("Prius") || m.equals("Yaris")  ) {
////		}
//		this.model = model;			
//	}
//	
//	public String getModel() {
//		return model;
//	}
//	
//	public int getPrice() {
//		return price;
//	}
//	
	
}
