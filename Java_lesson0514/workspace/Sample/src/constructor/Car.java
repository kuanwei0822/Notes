package constructor;

/**
 * Created by vincent on 2017/6/3.
 */
public class Car {

    private String model;
    private int price;
    private char color;

    /*step2 full constructor,加了之後，則無預設建構子可以呼叫 */
    public Car(String model, char color) {
        setModel(model);
        this.color = color;
    }
    public Car(char color){
        this.color = color;
    }
    public Car(){
        //step1.
        //this.model = "Prius";
        //this.color = 'W';
        this("Prius",'W');
        //預設建構子，如果沒有任何其它的建構子，編譯器會預設產生一個
    }

    /* step2 多加一個建構子 再少一個參數,利用this呼叫其它建構子，this必須放在第一行執行
    *  Step3 修改為private，則其它java，則無法呼叫
    * */
    public Car(String model) {
        setModel(model);
        //this(model, 'W');
    }
    public void setModel(String model) {
        this.model = model;
        if ( model.equalsIgnoreCase("Yaris")){
            this.price =  575000;
        }else if ( model.equalsIgnoreCase("Prius")){
            this.price = 1099000;
        }else{
            System.out.println("錯誤的型號");
        }
    }

    public char getColor() {
        return color;
    }

    public void setColor(char color) {
        this.color = color;
    }

    public String getModel() {
        return model;
    }

    public int getPrice() {
        return price;
    }

    /* step 4 */
    public String getInfo(){
        return "車型："+model+",顏色="+this.color;
    }

    public static void main(String[] args) {
        Car car = new Car("Yaris");
        System.out.println(car.getInfo());
    }

}
