package thread;

import java.util.ArrayList;
import java.util.List;

public class TestRaceCondition {

    public static int counter = 0;

    public static void main(String[] args) {

        List<Thread> threads = new ArrayList<>();
        //產生threads，加入ArrayList
        for( int i=0 ; i < 10 ; i++) {
            VotingRunnable runnable = new VotingRunnable();
            Thread t1 = new Thread(runnable,"T"+i);
            threads.add(t1);
        }
        //一起發動所有的thread
        for (Thread thread : threads) {
            thread.start();
        }
        try {
            //main thread 等待所有執行緒結束
            for (Thread thread : threads) {
                thread.join();
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        //印出最後的值
        System.out.println("finally counter = "+counter);

    }

    public static void vote(){
            counter++;
    }
}
