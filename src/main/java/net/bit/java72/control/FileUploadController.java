package net.bit.java72.control;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import net.bit.java72.domain.FileItem;
import net.bit.java72.util.MultipartUtils;

@Controller("FileUploadController")
@RequestMapping("/file")
public class FileUploadController {
  @Autowired ServletContext servletContext;
 
  @RequestMapping("/upload")
  public Object upload(
      @RequestParam(required=false) MultipartFile[] file,
      HttpServletRequest request) throws Exception {
      String filename = null;
      File newPath = null;
      ArrayList<FileItem> files = new ArrayList<FileItem>();
      for (MultipartFile f : file) {
        filename = MultipartUtils.getFilename(
            f.getOriginalFilename());
        newPath = new File(
            servletContext.getRealPath("/user_upload") 
            + "/" + filename);
        f.transferTo(newPath);
        
        files.add(
          new FileItem()
            .setName(filename)
            .setOriginName(f.getOriginalFilename())
            .setSize(f.getSize())
            .setUrl(request.getContextPath()
                + "/user_upload/" + filename));
      }
      
      Map<String,Object> result = 
          new HashMap<String,Object>();
      result.put("data", files);
      return result;
  }

  
 
}





