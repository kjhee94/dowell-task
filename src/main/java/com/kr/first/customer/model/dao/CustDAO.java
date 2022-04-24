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

	public ArrayList<Customer> selectOwnCust(HashMap<String, Object> map) {
		return new ArrayList<Customer>(sqlSession.selectList("cust.selectOwnCust",map));
	}

	public ArrayList<Prt> selectAllPrt() {
		return new ArrayList<Prt>(sqlSession.selectList("cust.selectAllPrt"));
	}

	public ArrayList<Prt> selectSearchPrt(String keyword) {
		return new ArrayList<Prt>(sqlSession.selectList("cust.selectSearchPrt",keyword));
	}

	public ArrayList<Customer> selectAllCust() {
		return new ArrayList<Customer>(sqlSession.selectList("cust.selectAllCust"));
	}

	public ArrayList<Customer> selectSearchCust(Customer cust) {
		return new ArrayList<Customer>(sqlSession.selectList("cust.selectSearchCust",cust));
	}

	public String selectCustNm(String custNo) {
		return sqlSession.selectOne("cust.selectCustNm",custNo);
	}
	
	public ArrayList<CustHt> selectCustHt(String custNo) {
		return new ArrayList<CustHt>(sqlSession.selectList("cust.selectCustHt",custNo));
	}
}
