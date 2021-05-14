package interFace;

import java.util.Date;

public class SimCard extends Product implements Expirable,Warrantable{
	// SimCard: SimCard Product Expirable Warrantable 四種型態
	
	@Override
	public int 保固天數() {
		return 7;
	}

	@Override
	public Date 最後期限() {
		return expireDate;
	}
	
	public SimCard(String name, int price, Date expireDate) {
        super(name, price);
        this.expireDate = expireDate;
    }
	private Date expireDate;

	@Override
    public String desc() {
        String description = super.desc();
        description = description +",到期日：" + expireDate + "開卡後可用7天";
        return description;
    }


	
	
}
