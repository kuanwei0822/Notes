package homework;

public class GetValue {
	public static void main(String[] args) {
		double[] x = { 1.2 , 2.5 , 5.5 , 555.4 , 10.2 , 0.1 };
		double max = 0.0;
		double min = 0.0;		
		double average = 0.0;
		double sum = 0.0;
		
		for( int i=0 ; i<x.length ; i++ ) {
			sum = sum + x[i];
			
			if( i==0 ) {
				max =x[i];
				min =x[i];
			}
			
			if( x[i] > max ) {
				max = x[i];
			}
	
			if( x[i] < min ) {
				min = x[i];
			}
			
		}
		System.out.println("average=" + (sum/x.length) );
		System.out.println("max=" + max );
		System.out.println("min=" + min );				
	}
}
