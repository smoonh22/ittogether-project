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

import net.bit.java72.domain.FriendList;
import net.bit.java72.domain.Member;
import net.bit.java72.domain.Search;
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
      
      ArrayList<Integer> fno3 = friendService.applyList2(mno);
      List<Member> frdList3 = new ArrayList<>();
      for(int i = 0; i < fno3.size(); i++){
        frdList3.add(memberService.getOne(fno3.get(i)));
      }
      result.put("applyU", frdList3);
      
    } catch (Exception e) {}
    
    return  result;
  }
  
  @RequestMapping("/search")
  public Object search(int mno ,String searchCnt){
  Map<String,Object> result = new HashMap<String,Object>();
  Search search = new Search();
  
  
  search.setMno(mno);
  search.setSearchCnt(searchCnt);
  
  ArrayList<Member> unfriend = friendService.unFriendList(search);
  
  result.put("searchList", unfriend);
  
  return result;
  }
  
  @RequestMapping("/delete")
  public Object delete(int frdmno,int mno) {
  
    HashMap<String,Object> result = new HashMap<>();
    
    FriendList friendList = new FriendList();
    FriendList friendList2 = new FriendList();
    
    friendList.setFrdmno(frdmno);
    friendList.setMno(mno);
    
    friendList2.setFrdmno(mno);
    friendList2.setMno(frdmno);
    
    int count = friendService.deleteFRD(friendList);
    int count2 = friendService.deleteFRD(friendList2);
    
    if ( count > 0 && count2 > 0){
      result.put("data", 1);
    } else {
      result.put("data", 0);
    }
    
    return result;
  }
  
  @RequestMapping("/apply")
  public void apply(int frdmno, int mno) {
    
    FriendList friendList = new FriendList();
    FriendList friendList2 = new FriendList();
    
    friendList.setFrdmno(frdmno);
    friendList.setMno(mno);
    
    friendList2.setFrdmno(mno);
    friendList2.setMno(frdmno);
    
    friendService.acceptFRD(friendList);
    friendService.acceptFRD(friendList2);
    
  }
  
  @RequestMapping("/insert")
  public void addFrd(int frdmno, int mno) {
    System.out.println(frdmno);
    System.out.println(mno);
    
    FriendList friendList = new FriendList();
    FriendList friendList2 = new FriendList();
    
    friendList.setFrdmno(frdmno);
    friendList.setMno(mno);
    
    friendList2.setFrdmno(mno);
    friendList2.setMno(frdmno);
    
    friendService.addFrd(friendList);
    friendService.addFrd2(friendList2);
    
    
  }
}
