package com.kr.first.sale.model.vo;

import java.util.Date;

public class SaleDtVO {

	private String seqNum;		//순번
	private String prtCd;		//매장코드
	private String prtNm;		//매장명		-JOIN
	private String salDt;		//판매일자
	private String salNo;		//판매번호
	private String salSeq;		//판매일련번호
	private String prdCd;		//상품코드
	private String prdNm;		//상품명		-JOIN
	private String ivcoQty;		//재고수량		-JOIN
	private String prdCsmrUpr;	//소비자단가
	private String prdSsCd;		//상품유형코드	-JOIN
	private String salQty;		//판매수량
	private String salAmt;		//판매금액
	private String salVosAmt;	//판매공급가액
	private String salVatAmt;	//판매부가세액
	private Date fstRegDt;		//최초등록일자
	private String fstRegDtFm;	//최초등록일자
	private String fstUserId;	//최초등록자
	private String fstUserNm;	//최초등록자	-JOIN
	private Date lstUpdDt;		//최종수정일자
	private String lstUpdDtFm;	//최초등록일자
	private String lstUpdId;	//최종수정자
	private String lstUpdNm;	//최종수정자	-JOIN
	
	//생성자
	public SaleDtVO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public SaleDtVO(String seqNum, String prtCd, String prtNm, String salDt, String salNo, String salSeq, String prdCd,
			String prdNm, String ivcoQty, String prdCsmrUpr, String prdSsCd, String salQty, String salAmt,
			String salVosAmt, String salVatAmt, Date fstRegDt, String fstRegDtFm, String fstUserId, String fstUserNm,
			Date lstUpdDt, String lstUpdDtFm, String lstUpdId, String lstUpdNm) {
		this.seqNum = seqNum;
		this.prtCd = prtCd;
		this.prtNm = prtNm;
		this.salDt = salDt;
		this.salNo = salNo;
		this.salSeq = salSeq;
		this.prdCd = prdCd;
		this.prdNm = prdNm;
		this.ivcoQty = ivcoQty;
		this.prdCsmrUpr = prdCsmrUpr;
		this.prdSsCd = prdSsCd;
		this.salQty = salQty;
		this.salAmt = salAmt;
		this.salVosAmt = salVosAmt;
		this.salVatAmt = salVatAmt;
		this.fstRegDt = fstRegDt;
		this.fstRegDtFm = fstRegDtFm;
		this.fstUserId = fstUserId;
		this.fstUserNm = fstUserNm;
		this.lstUpdDt = lstUpdDt;
		this.lstUpdDtFm = lstUpdDtFm;
		this.lstUpdId = lstUpdId;
		this.lstUpdNm = lstUpdNm;
	}


	//getter setter
	public String getSeqNum() {
		return seqNum;
	}
	public void setSeqNum(String seqNum) {
		this.seqNum = seqNum;
	}
	public String getPrtCd() {
		return prtCd;
	}
	public void setPrtCd(String prtCd) {
		this.prtCd = prtCd;
	}
	public String getPrtNm() {
		return prtNm;
	}
	public void setPrtNm(String prtNm) {
		this.prtNm = prtNm;
	}
	public String getSalDt() {
		return salDt;
	}
	public void setSalDt(String salDt) {
		this.salDt = salDt;
	}
	public String getSalNo() {
		return salNo;
	}
	public void setSalNo(String salNo) {
		this.salNo = salNo;
	}
	public String getSalSeq() {
		return salSeq;
	}
	public void setSalSeq(String salSeq) {
		this.salSeq = salSeq;
	}
	public String getPrdCd() {
		return prdCd;
	}
	public void setPrdCd(String prdCd) {
		this.prdCd = prdCd;
	}
	public String getPrdNm() {
		return prdNm;
	}
	public void setPrdNm(String prdNm) {
		this.prdNm = prdNm;
	}
	public String getIvcoQty() {
		return ivcoQty;
	}
	public void setIvcoQty(String ivcoQty) {
		this.ivcoQty = ivcoQty;
	}
	public String getPrdCsmrUpr() {
		return prdCsmrUpr;
	}
	public void setPrdCsmrUpr(String prdCsmrUpr) {
		this.prdCsmrUpr = prdCsmrUpr;
	}
	public String getPrdSsCd() {
		return prdSsCd;
	}
	public void setPrdSsCd(String prdSsCd) {
		this.prdSsCd = prdSsCd;
	}
	public String getSalQty() {
		return salQty;
	}
	public void setSalQty(String salQty) {
		this.salQty = salQty;
	}
	public String getSalAmt() {
		return salAmt;
	}
	public void setSalAmt(String salAmt) {
		this.salAmt = salAmt;
	}
	public String getSalVosAmt() {
		return salVosAmt;
	}
	public void setSalVosAmt(String salVosAmt) {
		this.salVosAmt = salVosAmt;
	}
	public String getSalVatAmt() {
		return salVatAmt;
	}
	public void setSalVatAmt(String salVatAmt) {
		this.salVatAmt = salVatAmt;
	}
	public Date getFstRegDt() {
		return fstRegDt;
	}
	public void setFstRegDt(Date fstRegDt) {
		this.fstRegDt = fstRegDt;
	}
	public String getFstRegDtFm() {
		return fstRegDtFm;
	}
	public void setFstRegDtFm(String fstRegDtFm) {
		this.fstRegDtFm = fstRegDtFm;
	}
	public String getFstUserId() {
		return fstUserId;
	}
	public void setFstUserId(String fstUserId) {
		this.fstUserId = fstUserId;
	}
	public String getFstUserNm() {
		return fstUserNm;
	}
	public void setFstUserNm(String fstUserNm) {
		this.fstUserNm = fstUserNm;
	}
	public Date getLstUpdDt() {
		return lstUpdDt;
	}
	public void setLstUpdDt(Date lstUpdDt) {
		this.lstUpdDt = lstUpdDt;
	}
	public String getLstUpdDtFm() {
		return lstUpdDtFm;
	}
	public void setLstUpdDtFm(String lstUpdDtFm) {
		this.lstUpdDtFm = lstUpdDtFm;
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
		return "SaleDtVO [seqNum=" + seqNum + ", prtCd=" + prtCd + ", prtNm=" + prtNm + ", salDt=" + salDt + ", salNo="
				+ salNo + ", salSeq=" + salSeq + ", prdCd=" + prdCd + ", prdNm=" + prdNm + ", ivcoQty=" + ivcoQty
				+ ", prdCsmrUpr=" + prdCsmrUpr + ", prdSsCd=" + prdSsCd + ", salQty=" + salQty + ", salAmt=" + salAmt
				+ ", salVosAmt=" + salVosAmt + ", salVatAmt=" + salVatAmt + ", fstRegDt=" + fstRegDt + ", fstRegDtFm="
				+ fstRegDtFm + ", fstUserId=" + fstUserId + ", fstUserNm=" + fstUserNm + ", lstUpdDt=" + lstUpdDt
				+ ", lstUpdDtFm=" + lstUpdDtFm + ", lstUpdId=" + lstUpdId + ", lstUpdNm=" + lstUpdNm + "]";
	}
}
