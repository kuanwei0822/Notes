package myself;

public class Animal {
	
	// 繼承
	private int weight;
	private int height;
	private char color ;
	
	public void showDetail() {
		System.out.printf("weight:%d,height:%d%n",weight,height);
	}
	
	public void setWeight(int weight) {
		this.weight = weight;
	}
	public int getWeight() {
		return this.weight;
	}
	public void setHeight(int height) {
		this.height = height;
	}
	public int getHeight() {
		return this.height;
	}
	public void showData(char color) {
		System.out.printf("weight:%d,height:%d,color:%c%n",this.weight,this.height,color);
	}
	
	
}
