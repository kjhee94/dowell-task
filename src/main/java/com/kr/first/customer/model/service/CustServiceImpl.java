package com.kr.first.customer.model.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kr.first.customer.model.dao.CustDAO;
import com.kr.first.customer.model.vo.CustHt;
import com.kr.first.customer.model.vo.Customer;
import com.kr.first.customer.model.vo.Prt;

@Service
public class CustServiceImpl implements CustService {

	@Autowired
	private CustDAO cDAO;

	//고객 전체 검색 메소드
	@Override
	public ArrayList<Customer> selectSearchCust(HashMap<String, Object> map) {
		return cDAO.selectSearchCust(map);
	}
	
	//거래처 검색 메소드
	@Override
	public ArrayList<Prt> selectPrt(String keyword) {
		return cDAO.selectPrt(keyword);
	}

	//고객 검색 메소드
	@Override
	public ArrayList<Customer> selectCust(Customer cust) {
		return cDAO.selectCust(cust);
	}

	//고객이름 조회 메소드
	@Override
	public String selectCustNm(String custNo) {
		return cDAO.selectCustNm(custNo);
	}
	
	//고객이력 조회 메소드
	@Override
	public ArrayList<CustHt> selectCustHt(String custNo) {
		return cDAO.selectCustHt(custNo);
	}
}
