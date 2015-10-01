package net.bit.java72.domain;

import java.io.Serializable;
import java.text.SimpleDateFormat;
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
  protected int stuffCount;
  protected Date meetTime;
  protected String tempDate;
  

  
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

  public int getStuffCount() {
    return stuffCount;
  }

  public void setStuffCount(int stuffCount) {
    this.stuffCount = stuffCount;
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
