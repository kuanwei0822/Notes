package varargs;

import java.util.List;

public class TestVarargs {
    public static void main(String[] args) {

        final int sum = add(1, 2, 3, 4, 5, 5, 6);
        System.out.println("總和="+sum);

    }

    public static int add(int... values){
        int sum = 0;
        for (int i = 0; i < values.length; i++) {
            sum = sum + values[i];
        }
        return sum;
    }
    /*
    //無法區分，編譯會有錯:Ambiguous method call
    public static int add(int multiply,int... values){
        int sum = 0;
        for (int i = 0; i < values.length; i++) {
            sum = sum + values[i];
        }
        return sum;
    }
    */
}
