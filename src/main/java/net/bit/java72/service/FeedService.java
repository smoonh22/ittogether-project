package net.bit.java72.service;

import java.util.List;

import net.bit.java72.domain.Feed;
import net.bit.java72.domain.Join;


public interface FeedService {
  List<Join> list();
  List<Feed> myActivityList();
}







