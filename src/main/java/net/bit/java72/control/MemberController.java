package net.bit.java72.control;

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
    
    Member member = memberService.getUserInfo(nickname);
    
    result.put("data", member);
  
    
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
  public Object getMembers(int frdno) {
    Map<String,Object> result = new HashMap<String,Object>();
    
    List<Member> members = memberService.getMembers(frdno);
    result.put("data", members);
    return result;
  }
}
  


