package com.kr.first.user.controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.servlet.ModelAndView;

import com.kr.first.user.model.service.UserService;
import com.kr.first.user.model.vo.User;

@Controller
public class UserController {

	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private UserService uService;
	
	//로그인
	@RequestMapping(value = "/user/login.do", method = RequestMethod.POST)
	public ModelAndView userLogin(HttpServletRequest request, User user, ModelAndView mav) {
		
		//로그인 성공/실패에 따라 다른 값 map에 담아옴
		HashMap<String, Object> map = uService.userLogin(user);
		
		if((boolean)map.get("result")) { //로그인에 성공했을 때
			
			log.info(((User)map.get("user")).getUserNm()+"님 로그인 성공");
			
			//세션에 담기
			HttpSession session = request.getSession();
			session.setAttribute("user", (User)map.get("user"));
			
			//ModelAndView에 담아 return
			mav.addObject("map", map);
			mav.setViewName("customer/custList");
			
		} else { //로그인에 실패했을 때
			
			log.info("로그인 실패");
			
			//ModelAndView에 담아 return
			mav.addObject("map", map);
			mav.setViewName("common/msg");
		}
		return mav;
	}
	
	//로그아웃
	@RequestMapping(value="/user/logout.do",method=RequestMethod.GET)
	public String userLogout(HttpSession session, @SessionAttribute User user) {
		
		//세션파기
		session.invalidate();
		return "redirect:/";
	}
}
