package net.bit.java72.dao;

import java.util.List;
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
  Member getNickName(String email);
  //유저 한명의 모든 정보 가져오기
  Member getOne(int mno);
  
  List<Member> getlatlon(int mno);
  List<Member> getMyLoc(int mno);
  List<Member> getFriends(int frdno);
  List<Member> getNoneFriendMarks(int mno);  
  
}
