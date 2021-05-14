package exception;


import category.Item;

public class NullException {
    public static void main(String[] args) {

        Item employee = null;
        System.out.println("employee.name = " + employee.name);

    }
}
