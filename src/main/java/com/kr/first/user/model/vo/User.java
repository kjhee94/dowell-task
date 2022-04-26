package com.kr.first.user.model.vo;

import java.util.Date;

public class User {

	private String userId;		//사용자ID
	private String userNm;		//사용자명
	private int userDtCd;		//사용자구분코드 - 1:회사 / 2:특약점
	private char useYN;			//사용여부		- Y:사용 / N:미사용
	private String userPwd;		//비밀번호
	private String stDt;		//시작일자
	private String edDt;		//종료일자
	private String prtCd;		//거래처코드
	private String prtNm;		//거래처이름	- JOIN
	private String pwdUpdDt;	//비밀번호 변경일자
	private Date fstRegDt;		//최초등록일자
	private String fstUserId;	//최초등록자
	private Date lstUpdCd;		//최종수정일자
	private String lstUpdId;	//최종수정자
	
	//생성자
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public User(String userId, String userNm, int userDtCd, char useYN, String userPwd, String stDt, String edDt,
			String prtCd, String prtNm, String pwdUpdDt, Date fstRegDt, String fstUserId, Date lstUpdCd, String lstUpdId) {
		this.userId = userId;
		this.userNm = userNm;
		this.userDtCd = userDtCd;
		this.useYN = useYN;
		this.userPwd = userPwd;
		this.stDt = stDt;
		this.edDt = edDt;
		this.prtCd = prtCd;
		this.prtNm = prtNm;
		this.pwdUpdDt = pwdUpdDt;
		this.fstRegDt = fstRegDt;
		this.fstUserId = fstUserId;
		this.lstUpdCd = lstUpdCd;
		this.lstUpdId = lstUpdId;
	}

	//getter setter
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserNm() {
		return userNm;
	}
	public void setUserNm(String userNm) {
		this.userNm = userNm;
	}
	public int getUserDtCd() {
		return userDtCd;
	}
	public void setUserDtCd(int userDtCd) {
		this.userDtCd = userDtCd;
	}
	public char getUseYN() {
		return useYN;
	}
	public void setUseYN(char useYN) {
		this.useYN = useYN;
	}
	public String getUserPwd() {
		return userPwd;
	}
	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}
	public String getStDt() {
		return stDt;
	}
	public void setStDt(String stDt) {
		this.stDt = stDt;
	}
	public String getEdDt() {
		return edDt;
	}
	public void setEdDt(String edDt) {
		this.edDt = edDt;
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
	public String getPwdUpdDt() {
		return pwdUpdDt;
	}
	public void setPwdUpdDt(String pwdUpdDt) {
		this.pwdUpdDt = pwdUpdDt;
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
	public Date getLstUpdCd() {
		return lstUpdCd;
	}
	public void setLstUpdCd(Date lstUpdCd) {
		this.lstUpdCd = lstUpdCd;
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
		return "User [userId=" + userId + ", userNm=" + userNm + ", userDtCd=" + userDtCd + ", useYN=" + useYN
				+ ", userPwd=" + userPwd + ", stDt=" + stDt + ", edDt=" + edDt + ", prtCd=" + prtCd + ", prtNm=" + prtNm 
				+ ", pwdUpdDt=" + pwdUpdDt + ", fstRegDt=" + fstRegDt + ", fstUserId=" + fstUserId + ", lstUpdCd=" + lstUpdCd
				+ ", lstUpdId=" + lstUpdId + "]";
	}
}
