package net.bit.java72.service;

import net.bit.java72.domain.Member;

public interface MemberService {

  Member getUser(String email, String password);
  int signUp(Member member);
 
}







