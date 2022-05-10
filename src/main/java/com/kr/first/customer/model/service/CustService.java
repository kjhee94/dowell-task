package com.kr.first.customer.model.service;

import java.util.HashMap;

public interface CustService {

	//고객 전체 검색 메소드
	HashMap<String, Object> selectSearchCust(HashMap<String, Object> map) throws Exception;
	
	//페이지 초기화(고객 상태 조회) 메소드
	HashMap<String, Object> custList() throws Exception;
	
	//거래처 검색 메소드(팝업)
	HashMap<String, Object> selectPrt(String keyword) throws Exception;

	//고객 검색 메소드(팝업)
	HashMap<String, Object> selectCust(HashMap<String, Object> map) throws Exception;

	//고객 이력 조회 메소드(팝업)
	HashMap<String, Object> selectCustHt(String custNo) throws Exception;
}
