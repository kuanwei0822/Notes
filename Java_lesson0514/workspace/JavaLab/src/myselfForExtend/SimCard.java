package myselfForExtend;

import java.util.Date;

public class SimCard extends Product{
	private Date expireDate;
	
	public SimCard(String name,int price,Date expireDate) {
		super(name,price);
		this.expireDate = expireDate;
	}

	@Override
	public String desc() {
		String description = super.desc();
		return "SimCard:" + description + " , expireDate:" + expireDate;
	}
	
	
	
}
