package net.bit.java72.dao;

import java.util.ArrayList;

import net.bit.java72.domain.FriendList;


public interface FriendDao {
 
  ArrayList<Integer> frdList(int mno);

  ArrayList<Integer> applyList(int mno);

  ArrayList<Integer> applyList2(int mno);
  
  int deleteFRD(FriendList friendList);
  
  int acceptFRD(FriendList friendList);

}
