package array;

public class TestArray2 {

	public static void main(String[] args) {
//		int[][] x = new int[5][4];
		int[][] x = {{12,1,1},{2,45,6}};
		x[0][1] = 20;
		x[1][1] = 50;
		System.out.println(x[1][1]);
		
		System.out.println(x.length);
		System.out.println(x[1].length);
		
		
		System.out.println("-------------");
		//i代表第幾排,j代表第幾個
		for( int i = 0 ; i < 2 ; i++) {
			for( int j =0 ; j < 3 ; j++ ) {
				System.out.println(x[i][j]);
			}
		}
		System.out.println("-------------");
		
		int[][] y = {{1,2,3},{10,20},{4,5,6,7}};
		for( int i=0 ; i<y.length ; i++ ) {
			for( int j=0 ; j<y[i].length ; j++ ) {
				System.out.println(y[i][j]);
			}
		}
		
		System.out.println("------z-------");

		int[] z = {0,1,2,3,4,5,6,7,8,9};
		
		for( int item : z ) {
			System.out.println(item);
		}
		
		
		System.out.println("-------------zz");
		
		// 2 維陣列 foreach 使用 
		
		int zz[][] = {{1,2,3},{10,20}};
		
		for(int[] item : zz ) {
			for(int item2 : item ) {
				System.out.println( item2 );
			}
			
		}
		
		
		
	}

}
