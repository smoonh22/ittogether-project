package net.bit.java72.control;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import net.bit.java72.domain.Comment;
import net.bit.java72.domain.Feed;
import net.bit.java72.domain.FriendFeed;
import net.bit.java72.domain.Member;
import net.bit.java72.service.FeedService;
import net.bit.java72.service.MemberService;
import net.bit.java72.util.CalculateDistance;

@Controller("FeedController")
@RequestMapping("/feed")
public class FeedController {
  @Autowired FeedService feedService;
  @Autowired MemberService memberService;
  @Autowired ServletContext servletContext;

  @RequestMapping("/friendFeed")
  public Object list(int mno) {
    
  Map<String,Object> result = new HashMap<String,Object>();
  try {
    List<FriendFeed> test = feedService.list(mno);
    SimpleDateFormat format = new SimpleDateFormat("MM월 dd일 E요일 hh시 mm분 ");
    for(FriendFeed feed : test){
      String meetdate = format.format(feed.getMeetTime());
      feed.setMeetDday(meetdate);
      feed.setDday(CalcTime(feed.getCreateDate()));
    }
    result.put("data",test);
    
  } catch (Exception e) {
    e.printStackTrace();
  }
  
  return result;  
 
  }


  @RequestMapping("/myActivity")
  public Object feedlist(int mno) {  
    Map<String,Object> result = new HashMap<String,Object>();
    List<FriendFeed> test = feedService.myActivityList(mno);
    SimpleDateFormat format = new SimpleDateFormat("MM월 dd일 E요일 hh시 mm분");
    for(FriendFeed feed : test){
      String meetdate = format.format(feed.getMeetTime());
      feed.setMeetDday(meetdate);
      if(!CalcTime(feed.getMeetTime()).equals("yoyo")){
        feed.setOpacity("act-opacity");
      }
      feed.setDday(CalcTime(feed.getCreateDate()));
      feed.setJoinfrd(feedService.myActivityListFrd(feed.getFno()));
    }
    
    result.put("activity", test);
    
    return  result;
  }
  
  
  @RequestMapping("/noneFriendFeed")
  public Object nonelist(int mno) {
  Map<String,Object> result = new HashMap<String,Object>();
  try {
    
    Member myInfo = memberService.getOne(mno);
    double lat = Double.parseDouble(myInfo.getLatitude());
    double lon = Double.parseDouble(myInfo.getLongitude());
    
    List<Member> distanceList = memberService.getlatlon(mno);
       
    List<FriendFeed> frdList = new ArrayList<>();
    
    for(Member member : distanceList){
      double lat2 = Double.parseDouble(member.getLatitude());
      double lon2 = Double.parseDouble(member.getLongitude());
      
      double distance = CalculateDistance.getDistance(lat,lon,lat2,lon2);
      
      if(distance <= 2000){
        List<FriendFeed> feeds = feedService.noneFriendFeed(member.getMno());
        SimpleDateFormat format = new SimpleDateFormat("MM월 dd일 E요일 hh시 mm분");
        for(FriendFeed test : feeds){
        if( test != null){
          String meetdate = format.format(test.getMeetTime());
          test.setMeetDday(meetdate);
          test.setDday(CalcTime(test.getCreateDate()));
          frdList.add(test);
        }
        }
      }
    }  
    
    result.put("data", frdList);
  } catch (Exception e) {e.printStackTrace();}
  
  return result;  
  }
  
  @RequestMapping("/insertUser")
  public Object insert(Feed feed) throws Exception{
    Map<String,Object> result = new HashMap<String,Object>();
    int count = feedService.insert(feed);
    
    if ( count > 0 ) {
      result.put("data", "success");
    } else {
       result.put("data", "failure");
    }
    
    return result;
  }

//최근 피드 클릭시 디테일 정보 
  @RequestMapping("/detail")
  public Object detail(int fno,int mno) throws Exception {
    Map<String,Object> result = new HashMap<String,Object>();
    FriendFeed friendFeed = feedService.getDetail(fno);
    Feed feed = feedService.checkFeed(fno, mno);
    SimpleDateFormat format = new SimpleDateFormat("MM월 dd일 E요일 hh시 mm분");
    String meetdate = format.format(friendFeed.getMeetTime());
    
    friendFeed.setMeetDday(meetdate);
    friendFeed.setDday(CalcTime(friendFeed.getCreateDate()));
    friendFeed.setJoinfrd(feedService.commentPhotolist(friendFeed.getFno()));
    
    result.put("check", feed);
    result.put("detail", friendFeed);
   
    return result;
  }
   
  
  @RequestMapping("/friendjoin")
  public Object friendJoin(int mno, int fno) throws Exception {
    
    
    Map<String,Object> result = new HashMap<String,Object>();
    int count = feedService.friendJoinActivity(mno, fno);
  
    feedService.friendIn(fno);

    if (count > 0) {
      result.put("data", "success");
    } else {
      result.put("data", "failure");
    }
   
    return result;
  }
  
  @RequestMapping("/friendout")
  public Object friendOut(int mno, int fno) throws Exception {
    
    Map<String,Object> result = new HashMap<String,Object>();
    int count = feedService.friendOutActivity(mno, fno);
   
    feedService.friendOut(fno);  
    if (count > 0) {
      result.put("data", "success");
    } else {
      result.put("data", "failure");
    }
    return result;
  }
//댓글 처리
  @RequestMapping("/comment")
  public Object comment(int fno) throws Exception {
    Map<String,Object> result = new HashMap<>();
    
    List<Comment> comen = feedService.getComment(fno);
    
    result.put("coment",comen);
    
    return result;
  }
  @RequestMapping("/comentinsert")
  public Object commentinsert(int fno,int mno,String content) throws Exception {
    Map<String,Object> result = new HashMap<>();
    
    Comment comment = new Comment();
    comment.setContent(content);
    comment.setFno(fno);
    comment.setMno(mno);
    
    int count = feedService.insertComment(comment);
    
    if(count > 0){
      result.put("data", "success");
    } else {
      result.put("data", "fail");
    }
    
    return result;
  }
  
  @RequestMapping("/comentupdate")
  public Object commentUpdate(int cno,String content) throws Exception {
    Map<String,Object> result = new HashMap<>();
    
    Comment comment = new Comment();
    comment.setContent(content);
    comment.setCno(cno);
    
    int count = feedService.updateComment(comment);
    
    if(count > 0){
      result.put("data", "success");
    } else {
      result.put("data", "fail");
    }
    
    return result;
  }
  
   @RequestMapping("/comentdelete")
   public void commentDelete(int cno) throws Exception {
     
     feedService.deleteComment(cno);
     
   }
  
  
   public String CalcTime(Date meetTime){
     Calendar calendar = Calendar.getInstance();
     calendar.setTime(meetTime);
     long orderTime = calendar.getTimeInMillis();
     long currentTime = System.currentTimeMillis();
     
     long calcTime = (currentTime - orderTime)/1000;
    if (calcTime > 0){ 
        if((calcTime/86400) > 0) {
          return calcTime/86400 +"일 전";
        } else if(calcTime/3600 > 0) {
         return calcTime/3600 + "시간 전";
        } else if(calcTime/60 > 0){
         return calcTime/60 + "분 전";
        } else {
          return "1분 전";
        }
      } else if (calcTime < 0){
        return "yoyo";
      }
    return "기한초과지롱(나올일없지롱)";
     }
   }