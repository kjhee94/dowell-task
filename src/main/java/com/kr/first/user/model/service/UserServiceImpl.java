package com.kr.first.user.model.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kr.first.customer.model.vo.Customer;
import com.kr.first.user.model.dao.UserDAO;
import com.kr.first.user.model.vo.User;

@Service
public class UserServiceImpl implements UserService {

	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private UserDAO uDAO;

	//로그인 메소드
	@Override
	public HashMap<String, Object> userLogin(User user) {
		
		//사용자의 정보 User 객체에 담아 일치하는 회원 가져오기
		User u = uDAO.selectLoginUser(user);
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		if(u!=null) { //일치하는 회원이 있으면
			//고객상태 조회 list에 담기(라디오버튼 생성)
			log.info("=================>>고객상태 조회");
			ArrayList<Customer> list = uDAO.selectCustSs();
			log.info("=================>>고객상태 조회 성공");
			
			//날짜 default값 가져오기
			Calendar c = Calendar.getInstance();
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			//오늘날짜
			String todayDate = sdf.format(c.getTime());
			//일주일전
			c.add(c.DATE, -7); //요일기준으로 -7 차이나는 날짜
			String agoDate = sdf.format(c.getTime());
			
			//map에 넣기
			map.put("user", u);
			map.put("dtList", list);
			map.put("jsDtTo", todayDate);
			map.put("jsDtFrom", agoDate);
			map.put("result", true);
			
		} else { //일치하는 회원이 없으면
			//map에 넣기
			map.put("msg", "아이디 비밀번호를 재설정 해주세요");
			map.put("location", "/");
			map.put("result", false);
		}
		return map;
	}
}
