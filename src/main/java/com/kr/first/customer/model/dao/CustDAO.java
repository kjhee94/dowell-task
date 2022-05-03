package com.kr.first.customer.model.dao;

import java.util.ArrayList;
import java.util.HashMap;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.kr.first.customer.model.vo.CustHt;
import com.kr.first.customer.model.vo.Customer;
import com.kr.first.customer.model.vo.Prt;

@Repository
public class CustDAO {

	@Autowired
	@Qualifier(value = "sqlSessionTemplate")
	private SqlSessionTemplate sqlSession;

	//고객 전체 검색 메소드
	public ArrayList<Customer> selectSearchCust(HashMap<String, Object> map) {
		return new ArrayList<Customer>(sqlSession.selectList("cust.selectSearchCust",map));
	}
	
	//거래처 검색 메소드
	public ArrayList<Prt> selectPrt(String keyword) {
		return new ArrayList<Prt>(sqlSession.selectList("cust.selectPrt",keyword));
	}

	//고객 검색 메소드
	public ArrayList<Customer> selectCust(Customer cust) {
		return new ArrayList<Customer>(sqlSession.selectList("cust.selectCust",cust));
	}

	//고객 이름 조회 메소드
	public String selectCustNm(String custNo) {
		return sqlSession.selectOne("cust.selectCustNm",custNo);
	}
	
	//고객이력 조회 메소드
	public ArrayList<CustHt> selectCustHt(String custNo) {
		return new ArrayList<CustHt>(sqlSession.selectList("cust.selectCustHt",custNo));
	}
}
