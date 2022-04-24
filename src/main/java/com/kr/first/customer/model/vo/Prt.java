package com.kr.first.customer.model.vo;

import java.sql.Date;

public class Prt {

	private String prtCd;		//거래처코드
	private String prtNm;		//거래처명
	private int prtDtCd;		//거래처구분코드		- 1:본사 / 2:매장
	private String rpsvNm;		//대표자명
	private String bsnNo;		//사업자등록번호
	private String zipNo;		//우편번호
	private String addr;		//주소
	private String addrDtl;		//상세주소
	private String telNo;		//전화번호
	private String mblNo;		//휴대폰번호
	private String prtSsCd;		//거래처상태코드		- 10:정상 / 80:거래중지 / 90:해지
	private String mbzStDt;		//영업개시일자
	private String stpDt;		//중지일자
	private String cnclDt;		//해지일자
	private Date fstRegDt;		//최초등록일자
	private String fstUserId;	//최초등록자(아이디)
	private Date lstUpdDt;		//최종수정일자
	private String lstUpdId;	//최종수정자
	
	//생성자
	public Prt() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Prt(String prtCd, String prtNm, int prtDtCd, String rpsvNm, String bsnNo, String zipNo, String addr,
			String addrDtl, String telNo, String mblNo, String prtSsCd, String mbzStDt, String stpDt, String cnclDt,
			Date fstRegDt, String fstUserId, Date lstUpdDt, String lstUpdId) {
		super();
		this.prtCd = prtCd;
		this.prtNm = prtNm;
		this.prtDtCd = prtDtCd;
		this.rpsvNm = rpsvNm;
		this.bsnNo = bsnNo;
		this.zipNo = zipNo;
		this.addr = addr;
		this.addrDtl = addrDtl;
		this.telNo = telNo;
		this.mblNo = mblNo;
		this.prtSsCd = prtSsCd;
		this.mbzStDt = mbzStDt;
		this.stpDt = stpDt;
		this.cnclDt = cnclDt;
		this.fstRegDt = fstRegDt;
		this.fstUserId = fstUserId;
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
	public int getPrtDtCd() {
		return prtDtCd;
	}
	public void setPrtDtCd(int prtDtCd) {
		this.prtDtCd = prtDtCd;
	}
	public String getRpsvNm() {
		return rpsvNm;
	}
	public void setRpsvNm(String rpsvNm) {
		this.rpsvNm = rpsvNm;
	}
	public String getBsnNo() {
		return bsnNo;
	}
	public void setBsnNo(String bsnNo) {
		this.bsnNo = bsnNo;
	}
	public String getZipNo() {
		return zipNo;
	}
	public void setZipNo(String zipNo) {
		this.zipNo = zipNo;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public String getAddrDtl() {
		return addrDtl;
	}
	public void setAddrDtl(String addrDtl) {
		this.addrDtl = addrDtl;
	}
	public String getTelNo() {
		return telNo;
	}
	public void setTelNo(String telNo) {
		this.telNo = telNo;
	}
	public String getMblNo() {
		return mblNo;
	}
	public void setMblNo(String mblNo) {
		this.mblNo = mblNo;
	}
	public String getPrtSsCd() {
		return prtSsCd;
	}
	public void setPrtSsCd(String prtSsCd) {
		this.prtSsCd = prtSsCd;
	}
	public String getMbzStDt() {
		return mbzStDt;
	}
	public void setMbzStDt(String mbzStDt) {
		this.mbzStDt = mbzStDt;
	}
	public String getStpDt() {
		return stpDt;
	}
	public void setStpDt(String stpDt) {
		this.stpDt = stpDt;
	}
	public String getCnclDt() {
		return cnclDt;
	}
	public void setCnclDt(String cnclDt) {
		this.cnclDt = cnclDt;
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
		return "Prt [prtCd=" + prtCd + ", prtNm=" + prtNm + ", prtDtCd=" + prtDtCd + ", rpsvNm=" + rpsvNm + ", bsnNo="
				+ bsnNo + ", zipNo=" + zipNo + ", addr=" + addr + ", addrDtl=" + addrDtl + ", telNo=" + telNo
				+ ", mblNo=" + mblNo + ", prtSsCd=" + prtSsCd + ", mbzStDt=" + mbzStDt + ", stpDt=" + stpDt
				+ ", cnclDt=" + cnclDt + ", fstRegDt=" + fstRegDt + ", fstUserId=" + fstUserId + ", lstUpdDt="
				+ lstUpdDt + ", lstUpdId=" + lstUpdId + "]";
	}
}
