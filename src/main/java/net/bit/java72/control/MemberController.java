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

import net.bit.java72.domain.FriendFeed;
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
    System.out.println(member.getLatitude());
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
    System.out.println(members);
    
    return result;
  }
  
  @RequestMapping("/getFriends")
  public Object getFriends(int frdno) {
    Map<String,Object> result = new HashMap<String,Object>();
    
    List<Member> members = memberService.getFriends(frdno);
    result.put("data", members);
    System.out.println(members);
    
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
      for(Member member : distanceList){
        double lat2 = Double.parseDouble(member.getLatitude());
        double lon2 = Double.parseDouble(member.getLongitude());
        
        double distance = CalculateDistance.getDistance(lat,lon,lat2,lon2);
        System.out.println("거리 : " + distance);
        if(distance <= 1000){
           distances.add((int)distance);
          List<Member> members = memberService.getNoneFriendMarks(member.getMno());
          for(Member temp : members){
          if( temp != null){
            noneFriendMarks.add(temp);
          }
          }
        }
      }
      result.put("distance", distances);
      result.put("data", noneFriendMarks);
    } catch (Exception e) {
      result.put("data", "nothingFound");
    }
    return result;
  }    
    
    

  


}

