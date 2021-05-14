import java.text.DecimalFormat;
import java.text.NumberFormat;

public class TestStringFormat {
    public static void main(String[] args) {
        double value = 1234.56;
        //NumberFormat numberFormat = new DecimalFormat("#,###.##");
        //System.out.println(numberFormat.format(value));
        System.out.println(String.format("%,.2f",1234.5678));
        System.out.println(String.format("%,.10f",1234.5678));
        System.out.println(String.format("%,d",1234));
        System.out.println(String.format("%10d",1234));
        System.out.println(String.format("%10f",1234.5678));
        System.out.println(String.format("%10f",1234.56789));
        System.out.println(String.format("%,d",123456789));

    }
}
