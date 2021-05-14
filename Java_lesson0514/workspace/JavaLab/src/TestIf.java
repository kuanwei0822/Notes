
public class TestIf {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int age = 31;
		if (age >= 18) {
			System.out.println("成年");
			if (age >= 30) {
				System.out.println("壯年");
			}
		} else {
			System.out.println("未成年");
		}
		
		
		int classroom = 3055;
		switch( classroom ) {
			case 204:
				System.out.println("人數大於等於30人");
				break;
			case 305:
				System.out.println("人數小於30大於等於20人");
				break;
			default:
				System.out.println("default");
		}

	}

}
