package com.kr.first.user.model.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kr.first.customer.model.dao.CustDAO;
import com.kr.first.customer.model.vo.CustVO;
import com.kr.first.user.model.dao.UserDAO;
import com.kr.first.user.model.vo.UserVO;

@Service
public class UserServiceImpl implements UserService {

	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private UserDAO uDAO;
	
	@Autowired
	private CustDAO cDAO;

	//로그인 메소드
	@Override
	public HashMap<String, Object> userLogin(UserVO user) throws Exception {
		
		//사용자의 정보 User 객체에 담아 일치하는 회원 가져오기
		log.info("=================>>로그인 회원 조회");
		UserVO u = uDAO.selectLoginUser(user);
		
		//컨트롤러로 보낼  HashMap 선언
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		if(u!=null) { //일치하는 회원이 있으면
			log.info("=================>>로그인 회원 조회 성공");
			
			//map에 삽입
			map.put("user", u);
			map.put("location", "/customer/custList.do");
			map.put("result", true);
			
		} else { //일치하는 회원이 없으면
			log.info("=================>>회원 조회 실패");
			
			//map에 삽입
			map.put("msg", "아이디 비밀번호를 재입력 해주세요");
			map.put("location", "/");
			map.put("result", false);
		}
		return map;
	}
}
