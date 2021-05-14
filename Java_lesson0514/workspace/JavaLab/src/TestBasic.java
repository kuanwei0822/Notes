
public class TestBasic {

	public static void main(String[] args) {

		long salary,j;
		salary = 10000;
		int a = 1000000;
		long b = 555555555555L;
		System.out.println("\\\\a="+a);
		System.out.println("\"b\"="+b);
		
		char c ='自';
		System.out.println(c);
		System.out.println("qw\r\nert");
	
		byte x =10;
		short y =20;
		int z =x + y;
		System.out.println("z="+ z);
		
		double aa = 10.00;
		int bb = (int)aa;
		
		int age = 50;
		boolean isAdult = age > 30 && age == 100;
		System.out.println(isAdult);
		
		int dd = 12&6;
		System.out.println(dd);
		
		System.out.println( 2 << 2);
		
		System.out.println("age="+age);
		System.out.println("age++="+ age++ );
		System.out.println("age++="+ age );
		
		System.out.println("++age="+ ++age );
		System.out.println("++age="+ age );
		
		age = 50;
		age += 10;
		System.out.println("age="+age);
		
		age = 50;
		System.out.println( age > 18 ? "成年":"未成年" );
		
		int sales = 2000;
		salary = 100;
		
		salary = sales>1000? salary+10: salary-10;
		System.out.println("salary="+salary);
		
		
	}

}
