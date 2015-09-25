package net.bit.java72.control;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import net.bit.java72.domain.Member;
import net.bit.java72.service.FriendService;
import net.bit.java72.service.MemberService;

@Controller("FriendController")
@RequestMapping("/frd")
public class FriendController {
  @Autowired FriendService friendService;
  @Autowired MemberService memberService;
  @Autowired ServletContext servletContext;
  @Autowired HttpSession httpSession;

  @RequestMapping("/list")
  public Object list(int mno) {
  Map<String,Object> result = new HashMap<String,Object>();
  try {
    ArrayList<Integer> fno = friendService.frdList(mno);
    List<Member> frdList = new ArrayList<>();
    for(int i = 0; i < fno.size(); i++){
      frdList.add(memberService.getOne(fno.get(i)));
    }
    result.put("data", frdList);
   
    ArrayList<Integer> fno2 = friendService.applyList(mno);
    List<Member> frdList2 = new ArrayList<>();
    for(int i = 0; i < fno2.size(); i++){
      frdList2.add(memberService.getOne(fno2.get(i)));
    }
    result.put("apply", frdList2);
    
  } catch (Exception e) {
  }
  return  result;
  }
  
  @RequestMapping("/delete")
  public Object delete(int frdmno) {
    Map<String,Object> result = new HashMap<String,Object>();
    
    
    
    return result;
    
  }
}
