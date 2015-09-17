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
 

}






