package net.bit.java72.dao;

import java.util.Map;

import net.bit.java72.domain.Member;

public interface MemberDao {
  //로그인시 유효성 검사
  Member exist(Map<String,String> map);
  int signUp(Member member);
  int countEmail(String email);
  int countNickName(String nickname);
  //로그인후 메인 페이지에서 개인정보 누를
  Member getUserInfo(String nickname);
  int update(Member member);

}
