package net.bit.java72.control;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import net.bit.java72.service.FeedService;

@Controller("FeedController")
@RequestMapping("/feed")
public class FeedController {
  @Autowired FeedService feedService;
  @Autowired ServletContext servletContext;

  @RequestMapping("/friendFeed")
  public Object list() {
  Map<String,Object> result = new HashMap<String,Object>();
  
  
  result.put("data",feedService.list());
  
  return result;  
  }
  
  @RequestMapping("/myActivity")
  public Object feedlist() {  
  Map<String,Object> result = new HashMap<String,Object>();
  
  result.put("activity", feedService.myActivityList());
  
  return  result;
  }


}