package io.reader;

import java.io.*;
import java.nio.charset.Charset;

public class ReadByFileReader {
    public static void main(String[] args) throws IOException {

        System.out.println("目前JVM編碼＝"+Charset.defaultCharset());

        File file = new File("C:\\java\\char_UTF8.txt");
        try(FileReader fr = new FileReader(file)){
            
            //改成InputSteamReader
            /*  FileInputStream fis = new FileInputStream(file);
                InputStreamReader isr = new InputStreamReader(fis, "MS950");
                BufferedReader br = new BufferedReader(isr)
                */
                int c;
                while ((c = fr.read()) != -1) {
                    System.out.println((char) c);
                }
            //}

        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
