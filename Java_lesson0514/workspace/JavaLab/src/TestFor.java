
public class TestFor {

	public static void main(String[] args) {
//		int sum =0;
//		for ( int i=0 ; i <= 100 ; i++ ) {
////			if( i%2 == 0 ) {
////				continue;
////			}
//			
//			sum = sum+ i;				
//			System.out.println(i);
//			if( i >= 50) {
//				break;
//			}
//			
//		}
		
//		int i = 0;
//		int sum = 0;
//		
//		while( i<=100 ) {
//			System.out.println(i);
//			sum=sum+i;
//			i++;
//		}
//		
//		System.out.println("sum="+sum);
		
		int i = 0;
		int sumOfDoWhile = 0;
		
		do {
			sumOfDoWhile = sumOfDoWhile + i;
			System.out.println(i);
			i++;
		}while( i<=100 );
		System.out.println("sumOfDoWhile=" + sumOfDoWhile);
		
		
		
	}

}
