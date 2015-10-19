package net.bit.java72.domain;

import java.io.Serializable;
import java.util.Date;

public class Feed implements Serializable {

  private static final long serialVersionUID = 1L;

  protected int fno;
  protected int mno;
  protected int category;
  protected String content;
  protected String title;
  protected Date createDate;
  protected int maxHeadCount;
  protected int currentCount;
  protected Date meetTime;
  protected String tempDate;
  protected String attachFile1;
  protected String attachFile2;
  protected String attachFile3;

  
  public String getAttachFile1() {
    return attachFile1;
  }

  public void setAttachFile1(String attachFile1) {
    this.attachFile1 = attachFile1;
  }

  public String getAttachFile2() {
    return attachFile2;
  }

  public void setAttachFile2(String attachFile2) {
    this.attachFile2 = attachFile2;
  }

  public String getAttachFile3() {
    return attachFile3;
  }

  public void setAttachFile3(String attachFile3) {
    this.attachFile3 = attachFile3;
  }

  public int getFno() {
    return fno;
  }

  public void setFno(int fno) {
    this.fno = fno;
  }

  public int getMno() {
    return mno;
  }

  public void setMno(int mno) {
    this.mno = mno;
  }

  public int getCategory() {
    return category;
  }

  public void setCategory(int category) {
    this.category = category;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public Date getCreateDate() {
    return createDate;
  }

  public void setCreateDate(Date createDate) {
    this.createDate = createDate;
  }

  public int getMaxHeadCount() {
    return maxHeadCount;
  }

  public void setMaxHeadCount(int maxHeadCount) {
    this.maxHeadCount = maxHeadCount;
  }

  

  public int getCurrentCount() {
    return currentCount;
  }

  public void setCurrentCount(int currentCount) {
    this.currentCount = currentCount;
  }

  public Date getMeetTime() {
    return meetTime;
  }

  public void setMeetTime(Date date) {
    this.meetTime = date;

  }

  public String getTempDate() {
    return tempDate;
  }

  public void setTempDate(String tempDate) {
    this.tempDate = tempDate;
  }

  public static long getSerialversionuid() {
    return serialVersionUID;
  }



}
