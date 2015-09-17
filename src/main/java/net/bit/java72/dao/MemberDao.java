package net.bit.java72.dao;

import java.util.Map;

import net.bit.java72.domain.Member;

public interface MemberDao {
  Member exist(Map<String,String> map);

  int signUp(Member member);

}
