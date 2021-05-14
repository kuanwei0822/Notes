package collection;

import java.util.*;

public class TestHashSet {
    public static void main(String[] args) {

        Set set = new HashSet();

        Employee emp1  = new Employee("001");
        Employee emp2  = new Employee("001");
        set.add(emp1);
        set.add(emp2);


        /*//利用iterator訪問所有元素
        Iterator iterator = set.iterator();
        while ( iterator.hasNext()){
            Object item = iterator.next             ();
            System.out.println(item);
        }*/

        //利用foreach loop
        for (Object item : set) {
            System.out.println(item);
        }
    }
}
