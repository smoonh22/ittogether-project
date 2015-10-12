package net.bit.java72.dao;

import java.util.ArrayList;
import java.util.List;

import net.bit.java72.domain.FriendList;
import net.bit.java72.domain.Member;
import net.bit.java72.domain.Search;


public interface FriendDao {
 
  ArrayList<Integer> frdList(int mno);

  ArrayList<Integer> applyList(int mno);

  ArrayList<Integer> applyList2(int mno);
  
  int deleteFRD(FriendList friendList);
  
  int acceptFRD(FriendList friendList);
  
  ArrayList<Member> unFriendList(Search search);
  
  int addFRD(FriendList friendList);

  int addFRD2(FriendList friendList);
  
//  List<FriendList> checkFriendAddButton(int mno);
}
