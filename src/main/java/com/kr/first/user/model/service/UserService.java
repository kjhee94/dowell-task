package com.kr.first.user.model.service;

import com.kr.first.user.model.vo.User;

public interface UserService {

	//로그인 메소드
	User selectLoginUser(User user);

}
