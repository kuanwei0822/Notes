/**
 * Created by vincent on 2017/6/5.
 */
public class TestString {
    public static void main(String[] args) {

        System.out.println("abc".equalsIgnoreCase("ABc"));


        //string pool
        String name = "vincent";
        String name1 = "vincent";
        System.out.println(name == name1);  //true

        //new String
        String name2 = new String("vincent");
        System.out.println(name == name2);  //false

        //String compare
        System.out.println(name.equals(name2));

        //String length
        System.out.println("資策會".length());

        //String indexOf
        System.out.println("資策會305".indexOf("305"));

        //String substring
        System.out.println("資策會305".substring(3));

        //String substring
        System.out.println("資策會305".substring(3,5));

        //split
        String csv = "課程,老師,時數";
        String[] split = csv.split(",");
        for ( int i=0 ; i< split.length ; i++){
            System.out.println(split[i]);
        }

        //進階
        String helloworld = "helloworld";
        final String helloFinal = "hello";
        String helloPool = "hello";
        String helloworld1 = helloFinal+"world"; //因為helloFinal是final, compiler會自動變成  "hello"+"world" 再直接改寫成 "helloworld"，pool中已經有
        String helloworld2 = helloPool + "world";//這裏是string concat，會用StringBuilder加，加完後會產生新的String，不在pool中
        System.out.println(helloworld==helloworld1);//true
        System.out.println(helloworld==helloworld2);//false

        String temp = "";
        for(int i=0 ; i < 10; i ++){
            temp = temp + i;
        }
        System.out.println(temp);

        //利用StringBuilder
        StringBuilder builder = new StringBuilder();
        for(int i=0 ; i < 10; i ++){
            builder.append(i);
        }
        System.out.println(builder.toString());
    }
}
