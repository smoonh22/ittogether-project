package net.bit.java72.service;

import net.bit.java72.domain.Member;

public interface MemberService {

  Member getUser(String email, String password);
  int signUp(Member member);
  boolean existEmail(String email);
  boolean existNickName(String nickname);
  Member getUserInfo(String nickname);
  int update(Member member);
 
}







