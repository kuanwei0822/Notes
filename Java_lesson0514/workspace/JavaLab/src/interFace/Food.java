package interFace;

import java.io.Serializable;
import java.util.Date;

public class Food extends Product implements Expirable{
	// Food 具備: Food,Product,Expirable
	
	@Override
	public Date 最後期限() {
		return expireDate;
	}

    private Date expireDate;

    public Food(String name, int price, Date expireDate) {
        super(name, price);
        this.expireDate = expireDate;
    }

    @Override
    public String desc() {
        String description = super.desc();
        description = description +",到期日："+expireDate;
        return description;
    }

}
