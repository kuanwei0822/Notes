package thread;

public class FoodMonster extends Thread{

    private volatile int food = 5;
    public void eat(){
        //檢查是否有食物，沒有食物則利用while迴圈一直等候
        while (food == 0) {
            //利用這種方式會一直執行，浪費cpu cycle
            //System.out.println(Thread.currentThread().getName()+":沒有食物，等待中");
        }
        for(int i=0 ; i < 5 ;i++){
            food--;
            System.out.println(Thread.currentThread().getName()+"吃掉一個剩下"+food+"個");
        }
        System.out.println(Thread.currentThread().getName()+":吃完了");

    }

    public void feed(){
        food = 5;
        System.out.println("餵食時間到，"+this.getName()+" 有"+food+"個食物囉！");
    }

    @Override
    public void run() {
        while ( true ) {
            eat();
        }
    }
    

}
