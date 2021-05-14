public class TestEmployee {
    public static void main(String[] args) {

        Employee emp = new Employee();
        emp.empno = 1;
        emp.name = "Vincent";

        Employee emp2 = new Employee();
        emp2.name = "2";
        emp2 = emp;
        System.out.println("finish");
    }
}
