package com.kr.first.customer.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.kr.first.customer.model.service.CustService;
import com.kr.first.customer.model.vo.CustHtVO;
import com.kr.first.customer.model.vo.CustVO;
import com.kr.first.customer.model.vo.PrtVO;

@Controller
public class CustController {

	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private CustService cService;
	
	@RequestMapping(value = "/customer/selectSearchCust.do", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> selectSearchCust(@RequestBody Map<String, Object> map) {
		
		System.out.println(map);
		
		//고객 전체 검색 성공/실패에 따라 다른 값 map에 담기
		HashMap<String, Object> resultMap = cService.selectSearchCust(map);
		
		return resultMap;
		
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
		ArrayList<PrtVO> list = cService.selectPrt(keyword);
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
	public ModelAndView selectCust(HttpServletRequest request, CustVO cust, ModelAndView mav) {

		log.info("고객이름 : "+cust.getCustNm()+" or 핸드폰 번호 : "+cust.getMblNo());
		
		//고객 검색 목록 list에 담기
		log.info("=================>>고객 팝업 검색 조회");
		ArrayList<CustVO> list =  cService.selectCust(cust);
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
		log.info("고객이름 : "+custNm);
		
		//고객이력 목록 list에 담기
		log.info("=================>>고객 이력 조회");
		ArrayList<CustHtVO> list = cService.selectCustHt(custNo);
		log.info("=================>>고객 이력 조회 성공");
		
		//ModelAndView에 담아 return
		mav.addObject("custNo", custNo);
		mav.addObject("custNm", custNm);
		mav.addObject("hList", list);
		mav.setViewName("customer/custHtPop");
		
		return mav;
	}
	
	@RequestMapping(value = "/customer/insertCust.do")
	public String insertCust() {
		//팝업 오픈
		return "customer/custAddPop";
	}
}
