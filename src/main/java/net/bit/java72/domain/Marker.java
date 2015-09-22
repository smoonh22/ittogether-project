package net.bit.java72.domain;

import java.io.Serializable;

public class Marker implements Serializable{

  private static final long serialVersionUID = 1L;
  
  protected int markNo;
  protected String latitude;
  protected String longitude;
  protected String title;
  protected String content;
  protected String markPhoto;
  public int getMarkNo() {
    return markNo;
  }
  public void setMarkNo(int markNo) {
    this.markNo = markNo;
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
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getContent() {
    return content;
  }
  public void setContent(String content) {
    this.content = content;
  }
  public String getMarkPhoto() {
    return markPhoto;
  }
  public void setMarkPhoto(String markPhoto) {
    this.markPhoto = markPhoto;
  }
  
  

}
