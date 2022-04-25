package com.kr.first.customer.model.vo;

import java.sql.Date;

public class CustHt {

	private String custNo;		//고객번호
	private String custNm;		//고객이름			- JOIN
	private String chgDt;		//변경일자
	private int chgSeq;			//일련번호
	private String chgCd;		//변경코드
	private String chgBfCnt;	//변경전내용
	private String chgAftCnt;	//변경후내용
	private Date fstRegDt;		//최초등록일자
	private String fstUserId;	//최초등록자(아이디)
	private String lstUpdDt;		//최종수정일자
	private String lstUpdId;	//최종수정자
	private String lstUpdNm;	//최종수정자(이름)	- JOIN
	
	//생성자
	public CustHt() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CustHt(String custNo, String chgDt, int chgSeq, String chgCd, String chgBfCnt, String chgAftCnt,
			Date fstRegDt, String fstUserId, String lstUpdDt, String lstUpdId, String lstUpdNm) {
		super();
		this.custNo = custNo;
		this.chgDt = chgDt;
		this.chgSeq = chgSeq;
		this.chgCd = chgCd;
		this.chgBfCnt = chgBfCnt;
		this.chgAftCnt = chgAftCnt;
		this.fstRegDt = fstRegDt;
		this.fstUserId = fstUserId;
		this.lstUpdDt = lstUpdDt;
		this.lstUpdId = lstUpdId;
		this.lstUpdNm = lstUpdNm;
	}
	
	//getter setter
	public String getCustNo() {
		return custNo;
	}
	public void setCustNo(String custNo) {
		this.custNo = custNo;
	}
	public String getChgDt() {
		return chgDt;
	}
	public void setChgDt(String chgDt) {
		this.chgDt = chgDt;
	}
	public int getChgSeq() {
		return chgSeq;
	}
	public void setChgSeq(int chgSeq) {
		this.chgSeq = chgSeq;
	}
	public String getChgCd() {
		return chgCd;
	}
	public void setChgCd(String chgCd) {
		this.chgCd = chgCd;
	}
	public String getChgBfCnt() {
		return chgBfCnt;
	}
	public void setChgBfCnt(String chgBfCnt) {
		this.chgBfCnt = chgBfCnt;
	}
	public String getChgAftCnt() {
		return chgAftCnt;
	}
	public void setChgAftCnt(String chgAftCnt) {
		this.chgAftCnt = chgAftCnt;
	}
	public Date getFstRegDt() {
		return fstRegDt;
	}
	public void setFstRegDt(Date fstRegDt) {
		this.fstRegDt = fstRegDt;
	}
	public String getFstUserId() {
		return fstUserId;
	}
	public void setFstUserId(String fstUserId) {
		this.fstUserId = fstUserId;
	}
	public String getLstUpdDt() {
		return lstUpdDt;
	}
	public void setLstUpdDt(String lstUpdDt) {
		this.lstUpdDt = lstUpdDt;
	}
	public String getLstUpdId() {
		return lstUpdId;
	}
	public void setLstUpdId(String lstUpdId) {
		this.lstUpdId = lstUpdId;
	}
	public String getLstUpdNm() {
		return lstUpdNm;
	}
	public void setLstUpdNm(String lstUpdNm) {
		this.lstUpdNm = lstUpdNm;
	}
	
	//toString
	@Override
	public String toString() {
		return "CustHt [custNo=" + custNo + ", chgDt=" + chgDt + ", chgSeq=" + chgSeq + ", chgCd=" + chgCd
				+ ", chgBfCnt=" + chgBfCnt + ", chgAftCnt=" + chgAftCnt + ", fstRegDt=" + fstRegDt + ", fstUserId="
				+ fstUserId + ", lstUpdDt=" + lstUpdDt + ", lstUpdId=" + lstUpdId + ", lstUpdNm=" + lstUpdNm + "]";
	}
	
	
}
