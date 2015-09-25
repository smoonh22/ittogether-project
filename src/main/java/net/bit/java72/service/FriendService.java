package net.bit.java72.service;

import java.util.ArrayList;
import java.util.List;

import net.bit.java72.domain.Feed;
import net.bit.java72.domain.FriendFeed;
import net.bit.java72.domain.FriendList;


public interface FriendService {

  ArrayList<Integer> frdList(int mno);

  ArrayList<Integer> applyList(int mno);

  ArrayList<Integer> applyList2(int mno);
  
  int deleteFRD(FriendList friendList);
  
  int acceptFRD(FriendList friendList);

  
}







