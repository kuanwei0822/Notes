package io.reader;

import java.io.*;

public class ReadCSVByBufferedReader {
    public static void main(String[] args) {
        File file = new File("/xxx/Employees.csv");
        try (FileInputStream fis = new FileInputStream(file);
             InputStreamReader isr = new InputStreamReader(fis, "UTF8");
             BufferedReader br = new BufferedReader(isr);
        ) {

            String line;
            int sum = 0;
            while ( (line = br.readLine()) != null ){
                System.out.println(line);
                final String[] columns = line.split(",");
                if ( isNumber(columns[2])){
                    sum = sum + Integer.parseInt(columns[2]);
                }
            }
            System.out.println("sum="+sum);

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public static boolean isNumber(String str){
        for (char c : str.toCharArray()) {
            if ( !Character.isDigit(c)){
                return false;
            }
        }
        return true;
    }

}
