package polymorphism;


import java.util.GregorianCalendar;

public class TestProduct {

    public static void main(String[] args) {


        /* step1 轉型成父類別*/
        Notebook nb = new Notebook("Asus Notebook", 50000,365);

        Product item = nb;
        System.out.println(item.desc());
//        item.getWarranty();

        //step2 用同一個『方法』操作不同型態的物件

        GregorianCalendar calendar = new GregorianCalendar(2019,2,10);
        Food food = new Food("肉鬆",100,calendar.getTime());

        Product item2 = food;


        Product[] items = new Product[]{nb,food};
        buy(items);

        //Food item3 = (Food)item;//ClassCastException

        //step3 instanceof
        System.out.println(item instanceof Notebook);
        System.out.println(item2 instanceof Food);


    }

    public static void buy(Notebook nb){
        System.out.println("買入:"+nb.desc());
    }
    public static void buy(Food food){
        System.out.println("買入:"+food.desc());
    }
    public static void buy(Product p){
        System.out.println("買入:"+p.desc());
    }
    public static void buy(Product[] ps){
        int sum = 0;
        for (Product eachItem : ps) {
            System.out.println("買入:"+eachItem.desc());
            sum = sum + eachItem.getPrice();
        }
        System.out.println("總金額:"+sum);
    }
    

}
