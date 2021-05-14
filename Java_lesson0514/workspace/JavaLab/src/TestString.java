import sun.print.resources.serviceui;

public class TestString {

	public static void main(String[] args) {
		String name = "vincent"; // pool 產生 vincent
		String name1 = "vincentc456c";// 指向 pool 中同個 vincent
		
		String name2 = new String("vincent");// new 新物件 heap 區
		String s = "123456789";
		
		
		System.out.println(name == name1);
		System.out.println(name == name2);
		// String 方法
		System.out.println(name.equals(name2));	// 比較字串
		System.out.println("name1 length = " + name1.length() );// 字串長度
		System.out.println("name1 \"c\" in = " + name1.indexOf("c") );// 找單一字
//		System.out.println("name1 \"c\" = " + name1.contain("c") );// 找單一字
		System.out.println(s.substring(2));
		System.out.println(s.substring(0,5));
		System.out.println( String.format("123=%12.3f",10/3.0) );
		
	}

}
