package com.kr.first.customer.model.vo;

import java.sql.Date;

public class Customer {
	
	private String custNo;		//고객번호
	private String custNm;		//고객명
	private char sexCd;			//성별코드 			- M:남자 / F:여자
	private int scalYn;			//양음력구분 		- 0:양력 / 1:음력
	private String brdyDt;		//생년월일
	private String mrrgDt;		//결혼기념일
	private String pocCd;		//직업코드			- 10:학생 / 20:회사원 / 30:공무원 / 40: 전문직 / 50: 군인 / 60: 주부 / 90:연예인 / 99:기타
	private String mblNo;		//휴대폰번호
	private char psmtGrcCd;		//우편물수령코드		- H:자택 / O:직장
	private String email;		//이메일 주소
	private String zipCd;		//우편번호코드
	private String addr;		//주소
	private String addrDtl;		//상세주소
	private String custSsCd;	//고객상태코드		- 10:정상 / 80:중지 / 90:해지
	private String cnclCnts;	//해지사유내용
	private String jnPrtCd;		//가입매장코드
	private String jnPrtNm;		//가입매장이름		- JOIN
	private char emailRcvYn;	//이메일수신동의여부	- Y:동의 / N:미동의
	private char smsRcvYn;		//SMS수신동의여부	- Y:동의 / N:미동의
	private char tmRcvYn;		//TM수신동의여부	- Y:동의 / N:미동의
	private char dmRcvYn;		//DM수신동의여부	- Y:동의 / N:미동의
	private String fstJsDt;		//최초가입일자
	private String jsDt;		//가입일자
	private String stpDt;		//중지일자
	private String cnclDt;		//해지일자
	private Date fstRegDt;		//최초등록일자
	private String fstUserId;	//최초등록자(아이디)
	private String fstUserNm;	//최초등록자(이름)	- JOIN
	private String lstUpdDt;	//최종수정일자
	private String lstUpdId;	//최종수정자
	
	//생성자
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Customer(String custNo, String custNm, char sexCd, int scalYn, String brdyDt, String mrrgDt, String pocCd,
			String mblNo, char psmtGrcCd, String email, String zipCd, String addr, String addrDtl, String custSsCd,
			String cnclCnts, String jnPrtCd, String jnPrtNm, char emailRcvYn, char smsRcvYn, char tmRcvYn, char dmRcvYn,
			String fstJsDt, String jsDt, String stpDt, String cnclDt, Date fstRegDt, String fstUserId, String fstUserNm,
			String lstUpdDt, String lstUpdId) {
		this.custNo = custNo;
		this.custNm = custNm;
		this.sexCd = sexCd;
		this.scalYn = scalYn;
		this.brdyDt = brdyDt;
		this.mrrgDt = mrrgDt;
		this.pocCd = pocCd;
		this.mblNo = mblNo;
		this.psmtGrcCd = psmtGrcCd;
		this.email = email;
		this.zipCd = zipCd;
		this.addr = addr;
		this.addrDtl = addrDtl;
		this.custSsCd = custSsCd;
		this.cnclCnts = cnclCnts;
		this.jnPrtCd = jnPrtCd;
		this.jnPrtNm = jnPrtNm;
		this.emailRcvYn = emailRcvYn;
		this.smsRcvYn = smsRcvYn;
		this.tmRcvYn = tmRcvYn;
		this.dmRcvYn = dmRcvYn;
		this.fstJsDt = fstJsDt;
		this.jsDt = jsDt;
		this.stpDt = stpDt;
		this.cnclDt = cnclDt;
		this.fstRegDt = fstRegDt;
		this.fstUserId = fstUserId;
		this.fstUserNm = fstUserNm;
		this.lstUpdDt = lstUpdDt;
		this.lstUpdId = lstUpdId;
	}
	
