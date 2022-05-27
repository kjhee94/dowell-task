package com.kr.first.sale.model.service;

import java.util.HashMap;

public interface SaleService {

	//고객 판매 조회 메소드
	HashMap<String, Object> selectSearchSale(HashMap<String, Object> map) throws Exception;

}
