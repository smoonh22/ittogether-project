package net.bit.java72.dao;

import java.util.List;

import net.bit.java72.domain.Feed;
import net.bit.java72.domain.Join;

public interface FeedDao {
  List<Join> list();
  List<Feed> myActivityList();
}
