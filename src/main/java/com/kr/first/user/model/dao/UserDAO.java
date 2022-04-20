package com.kr.first.user.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.kr.first.user.model.vo.User;

@Repository
public class UserDAO {

	@Autowired
	@Qualifier(value = "sqlSessionTemplate")
	private SqlSessionTemplate sqlSession;

	public User selectLoginUser(User user) {
		return sqlSession.selectOne("user.selectLoginUser",user);
	}
}
