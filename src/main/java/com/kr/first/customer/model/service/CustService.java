package com.kr.first.customer.model.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.kr.first.customer.model.vo.CustHtVO;
import com.kr.first.customer.model.vo.CustVO;
import com.kr.first.customer.model.vo.PrtVO;

public interface CustService {

	//고객 전체 검색 메소드
	HashMap<String, Object> selectSearchCust(Map<String, Object> map);
	
	//거래처 검색 메소드(팝업)
	ArrayList<PrtVO> selectPrt(String keyword);

	//고객 검색 메소드(팝업)
	ArrayList<CustVO> selectCust(CustVO cust);

	//고객 이름 조회 메소드(팝업)
	String selectCustNm(String custNo);
	
	//고객 이력 조회 메소드(팝업)
	ArrayList<CustHtVO> selectCustHt(String custNo);
}
