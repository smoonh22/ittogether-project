package net.bit.java72.control;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;

import net.bit.java72.service.MemberService;

public class MemberController {
  @Autowired MemberService memberService;
  @Autowired ServletContext servletContext;
  
  
}
