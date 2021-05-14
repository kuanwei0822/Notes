package extend;

public class Notebook extends Product{
	
	public int warranty;
	
	public Notebook(String name, int price, int warranty) {
		super(10,20);
		
//		setName(name);
		this.name = name;
//		setPrice(price);
		this.price = price;
		this.warranty = warranty;
	}
	
	@Override
	public String desc() {
		String info = super.desc();
		int aa = getPrice();
		
		return String.format("%s!保固:%d天",info,warranty);

	}

	public int getWarranty() {
		return warranty;
	}

	public void setWarranty(int warranty) {
		this.warranty = warranty;
	}

	
	
}
