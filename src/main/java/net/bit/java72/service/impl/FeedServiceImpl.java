package net.bit.java72.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bit.java72.dao.FeedDao;
import net.bit.java72.domain.Comment;
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
  public List<FriendFeed> myActivityList(int mno) {
    return feedDao.myActivityList(mno);
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
  
  public int insert(Feed feed) {
    return feedDao.insert(feed);
  }

  @Override
  public Feed checkFeed(int fno, int mno) {
    HashMap<String, Integer> map = 
        new HashMap<String,Integer>();
    map.put("mno", mno);
    map.put("fno", fno);
    return feedDao.checkFeed(map);
  }
  @Override
  public int friendOutActivity(int mno, int fno) {
    HashMap<String, Integer> map = 
        new HashMap<String,Integer>();
    map.put("mno", mno);
    map.put("fno", fno);
    return feedDao.friendOutActivity(map);
  }
  @Override
  public int friendOut(int fno) {
    return feedDao.friendOut(fno);
  }
  @Override
  public int friendIn(int fno) {
    return feedDao.friendIn(fno);
  }
  @Override
  public List<Comment> getComment(int fno) {
    return feedDao.getComment(fno);
  }
  @Override
  public int insertComment(Comment commnet) {
    return feedDao.insertComment(commnet);
  }
  @Override
  public int updateComment(Comment comment) {
    return feedDao.updateComment(comment);
  }
  @Override
  public int deleteComment(int cno) {
    return feedDao.deleteComment(cno);
  }
  @Override
  public List<FriendFeed> myActivityListFrd(int fno) {
    return feedDao.myActivityListFrd(fno);
  }
  
}






