package com.kr.first.user.model.dao;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.kr.first.customer.model.vo.CustVO;
import com.kr.first.user.model.vo.UserVO;

@Repository
public class UserDAO {

	@Autowired
	@Qualifier(value = "sqlSessionTemplate")
	private SqlSessionTemplate sqlSession;

	//로그인
	public UserVO selectLoginUser(UserVO user) throws Exception {
		return sqlSession.selectOne("user.selectLoginUser",user);
	}
}
