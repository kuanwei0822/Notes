import jdk.nashorn.internal.ir.EmptyNode;

public class TestEmployee {

	public static void main(String[] args) {
		Employee emp = new Employee();
		emp =null;
		System.out.println(emp);
		
		Employee emp2;
		emp2 = null;
		System.out.println(emp2);
	}

}
