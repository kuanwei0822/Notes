package interFace;

public class Notebook extends Product implements Warrantable{
	// Notebook 具備: Notebook,Product,Warrantable
	
	@Override
	public int 保固天數() {
		return warranty;
	}
	
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
