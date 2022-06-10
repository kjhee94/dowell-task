package com.kr.first.sale.model.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

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
	
	//판매구분명 조회(등록팝업)
	public ArrayList<SaleVO> selectSalTp() throws Exception {
		return new ArrayList<SaleVO>(sqlSession.selectList("sale.selectSalTp"));
	}

	//카드회사명 조회(등록팝업)
	public ArrayList<SaleVO> selectCrdCo() throws Exception {
		return new ArrayList<SaleVO>(sqlSession.selectList("sale.selectCrdCo"));
	}
	
	//매장 재고 조회 메소드(상품팝업)
	public ArrayList<SaleDtVO> selectPrd(HashMap<String, Object> map) throws Exception {
		return new ArrayList<SaleDtVO>(sqlSession.selectList("sale.selectPrd",map));
	}
	
	//판매 등록 메소드(등록팝업)
	public int insertSale(HashMap<String, Object> map) throws Exception {
		return sqlSession.insert("sale.insertSale",map);
	}

	//판매상세 등록 메소드(등록팝업)
	public int insertSaleDt(HashMap<String, Object> map) throws Exception {
		return sqlSession.insert("sale.insertSaleDt",map);
	}

	//재고 수정(등록) 메소드(등록팝업)
	public int updateIvco(HashMap<String, Object> map) throws Exception {
		return sqlSession.update("sale.updateIvco",map);
	}
	
	//원코드 조회(반품팝업)
	public ArrayList<SaleVO> selectOrg(HashMap<String, Object> map) throws Exception {
		return new ArrayList<SaleVO>(sqlSession.selectList("sale.selectOrg",map));
	}

	//판매 상세 조회 메소드(반품팝업)
	public ArrayList<SaleDtVO> selectSaleDt(HashMap<String, Object> map) throws Exception {
		return new ArrayList<SaleDtVO>(sqlSession.selectList("sale.selectSaleDt",map));
	}

	//반품할 고객 판매 조회 메소드(반품팝업)
	public ArrayList<SaleVO> selectOneSale(HashMap<String, Object> map) throws Exception {
		return new ArrayList<SaleVO>(sqlSession.selectList("sale.selectOneSale",map));
	}
	
	//반품 등록 메소드(반품팝업)
	public int insertRtn(HashMap<String, Object> map) throws Exception {
		return sqlSession.insert("sale.insertRtn",map);
	}

	//반품할 판매 상세 조회 메소드(반품팝업)
	public ArrayList<SaleDtVO> selectOneSaleDt(HashMap<String, Object> map) throws Exception {
		return new ArrayList<SaleDtVO>(sqlSession.selectList("sale.selectOneSaleDt",map));
	}

	//판매 상세 등록 메소드(반품팝업)
	public int insertRtnDt(HashMap<String, Object> map) throws Exception {
		return sqlSession.insert("sale.insertRtnDt",map);
	}

	//재고 수정(반품) 메소드(반품팝업)
	public int updateRtnIvco(HashMap<String, Object> map) throws Exception {
		return sqlSession.update("sale.updateRtnIvco",map);
	}
}
