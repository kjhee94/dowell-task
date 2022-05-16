package com.kr.first.customer.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.kr.first.customer.model.service.CustService;
import com.kr.first.user.model.vo.UserVO;

@Controller
public class CustController {

	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private CustService cService;
	
	//고객조회 페이지 초기세팅 메소드
	@RequestMapping(value = "/customer/custList.do")
	public ModelAndView custList(ModelAndView mav, HttpServletResponse response) throws IOException {
		
		log.info("고객조회 페이지");
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		try { //Exception 발생 구문 
			map = cService.custList();
			
		} catch (Exception e) { //Exception 발생시 처리
			//Exception 로그
			//e.printStackTrace();
			log.info("=================>>상태코드명 조회 실패");
			log.error("error : ", e);
			
			response.setContentType("text/html; charset=UTF-8");
			PrintWriter out = response.getWriter();
			out.println("<script type='text/javascript'>alert('오류가 발생했습니다. 관리자에게 문의해주세요.');</script>");
			out.flush();
		} 
		
		//ModelAndView에 담아 return
		mav.addObject("map", map);
		mav.setViewName("customer/custList");
		
		return mav;
	}
	
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
	
	//거래처 팝업창 오픈(팝업)
	@RequestMapping(value = "/customer/prtPop.do")
	public String selectPrt() {
		//팝업 오픈
		log.info("거래처 검색 팝업 오픈");
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
		log.info("고객 검색 팝업 오픈");
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
	
	//고객 이력 팝업창 오픈(팝업_post)
//	@RequestMapping(value = "/customer/CustHtPop.do")
//	public String selectCustHt() {
//		
//		return "customer/custHtPop";
//	}
	
	//고객 이력 팝업창 오픈(팝업_get)
	@RequestMapping(value = "/customer/custHtPop.do")
	public ModelAndView selectCustHt(HttpServletRequest request , @RequestParam String custNo, ModelAndView mav) {
		//팝업 오픈
		log.info("고객이력 팝업 오픈");
		log.info("고객번호 : "+custNo);
		
		mav.addObject("custNo",custNo);
		mav.setViewName("customer/custHtPop");
		
		return mav;
	}
	
	//고객 이력 조회 메소드(팝업)
	@ResponseBody
	@RequestMapping(value = "/customer/selectCustHt.do")
	public void selectCustHt(@RequestParam String custNo, HttpServletResponse response) throws IOException {	
		
		log.info("고객번호 : "+custNo);
		
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
	
	//고객등록 팝업창  초기세팅 메소드(팝업)
	@RequestMapping(value = "/customer/custAddPop.do")
	public ModelAndView custAddPop(ModelAndView mav, HttpServletResponse response) throws IOException {
		
		log.info("고객등록 팝업 오픈");
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		try { //Exception 발생 구문 
			map = cService.custAddPop();
			
		} catch (Exception e) { //Exception 발생시 처리
			//Exception 로그
			//e.printStackTrace();
			log.info("=================>>상태코드명 조회 실패");
			log.error("error : ", e);
			
			response.setContentType("text/html; charset=UTF-8");
			PrintWriter out = response.getWriter();
			out.println("<script type='text/javascript'>alert('오류가 발생했습니다. 관리자에게 문의해주세요.');</script>");
			out.flush();
		} 
		
		//ModelAndView에 담아 return
		mav.addObject("map", map);
		mav.setViewName("customer/custAddPop");
		
		return mav;
	}
	
	//휴대폰번호 중복체크 메소드
	@PostMapping(value = "/customer/mblNoCheck.do")
	public void mblNoCheck(@RequestParam(value="custNo", required=false) String custNo, @RequestParam String mblNo, HttpServletResponse response) throws IOException {
		
		log.info("고객번호 : "+custNo);
		log.info("중복체크할 휴대폰 번호 : "+mblNo);
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("custNo", custNo);
		map.put("mblNo", mblNo);
		
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		
		try { //Exception 발생 구문 
			resultMap = cService.mblNoCheck(map);
			
		} catch (Exception e) { //Exception 발생시 처리
			//Exception 로그
			//e.printStackTrace();
			log.info("=================>>핸드폰 번호 조회 실패");
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
	
	//고객 등록 메소드(팝업)
	@ResponseBody
	@PostMapping(value = "/customer/insertCust.do")
	public void insertCust(@RequestParam HashMap<String,Object> map, @SessionAttribute UserVO user, HttpServletResponse response) throws IOException {	
		
		//세션 ID 가져오기(map에 넣기)
		String userId = user.getUserId();
		map.put("userId", userId);
		log.info("userId : "+userId);
		
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		
		try { //Exception 발생 구문 
			resultMap = cService.insertCust(map);
			
		} catch (Exception e) { //Exception 발생시 처리
			//Exception 로그
			//e.printStackTrace();
			log.info("=================>>고객 등록 실패");
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
	
	//고객 정보 조회 페이지 오픈 메소드
	@RequestMapping(value = "/customer/custInfo.do")
	public ModelAndView custInfo(@RequestParam(value="custNo", required=false) String custNo, ModelAndView mav, HttpServletResponse response) throws IOException {
		
		log.info("고객정보조회 페이지");
		log.info("고객번호 : "+custNo);
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		try { //Exception 발생 구문 
			//로그인 성공/실패에 따라 다른 값 map에 담기
			map = cService.custInfo(custNo);
			
		} catch (Exception e) { //Exception 발생시 처리
			//Exception 로그
			//e.printStackTrace();
			log.info("=================>>상태코드명 조회 실패");
			log.error("error : ", e);
			
			//ModelAndView에 담아 return
			response.setContentType("text/html; charset=UTF-8");
			PrintWriter out = response.getWriter();
			out.println("<script type='text/javascript'>alert('오류가 발생했습니다. 관리자에게 문의해주세요.');</script>");
			out.flush();
		} 
		
		mav.addObject("map", map);
		mav.setViewName("customer/custInfo");
		return mav;
	}
	
	//고객 정보 조회 메소드
	@ResponseBody
	@PostMapping(value = "/customer/selectOneCust.do")
	public void selectOneCust(@RequestParam String custNo, HttpServletResponse response) throws IOException {	
		
		log.info("고객번호 : "+custNo);
		
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		
		try { //Exception 발생 구문 
			resultMap = cService.selectOneCust(custNo);
			
		} catch (Exception e) { //Exception 발생시 처리
			//Exception 로그
			//e.printStackTrace();
			log.info("=================>>고객 정보 조회 실패");
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
	
	
	//고객 정보 수정 메소드(팝업)
	@ResponseBody
	@PostMapping(value = "/customer/updateCust.do")
	public void insertCust(@RequestParam Map<String, Object> map, @SessionAttribute UserVO user, HttpServletResponse response) throws IOException {	
		
		//세션 ID 가져오기
		String userId = user.getUserId();
		log.info("userId : "+userId);
		map.put("userId", userId);
		
		//고객번호 가져오기
//		String custNo = (String)map.get("custNo");
//		map.remove("custNo");
		
//		List<String> kList = new ArrayList<String>(map.keySet());
//		List<Object> vList = new ArrayList<Object>(map.values());
//		
//		HashMap<String, Object> paramMap = new HashMap<String, Object>();
//		paramMap.put("userId", userId);
//		paramMap.put("custNo", custNo);
//		paramMap.put("kList", kList);
//		paramMap.put("vList", vList);

		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		
		try { //Exception 발생 구문 
			resultMap = cService.updateCust(map);
			
		} catch (Exception e) { //Exception 발생시 처리
			//Exception 로그
			//e.printStackTrace();
			log.info("=================>>고객 수정 실패");
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
}
