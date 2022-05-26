package com.kr.first.sale.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

@Repository
public class SaleDAO {

	@Autowired
	@Qualifier(value = "sqlSessionTemplate")
	private SqlSessionTemplate sqlSession;
	
	//고객 전체 검색 메소드
//	public ArrayList<CustVO> selectSearchCust(HashMap<String, Object> map) throws Exception {
//		return new ArrayList<CustVO>(sqlSession.selectList("cust.selectSearchCust",map));
//	}
}
