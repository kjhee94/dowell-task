package com.kr.first.sale.model.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kr.first.customer.model.vo.CustVO;
import com.kr.first.sale.model.dao.SaleDAO;
import com.kr.first.sale.model.vo.SaleDtVO;
import com.kr.first.sale.model.vo.SaleVO;

@Service
public class SaleServiceImpl implements SaleService {

	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private SaleDAO sDAO;

	//고객 판매 조회 메소드
	@Override
	public HashMap<String, Object> selectSearchSale(HashMap<String, Object> map) throws Exception {
		
		//고객 판매 조회 list
		log.info("=================>>고객 판매 조회");
		ArrayList<SaleVO> list = sDAO.selectSearchSale(map);
		log.info("=================>>고객 판매 조회 성공");
		
		//반환할 객체 선언
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("list", list);
		resultMap.put("result",true);
		
		return resultMap;
	}
	
	//판매 등록 팝업 세부코드명 조회 메소드(팝업)
	@Override
	public HashMap<String, Object> saleAddPop() throws Exception {
		
		log.info("=================>>세부코드명 조회");
		//판매구분명 조회 list
		ArrayList<SaleVO> stList = sDAO.selectSalTp();
		
		//카드회사명 조회 list
		ArrayList<SaleVO> ccList = sDAO.selectCrdCo();
		log.info("=================>>세부코드명 조회 성공");
		
		//가입날짜 조회 default값
		Calendar c = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		//오늘날짜
		String today = sdf.format(c.getTime());
		
		//map에 삽입
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("stList", stList);
		map.put("ccList", ccList);
		map.put("salDt", today);
		
		return map;
	}
	
	//매장 재고 조회 메소드(팝업)
	@Override
	public HashMap<String, Object> selectPrd(HashMap<String, Object> map) throws Exception {
		
		//매장 재고 조회 list
		log.info("=================>>매장 재고 조회");
		ArrayList<SaleDtVO> list = sDAO.selectPrd(map);
		System.out.println(list);
		log.info("=================>>매장 재고 조회 성공");
		
		//반환할 객체 선언
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("list", list);
		resultMap.put("result",true);
		
		return resultMap;
	}

	//판매 상세 조회 메소드
	@Override
	public HashMap<String, Object> selectSaleDt(HashMap<String, Object> map) throws Exception {
		
		//판매 상세 조회 list
		log.info("=================>>판매 상세 조회");
		ArrayList<SaleDtVO> list = sDAO.selectSaleDt(map);
		System.out.println(list);
		log.info("=================>>판매 상세 조회 성공");
		
		//반환할 객체 선언
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("list", list);
		resultMap.put("result",true);
		
		return resultMap;
	}

	//반품처리 메소드
	@Override
	@Transactional(rollbackFor = {Exception.class})
	public HashMap<String, Object> insertReturn(HashMap<String, Object> map) throws Exception {
		
		//반품 결과 int에 담기(1:성공 / 0:실패)
		log.info("=================>>반품 등록");
		//변경할 판매목록 list에 담기
		ArrayList<SaleVO> slist = sDAO.selectOneSale(map);
		System.out.println(slist);
		map.put("slist", slist);
		int resultRtnInsert = sDAO.insertRtn(map);
		
		//반품상세 추가 결과 int에 담기(1:성공 / 0:실패)
		log.info("=================>>반품상세 등록");
		ArrayList<SaleDtVO> sdlist = sDAO.selectOneSaleDt(map);
		System.out.println(sdlist);
		map.put("sdlist", sdlist);
		int resultRtnDtInsert = sDAO.insertRtnDt(map);
		
		//재고 수정 결과 int에 담기(1:성공 / 0:실패)
		log.info("=================>>재고 수정");
		int resultUpdate = sDAO.updateIvco(map);
		System.out.println(resultUpdate);
		
		//반환할 객체 선언
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		if(resultRtnInsert>0 && resultRtnDtInsert>0 && resultUpdate>0) {	//등록 성공		 
			log.info("=================>>반품 등록 & 반품상세 등록 & 재고 수정 성공");
			resultMap.put("seccessYN","Y");
		}else {	//수정 실패
			log.info("=================>>반품 등록 & 반품상세 등록 & 재고 수정 실패");
			resultMap.put("seccessYN","N");
		}
		resultMap.put("result",true);
		
		return resultMap;
	}
}
