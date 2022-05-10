package com.kr.first.customer.model.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kr.first.customer.model.dao.CustDAO;
import com.kr.first.customer.model.vo.CustHtVO;
import com.kr.first.customer.model.vo.CustVO;
import com.kr.first.customer.model.vo.PrtVO;

@Service
public class CustServiceImpl implements CustService {

	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private CustDAO cDAO;

	//고객 전체 검색 메소드
	@Override
	public HashMap<String, Object> selectSearchCust(HashMap<String, Object> map) throws Exception {
		
		//고객 전체 검색 목록 list에 담기
		log.info("=================>>고객 전체 검색 조회");
		ArrayList<CustVO> list = cDAO.selectSearchCust(map);
		log.info("=================>>고객 전체 검색 조회 성공");
		
		//반환할 객체 선언
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("list",list);
		resultMap.put("result",true);
		
		return resultMap;
	}
	
	//페이지 초기화(고객 상태 조회) 메소드
	@Override
	public HashMap<String, Object> custList() throws Exception {

		//고객상태 조회 list(라디오버튼 생성)
		log.info("=================>>고객상태 조회");
		ArrayList<CustVO> list = cDAO.selectCustSs();
		log.info("=================>>고객상태 조회 성공");
		
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
		map.put("dtList", list);
		map.put("jsDtTo", todayDate);
		map.put("jsDtFrom", agoDate);
		
		return map;
	}
	
	//거래처 검색 메소드
	@Override
	public HashMap<String, Object> selectPrt(String keyword) throws Exception {
		
		//거래처 검색 목록 list에 담기
		log.info("=================>>거래처 팝업 검색 조회");
		ArrayList<PrtVO> list = cDAO.selectPrt(keyword);
		log.info("=================>>거래처 팝업 검색 조회 성공");
		
		//반환할 객체 선언
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("list",list);
		resultMap.put("result",true);
		
		return resultMap;
	}

	//고객 검색 메소드
	@Override
	public HashMap<String, Object> selectCust(HashMap<String, Object> map) throws Exception {
		
		//고객 검색 목록 list에 담기
		log.info("=================>>고객 팝업 검색 조회");
		ArrayList<CustVO> list = cDAO.selectCust(map);
		log.info("=================>>고객 팝업 검색 조회 성공");
		
		//반환할 객체 선언
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("list",list);
		resultMap.put("result",true);
		
		return resultMap;
	}

	//고객 이력 조회 메소드
	@Override
	public HashMap<String, Object> selectCustHt(String custNo) throws Exception {
		
		//고객 이름 가져오기
		String custNm = cDAO.selectCustNm(custNo);
		log.info("고객이름 : "+custNm);
		
		//고객이력 목록 list에 담기
		log.info("=================>>고객 이력 조회");
		ArrayList<CustHtVO> list = cDAO.selectCustHt(custNo);
		log.info("=================>>고객 이력 조회 성공");
		
		//반환할 객체 선언
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("list",list);
		resultMap.put("custNm",custNm);
		resultMap.put("result",true);
		
		return resultMap;
	}
}
