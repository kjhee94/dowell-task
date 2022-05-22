package com.kr.first.customer.model.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kr.first.customer.model.dao.CustDAO;
import com.kr.first.customer.model.vo.CustHtVO;
import com.kr.first.customer.model.vo.CustVO;
import com.kr.first.customer.model.vo.PrtVO;

@Service
public class CustServiceImpl implements CustService {

	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private CustDAO cDAO;

	//고객조회 페이지 초기세팅 메소드
	@Override
	public HashMap<String, Object> custList() throws Exception {

		//고객상태 조회 list(라디오버튼 생성)
		log.info("=================>>고객상태 조회");
		ArrayList<CustVO> list = cDAO.selectCustSs();
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
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("dtList", list);
		map.put("jsDtTo", todayDate);
		map.put("jsDtFrom", agoDate);
		
		return map;
	}
	
	//고객 전체 검색 메소드
	@Override
	public HashMap<String, Object> selectSearchCust(HashMap<String, Object> map) throws Exception {
		
		//고객 전체 검색 목록 list에 담기
		log.info("=================>>고객 전체 검색 조회");
		ArrayList<CustVO> list = cDAO.selectSearchCust(map);
		log.info("=================>>고객 전체 검색 조회 성공");
		
		//반환할 객체 선언
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("list",list);
		resultMap.put("result",true);
		
		return resultMap;
	}
	
	//거래처 검색 메소드
	@Override
	public HashMap<String, Object> selectPrt(String keyword) throws Exception {
		
		//거래처 검색 목록 list에 담기
		log.info("=================>>거래처 팝업 검색 조회");
		ArrayList<PrtVO> list = cDAO.selectPrt(keyword);
		log.info("=================>>거래처 팝업 검색 조회 성공");
		
		//반환할 객체 선언
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("list",list);
		resultMap.put("result",true);
		
		return resultMap;
	}

	//고객 검색 메소드
	@Override
	public HashMap<String, Object> selectCust(HashMap<String, Object> map) throws Exception {
		
		//고객 검색 목록 list에 담기
		log.info("=================>>고객 팝업 검색 조회");
		ArrayList<CustVO> list = cDAO.selectCust(map);
		log.info("=================>>고객 팝업 검색 조회 성공");
		
		//반환할 객체 선언
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("list",list);
		resultMap.put("result",true);
		
		return resultMap;
	}

	//고객 이력 조회 메소드
	@Override
	public HashMap<String, Object> selectCustHt(String custNo) throws Exception {
		
		//고객 이름 가져오기
		String custNm = cDAO.selectCustNm(custNo);
		log.info("고객이름 : "+custNm);
		
		//고객이력 목록 list에 담기
		log.info("=================>>고객 이력 조회");
		ArrayList<CustHtVO> list = cDAO.selectCustHt(custNo);
		log.info("=================>>고객 이력 조회 성공");
		
		//반환할 객체 선언
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("list",list);
		resultMap.put("custNm",custNm);
		resultMap.put("result",true);
		
		return resultMap;
	}

	//고객등록 팝업창  초기세팅 메소드
	@Override
	public HashMap<String, Object> custAddPop() throws Exception {
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		//고객등록시 필요한 상태코드명 조회
		//직업코드 조회 list(select-option 생성)
		log.info("=================>>직업 조회");
		ArrayList<CustVO> pList = cDAO.selectPoc();
		log.info("=================>>직업 조회 성공");
		
		//성별 조회 list(라디오버튼 생성)
		log.info("=================>>성별 조회");
		ArrayList<CustVO> sList = cDAO.selectSex();
		log.info("=================>>성별 조회 성공");
		
		//우편물수령 조회 list(라디오버튼 생성)
		log.info("=================>>우편물수령 조회");
		ArrayList<CustVO> gList = cDAO.selectPsmtGrc();
		log.info("=================>>우편물수령 조회 성공");
		
		//map에 삽입
		map.put("pList", pList);
		map.put("sList", sList);
		map.put("gList", gList);
		
		return map;
	}

