package reference;

/**
 * Created by vincent on 2017/7/10.
 */
public class PassObjectTest {
    public static void main(String[] args) {
        Employee e = new Employee();
        e.name = "David";
        e.age = 20;
        System.out.println("更新前年紀為 = "+e.age);
        update(e);
        System.out.println("更新後年紀為 = "+e.age);
    }

    public static void update(Employee emp){
        emp.age = 18;
    }
}
