package com.kr.first.customer.model.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.kr.first.customer.model.dao.CustDAO;
import com.kr.first.customer.model.vo.CustHtVO;
import com.kr.first.customer.model.vo.CustVO;
import com.kr.first.customer.model.vo.PrtVO;
import com.kr.first.user.model.vo.UserVO;

@Service
public class CustServiceImpl implements CustService {

	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private CustDAO cDAO;

	//고객 전체 검색 메소드
	@Override
	public HashMap<String, Object> selectSearchCust(Map<String, Object> map) {
		
		//컨트롤러로 보낼  HashMap 선언
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		
		try { //Exception 발생 구문 
			//고객 전체 검색 목록 list에 담기
			log.info("=================>>고객 전체 검색 조회");
			ArrayList<CustVO> list = cDAO.selectSearchCust(map);
			log.info("=================>>고객 전체 검색 조회 성공");
			
			if(list!=null) {
				resultMap.put("list",list);
				resultMap.put("result",true);
			}else {
				resultMap.put("result",false);
			}
			
			
		} catch (Exception e) { //Exception 발생시 처리
			//Exception 로그
			e.printStackTrace();
			log.error("예외메시지 : " + e.getMessage());
			
			//map에 삽입
			resultMap.put("result",false);
		}
		return resultMap;
	}
	
	//거래처 검색 메소드
	@Override
	public ArrayList<PrtVO> selectPrt(String keyword) {
		return cDAO.selectPrt(keyword);
	}

	//고객 검색 메소드
	@Override
	public ArrayList<CustVO> selectCust(CustVO cust) {
		return cDAO.selectCust(cust);
	}

	//고객 이름 조회 메소드
	@Override
	public String selectCustNm(String custNo) {
		return cDAO.selectCustNm(custNo);
	}
	
	//고객 이력 조회 메소드
	@Override
	public ArrayList<CustHtVO> selectCustHt(String custNo) {
		return cDAO.selectCustHt(custNo);
	}
}
