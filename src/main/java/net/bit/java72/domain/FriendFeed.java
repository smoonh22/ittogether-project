package net.bit.java72.domain;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class FriendFeed implements Serializable {

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
  protected String nickname;
  protected String email;
  protected String password;
  protected String name;
  protected String address;
  protected String latitude;
  protected String longitude;
  protected int sex;
  protected String hometown;
  protected String Dday;
  protected String meetDday;
  protected String attachFile1;
  protected String attachFile2;
  protected String attachFile3;
  protected String profilePicture;
  protected List<FriendFeed> joinfrd;


  public List<FriendFeed> getJoinfrd() {
    return joinfrd;
  }
  public void setJoinfrd(List<FriendFeed> joinfrd) {
    this.joinfrd = joinfrd;
  }
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



  public String getMeetDday() {
    return meetDday;
  }



  public void setMeetDday(String meetDday) {
    this.meetDday = meetDday;
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

  public void setMeetTime(Date meetTime) {
    this.meetTime = meetTime;
  }

  public String getNickname() {
    return nickname;
  }

  public void setNickname(String nickname) {
    this.nickname = nickname;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getLatitude() {
    return latitude;
  }

  public void setLatitude(String latitude) {
    this.latitude = latitude;
  }

  public String getLongitude() {
    return longitude;
  }

  public void setLongitude(String longitude) {
    this.longitude = longitude;
  }

  public int getSex() {
    return sex;
  }

  public void setSex(int sex) {
    this.sex = sex;
  }

  public String getHometown() {
    return hometown;
  }

  public void setHometown(String hometown) {
    this.hometown = hometown;
  }

  public String getProfilePicture() {
    return profilePicture;
  }

  public void setProfilePicture(String profilePicture) {
    this.profilePicture = profilePicture;
  }

  public static long getSerialversionuid() {
    return serialVersionUID;
  }

  public String getDday() {
    return Dday;
  }

  public void setDday(String dday) {
    this.Dday = dday;
  }
}
