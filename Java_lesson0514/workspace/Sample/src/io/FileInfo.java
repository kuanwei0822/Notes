package io;

import java.io.File;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Comparator;
import java.util.Date;
import java.util.TreeSet;

public class FileInfo {
    public static void main(String[] args) {

        String fileName = "/Users/vincent/Desktop/io_1.txt";
        File file = new File(fileName);
        System.out.println(file.getName());

        //取得修改時間，以及日期格式化練習
        long modified = file.lastModified();
        Date date = new Date(modified);
        SimpleDateFormat format = new SimpleDateFormat("yyyy/MM/dd a h:mm:ss");
        System.out.println(format.format(date));
        
        System.out.println(date);
        System.out.println(file.canRead());
        System.out.println(file.canWrite());

        String dirName = "/Users/vincent/Desktop";
        File dir = new File(dirName);
        // listFiles範例
        if ( dir.isDirectory() ){   //是否為目錄
            File[] files = dir.listFiles();   //取得目錄下的所有檔案以子目錄
            long size = 0;
            TreeSet<File> allFiles = new TreeSet<>(new Comparator<File>() {
                @Override
                public int compare(File o1, File o2) {
                    if ( o1.length() > o2.length()){
                        return -1;
                    }else if (o1.length() < o2.length() ){
                        return 1;
                    }else{
                        return 0;
                    }
                }
            });
            for (int i = 0; i < files.length; i++) {
                File f = files[i];
                if ( !f.isDirectory()){
                    size = size + f.length();
                    allFiles.add(f);
                }
            }
            System.out.println(dir+",檔案大小為"+size);
            for (File allFile : allFiles) {
                System.out.println(allFile.getName());
            }
        }
    }
}
