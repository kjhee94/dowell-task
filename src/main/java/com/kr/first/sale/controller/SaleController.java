package com.kr.first.sale.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Calendar;
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
import com.kr.first.sale.model.service.SaleService;

@Controller
public class SaleController {

private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private SaleService sService;
	
	//고객판매관리 페이지 초기세팅 메소드
	@RequestMapping(value = "/sale/saleList.do")
	public ModelAndView saleList(ModelAndView mav, HttpServletResponse response) throws IOException {
		
		log.info("고객판매관리 페이지 오픈");
		
		//가입날짜 조회 default값
		Calendar c = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		//오늘날짜
		String todayDate = sdf.format(c.getTime());
		//일주일전
		c.add(c.DATE, -7); //요일기준으로 -7 차이나는 날짜
		String agoDate = sdf.format(c.getTime());
		
		//map에 삽입
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("salDtTo", todayDate);
		map.put("salDtFrom", agoDate);
		
		//ModelAndView에 담아 return
		mav.addObject("map", map);
		mav.setViewName("sale/saleList");
		
		return mav;
	}
	
	@ResponseBody
	@PostMapping(value = "/sale/selectSearchSale.do")
	public void selectSearchCust(@RequestParam HashMap<String,Object> map, HttpServletResponse response) throws IOException {
		
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		
		try { //Exception 발생 구문 
			resultMap = sService.selectSearchSale(map);
			System.out.println(resultMap);
			
		} catch (Exception e) { //Exception 발생시 처리
			//Exception 로그
			//e.printStackTrace();
			log.info("=================>>고객 판매 조회 실패");
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
}
