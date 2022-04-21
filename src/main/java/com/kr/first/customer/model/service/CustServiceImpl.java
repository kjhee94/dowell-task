package com.kr.first.customer.model.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kr.first.customer.model.dao.CustDAO;
import com.kr.first.customer.model.vo.Customer;

@Service
public class CustServiceImpl implements CustService {

	@Autowired
	private CustDAO cDAO;

	@Override
	public ArrayList<Customer> selectAllCust(HashMap<String, Object> map) {
		return cDAO.selectAllCust(map);
	}
}
