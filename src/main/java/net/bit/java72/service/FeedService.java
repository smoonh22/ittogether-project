package net.bit.java72.service;

import java.util.List;

import net.bit.java72.domain.Feed;
import net.bit.java72.domain.FriendFeed;


public interface FeedService {
  List<FriendFeed> list(int mno);
  List<Feed> myActivityList();
  FriendFeed noneFriendFeed(int mno);
  int insert(Feed feed);
  
}







