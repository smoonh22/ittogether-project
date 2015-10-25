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
  List<FriendFeed> myActivityList(int mno);
  Feed checkFeed(HashMap<String, Integer> map);
  int friendOutActivity(HashMap<String, Integer> map);
  int friendOut(int fno);
  int friendIn(int fno);
  List<Comment> getComment(int fno);
  int insertComment(Comment commnet);
  int updateComment(Comment comment);
  int deleteComment(int cno);
  List<FriendFeed> myActivityListFrd(int fno);
  List<FriendFeed> listFrd(int fno);
  List<FriendFeed> nlistFrd(int fno);
  List<FriendFeed> commentPhotolist(int fno);
  Feed getPicture(int fno);
}