	//getter setter
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
	public char getSexCd() {
		return sexCd;
	}
	public void setSexCd(char sexCd) {
		this.sexCd = sexCd;
	}
	public int getScalYn() {
		return scalYn;
	}
	public void setScalYn(int scalYn) {
		this.scalYn = scalYn;
	}
	public String getBrdyDt() {
		return brdyDt;
	}
	public void setBrdyDt(String brdyDt) {
		this.brdyDt = brdyDt;
	}
	public String getMrrgDt() {
		return mrrgDt;
	}
	public void setMrrgDt(String mrrgDt) {
		this.mrrgDt = mrrgDt;
	}
	public String getPocCd() {
		return pocCd;
	}
	public void setPocCd(String pocCd) {
		this.pocCd = pocCd;
	}
	public String getMblNo() {
		return mblNo;
	}
	public void setMblNo(String mblNo) {
		this.mblNo = mblNo;
	}
	public char getPsmtGrcCd() {
		return psmtGrcCd;
	}
	public void setPsmtGrcCd(char psmtGrcCd) {
		this.psmtGrcCd = psmtGrcCd;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getZipCd() {
		return zipCd;
	}
	public void setZipCd(String zipCd) {
		this.zipCd = zipCd;
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
	public String getCustSsCd() {
		return custSsCd;
	}
	public void setCustSsCd(String custSsCd) {
		this.custSsCd = custSsCd;
	}
	public String getCnclCnts() {
		return cnclCnts;
	}
	public void setCnclCnts(String cnclCnts) {
		this.cnclCnts = cnclCnts;
	}
	public String getJnPrtCd() {
		return jnPrtCd;
	}
	public void setJnPrtCd(String jnPrtCd) {
		this.jnPrtCd = jnPrtCd;
	}
	public String getJnPrtNm() {
		return jnPrtNm;
	}
	public void setJnPrtNm(String jnPrtNm) {
		this.jnPrtNm = jnPrtNm;
	}
	public char getEmailRcvYn() {
		return emailRcvYn;
	}
	public void setEmailRcvYn(char emailRcvYn) {
		this.emailRcvYn = emailRcvYn;
	}
	public char getSmsRcvYn() {
		return smsRcvYn;
	}
	public void setSmsRcvYn(char smsRcvYn) {
		this.smsRcvYn = smsRcvYn;
	}
	public char getTmRcvYn() {
		return tmRcvYn;
	}
	public void setTmRcvYn(char tmRcvYn) {
		this.tmRcvYn = tmRcvYn;
	}
	public char getDmRcvYn() {
		return dmRcvYn;
	}
	public void setDmRcvYn(char dmRcvYn) {
		this.dmRcvYn = dmRcvYn;
	}
	public String getFstJsDt() {
		return fstJsDt;
	}
	public void setFstJsDt(String fstJsDt) {
		this.fstJsDt = fstJsDt;
	}
	public String getJsDt() {
		return jsDt;
	}
	public void setJsDt(String jsDt) {
		this.jsDt = jsDt;
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
	public String getFstUserNm() {
		return fstUserNm;
	}
	public void setFstUserNm(String fstUserNm) {
		this.fstUserNm = fstUserNm;
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
	
	//toString
	@Override
	public String toString() {
		return "Customer [custNo=" + custNo + ", custNm=" + custNm + ", sexCd=" + sexCd + ", scalYn=" + scalYn
				+ ", brdyDt=" + brdyDt + ", mrrgDt=" + mrrgDt + ", pocCd=" + pocCd + ", mblNo=" + mblNo + ", psmtGrcCd="
				+ psmtGrcCd + ", email=" + email + ", zipCd=" + zipCd + ", addr=" + addr + ", addrDtl=" + addrDtl
				+ ", custSsCd=" + custSsCd + ", cnclCnts=" + cnclCnts + ", jnPrtCd=" + jnPrtCd + ", jnPrtNm=" + jnPrtNm
				+ ", emailRcvYn=" + emailRcvYn + ", smsRcvYn=" + smsRcvYn + ", tmRcvYn=" + tmRcvYn + ", dmRcvYn="
				+ dmRcvYn + ", fstJsDt=" + fstJsDt + ", jsDt=" + jsDt + ", stpDt=" + stpDt + ", cnclDt=" + cnclDt
				+ ", fstRegDt=" + fstRegDt + ", fstUserId=" + fstUserId + ", fstUserNm=" + fstUserNm + ", lstUpdDt="
				+ lstUpdDt + ", lstUpdId=" + lstUpdId + "]";
	}
}
