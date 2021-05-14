package exam.e9;

public class Employee{
    private String id;
    private int salary;
    private int commission;


    public Employee(String id, int salary, int commission) {
        this.id = id;
        this.salary = salary;
        this.commission = commission;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "員工編號='" + id + '\'' +
                ", 薪水=" + salary +
                ", 傭金=" + commission +
                '}';
    }

    public int getSalary() {
        return salary;
    }

    public int getCommission() {
        return commission;
    }
}
