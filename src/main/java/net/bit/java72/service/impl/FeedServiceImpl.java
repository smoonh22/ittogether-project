package net.bit.java72.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bit.java72.dao.FeedDao;
import net.bit.java72.domain.Feed;
import net.bit.java72.domain.FriendFeed;
import net.bit.java72.service.FeedService;

@Service
public class FeedServiceImpl implements FeedService {
@Autowired FeedDao feedDao;
  
  @Override
  public List<FriendFeed> list(int mno) {
    
    return feedDao.list(mno);
  }
  @Override
  public List<Feed> myActivityList() {
    return feedDao.myActivityList();
  }
  @Override
  public List<FriendFeed> noneFriendFeed(int mno) {
    return feedDao.noneFriendFeed(mno);
  }
  @Override
  public FriendFeed getDetail(int fno) {
    return feedDao.getDetail(fno);
  }
  @Override
  public int friendJoinActivity(int mno, int fno) {
    HashMap<String, Integer> map = 
        new HashMap<String,Integer>();
    map.put("mno", mno);
    map.put("fno", fno);
    return feedDao.friendJoinActivity(map);
  }
  
}






