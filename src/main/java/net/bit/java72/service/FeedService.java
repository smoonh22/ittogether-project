package net.bit.java72.service;

import java.util.List;

import net.bit.java72.domain.Comment;
import net.bit.java72.domain.Feed;
import net.bit.java72.domain.FriendFeed;


public interface FeedService {
  List<FriendFeed> list(int mno);
  List<FriendFeed> myActivityList(int mno);
  List<FriendFeed> noneFriendFeed(int mno);
  FriendFeed getDetail(int fno);
  int friendJoinActivity(int mno, int fno);
  int insert(Feed feed);
  Feed checkFeed(int fno, int mno);
  int friendOutActivity(int mno, int fno);
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







