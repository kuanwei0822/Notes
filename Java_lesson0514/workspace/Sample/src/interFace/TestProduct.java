package interFace;

import java.util.Date;
import java.util.GregorianCalendar;

public class TestProduct {

    public static void main(String[] args) {

        Product item = new Notebook("Asus",100,365);
        GregorianCalendar expire = new GregorianCalendar(2019, 6, 21);
        Product item2 = new Food("肉鬆", 200, expire.getTime());
        GregorianCalendar simCardExpire  = new GregorianCalendar(2019, 7, 31);
        Product item3 = new SimCard("日本漫遊", 600, simCardExpire.getTime());

        Product[] items = { item, item2 ,item3 };
        for (int i = 0; i < items.length; i++) {
            Product aProduct = items[i];
            System.out.println( aProduct.desc() );
            if ( items[i] instanceof Expirable) { //檢查是否有實作Expirable介面
                checkExpire((Expirable)items[i]);//有實作則檢查是否有過期
            }
        }

    }

    public static void checkExpire( Expirable expirable ) {
        //Expirable 有可能是SimCard, Food,因為他們都實作了Expirable
        if ( expirable.最後使用期限().after(new Date())  ) {
            System.out.println("沒有過期");
        }else {
            System.out.println("過期了");
        }
    }

}
