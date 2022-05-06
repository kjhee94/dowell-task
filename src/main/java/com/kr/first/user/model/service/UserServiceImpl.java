package com.kr.first.user.model.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kr.first.customer.model.vo.CustVO;
import com.kr.first.user.model.dao.UserDAO;
import com.kr.first.user.model.vo.UserVO;

@Service
public class UserServiceImpl implements UserService {

	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private UserDAO uDAO;

	//로그인 메소드
	@Override
	public HashMap<String, Object> userLogin(UserVO user) {
		
		//컨트롤러로 보낼  HashMap 선언
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		try { //Exception 발생 구문 
			//사용자의 정보 User 객체에 담아 일치하는 회원 가져오기
			log.info("=================>>회원 조회");
			UserVO u = uDAO.selectLoginUser(user);
			
			if(u!=null) { //일치하는 회원이 있으면
				log.info("=================>>회원 조회 성공");
				
				//고객상태 조회 list(라디오버튼 생성)
				log.info("=================>>고객상태 조회");
				ArrayList<CustVO> list = uDAO.selectCustSs();
				log.info("=================>>고객상태 조회 성공");
				
				//가입날짜 조회 default값
				Calendar c = Calendar.getInstance();
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
				//오늘날짜
				String todayDate = sdf.format(c.getTime());
				//일주일전
				c.add(c.DATE, -7); //요일기준으로 -7 차이나는 날짜
				String agoDate = sdf.format(c.getTime());
				
				//map에 삽입
				map.put("user", u);
				map.put("dtList", list);
				map.put("jsDtTo", todayDate);
				map.put("jsDtFrom", agoDate);
				map.put("result", true);
				
			} else { //일치하는 회원이 없으면
				log.info("=================>>회원 조회 실패");
				
				//map에 삽입
				map.put("msg", "아이디 비밀번호를 재입력 해주세요");
				map.put("location", "/");
				map.put("result", false);
			}
		} catch (Exception e) { //Exception 발생시 처리
			//Exception 로그
			e.printStackTrace();
			log.error("예외메시지 : " + e.getMessage());
			
			//map에 삽입
			map.put("msg", "로그인에 실패했습니다. 관리자에게 문의해주세요.");
			map.put("location", "/");
			map.put("result", false);
		}
		return map;
	}
}
