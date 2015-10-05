package net.bit.java72.dao;

import java.util.HashMap;
import java.util.List;

import net.bit.java72.domain.Feed;
import net.bit.java72.domain.FriendFeed;

public interface FeedDao {
  List<FriendFeed> list(int mno);
  List<FriendFeed> noneFriendFeed(int mno);
  FriendFeed getDetail(int fno);
  int friendJoinActivity(HashMap<String, Integer> map);
  int insert(Feed feed);
  List<Feed> myActivityList(int mno);
}
