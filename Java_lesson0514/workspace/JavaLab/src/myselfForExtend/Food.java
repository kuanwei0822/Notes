package myselfForExtend;

import java.util.Date;

public class Food extends Product{
	
	private Date expireDate;
	
	public Food(String name,int price,Date expireDate) {
		super(name,price);
		this.expireDate = expireDate;
	}

	@Override
	public String desc() {
		String description = super.desc();
		return "Food:" + description + " , expireDate:" + expireDate;
	}
	
	
}
