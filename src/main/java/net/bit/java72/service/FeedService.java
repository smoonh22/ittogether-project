package net.bit.java72.service;

import java.util.List;

import net.bit.java72.domain.Feed;
import net.bit.java72.domain.FriendFeed;


public interface FeedService {
  List<FriendFeed> list(int mno);
  List<Feed> myActivityList();
  List<FriendFeed> noneFriendFeed(int mno);
  FriendFeed getDetail(int fno);
  int friendJoinActivity(int mno, int fno);
  
}







