package com.kr.first.sale.model.vo;

import java.util.Date;

public class SaleVO {

	private String prtCd;		//매장코드
	private String prtNm;		//매장이름		- JOIN
	private String salDt;		//판매일자
	private String salNo;		//판매번호
	private String salTpCd;		//판매구분코드	- SAL: 판매, RTN : 반품
	private String salTpNm;		//판매구분명	- JOIN
	private String totSalQty;	//총판매수량
	private String totSalAmt;	//총판매금액
	private String totVosAmt;	//총공급가액
	private String totVatAmt;	//총부가세액
	private String cshStlmAmt;	//현금결제금액
	private String crdStlmAmt;	//카드결제금액
	private String pntStlmAmt;	//포인트결제금액
	private String custNo;		//고객번호
	private String custNm;		//고객이름		- JOIN
	private String crdNo;		//카드번호
	private String vldYM;		//유효년월
	private String crdCoCd;		//카드회사		- 01 : BC, 02: 현대, 03: 삼성, 04 : 신한
	private String crdCoNm;		//카드회사명	- JOIN
	private Date fstRegDt;		//최초등록일자
	private String fstRegDtFm;	//최초등록일자
	private String fstUserId;	//최초등록자
	private String fstUserNm;	//최초등록자	-JOIN
	private Date lstUpdDt;		//최종수정일자
	private String lstUpdId;	//최종수정자
	
	//생성자
	public SaleVO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public SaleVO(String prtCd, String prtNm, String salDt, String salNo, String salTpCd, String salTpNm,
			String totSalQty, String totSalAmt, String totVosAmt, String totVatAmt, String cshStlmAmt,
			String crdStlmAmt, String pntStlmAmt, String custNo, String custNm, String crdNo, String vldYM,
			String crdCoCd, String crdCoNm, Date fstRegDt, String fstRegDtFm, String fstUserId, String fstUserNm,
			Date lstUpdDt, String lstUpdId) {
		this.prtCd = prtCd;
		this.prtNm = prtNm;
		this.salDt = salDt;
		this.salNo = salNo;
		this.salTpCd = salTpCd;
		this.salTpNm = salTpNm;
		this.totSalQty = totSalQty;
		this.totSalAmt = totSalAmt;
		this.totVosAmt = totVosAmt;
		this.totVatAmt = totVatAmt;
		this.cshStlmAmt = cshStlmAmt;
		this.crdStlmAmt = crdStlmAmt;
		this.pntStlmAmt = pntStlmAmt;
		this.custNo = custNo;
		this.custNm = custNm;
		this.crdNo = crdNo;
		this.vldYM = vldYM;
		this.crdCoCd = crdCoCd;
		this.crdCoNm = crdCoNm;
		this.fstRegDt = fstRegDt;
		this.fstRegDtFm = fstRegDtFm;
		this.fstUserId = fstUserId;
		this.fstUserNm = fstUserNm;
		this.lstUpdDt = lstUpdDt;
		this.lstUpdId = lstUpdId;
	}


	//getter setter
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
	public String getSalTpCd() {
		return salTpCd;
	}
	public void setSalTpCd(String salTpCd) {
		this.salTpCd = salTpCd;
	}
	public String getSalTpNm() {
		return salTpNm;
	}
	public void setSalTpNm(String salTpNm) {
		this.salTpNm = salTpNm;
	}
	public String getTotSalQty() {
		return totSalQty;
	}
	public void setTotSalQty(String totSalQty) {
		this.totSalQty = totSalQty;
	}
	public String getTotSalAmt() {
		return totSalAmt;
	}
	public void setTotSalAmt(String totSalAmt) {
		this.totSalAmt = totSalAmt;
	}
	public String getTotVosAmt() {
		return totVosAmt;
	}
	public void setTotVosAmt(String totVosAmt) {
		this.totVosAmt = totVosAmt;
	}
	public String getTotVatAmt() {
		return totVatAmt;
	}
	public void setTotVatAmt(String totVatAmt) {
		this.totVatAmt = totVatAmt;
	}
	public String getCshStlmAmt() {
		return cshStlmAmt;
	}
	public void setCshStlmAmt(String cshStlmAmt) {
		this.cshStlmAmt = cshStlmAmt;
	}
	public String getCrdStlmAmt() {
		return crdStlmAmt;
	}
	public void setCrdStlmAmt(String crdStlmAmt) {
		this.crdStlmAmt = crdStlmAmt;
	}
	public String getPntStlmAmt() {
		return pntStlmAmt;
	}
	public void setPntStlmAmt(String pntStlmAmt) {
		this.pntStlmAmt = pntStlmAmt;
	}
	public String getCustNo() {
		return custNo;
	}
	public void setCustNo(String custNo) {
		this.custNo = custNo;
	}
	public String getCustNm() {
		return custNm;
	}
	public void setCustNm(String custNm) {
		this.custNm = custNm;
	}
	public String getCrdNo() {
		return crdNo;
	}
	public void setCrdNo(String crdNo) {
		this.crdNo = crdNo;
	}
	public String getVldYM() {
		return vldYM;
	}
	public void setVldYM(String vldYM) {
		this.vldYM = vldYM;
	}
	public String getCrdCoCd() {
		return crdCoCd;
	}
	public void setCrdCoCd(String crdCoCd) {
		this.crdCoCd = crdCoCd;
	}
	public String getCrdCoNm() {
		return crdCoNm;
	}
	public void setCrdCoNm(String crdCoNm) {
		this.crdCoNm = crdCoNm;
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
	public String getLstUpdId() {
		return lstUpdId;
	}
	public void setLstUpdId(String lstUpdId) {
		this.lstUpdId = lstUpdId;
	}
	
	
	//toString
	@Override
	public String toString() {
		return "SaleVO [prtCd=" + prtCd + ", prtNm=" + prtNm + ", salDt=" + salDt + ", salNo=" + salNo + ", salTpCd="
				+ salTpCd + ", salTpNm=" + salTpNm + ", totSalQty=" + totSalQty + ", totSalAmt=" + totSalAmt
				+ ", totVosAmt=" + totVosAmt + ", totVatAmt=" + totVatAmt + ", cshStlmAmt=" + cshStlmAmt
				+ ", crdStlmAmt=" + crdStlmAmt + ", pntStlmAmt=" + pntStlmAmt + ", custNo=" + custNo + ", custNm="
				+ custNm + ", crdNo=" + crdNo + ", vldYM=" + vldYM + ", crdCoCd=" + crdCoCd + ", crdCoNm=" + crdCoNm
				+ ", fstRegDt=" + fstRegDt + ", fstRegDtFm=" + fstRegDtFm + ", fstUserId=" + fstUserId + ", fstUserNm="
				+ fstUserNm + ", lstUpdDt=" + lstUpdDt + ", lstUpdId=" + lstUpdId + "]";
	}
}
