package io;


import java.io.BufferedOutputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class WriteFileOutputStream {
    public static void main(String[] args) {

        try (FileOutputStream fos = new FileOutputStream("/Users/vincent/Desktop/io_2.txt");
             BufferedOutputStream bos = new BufferedOutputStream(fos);
             ) {
            
            String content = "中文Abc";
            byte buf[] = content.getBytes();
            bos.write(buf);

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }


    }
}
