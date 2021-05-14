package interFace;

public interface Warrantable {
//	int 保固天數();
	
	public static final int MAX_WARRANTY = 365;
	
	// 如果類別不覆寫這個實作，就會應用這個實作
	public default int 保固天數() {
		return MAX_WARRANTY;
	};
	
	
	
	
}
