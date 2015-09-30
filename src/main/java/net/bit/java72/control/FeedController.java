package net.bit.java72.control;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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


    result.put("data",feedService.list(mno));

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
    
    Member myInfo = memberService.getOne(mno);
    double lat = Double.parseDouble(myInfo.getLatitude());
    double lon = Double.parseDouble(myInfo.getLongitude());
    
    List<Member> distanceList = memberService.getlatlon(mno);
    List<FriendFeed> frdList = new ArrayList<>();
    for(Member member : distanceList){
      double lat2 = Double.parseDouble(member.getLatitude());
      double lon2 = Double.parseDouble(member.getLongitude());
      
      System.out.println("위도 : " + lat2 );
      System.out.println("경도 : " + lon2 );
      System.out.println(member.getMno());
      
      double distance = CalcDistance(lat,lon,lat,lon2);
      System.out.println("거리 : " + distance);
        if (distance <= 1000){
            List<FriendFeed> feeds = feedService.noneFriendFeed(member.getMno());
          if ( feeds != null){
            for (FriendFeed friendFeed : feeds) {
            frdList.add(friendFeed);
            }
          }
        }
    }
    result.put("data", frdList);
    
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

}

