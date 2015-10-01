package net.bit.java72.control;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class test01 {
  public static void main(String[] args) {
    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.KOREA);
    Date currentTime = new Date();
    String dTime = format.format(currentTime);  
    System.out.println(dTime);
  }
}
