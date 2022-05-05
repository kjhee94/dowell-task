package com.kr.first.user.model.service;

import java.util.HashMap;

import com.kr.first.user.model.vo.User;

public interface UserService {
	
	//로그인 메소드
	HashMap<String, Object> userLogin(User user);
}
