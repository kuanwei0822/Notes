package io;

import java.util.Scanner;

public class ScanerTest {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("請輸入選項");
        System.out.println("1.xxxx");
        System.out.println("2.xxxx");
        String answer = scanner.nextLine();
        System.out.println("您輸入的為:"+answer);


    }
}
