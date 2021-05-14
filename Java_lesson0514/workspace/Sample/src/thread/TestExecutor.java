package thread;

import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class TestExecutor {
    public static void main(String[] args) throws InterruptedException {

        Timer timer = new Timer(true);
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                showThreadStatus();
            }
        },1000,1000);


        /*
        ScheduledExecutorService service = Executors.newScheduledThreadPool(2);
        service.scheduleWithFixedDelay(TestExecutor::showThreadStatus, 1, 1, TimeUnit.SECONDS);
          */
        Thread.sleep(5000);

    }
    public static void showThreadStatus(){
        
        System.out.println(Thread.currentThread().getName()+"," + Thread.currentThread().isDaemon());
    }
}
