package thread;

public class TestThread {
    public static void main(String[] args) {
        /*
        MyThread t1 = new MyThread();
        t1.setName("Count down");
        t1.start();
          */

        /*
        MyRunnable runnable = new MyRunnable();
        Thread t2 = new Thread(runnable);
        t2.setName("倒數執行緒");
        t2.start();
        */
        
        Thread t3 = new Thread(new Runnable() {
            @Override
            public void run() {
                for ( int i=5  ; i >0 ; i-- ){
                    System.out.println("倒數＝"+i);
                    try {
                        Thread.sleep(1000);
                        System.out.println("interrupted ="+Thread.currentThread().isInterrupted());
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        });
        t3.setName("倒數執行緒");
        t3.setPriority(3);
        t3.start();



        System.out.println(t3.isAlive());

        try {
            t3.interrupt();
            System.out.println("interrupted " +t3.isInterrupted());
            t3.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("finish");

    }
}
