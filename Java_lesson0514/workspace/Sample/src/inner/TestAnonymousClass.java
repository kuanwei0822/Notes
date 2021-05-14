package inner;

import interFace.Accountant;
import interFace.Expirable;
import java.util.Date;
import java.util.GregorianCalendar;

public class TestAnonymousClass {
    public static void main(String[] args) {
        //以下例子為 Anonymous class,利用介面的型態產生物件
        //程式可閱讀性很高,因為都在附近
        Accountant acc = new Accountant() {
            @Override
            public void 報稅() {
                System.out.println("網路申報綜所稅");
            }
        };

        acc.報稅();
    }
}
