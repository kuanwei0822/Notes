package homework;

public class Refund {

	public static void main(String[] args) {
		int myPay = 5557; // 實付金額
		int price = 1050; // 應付金額
		
		if( myPay == price ) { // 實付金額 = 應付金額
			System.out.println("不必找錢");
		}else if( myPay < price) { //  實付金額 < 應付金額
			System.out.println("金額不足");
		}else {  // 實付金額 > 應付金額 -> 找錢!!
			System.out.printf("找錢:%d%n",myPay - price);
			
			// 一般打法
			
			int th = (myPay - price)/1000;
			System.out.printf("1000元 %d 張%n",th);
			int fh = (myPay - price - 1000*th)/500;
			System.out.printf("500元 %d 張%n",fh);
			int hu = (myPay - price - 1000*th - 500*fh)/100;
			System.out.printf("100元 %d 張%n",hu);
			int fi = (myPay - price - 1000*th - 500*fh - 100*hu)/50;
			System.out.printf("50元 %d 個%n",fi);
			int te = (myPay - price - 1000*th - 500*fh - 100*hu - 50*fi)/10;
			System.out.printf("10元 %d 個%n",te);
			int f = (myPay - price - 1000*th - 500*fh - 100*hu - 50*fi -10*te)/5;
			System.out.printf("5元 %d 個%n",f);
			int one = (myPay - price - 1000*th - 500*fh - 100*hu - 50*fi -10*te -5*f);
			System.out.printf("1元 %d 個%n",one);
			
			System.out.println("------------------------------");
			
			// 優化
			int coin; // 剩餘價錢
			
			coin = myPay - price; 
			System.out.printf("1000元 %d 張%n",coin/1000);
			coin = coin%1000;
			System.out.printf("500元 %d 張%n",coin/500);
			coin = coin%500;
			System.out.printf("100元 %d 張%n",coin/100);
			coin = coin%100;
			System.out.printf("50元 %d 張%n",coin/50);
			coin = coin%50;
			System.out.printf("10元 %d 張%n",coin/10);
			coin = coin%10;
			System.out.printf("5元 %d 張%n",coin/5);
			coin = coin%5;
			System.out.printf("1元 %d 張%n",coin);
			
			System.out.println("------------------------------");
			
			// 優化2
			int coin1; // 剩餘價錢
			coin1 = myPay - price; 
			int[] money = new int[] {1000,500,100,50,10,5,1};
			
			for( int i=0 ; i< money.length ; i++ ) {
				System.out.printf( "%d元 %d 張%n",money[i], coin1/money[i] );
				coin1 = coin1 % money[i];
			}
			
			
			
		}
		
		
	}

}
