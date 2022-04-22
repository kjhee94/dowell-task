package com.kr.first.customer.model.service;

import java.util.ArrayList;
import java.util.HashMap;

import com.kr.first.customer.model.vo.Customer;

public interface CustService {

	//고객 전체 조회 메소드
	ArrayList<Customer> selectOwnCust(HashMap<String, Object> map);

}
