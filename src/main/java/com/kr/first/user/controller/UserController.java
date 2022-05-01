package com.kr.first.user.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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

	@Autowired
	private UserService uService;
	
	@Autowired
	private CustService cService;
	
	//로그인
	@RequestMapping(value = "/user/login.do", method = RequestMethod.POST)
	public ModelAndView userLogin(HttpServletRequest request, User user, ModelAndView mav) {
		
		//사용자의 정보 User에 담아 일치하는 회원 가져오기
		User u = uService.selectLoginUser(user);
		System.out.println();
		
		//유저 정보가 있을 때
		if(u!=null) {
			//세션에 담기
			HttpSession session = request.getSession();
			session.setAttribute("user", u);
			
//			//세션에서 거래처코드와 사용자구분코드(본사/특약점)가져오기
//			String prtCd = user.getPrtCd();
//			int userDtCd = user.getUserDtCd();
//			
//			//오늘 날짜/일주일 전 날짜 가져오기
//			Calendar c = Calendar.getInstance();
//			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//			//오늘날짜
//			String todayDate = sdf.format(c.getTime());
//			//일주일전
//			c.add(c.DATE, -7); //요일기준으로 -7 차이나는 날짜
//			String agoDate = sdf.format(c.getTime());
//			
//			//거래처코드와 사용자 구분코드 Hashmap에 넣기
//			HashMap<String, Object> map = new HashMap<String, Object>();
//			map.put("prtCd", prtCd);
//			map.put("userDtCd", userDtCd);
//			map.put("jsDtTo", todayDate);
//			map.put("jsDtFrom", agoDate);
//			
//			//소속고객 전체 목록 list에 담기
//			ArrayList<Customer> list =  cService.selectOwnCust(map);
//			
//			//ModelAndView에 담아 return
//			mav.addObject("list", list);
//			mav.addObject("jsDtTo", todayDate);
//			mav.addObject("jsDtFrom", agoDate);
//			mav.setViewName("customer/custList");
			mav.setViewName("user/loginSuccess");
			
			return mav;
		}
		//유저 정보가 없을 때
		else {
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
