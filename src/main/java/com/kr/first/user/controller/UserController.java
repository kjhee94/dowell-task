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
import com.kr.first.user.model.vo.UserVO;

@Controller
public class UserController {

	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private UserService uService;
	
	//로그인
	@RequestMapping(value = "/user/login.do", method = RequestMethod.POST)
	public ModelAndView userLogin(HttpServletRequest request, UserVO user, ModelAndView mav) {
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		try { //Exception 발생 구문 
			//로그인 성공/실패에 따라 다른 값 map에 담기
			map = uService.userLogin(user);
			
		} catch (Exception e) { //Exception 발생시 처리
			//Exception 로그
			//e.printStackTrace();
			log.error("error : ", e);
			
			//map에 삽입
			map.put("msg", "로그인에 실패했습니다. 관리자에게 문의해주세요.\\n("+e.getMessage()+")");
			map.put("location", "/");
			map.put("result", false);
		} 
		
		//결과처리
		if((boolean)map.get("result")) { //로그인에 성공했을 때
			log.info(((UserVO)map.get("user")).getUserNm()+"님 로그인 성공");
			
			//세션에 담기
			HttpSession session = request.getSession();
			session.setAttribute("user", (UserVO)map.get("user"));
			
		} else { //로그인에 실패했을 때
			log.info("로그인 실패");
		}
		
		//ModelAndView에 담아 return
		mav.addObject("map", map);
		mav.setViewName("common/msg");
		
		return mav;
	}
	
	//로그아웃
	@RequestMapping(value="/user/logout.do",method=RequestMethod.GET)
	public String userLogout(HttpSession session, @SessionAttribute UserVO user) {
		
		//세션파기
		session.invalidate();
		return "redirect:/";
	}
}
