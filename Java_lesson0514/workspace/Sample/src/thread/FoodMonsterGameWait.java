package thread;

public class FoodMonsterGameWait extends Thread{


    private volatile boolean  hasFood = false;
    public void eat(){
            while (!hasFood) {
                synchronized (this) {
                    try {
                        //因為有wait，所以雖然在while迴圈中，但其實沒有執行了，不會浪費cpu等待
                        this.wait();
                        System.out.println("等待結束");
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
            System.out.println(Thread.currentThread().getName()+":吃完了");
            hasFood = false;
    }

    public void feed(){
        synchronized (this){
            hasFood =true;
            System.out.println("通知"+this.getName()+" 有食物了");
            this.notify();//會喚醒之前wait的執行緒
        }
    }

    @Override
    public void run() {
        while ( true ) eat();
    }


}
