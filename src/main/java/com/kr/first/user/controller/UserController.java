package com.kr.first.user.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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

	@Autowired
	private UserService uService;
	
	//로그인
	@RequestMapping(value = "/user/login.do", method = RequestMethod.POST)
	public String userLogin(HttpServletRequest request, User user, ModelAndView mav) {
		
		//사용자의 정보 User에 담기
		User u = uService.selectLoginUser(user);
		
		//유저 정보가 있을 때
		if(u!=null) {
			HttpSession session = request.getSession();
			session.setAttribute("user", u);
			
			
			
			return "user/loginSuccess";
			//바로 고객리스트 불러오기
		}
		//유저 정보가 없을 때
		else {
			return "user/loginFail";
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
