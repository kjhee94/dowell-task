package com.kr.first.customer.controller;

import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.servlet.ModelAndView;

import com.kr.first.customer.model.service.CustService;
import com.kr.first.customer.model.vo.Customer;
import com.kr.first.user.model.vo.User;

@Controller
public class CustController {

	@Autowired
	private CustService cService;
	
	@RequestMapping(value = "/customer/selectAllCust.do")
	public ModelAndView selectAllCust(@SessionAttribute User user, ModelAndView mav) {
		
		//세션에서 거래처코드와 사용자구분코드(본사/특약점)가져오기
		String prtCd = user.getPrtCd();
		int userDtCd = user.getUserDtCd();
		
		//거래처코드와 사용자 구분코드 Hashmap에 넣기
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		map.put("prtCd", prtCd);
		map.put("userDtCd", userDtCd);
		
		//회원 전체 목록 list에 담기
		ArrayList<Customer> list =  cService.selectAllCust(map);
		
		//ModelAndView에 담아 return
		mav.addObject("list", list);
		mav.setViewName("customer/selectAllCust");
		
		return mav;
	}
}
