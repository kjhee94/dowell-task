package com.kr.first.sale.model.dao;

import java.util.ArrayList;
import java.util.HashMap;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.kr.first.customer.model.vo.CustVO;

@Repository
public class SaleDAO {

	@Autowired
	@Qualifier(value = "sqlSessionTemplate")
	private SqlSessionTemplate sqlSession;

	//고객 판매 조회 메소드
	public ArrayList<CustVO> selectSearchSale(HashMap<String, Object> map) throws Exception {
		return new ArrayList<CustVO>(sqlSession.selectList("sale.selectSearchSale",map));
	}

}
