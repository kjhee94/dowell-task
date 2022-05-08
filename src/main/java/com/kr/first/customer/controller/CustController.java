package com.kr.first.customer.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.kr.first.customer.model.service.CustService;

@Controller
public class CustController {

	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private CustService cService;
	
	//고객 전체 검색 메소드
	@ResponseBody
	@PostMapping(value = "/customer/selectSearchCust.do")
	public void selectSearchCust(@RequestParam HashMap<String,Object> map, HttpServletResponse response) throws IOException {
		
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		
		try { //Exception 발생 구문 
			resultMap = cService.selectSearchCust(map);
			
		} catch (Exception e) { //Exception 발생시 처리
			//Exception 로그
			//e.printStackTrace();
			log.info("=================>>고객 전체 검색 조회 실패");
			log.error("error : ", e);
			
			//view단에 오류메세지 노출
			resultMap.put("msg", e.getMessage());
			resultMap.put("result",false);
		} 
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		//map->json
		new Gson().toJson(resultMap,out);
	}
	
	//페이지 초기화(고객 상태 조회) 메소드
	@RequestMapping(value = "/customer/custList.do")
	public ModelAndView selectCustSs(ModelAndView mav) {
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		try { //Exception 발생 구문 
			map = cService.selectCustSs();
			
		} catch (Exception e) { //Exception 발생시 처리
			//Exception 로그
			//e.printStackTrace();
			log.error("error : ", e);
			
			//map에 삽입
			map.put("msg", "오류가 발생했습니다. 관리자에게 문의해주세요.\\n("+e.getMessage()+")");
			map.put("location", "customer/custList");
			map.put("result", false);
		} 
		
		//ModelAndView에 담아 return
		mav.addObject("map", map);
		mav.setViewName("customer/custList");
		
		return mav;
	}
	
	//거래처 팝업창 오픈(팝업)
	@RequestMapping(value = "/customer/prtPop.do")
	public String selectPrt() {
		//팝업 오픈
		return "customer/prtPop";
	}
	
	//거래처 검색 메소드(팝업)
	@ResponseBody
	@PostMapping(value = "/customer/selectPrt.do")
	public void selectPrt(@RequestParam String keyword, HttpServletResponse response) throws IOException {
		
		log.info("검색어 : "+keyword);
		
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		
		try { //Exception 발생 구문 
			resultMap = cService.selectPrt(keyword);
			
		} catch (Exception e) { //Exception 발생시 처리
			//Exception 로그
			//e.printStackTrace();
			log.info("=================>>거래처 팝업 검색 조회 실패");
			log.error("error : ", e);
			
			//view단에 메세지 노출
			resultMap.put("msg", e.getMessage());
			resultMap.put("result",false);
		} 
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		//map->json
		new Gson().toJson(resultMap,out);
	}
	
	//고객 팝업창 오픈(팝업)
	@RequestMapping(value = "/customer/custPop.do")
	public String selectCust() {
		//팝업 오픈
		return "customer/custPop";
	}
	
	//고객 검색 메소드(팝업)
	@ResponseBody
	@PostMapping(value = "/customer/selectCust.do")
	public void selectCust(@RequestParam HashMap<String,Object> map, HttpServletResponse response) throws IOException {

		log.info("고객이름 : "+map.get("custNm")+" or 핸드폰 번호 : "+map.get("mblNo"));
		
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		
		try { //Exception 발생 구문 
			resultMap = cService.selectCust(map);
			
		} catch (Exception e) { //Exception 발생시 처리
			//Exception 로그
			//e.printStackTrace();
			log.info("=================>>고객 팝업 검색 조회 실패");
			log.error("error : ", e);
			
			//view단에 메세지 노출
			resultMap.put("msg", e.getMessage());
			resultMap.put("result",false);
		} 
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		//map->json
		new Gson().toJson(resultMap,out);
	}
	
	//고객 이력 팝업창 오픈(팝업)
	@RequestMapping(value = "/customer/CustHtPop.do")
	public String selectCustHt() {
		//팝업 오픈
		return "customer/custHtPop";
	}
	
	//고객 이력 조회 메소드(팝업)
	@ResponseBody
	@RequestMapping(value = "/customer/selectCustHt.do")
	public void selectCustHt(@RequestParam String custNo, HttpServletResponse response) throws IOException {	
		
		log.info("고객코드 : "+custNo);
		
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		
		try { //Exception 발생 구문 
			resultMap = cService.selectCustHt(custNo);
			
		} catch (Exception e) { //Exception 발생시 처리
			//Exception 로그
			//e.printStackTrace();
			log.info("=================>>고객 이력 조회 실패");
			log.error("error : ", e);
			
			//view단에 메세지 노출
			resultMap.put("msg", e.getMessage());
			resultMap.put("result",false);
		} 
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		//map->json
		new Gson().toJson(resultMap,out);
	}
	
	//고객등록 팝업창 오픈(팝업)
	@RequestMapping(value = "/customer/insertCust.do")
	public String insertCust() {
		//팝업 오픈
		return "customer/custAddPop";
	}
}
