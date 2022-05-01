package com.kr.first.user.model.service;

import java.lang.annotation.Annotation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kr.first.user.model.dao.UserDAO;
import com.kr.first.user.model.vo.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDAO uDAO;

	//로그인 메소드
	@Override
	public User selectLoginUser(User user) {
		return uDAO.selectLoginUser(user);
	}

}
