package net.bit.java72.control;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import net.bit.java72.service.MarkerService;

@RequestMapping("/marker")
public class MarkerController {
  @Autowired MarkerService markerService;
  @Autowired ServletContext servletContext;

  @RequestMapping("/markMyMarker")
  public Object markMyMarker() {
    Map<String,Object> result = new HashMap<String,Object>();
    
    result.put("data",markerService.markMyMarker());
  //  HttpHeaders headers = new HttpHeaders();
  //  headers.add("Content-type"
  //      , "text/plain;charset=UTF-8");
    
    return result;  
  }
  
//  @RequestMapping("/markMyFriend")
//  public Object markMyFriend() {
//    Map<String,Object> result = new HashMap<String,Object>();
//    
//    result.put("data",mapService.markMyFriend());
//    //  HttpHeaders headers = new HttpHeaders();
//    //  headers.add("Content-type"
//    //      , "text/plain;charset=UTF-8");
//    
//    return result;  
//  }


}