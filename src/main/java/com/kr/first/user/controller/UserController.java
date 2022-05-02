package com.kr.first.user.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
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

import com.kr.first.customer.model.service.CustService;
import com.kr.first.customer.model.vo.Customer;
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
		
		//사용자의 정보 User에 담아 일치하는 회원 가져오기
		User u = uService.selectLoginUser(user);
		
		log.info("사용자 정보 : "+u);
		
		//유저 정보가 있을 때
		if(u!=null) {
			log.info("로그인 성공");
			//세션에 담기
			HttpSession session = request.getSession();
			session.setAttribute("user", u);
			
			//ModelAndView에 담아 return
			mav.setViewName("customer/custList");
			
			return mav;
		}
		//유저 정보가 없을 때
		else {
			log.info("로그인 실패");
			//ModelAndView에 담아 return
			mav.setViewName("user/loginFail");
			
			return mav;
		}
	}
	
	//로그아웃
	@RequestMapping(value="/user/logout.do",method=RequestMethod.GET)
	public String userLogout(HttpSession session, @SessionAttribute User user) {
		
		//세션파기
		session.invalidate();
		return "redirect:/";
	}
}
