package com.kr.first.customer.model.dao;

import java.util.ArrayList;
import java.util.HashMap;

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

	//고객상태 조회
	public ArrayList<CustVO> selectCustSs() throws Exception {
		return new ArrayList<CustVO>(sqlSession.selectList("cust.selectCustSs"));
	}
	
	//고객 전체 검색 메소드
	public ArrayList<CustVO> selectSearchCust(HashMap<String, Object> map) throws Exception {
		return new ArrayList<CustVO>(sqlSession.selectList("cust.selectSearchCust",map));
	}

	//거래처 검색 메소드
	public ArrayList<PrtVO> selectPrt(String keyword) throws Exception  {
		return new ArrayList<PrtVO>(sqlSession.selectList("cust.selectPrt",keyword));
	}

	//고객 검색 메소드
	public ArrayList<CustVO> selectCust(HashMap<String, Object> map) throws Exception {
		return new ArrayList<CustVO>(sqlSession.selectList("cust.selectCust",map));
	}

	//고객 이름 조회 메소드
	public String selectCustNm(String custNo) throws Exception {
		return sqlSession.selectOne("cust.selectCustNm",custNo);
	}
	
	//고객 이력 조회 메소드
	public ArrayList<CustHtVO> selectCustHt(String custNo) throws Exception {
		return new ArrayList<CustHtVO>(sqlSession.selectList("cust.selectCustHt",custNo));
	}

	//직업 조회
	public ArrayList<CustVO> selectPoc() throws Exception {
		return new ArrayList<CustVO>(sqlSession.selectList("cust.selectPoc"));
	}

	//성별 조회
	public ArrayList<CustVO> selectSex() throws Exception {
		return new ArrayList<CustVO>(sqlSession.selectList("cust.selectSex"));
	}

	//우편물수령 조회
	public ArrayList<CustVO> selectPsmtGrc() throws Exception {
		return new ArrayList<CustVO>(sqlSession.selectList("cust.selectPsmtGrc"));
	}

	//휴대폰번호 중복체크
	public String selectmblNo(HashMap<String, Object> map) throws Exception {
		return sqlSession.selectOne("cust.selectmblNo",map);
	}

	//고객 등록
	public int insertCust(HashMap<String, Object> map) throws Exception {
		return sqlSession.insert("cust.insertCust", map);
	}

	//고객 정보 조회
	public CustVO selectOneCust(String custNo) {
		return sqlSession.selectOne("cust.selectOneCust",custNo);
	}
}
