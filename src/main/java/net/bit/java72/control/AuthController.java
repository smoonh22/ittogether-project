package net.bit.java72.control;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import net.bit.java72.domain.Member;
import net.bit.java72.service.MemberService;

@Controller("AuthController")
@RequestMapping("/auth")
public class AuthController {
  @Autowired MemberService memberService;
  @Autowired ServletContext servletContext;

  //로그인부분
  @RequestMapping("/login")
  public Object login(String email, String password,
      HttpServletResponse response) throws Exception { 

    Map<String,Object> result = new HashMap<String,Object>();
    Member member = memberService.getUser(email, password);
    if (member == null) {
      result.put("data", "no");
    } else {
      result.put("data", "yes");
      result.put("member", member.getNickname());
    }
    return result;
  }

  //회원가입 부분
  @RequestMapping("/signup")
  public Object signUp(Member member) throws Exception {
    System.out.println(member.getProfilePicture());
    System.out.println(member.getLongitude());
    System.out.println(member.getName());
    System.out.println(member.getEmail());
    System.out.println(member.getAddress());
    System.out.println(member.getPassword());
    Map<String,Object> result = new HashMap<String,Object>();
    
    try {
      int count = memberService.signUp(member);
      if (count > 0) {
        result.put("result", "success");
      }
    } catch (Exception e ) {
      result.put("result", "failure");
    }
    
    return result;
  }
  
  @RequestMapping("/existEmail")
  public Object existEmail(String email) throws Exception {
    Map<String,Object> result = new HashMap<String,Object>();
    if (!email.contains("@")) {
     result.put("data", "invalid");
     return result;
   }
    if (memberService.existEmail(email)) {
      result.put("data", "yes");
    } else {
      result.put("data", "no");
    }
    return result;
  }
  
  @RequestMapping("/existNickName")
  public Object existNickName(String nickname) throws Exception {
    Map<String,Object> result = new HashMap<String,Object>();
    if (memberService.existNickName(nickname)) {
      result.put("data", "yes");
    } else {
      result.put("data", "no");
    }
    return result;
  }
  //페이스북에서 로그인시 닉네임을 가져온다.
  @RequestMapping("/getNickName")
  public Object getNickName(String email) throws Exception {
    Map<String,Object> result = new HashMap<String,Object>();
    try {
    Member member = memberService.getNickName(email);
    result.put("member", member);
    result.put("data", "yes");
    System.out.println(member.getNickname());
    } catch (Exception e) {
      result.put("data", "no");
      return result;
    }
    return result;
  }
}
