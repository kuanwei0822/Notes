package reference;

/**
 * Created by vincent on 2017/7/10.
 */
public class PassValueTest {
    public static void main(String[] args) {
        int a = 10;
        System.out.println("呼叫print前 a值 ="+a);
        print(a);
        System.out.println("呼叫print後 sa值 = "+a);
    }

    public static void print(int aa){
        aa = aa+ 1;
        System.out.println("印出print方法中的aa="+aa);
    }

}
