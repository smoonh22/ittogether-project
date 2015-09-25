package net.bit.java72.domain;

import java.io.Serializable;
import java.sql.Date;

public class Member implements Serializable{

  private static final long serialVersionUID = 1L;

  protected int    mno;
  protected String email;
  protected String name;
  protected String nickname;
  protected String password;
  protected Date   createDate;
  protected String hometown;
  protected String latitude;
  protected String longitude;
  protected String address;
  protected String profilePicture;
  protected int    sex;
  protected String hobby1;
  protected String hobby2;
  protected String hobby3;
  protected String introduction;
  protected int    age;
  
  
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public int getMno() {
    return mno;
  }
  public void setMno(int mno) {
    this.mno = mno;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getNickname() {
    return nickname;
  }
  public void setNickname(String nickname) {
    this.nickname = nickname;
  }
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  public Date getCreateDate() {
    return createDate;
  }
  public void setCreateDate(Date createDate) {
    this.createDate = createDate;
  }
  public String getHometown() {
    return hometown;
  }
  public void setHometown(String hometown) {
    this.hometown = hometown;
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
  public String getAddress() {
    return address;
  }
  public void setAddress(String address) {
    this.address = address;
  }
  public String getProfilePicture() {
    return profilePicture;
  }
  public void setProfilePicture(String profilePicture) {
    this.profilePicture = profilePicture;
  }
  public int getSex() {
    return sex;
  }
  public void setSex(int sex) {
    this.sex = sex;
  }
  public String getHobby1() {
    return hobby1;
  }
  public void setHobby1(String hobby1) {
    this.hobby1 = hobby1;
  }
  public String getHobby2() {
    return hobby2;
  }
  public void setHobby2(String hobby2) {
    this.hobby2 = hobby2;
  }
  public String getHobby3() {
    return hobby3;
  }
  public void setHobby3(String hobby3) {
    this.hobby3 = hobby3;
  }
  public String getIntroduction() {
    return introduction;
  }
  public void setIntroduction(String introduction) {
    this.introduction = introduction;
  }
  public int getAge() {
    return age;
  }
  public void setAge(int age) {
    this.age = age;
  }
  
  
  
}
