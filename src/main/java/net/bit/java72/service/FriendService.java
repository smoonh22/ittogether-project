package net.bit.java72.service;

import java.util.ArrayList;
import java.util.List;

import net.bit.java72.domain.Feed;
import net.bit.java72.domain.FriendFeed;
import net.bit.java72.domain.FriendList;
import net.bit.java72.domain.Member;
import net.bit.java72.domain.Search;


public interface FriendService {

  ArrayList<Integer> frdList(int mno);

  ArrayList<Integer> applyList(int mno);

  ArrayList<Integer> applyList2(int mno);
  
  int deleteFRD(FriendList friendList);
  
  int acceptFRD(FriendList friendList);

  ArrayList<Member> unFriendList(Search search);
  
  int addFrd(FriendList friendList);

  int addFrd2(FriendList friendList);
  
  FriendList checkFriendAddButton(int mno, int frdmno);
}







