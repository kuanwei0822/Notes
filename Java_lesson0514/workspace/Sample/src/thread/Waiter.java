package thread;

import java.util.Timer;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class Waiter {
    private boolean ready = false;
    public synchronized void waitForIt(){
        while (!ready) {
            try {
                wait();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                //e.printStackTrace();
            }
        }
        System.out.println("we are ready");
    }

    public synchronized void gogogo(){
        ready = true;
        notifyAll();
    }

    public static void main(String[] args) {

        ScheduledExecutorService timer = Executors.newScheduledThreadPool(1, new DaemondThreadFactory());
        Waiter waiter = new Waiter();
        timer.schedule(waiter::gogogo, 1, TimeUnit.SECONDS);
        Thread main = Thread.currentThread();
        timer.schedule(main::interrupt, 500, TimeUnit.MILLISECONDS);

        waiter.waitForIt();
    }
}
