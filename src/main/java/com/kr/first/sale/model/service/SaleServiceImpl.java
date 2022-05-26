package com.kr.first.sale.model.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kr.first.customer.model.vo.CustVO;
import com.kr.first.sale.model.dao.SaleDAO;

@Service
public class SaleServiceImpl implements SaleService {

	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private SaleDAO sDAO;

	//고객조회 페이지 초기세팅 메소드
//	@Override
//	public HashMap<String, Object> custList() throws Exception {
//
//		//고객상태 조회 list(라디오버튼 생성)
//		log.info("=================>>고객상태 조회");
//		ArrayList<CustVO> list = cDAO.selectCustSs();
//		log.info("=================>>고객상태 조회 성공");
//		
//		//가입날짜 조회 default값
//		Calendar c = Calendar.getInstance();
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//		//오늘날짜
//		String todayDate = sdf.format(c.getTime());
//		//일주일전
//		c.add(c.DATE, -7); //요일기준으로 -7 차이나는 날짜
//		String agoDate = sdf.format(c.getTime());
//		
//		//map에 삽입
//		HashMap<String, Object> map = new HashMap<String, Object>();
//		map.put("dtList", list);
//		map.put("jsDtTo", todayDate);
//		map.put("jsDtFrom", agoDate);
//		
//		return map;
//	}
}
