package net.bit.java72.domain;

import java.io.Serializable;

public class Search implements Serializable{

  private static final long serialVersionUID = 1L;
  
  protected int mno;
  protected int searchType;
  protected String searchCnt;
  
  
  public int getMno() {
    return mno;
  }
  public void setMno(int mno) {
    this.mno = mno;
  }
  public int getSearchType() {
    return searchType;
  }
  public void setSearchType(int searchType) {
    this.searchType = searchType;
  }
  public String getSearchCnt() {
    return searchCnt;
  }
  public void setSearchCnt(String searchCnt) {
    this.searchCnt = searchCnt;
  }
  public static long getSerialversionuid() {
    return serialVersionUID;
  }

  
}
