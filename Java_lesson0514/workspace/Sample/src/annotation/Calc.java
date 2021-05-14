package annotation;

public class Calc {

    /**
     * 加上@Deprecated，則呼叫會出現警示
     * @param a
     * @param b
     * @return
     */
    @Deprecated
    public int add(int a,int b){
        return a+b;
    }

    public int add(int... ints){
        int sum = 0;
        for (int item : ints) {
            sum = sum + item;
        }
        return sum;
    }

}
