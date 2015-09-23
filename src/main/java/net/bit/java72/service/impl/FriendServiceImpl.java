package net.bit.java72.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bit.java72.dao.FriendDao;
import net.bit.java72.dao.MemberDao;
import net.bit.java72.domain.Member;
import net.bit.java72.service.FriendService;
import net.bit.java72.service.MemberService;


@Service
public class FriendServiceImpl implements FriendService {
@Autowired FriendDao friendDao;

@Override
public ArrayList<Integer> frdList(int mno) {
  return friendDao.frdList(mno);
}

@Override
public ArrayList<Integer> applyList(int mno) {
  return friendDao.applyList(mno);
}


}






