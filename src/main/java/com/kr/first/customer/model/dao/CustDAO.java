package com.kr.first.customer.model.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.kr.first.customer.model.vo.CustHtVO;
import com.kr.first.customer.model.vo.CustVO;
import com.kr.first.customer.model.vo.PrtVO;

@Repository
public class CustDAO {

	@Autowired
	@Qualifier(value = "sqlSessionTemplate")
	private SqlSessionTemplate sqlSession;

	//고객 전체 검색 메소드
	public ArrayList<CustVO> selectSearchCust(Map<String, Object> map) throws Exception {
		return new ArrayList<CustVO>(sqlSession.selectList("cust.selectSearchCust",map));
	}

	//거래처 검색 메소드
	public ArrayList<PrtVO> selectPrt(String keyword) {
		return new ArrayList<PrtVO>(sqlSession.selectList("cust.selectPrt",keyword));
	}

	//고객 검색 메소드
	public ArrayList<CustVO> selectCust(CustVO cust) {
		return new ArrayList<CustVO>(sqlSession.selectList("cust.selectCust",cust));
	}

	//고객 이름 조회 메소드
	public String selectCustNm(String custNo) {
		return sqlSession.selectOne("cust.selectCustNm",custNo);
	}
	
	//고객 이력 조회 메소드
	public ArrayList<CustHtVO> selectCustHt(String custNo) {
		return new ArrayList<CustHtVO>(sqlSession.selectList("cust.selectCustHt",custNo));
	}

}
