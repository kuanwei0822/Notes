package func;

public class TestPeople {

	public static void main(String[] args) {
		People p = new People();
		p.height = 1.7;
		p.weight = 70;
		System.out.println("BMI=" + p.getBMI());
		System.out.println("overWeightBMI=" + People.overWeightBMI );
	
		double bmi = People.BMI(1.7, 70);
		System.out.println("static BMI = " + bmi);
		System.out.println("------------------");
		
		
		System.out.println( String.join("-","123","456","789") );
		
	}

}
