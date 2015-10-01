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

import net.bit.java72.domain.Feed;
import net.bit.java72.domain.FriendFeed;
import net.bit.java72.domain.Member;
import net.bit.java72.service.FeedService;
import net.bit.java72.service.MemberService;

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
    for(FriendFeed feed : test){
     feed.setDday(CalcTime(feed.getMeetTime()));
    }
    result.put("data",test);
    
  } catch (Exception e) {
  }
  
  return result;  
 
  }

  
  @RequestMapping("/myActivity")
  public Object feedlist() {  
    Map<String,Object> result = new HashMap<String,Object>();
    
    result.put("activity", feedService.myActivityList());
    
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
      
      double distance = CalcDistance(lat,lon,lat2,lon2);
      if(distance <= 1000){
        List<FriendFeed> feeds = feedService.noneFriendFeed(member.getMno());
        for(FriendFeed test : feeds){
        if( test != null){
          test.setDday(CalcTime(test.getMeetTime()));
          frdList.add(test);
        }
        }
      }
    }  
    result.put("data", frdList);
  } catch (Exception e) {}
//  HttpHeaders headers = new HttpHeaders();
//  headers.add("Content-type"
//      , "text/plain;charset=UTF-8");
  
  return result;  
  }
  
  @RequestMapping("/insertUser")
  public Object insert(Feed feed) throws Exception{
    Map<String,Object> result = new HashMap<String,Object>();
    
    String temp = feed.getTempDate();
    temp = temp.replaceFirst("T"," ");
    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm");
    feed.setMeetTime(format.parse(temp));
    
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
  public Object detail(int fno) throws Exception {
    System.out.println(fno + "jjjjjj");
    Map<String,Object> result = new HashMap<String,Object>();
    FriendFeed friendFeed = feedService.getDetail(fno);
    result.put("detail", friendFeed);
   
    return result;
  }
   
  
  @RequestMapping("/friendjoin")
  public Object friendJoin(int mno, int fno) throws Exception {
    System.out.println(fno + " : :" + mno);
    Map<String,Object> result = new HashMap<String,Object>();
    int count = feedService.friendJoinActivity(mno, fno);
  
    
    if (count > 0) {
      result.put("data", "success");
    } else {
      result.put("data", "failure");
    }
   
    return result;
  }
  

  public double CalcDistance(double lat1,double lon1,double lat2,double lon2) {
    double EARTH_R, Rad, radLat1, radLat2, radDist; 
    double distance, ret;

    EARTH_R = 6371000.0;
    Rad = Math.PI/180;
    radLat1 = Rad * lat1;
    radLat2 = Rad * lat2;
    radDist = Rad * (lon1 - lon2);

    distance = Math.sin(radLat1) * Math.sin(radLat2);
    distance = distance + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radDist);
    ret = EARTH_R * Math.acos(distance);

    return  Math.round(Math.round(ret) / 1000);
  }
  
  public String CalcTime(Date meetTime){
    Calendar calendar = Calendar.getInstance();
    calendar.setTime(meetTime);
    long orderTime = calendar.getTimeInMillis();
    long currentTime = System.currentTimeMillis();
    
    long calcTime = (orderTime - currentTime)/1000;
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
     }
   return "기한 초과";
    }
  }
