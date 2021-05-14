package homework;

public class ArrayFuncTest {
    public static void main(String[] args) {
        Employee[] emps = new Employee[1];
        emps[0] = new Employee();
        emps[0].empno = 1;
        emps[0].name = "Vincent";
        updateEmployeeName(emps[0]);
        //請問更新後emps[0].name印出為何？
    }

    public static void updateEmployeeName(Employee emp){
        emp.name = "David";
    }
}
