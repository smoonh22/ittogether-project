package net.bit.java72.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bit.java72.dao.MemberDao;
import net.bit.java72.domain.Member;
import net.bit.java72.service.MemberService;


@Service
public class MemberServiceImpl implements MemberService {
@Autowired MemberDao memberDao;
  @Override
  public Member getUser(String email, String password) {
    HashMap<String,String> map = 
        new HashMap<String,String>();
    map.put("email", email);
    map.put("password", password);
    return memberDao.exist(map);
  }
  @Override
  public int signUp(Member member) {
    return memberDao.signUp(member);
  }
  
  @Override
  public boolean existEmail(String email) {
    if (memberDao.countEmail(email) > 0) {
      return true;
    } else {
      return false;
    }
  }
  @Override
  public boolean existNickName(String nickname) {
    if (memberDao.countNickName(nickname) > 0) {
      return true;
    } else {
      return false;
    }
  }
  @Override
  public Member getUserInfo(String nickname) {
    return memberDao.getUserInfo(nickname);
  }
  @Override
  public int update(Member member) {
    return memberDao.update(member);
  }
  @Override
  public Member getNickName(String email) {
    return memberDao.getNickName(email);
  }
  @Override
  public Member getOne(int mno) {
    return memberDao.getOne(mno);
  }
  @Override
  public List<Member> getlatlon(int mno) {
    return memberDao.getlatlon(mno);
  }
  @Override
  public List<Member> getMembers(int frdno) {
    // TODO Auto-generated method stub
    return memberDao.getMembers(frdno);
  }
  @Override
  public List<Member> getFriends(int frdno) {
    // TODO Auto-generated method stub
    return memberDao.getFriends(frdno);
  }
  @Override
  public List<Member> getMyLoc(int mno) {
    // TODO Auto-generated method stub
    return memberDao.getMyLoc(mno);
  }
 

}






