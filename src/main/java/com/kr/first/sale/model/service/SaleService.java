package com.kr.first.sale.model.service;

import java.util.HashMap;

public interface SaleService {

	//고객 판매 조회 메소드
	HashMap<String, Object> selectSearchSale(HashMap<String, Object> map) throws Exception;

	//매장 재고 조회 메소드(팝업)
	HashMap<String, Object> selectPrd(HashMap<String, Object> map) throws Exception;
	
	//판매 상세 조회 메소드(팝업)
	HashMap<String, Object> selectSaleDt(HashMap<String, Object> map) throws Exception;

	//반품처리 메소드(팝업)
	HashMap<String, Object> insertReturn(HashMap<String, Object> map) throws Exception;


}
