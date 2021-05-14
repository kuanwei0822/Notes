import java.math.BigDecimal;

/**
 * Created by vincent on 2017/5/18.
 */
public class TestPrecision {
    public static void main(String[] args) {
        
        float a= 123.45678901234567890f;
        double b=123.45678901234567890;

        System.out.println("請注意精確度只有七位數＝"+a);  //123.45679
        System.out.println("請注意精確度只有15位數＝"+b); //123.45678901234568
        System.out.println(0.1+0.1+0.1); //0.30000000000000004
        System.out.println(33.33 * 4.5 );

    }
}
