package net.bit.java72.domain;

import java.io.Serializable;
import java.util.Date;

public class FriendList implements Serializable {
  
  private static final long serialVersionUID = 1L;
  
  protected int frdmno;
  protected int mno;
  protected int state;
  protected Date friendDate;
  
  public int getFrdmno() {
    return frdmno;
  }
  public void setFrdmno(int frdmno) {
    this.frdmno = frdmno;
  }
  public int getMno() {
    return mno;
  }
  public void setMno(int mno) {
    this.mno = mno;
  }
  public int getState() {
    return state;
  }
  public void setState(int state) {
    this.state = state;
  }
  public Date getFriendDate() {
    return friendDate;
  }
  public void setFriendDate(Date friendDate) {
    this.friendDate = friendDate;
  }
  
}