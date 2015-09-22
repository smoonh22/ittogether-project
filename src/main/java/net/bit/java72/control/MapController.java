package net.bit.java72.control;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import net.bit.java72.service.MapService;

@Controller("MapController")
@RequestMapping("/map")
public class MapController {
  @Autowired MapService mapService;
  @Autowired ServletContext servletContext;

  @RequestMapping("/markMyMarker")
  public Object mark() {
    Map<String,Object> result = new HashMap<String,Object>();
    
    result.put("data",mapService.markMyMarker());
  //  HttpHeaders headers = new HttpHeaders();
  //  headers.add("Content-type"
  //      , "text/plain;charset=UTF-8");
    
    return result;  
  }


}