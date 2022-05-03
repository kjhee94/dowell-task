package com.kr.first.user.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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
	
	@Autowired
	private CustService cService;
	
	//로그인
	@RequestMapping(value = "/user/login.do", method = RequestMethod.POST)
	public String userLogin(HttpServletRequest request, HttpServletResponse response, User user) throws IOException{
		
		//사용자의 정보 User에 담아 일치하는 회원 가져오기
		User u = uService.selectLoginUser(user);
		
		//유저 정보가 있을 때
		if(u!=null) {
			
			log.info(u.getUserNm()+"님 로그인 성공");
			
			//세션에 담기
			HttpSession session = request.getSession();
			session.setAttribute("user", u);
			
			return "redirect:/customer/selectOwnCust.do";
		}
		//유저 정보가 없을 때
		else {
			
			log.info("로그인 실패");
			
			//오류 alert 띄우기
			response.setContentType("text/html; charset=UTF-8");
			PrintWriter out = response.getWriter();
			out.println("<script>alert('아이디 비밀번호를 재설정 해주세요');location.href='/';</script>");
			out.flush();
			
			return "redirect:/";
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
