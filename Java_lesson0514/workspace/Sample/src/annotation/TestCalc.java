package annotation;


public class TestCalc {

    //@SuppressWarnings(value = {"deprecation"})
    public static void main(String[] args) {
        Calc calc = new Calc();
        /*
          要忽略警示可以使用 @SuppressWarnings於方法上
         */
        calc.add(1, 2);
        

    }
}
