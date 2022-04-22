package com.kr.first.customer.model.dao;

import java.util.ArrayList;
import java.util.HashMap;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.kr.first.customer.model.vo.Customer;

@Repository
public class CustDAO {

	@Autowired
	@Qualifier(value = "sqlSessionTemplate")
	private SqlSessionTemplate sqlSession;

	public ArrayList<Customer> selectOwnCust(HashMap<String, Object> map) {
		return new ArrayList<Customer>(sqlSession.selectList("cust.selectOwnCust",map));
	}
}
