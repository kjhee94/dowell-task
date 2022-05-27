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

	//고객 판매 조회 메소드
	@Override
	public HashMap<String, Object> selectSearchSale(HashMap<String, Object> map) throws Exception {
		
		//고객 판매 조회 list
		log.info("=================>>고객 판매 조회");
		ArrayList<CustVO> list = sDAO.selectSearchSale(map);
		log.info("=================>>고객 판매 조회 성공");
		
		//반환할 객체 선언
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("list", list);
		resultMap.put("result",true);
		
		return resultMap;
	}
}
