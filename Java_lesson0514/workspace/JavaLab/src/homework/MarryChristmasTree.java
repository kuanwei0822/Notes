package homework;

public class MarryChristmasTree {
	public static void main(String[] args) {
		
		int n = 10; // 聖誕樹層數
		int space = n-1; // 空格數一開始是 n-1 ~ 0 ( 每層-1 )
		int star = 1; // 星星數 1 ~ 1+2*n
		
		
		for( int i=1 ; i<=n ; i++,space--) {
			
			for( int j=0 ; j<space ; j++ ) { 
				System.out.print(" ");				
			}
			
			for( int j=0 ; j<star ; j++) {		

				System.out.print("*");
			}
			star=star+2;
			
			for( int j=0 ; j<space ; j++ ) {	// run n-1 次
				System.out.print(" ");				
			}
			
			System.out.println("");				
			
		}
		
		
	}

}
