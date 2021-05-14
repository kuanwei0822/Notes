package collection;

import java.util.Comparator;

public class DescOrderComparator implements Comparator {
    @Override
    public int compare(Object o1, Object o2) {
        //回傳三種可能結果，如果o1要排在o2之前，則回傳－1，如果在o2之後，則回傳1,相等則回傳0
        Integer i1 = (Integer) o1; // 2
        Integer i2 = (Integer) o2; // 1
        if ( i1 > i2 ){
            return -1; //如果第一個數字＞第二個數字，則回傳-1
        }else if ( i1 < i2 ){
            return 1;
        }else{
            return 0;
        }
    }
}
