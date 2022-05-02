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

	@Override
	public ArrayList<Customer> selectAllSearchCust(HashMap<String, Object> map) {
		return cDAO.selectAllSearchCust(map);
	}

	@Override
	public ArrayList<Prt> selectAllPrt() {
		return cDAO.selectAllPrt();
	}

	@Override
	public ArrayList<Prt> selectSearchPrt(String keyword) {
		return cDAO.selectSearchPrt(keyword);
	}

	@Override
	public ArrayList<Customer> selectAllCust() {
		return cDAO.selectAllCust();
	}

	@Override
	public ArrayList<Customer> selectSearchCust(HashMap<String, Object> map) {
		return cDAO.selectSearchCust(map);
	}

	@Override
	public String selectCustNm(String custNo) {
		return cDAO.selectCustNm(custNo);
	}
	
	@Override
	public ArrayList<CustHt> selectCustHt(String custNo) {
		return cDAO.selectCustHt(custNo);
	}
	
	@Override
	public ArrayList<Customer> selectFullSearchCust(HashMap<String, Object> map) {
		return cDAO.selectFullSearchCust(map);
	}

	
}
