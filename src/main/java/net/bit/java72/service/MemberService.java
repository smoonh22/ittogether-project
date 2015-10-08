package net.bit.java72.service;

import java.util.List;

import net.bit.java72.domain.Member;

public interface MemberService {

  Member getUser(String email, String password);
  int signUp(Member member);
  boolean existEmail(String email);
  boolean existNickName(String nickname);
  Member getUserInfo(String nickname);
  int update(Member member);
  Member getNickName(String email);
  Member getOne(int mno);
  List<Member> getlatlon(int mno);
  List<Member> getMyLoc(int mno);
  List<Member> getFriends(int frdno);
  List<Member> getNoneFriendMarks(int mno);
  List<Member> getFriendMarks(int mno);
  
 
}







