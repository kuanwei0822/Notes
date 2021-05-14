package func;

import javax.swing.plaf.basic.BasicMenuItemUI;

public class People {
	// 類別屬性方法
	static double overWeightBMI = 24.0;
	
	public static double BMI( double h,double w ) {
		return w / (h*h);
	}
	
	//-----------------------------------------------
	
	// 物件屬性方法
	double height;
	double weight;
	
	public double getBMI() {
 		double BMI = People.BMI(height, weight);
		return BMI;
	}
	
	
}
