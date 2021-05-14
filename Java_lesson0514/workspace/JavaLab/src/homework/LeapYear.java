package homework;

public class LeapYear {

	public static void main(String[] args) {
		int inputYear = 8000;
		
		if( inputYear%4 == 0 ) {	// 4年一潤
			if( inputYear%100 !=0 ) {	// 100年不潤
				System.out.println("閏年"); 
			}else{
				if( inputYear%400 != 0 ) {	// 400年一潤
					System.out.println("不是閏年");
				}else {
					if( inputYear%4000 != 0 ) {	//4000年不潤
						System.out.println("閏年"); 
					}else {
						System.out.println("不是閏年"); 
					}
				}
			}
		}else {
			System.out.println("不是閏年"); 
		}
		
	}

}
