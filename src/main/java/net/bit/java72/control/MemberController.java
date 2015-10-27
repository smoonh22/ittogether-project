package net.bit.java72.control;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import net.bit.java72.domain.Member;
import net.bit.java72.service.MemberService;
import net.bit.java72.util.CalculateDistance;



@Controller("MemberController")
@RequestMapping("/member")
public class MemberController {
  @Autowired MemberService memberService;
  @Autowired ServletContext servletContext;
  @Autowired HttpSession  httpsession;
  
  
  //유저 정보 메뉴 눌렀을 시 정보 불러오기  
  @RequestMapping("/userInfo")
  public Object getUserInfo(String nickname) {
    Map<String,Object> result = new HashMap<String,Object>();
    try {
      
      Member member = memberService.getUserInfo(nickname);
      
      result.put("data", member);
    } catch (Exception e) {
    }
  
    
    return result;
  }
  //유저 정보 변경
  @RequestMapping("/updateUser")
  public Object update(Member member) {
    Map<String,Object> result = new HashMap<String,Object>();
    
    int count = memberService.update(member);
    
    if ( count > 0) {
      result.put("data", "success");
    } else {
      result.put("data", "failure");
    }
    
    return result;
  }
  
  
  @RequestMapping("/getMyLoc")
  public Object getMyLoc(int mno) {
    Map<String,Object> result = new HashMap<String,Object>();
    
    List<Member> members = memberService.getMyLoc(mno);
    result.put("data", members);
    
    return result;
  }
  
  @RequestMapping("/getFriends")
  public Object getFriends(int frdno, int mno) {
    Map<String,Object> result = new HashMap<String,Object>();
    
    try {
      Member myInfo = memberService.getOne(mno);
      double lat = Double.parseDouble(myInfo.getLatitude());
      double lon = Double.parseDouble(myInfo.getLongitude());
      System.out.println("\n[[[[ 나의 위치: " + lat + ", " + lon + " ]]]]");
      
      List<Member> distanceList = memberService.getFriends(frdno);
      List<Member> friendMarks = new ArrayList<>();
      List<Integer> distances = new ArrayList<>();
      if (!distanceList.isEmpty()) {
      for(Member member : distanceList){
        double lat2 = Double.parseDouble(member.getLatitude());
        double lon2 = Double.parseDouble(member.getLongitude());
        
        double distanceDouble = CalculateDistance.getDistance(lat,lon,lat2,lon2);
        int distance = (int)Math.floor(distanceDouble);
        
        System.out.println
        ("#친구"+member.getMno()+"("+member.getNickname()+")의 거리: "+distance+"m");
        
        if(distance <= 2000){
          distances.add(distance);
          
          List<Member> members = memberService.getFriendMarks(member.getMno());
          for(Member temp : members){
            if( temp != null){
                if (temp.getAge() == null) {
                  
                }
              friendMarks.add(temp);
            }          }
         }
      }
      System.out.println("나와 친구와의 거리: " + distances.toString());
      
      result.put("distance", distances);
      result.put("data", friendMarks);
      } else {
        result.put("data", "nothingFound");
      }
      
    } catch (Exception e) {
      e.printStackTrace();
    }
    
    return result;
  }
  
  @RequestMapping("/getMembers")
  public Object getMembers(int mno) {
    Map<String,Object> result = new HashMap<String,Object>();
    try {
      
      Member myInfo = memberService.getOne(mno);
      double lat = Double.parseDouble(myInfo.getLatitude());
      double lon = Double.parseDouble(myInfo.getLongitude());
      
      List<Member> distanceList = memberService.getlatlon(mno);
      
      List<Member> noneFriendMarks = new ArrayList<>();
      List<Integer> distances = new ArrayList<>();
      if (!distanceList.isEmpty()) {
      for(Member member : distanceList){
        double lat2 = Double.parseDouble(member.getLatitude());
        double lon2 = Double.parseDouble(member.getLongitude());
        
        double distanceDouble = CalculateDistance.getDistance(lat,lon,lat2,lon2);
        int distance = (int)Math.floor(distanceDouble);
        
        
        if (distance <= 2000){
           distances.add(distance);
           
          List<Member> members = memberService.getNoneFriendMarks(member.getMno());
          for(Member temp : members){
            if( temp != null){
              noneFriendMarks.add(temp);
            }
          }
        }
      }
      if (noneFriendMarks.isEmpty()) {
        result.put("data", "nothingFound");
        return result;
      } else {
      result.put("distance", distances);
      result.put("data", noneFriendMarks);
      }
      
      } else {
        result.put("data", "nothingFound");
      }
    
    } catch (Exception e) {
      e.printStackTrace();
    }
    return result;
  }    
   
  
  @RequestMapping("/updateTour")
  public Object updateTour(int mno) throws Exception {
    Map<String,Object> result = new HashMap<String,Object>();
    
    int count = memberService.updateTour(mno);
    
    if (count > 0) {
      result.put("data", "yes");
    } else {
      result.put("data", "yes");
    }
    return result;
    
    
  }
    

  


}

