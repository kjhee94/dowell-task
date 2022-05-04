package com.kr.first.customer.model.service;

import java.util.ArrayList;
import java.util.HashMap;

import com.kr.first.customer.model.vo.CustHt;
import com.kr.first.customer.model.vo.Customer;
import com.kr.first.customer.model.vo.Prt;

public interface CustService {

	//고객 전체 검색 메소드
	ArrayList<Customer> selectSearchCust(Customer cust);
	
	//고객상태 조회 메소드
	ArrayList<Customer> selectCustSs();

	//거래처 검색 메소드(팝업)
	ArrayList<Prt> selectPrt(String keyword);

	//고객 검색 메소드(팝업)
	ArrayList<Customer> selectCust(Customer cust);

	//고객 이름 조회 메소드(팝업)
	String selectCustNm(String custNo);
	
	//고객 이력 조회 메소드(팝업)
	ArrayList<CustHt> selectCustHt(String custNo);
}
