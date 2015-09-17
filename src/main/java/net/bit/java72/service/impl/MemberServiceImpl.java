package net.bit.java72.service.impl;

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
  public List<Member> list() {
    return memberDao.list();
  }
 

}






