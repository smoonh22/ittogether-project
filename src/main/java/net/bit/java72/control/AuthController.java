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
      HttpServletResponse response,
      HttpSession session) throws Exception { 

    Map<String,Object> result = new HashMap<String,Object>();
    Member member = memberService.getUser(email, password);
    if (member == null) {
      session.invalidate();
      result.put("data", "no");
    } else {
      session.setAttribute("member", member);
      result.put("data", "yes");
    }
    return result;
  }

  //회원가입 부분
  @RequestMapping("/signup")
  public Object signUp(Member member) throws Exception {
    
    Map<String,Object> result = new HashMap<String,Object>();
    int count = memberService.signUp(member);
    
    if (count > 0) {
      result.put("result", "success");
    } else {
      result.put("result","failure");
    }
    
    return result;
  }
  
  
  
  
}
