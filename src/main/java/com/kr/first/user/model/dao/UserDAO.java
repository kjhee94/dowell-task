package com.kr.first.user.model.dao;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.kr.first.customer.model.vo.Customer;
import com.kr.first.user.model.vo.User;

@Repository
public class UserDAO {

	@Autowired
	@Qualifier(value = "sqlSessionTemplate")
	private SqlSessionTemplate sqlSession;

	//로그인
	public User selectLoginUser(User user) {
		return sqlSession.selectOne("user.userLogin",user);
	}

	//고객상태 조회
	public ArrayList<Customer> selectCustSs() {
		// TODO Auto-generated method stub
		return new ArrayList<Customer>(sqlSession.selectList("user.selectCustSs"));
	}
}
