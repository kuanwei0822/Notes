package myself;

public class Cat extends Animal{
	// 繼承
	// 覆寫 override
	
	@Override
	public void showData(char color) {
		System.out.printf("This is a cat,weight:%d,height:%d,color:%c%n",getWeight(),getHeight(),color);
		
	}
	
	
}
