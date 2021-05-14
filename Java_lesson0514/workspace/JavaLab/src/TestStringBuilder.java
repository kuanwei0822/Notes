
public class TestStringBuilder {

	public static void main(String[] args) {
		String hello = "hello";
		String world = "world";
		String helloworld = "helloworld";
		
		String hw = hello + world;
		
		
		System.out.println(hw == helloworld);
		
		String temp ="";
		for( int i=0 ; i<10 ; i++ ) {
			temp = temp +i;
		}
		System.out.println(temp);
		
		
		StringBuilder builder = new StringBuilder();
		for( int i= 0 ; i < 10 ;i++) {
			builder.append(i);
		}
		System.out.println(builder.toString());
	}

}
