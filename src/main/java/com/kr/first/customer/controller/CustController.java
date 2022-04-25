package com.kr.first.customer.controller;

import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.servlet.ModelAndView;

import com.kr.first.customer.model.service.CustService;
import com.kr.first.customer.model.vo.CustHt;
import com.kr.first.customer.model.vo.Customer;
import com.kr.first.customer.model.vo.Prt;
import com.kr.first.user.model.vo.User;

@Controller
public class CustController {

	@Autowired
	private CustService cService;
	
	@RequestMapping(value = "/customer/selectOwnCust.do")
	public ModelAndView selectOwnCust(@SessionAttribute User user, ModelAndView mav) {
		
		//세션에서 거래처코드와 사용자구분코드(본사/특약점)가져오기
		String prtCd = user.getPrtCd();
		int userDtCd = user.getUserDtCd();
		
		//거래처코드와 사용자 구분코드 Hashmap에 넣기
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("prtCd", prtCd);
		map.put("userDtCd", userDtCd);
		
		//소속고객 전체 목록 list에 담기
		ArrayList<Customer> list =  cService.selectOwnCust(map);
		
		//ModelAndView에 담아 return
		mav.addObject("list", list);
		mav.setViewName("customer/selectCustMain");
		
		return mav;
	}
	
	@RequestMapping(value = "/customer/selectAllPrt.do")
	public ModelAndView selectAllPrt(ModelAndView mav) {
		
		//거래처 전체 목록 list에 담기
		ArrayList<Prt> list =  cService.selectAllPrt();
		
		//ModelAndView에 담아 return
		mav.addObject("list", list);
		mav.setViewName("customer/selectPrt");
		
		return mav;
	}
	
	@RequestMapping(value = "/customer/selectSearchPrt.do", method = RequestMethod.GET)
	public ModelAndView selectSearchPrt(HttpServletRequest request, 
										@RequestParam String keyword, 
										ModelAndView mav) 
	{
		//거래처 검색 목록 list에 담기
		ArrayList<Prt> list =  cService.selectSearchPrt(keyword);
		
		//ModelAndView에 담아 return
		mav.addObject("list", list);
		mav.addObject("keyword", keyword);
		mav.setViewName("customer/selectPrt");
		
		return mav;
	}
	
	@RequestMapping(value = "/customer/selectAllCust.do")
	public ModelAndView selectAllCust(HttpServletRequest request, ModelAndView mav) {
		
		//고객 전체 목록 list에 담기
		ArrayList<Customer> list =  cService.selectAllCust();
		
		//ModelAndView에 담아 return
		mav.addObject("list", list);
		mav.setViewName("customer/selectCust");
		
		return mav;
	}
	
	@RequestMapping(value = "/customer/selectSearchCust.do", method = RequestMethod.GET)
	public ModelAndView selectSearchCust(HttpServletRequest request,
										 @RequestParam String custNm,
										 @RequestParam String mblNo,
										 ModelAndView mav) 
	{
		//mapper에 보내기 위해 map에 넣기
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("custNm", custNm);
		map.put("mblNo", mblNo);
		
		//고객 검색 목록 list에 담기
		ArrayList<Customer> list =  cService.selectSearchCust(map);
		
		//ModelAndView에 담아 return
		mav.addObject("list", list);
		mav.addObject("custNm", custNm);
		mav.addObject("mblNo", mblNo);
		mav.setViewName("customer/selectCust");
		
		return mav;
	}
	
	@RequestMapping(value = "/customer/selectCustHt.do")
	public ModelAndView selectCustHt(HttpServletRequest request, 
									 @RequestParam String custNo,  
									 ModelAndView mav) 
	{	
		//고객 이름 가져오기
		String custNm = cService.selectCustNm(custNo);
		
		//고객이력 목록 list에 담기
		ArrayList<CustHt> list = cService.selectCustHt(custNo);
		
		//ModelAndView에 담아 return
		mav.addObject("custNo", custNo);
		mav.addObject("custNm", custNm);
		mav.addObject("list", list);
		mav.setViewName("customer/selectCustHt");
		
		return mav;
	}
	
	@RequestMapping(value = "/customer/selectFullSearchCust.do", method = RequestMethod.GET)
	public ModelAndView selectFullSearchCust(HttpServletRequest request,
											 @RequestParam String prtCd,
											 @RequestParam String prtNm,
											 @RequestParam String custNo,
											 @RequestParam String custNm,
											 @RequestParam String custSsCd,
											 @RequestParam String jsDtFrom,
											 @RequestParam String jsDtTo,
											 ModelAndView mav) 
	{
		//문자열에서 하이픈 제거
		String rplJsDtFrom = jsDtFrom.replace("-", "");
		String rplJsDtTo = jsDtTo.replace("-", "");
		
		//mapper에 보내기 위해 map에 넣기
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("prtCd",prtCd);
		map.put("custNo",custNo);
		map.put("custSsCd",custSsCd);
		map.put("jsDtFrom",rplJsDtFrom);
		map.put("jsDtTo",rplJsDtTo);
		
		//고객 전체검색 목록 list에 담기
		ArrayList<Customer> list = cService.selectFullSearchCust(map);
		
		//ModelAndView에 담아 return
		mav.addObject("list", list);
		mav.addObject("prtCd", prtCd);
		mav.addObject("prtNm", prtNm);
		mav.addObject("custNo", custNo);
		mav.addObject("custNm", custNm);
		mav.addObject("custSsCd", custSsCd);
		mav.addObject("jsDtFrom", jsDtFrom);
		mav.addObject("jsDtTo", jsDtTo);
		mav.setViewName("customer/selectCustMain");
		
		return mav;
	}
}
