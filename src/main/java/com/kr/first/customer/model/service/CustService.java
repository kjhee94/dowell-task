package com.kr.first.customer.model.service;

import java.util.HashMap;

public interface CustService {

	//고객조회 페이지 초기세팅(고객상태 상태코드명 조회) 메소드
	HashMap<String, Object> custList() throws Exception;
	
	//고객 전체 검색 메소드
	HashMap<String, Object> selectSearchCust(HashMap<String, Object> map) throws Exception;
	
	//거래처 검색 메소드(팝업)
	HashMap<String, Object> selectPrt(String keyword) throws Exception;

	//고객 검색 메소드(팝업)
	HashMap<String, Object> selectCust(HashMap<String, Object> map) throws Exception;

	//고객 이력 조회 메소드(팝업)
	HashMap<String, Object> selectCustHt(String custNo) throws Exception;

	//고객등록 팝업창 오픈(직업,성별,우편물수령 상태코드명 조회) 메소드
	HashMap<String, Object> custAddPop();
}
