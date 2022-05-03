package com.kr.first.customer.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private CustService cService;
	
	@RequestMapping(value = "/customer/selectOwnCust.do")
	public ModelAndView selectOwnCust(@SessionAttribute User user, ModelAndView mav) {
		
		//거래처코드와 사용자구분코드(본사/특약점)가져오기
		String prtCd = user.getPrtCd();
		String prtNm = user.getPrtNm();
		int userDtCd = user.getUserDtCd();
		log.info("사용자구분코드 : "+userDtCd);
		
		//오늘 날짜/일주일 전 날짜 가져오기
		Calendar c = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		//오늘날짜
		String todayDate = sdf.format(c.getTime());
		//일주일전
		c.add(c.DATE, -7); //요일기준으로 -7 차이나는 날짜
		String agoDate = sdf.format(c.getTime());
		
		//mapper에 보내기 위해 Hashmap에 넣기
		HashMap<String, Object> map = new HashMap<String, Object>();
		if(userDtCd==2) {
			map.put("prtCd", prtCd);
		}
		map.put("jsDtTo", todayDate);
		map.put("jsDtFrom", agoDate);
		
		//소속 고객 전체  list에 담기
		log.info("=================>>초기세팅(소속 고객 전체)");
		ArrayList<Customer> list =  cService.selectSearchCust(map);
		log.info("=================>>소속 고객 전체 조회 성공");
		
		//ModelAndView에 담아 return
		mav.addObject("list", list);
		//검색내역 유지
		if(userDtCd==2) {
			mav.addObject("prtCd", prtCd);
			mav.addObject("prtNm", prtNm);
		}
		mav.addObject("jsDtTo", todayDate);
		mav.addObject("jsDtFrom", agoDate);
		mav.setViewName("customer/custList");
		
		return mav;
	}
	
	
	@RequestMapping(value = "/customer/prtPop.do")
	public String selectPrt() {
		//팝업 오픈
		return "customer/prtPop";
	}
	
	
	@RequestMapping(value = "/customer/selectPrt.do", method = RequestMethod.POST)
	public ModelAndView selectPrt(HttpServletRequest request, @RequestParam String keyword, ModelAndView mav) {
		
		log.info("검색어 : "+keyword);
		
		//거래처 검색 목록 list에 담기
		log.info("=================>>거래처 팝업 검색 조회");
		ArrayList<Prt> list = cService.selectPrt(keyword);
		log.info("=================>>거래처 팝업 검색 조회 성공");
		
		//ModelAndView에 담아 return
		mav.addObject("pList", list);
		//검색내역 유지
		mav.addObject("keyword", keyword);
		mav.setViewName("customer/prtPop");
		
		return mav;
	}
	
	
	@RequestMapping(value = "/customer/custPop.do")
	public String selectCust() {
		//팝업 오픈
		return "customer/custPop";
	}
	
	
	@RequestMapping(value = "/customer/selectCust.do", method = RequestMethod.POST)
	public ModelAndView selectCust(HttpServletRequest request, Customer cust, ModelAndView mav) {

		log.info("고객이름 : "+cust.getCustNm()+" or 핸드폰 번호 : "+cust.getMblNo());
		
		//고객 검색 목록 list에 담기
		log.info("=================>>고객 팝업 검색 조회");
		ArrayList<Customer> list =  cService.selectCust(cust);
		log.info("=================>>고객 팝업 검색 조회 성공");
		
		//ModelAndView에 담아 return
		mav.addObject("cList", list);
		//검색내역 유지
		mav.addObject("custNm", cust.getCustNm());
		mav.addObject("mblNo", cust.getMblNo());
		mav.setViewName("customer/custPop");
		
		return mav;
	}
	
	@RequestMapping(value = "/customer/selectCustHt.do")
	public ModelAndView selectCustHt(HttpServletRequest request, @RequestParam String custNo, ModelAndView mav) {	
		
		//고객 이름 가져오기
		String custNm = cService.selectCustNm(custNo);
		
		//고객이력 목록 list에 담기
		log.info("=================>>고객 이력 조회");
		ArrayList<CustHt> list = cService.selectCustHt(custNo);
		log.info("=================>>고객 이력 조회 성공");
		
		//ModelAndView에 담아 return
		mav.addObject("custNo", custNo);
		mav.addObject("custNm", custNm);
		mav.addObject("hList", list);
		mav.setViewName("customer/custHtPop");
		
		return mav;
	}
	
	@RequestMapping(value = "/customer/selectSearchCust.do", method = RequestMethod.POST)
	public ModelAndView selectSearchCust(HttpServletRequest request,
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
		ArrayList<Customer> list = cService.selectSearchCust(map);
		
		//ModelAndView에 담아 return
		mav.addObject("list", list);
		//검색내역 유지
		mav.addObject("prtCd", prtCd);
		mav.addObject("prtNm", prtNm);
		mav.addObject("custNo", custNo);
		mav.addObject("custNm", custNm);
		mav.addObject("custSsCd", custSsCd);
		mav.addObject("jsDtFrom", jsDtFrom);
		mav.addObject("jsDtTo", jsDtTo);
		mav.setViewName("customer/custList");
		
		return mav;
	}
	
	@RequestMapping(value = "/customer/insertCust.do")
	public ModelAndView insertCust(ModelAndView mav) {
		
		mav.setViewName("customer/custAdd");
		
		return mav;
	}
}
