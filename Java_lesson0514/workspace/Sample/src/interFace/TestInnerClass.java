package interFace;

public class TestInnerClass {
    public static void main(String[] args) {

        Accountant accountant = new Accountant() {
            @Override
            public void 報稅() {
                System.out.println("所得稅申報");
            }
        };
        
    }
}
