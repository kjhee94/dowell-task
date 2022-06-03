package com.kr.first.sale.model.dao;

import java.util.ArrayList;
import java.util.HashMap;

import org.apache.ibatis.annotations.Insert;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.kr.first.sale.model.vo.SaleDtVO;
import com.kr.first.sale.model.vo.SaleVO;

@Repository
public class SaleDAO {

	@Autowired
	@Qualifier(value = "sqlSessionTemplate")
	private SqlSessionTemplate sqlSession;

	//고객 판매 조회 메소드
	public ArrayList<SaleVO> selectSearchSale(HashMap<String, Object> map) throws Exception {
		return new ArrayList<SaleVO>(sqlSession.selectList("sale.selectSearchSale",map));
	}
	
	//판매구분명 조회
	public ArrayList<SaleVO> selectSalTp() {
		return new ArrayList<SaleVO>(sqlSession.selectList("sale.selectSalTp"));
	}

	//카드회사명 조회
	public ArrayList<SaleVO> selectCrdCo() {
		return new ArrayList<SaleVO>(sqlSession.selectList("sale.selectCrdCo"));
	}
	
	//매장 재고 조회 메소드(팝업)
	public ArrayList<SaleDtVO> selectPrd(HashMap<String, Object> map) {
		return new ArrayList<SaleDtVO>(sqlSession.selectList("sale.selectPrd",map));
	}

	//판매 상세 조회 메소드
	public ArrayList<SaleDtVO> selectSaleDt(HashMap<String, Object> map) throws Exception {
		return new ArrayList<SaleDtVO>(sqlSession.selectList("sale.selectSaleDt",map));
	}

	//반품할 고객 판매 조회 메소드
	public ArrayList<SaleVO> selectOneSale(HashMap<String, Object> map) {
		return new ArrayList<SaleVO>(sqlSession.selectList("sale.selectOneSale",map));
	}
	
	//반품 등록 메소드
	public int insertRtn(HashMap<String, Object> map) {
		return sqlSession.insert("sale.insertRtn",map);
	}

	//반품할 판매 상세 조회 메소드
	public ArrayList<SaleDtVO> selectOneSaleDt(HashMap<String, Object> map) {
		return new ArrayList<SaleDtVO>(sqlSession.selectList("sale.selectOneSaleDt",map));
	}

	//판매 상세 등록 메소드(반품)
	public int insertRtnDt(HashMap<String, Object> map) {
		return sqlSession.insert("sale.insertRtnDt",map);
	}

	//현재고 수정
	public int updateIvco(HashMap<String, Object> map) {
		return sqlSession.update("sale.updateIvco",map);
	}
}
