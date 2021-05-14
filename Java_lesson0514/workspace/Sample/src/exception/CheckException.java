package exception;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class CheckException {
    public static void main(String[] args) throws FileNotFoundException, IOException {

        FileReader fr = new FileReader("c:\\aaa.txt");

        //Checked Exception必明確處理，利用try catch或者throws
        System.out.println("Finish");
    }

    public static void checkFile() throws FileNotFoundException{
        File file = new File("c:\\aaa.txt");
        if ( !file.exists() ){
            //step1. throw new FileNotFoundException("找不到檔案");
            //step2.並在方法上加上throws
        }
    }
}
