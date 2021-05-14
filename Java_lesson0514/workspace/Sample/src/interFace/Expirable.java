package interFace;

import java.util.Date;

public interface Expirable {

    Date 最後使用期限();

    /*default Date 最後使用期限(){
        return Product.getDate(2019,2,10);
    }*/

}
