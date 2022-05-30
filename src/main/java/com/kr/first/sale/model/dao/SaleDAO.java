package com.kr.first.sale.model.dao;

import java.util.ArrayList;
import java.util.HashMap;

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

	//판매 상세 조회 메소드
	public ArrayList<SaleDtVO> selectSaleDt(HashMap<String, Object> map) throws Exception {
		return new ArrayList<SaleDtVO>(sqlSession.selectList("sale.selectSaleDt",map));
	}

}