	//휴대폰번호 중복체크 메소드
	@Override
	public HashMap<String, Object> mblNoCheck(HashMap<String, Object> map) throws Exception {
		//직업코드 조회 list(select-option 생성)
		log.info("=================>>핸드폰 번호 조회");
		String result = cDAO.selectmblNo(map);
		
		//반환할 객체 선언
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		
		if(result==null) {
			log.info("=================>>핸드폰 번호 사용 가능");
			resultMap.put("check","Y");
		}else if(result.equals("MINE")) {
			log.info("=================>>핸드폰 번호 사용 가능(기존 내 번호)");
			resultMap.put("check","Y");
		}else {
			log.info("=================>>핸드폰 번호 사용 불가능(중복번호)");
			resultMap.put("check","N");
		}
		resultMap.put("result",true);
		
		return resultMap;
	}

	//고객 등록 메소드(팝업)
	@Override
	public HashMap<String, Object> insertCust(HashMap<String, Object> map) throws Exception {
		//고객 등록 결과 int에 담기(1:성공 / 0:실패)
		log.info("=================>>고객 등록");
		int result = cDAO.insertCust(map);
		
		//반환할 객체 선언
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		
		if(result>0) {	//등록 성공
			log.info("=================>>고객 등록 성공");
			resultMap.put("seccessYN","Y");
		}else {	//등록 실패
			log.info("=================>>고객 등록 실패");
			resultMap.put("seccessYN","N");
		}
		resultMap.put("result",true);
		
		return resultMap;
	}

	//고객 정보 조회  페이지 초기세팅 메소드
	@Override
	public HashMap<String, Object> custInfo(String custNo) throws Exception {
		
		//고객 정보 조회시 필요한 상태코드명 조회
		//성별 조회 list(라디오버튼 생성)
		log.info("=================>>성별 조회");
		ArrayList<CustVO> sList = cDAO.selectSex();
		log.info("=================>>성별 조회 성공");
		
		//직업코드 조회 list(select-option 생성)
		log.info("=================>>직업 조회");
		ArrayList<CustVO> pList = cDAO.selectPoc();
		log.info("=================>>직업 조회 성공");
		
		//우편물수령 조회 list(라디오버튼 생성)
		log.info("=================>>우편물수령 조회");
		ArrayList<CustVO> gList = cDAO.selectPsmtGrc();
		log.info("=================>>우편물수령 조회 성공");
		
		//고객상태 조회 list(라디오버튼 생성)
		log.info("=================>>고객상태 조회");
		ArrayList<CustVO> cList = cDAO.selectCustSs();
		log.info("=================>>고객상태 조회 성공");
		
		//map에 삽입
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		map.put("custNo", custNo);
		map.put("sList", sList);
		map.put("pList", pList);
		map.put("gList", gList);
		map.put("cList", cList);
		
		return map;
	}

	//고객 정보 조회 메소드
	@Override
	public HashMap<String, Object> selectOneCust(String custNo) throws Exception {
		
		//고객이력 목록 list에 담기
		log.info("=================>>고객 정보 조회");
		CustVO cust = cDAO.selectOneCust(custNo);
		log.info("=================>>고객 정보 조회 성공");
		
		//반환할 객체 선언
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("cust",cust);
		resultMap.put("custNm",cust.getCustNm());
		resultMap.put("result",true);
		
		return resultMap;
	}

	//고객 정보 수정  메소드
	@Override
	@Transactional(rollbackFor = {Exception.class})
	public HashMap<String, Object> updateCust(Map<String, Object> map) throws Exception {
		
		//고객 수정 결과 int에 담기(1:성공 / 0:실패)
		log.info("=================>>고객 정보 수정");
		int resultUpdate = cDAO.updateCust(map);
		
		//고객 이력 추가 결과 int에 담기(1:성공 / 0:실패)
//		log.info("=================>>고객 이력 등록");
//		int resultInsert = cDAO.insertCustHt(map);
		
		//반환할 객체 선언
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		if(resultUpdate>0) {	//등록 성공
//			 && resultInsert>0
			log.info("=================>>고객 정보 수정 성공");
			resultMap.put("seccessYN","Y");
		}else {	//수정 실패
			log.info("=================>>고객 정보 수정 실패");
			resultMap.put("seccessYN","N");
		}
		resultMap.put("result",true);
		
		return resultMap;
	}
}
