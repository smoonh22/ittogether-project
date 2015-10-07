package net.bit.java72.dao;

import java.util.HashMap;
import java.util.List;

import net.bit.java72.domain.Comment;
import net.bit.java72.domain.Feed;
import net.bit.java72.domain.FriendFeed;

public interface FeedDao {
  List<FriendFeed> list(int mno);
  List<FriendFeed> noneFriendFeed(int mno);
  FriendFeed getDetail(int fno);
  int friendJoinActivity(HashMap<String, Integer> map);
  int insert(Feed feed);
  List<Feed> myActivityList(int mno);
  Feed checkFeed(HashMap<String, Integer> map);
  int friendOutActivity(HashMap<String, Integer> map);
  int friendOut(int fno);
  int friendIn(int fno);
  List<Comment> getComment(int fno);
  int insertComment(Comment commnet);
  int updateComment(Comment comment);
  int deleteComment(int cno);
}
