package thread;

public class MyThread extends  Thread {

    @Override
    public void run() {
        for ( int i=5  ; i >0 ; i-- ){
            System.out.println("倒數＝"+i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
