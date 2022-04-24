package com.kr.first.customer.model.service;

import java.util.ArrayList;
import java.util.HashMap;

import com.kr.first.customer.model.vo.CustHt;
import com.kr.first.customer.model.vo.Customer;
import com.kr.first.customer.model.vo.Prt;

public interface CustService {

	//소속고객 전체 조회 메소드
	ArrayList<Customer> selectOwnCust(HashMap<String, Object> map);

	//거래처 전체 조회 메소드(팝업)
	ArrayList<Prt> selectAllPrt();

	//거래처 검색 조회 메소드(팝업)
	ArrayList<Prt> selectSearchPrt(String keyword);

	//고객 전체 조회 메소드(팝업)
	ArrayList<Customer> selectAllCust();

	//고객 검색 조회 메소드(팝업)
	ArrayList<Customer> selectSearchCust(Customer cust);

	//고객 이름 조회(팝업)
	String selectCustNm(String custNo);
	
	//고객이력 조회 메소드(팝업)
	ArrayList<CustHt> selectCustHt(String custNo);

	

}
