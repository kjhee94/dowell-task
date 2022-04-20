package com.kr.first.user.model.vo;

import java.sql.Date;

public class User {

	private String userId;		//사용자ID
	private String userNm;		//사용자명
	private int userDtCd;		//사용자구분코드 - 1:회사 / 2:특약점
	private String useYN;		//사용여부		- Y:사용 / N:미사용
	private String userPwd;		//비밀번호
	private String StDt;		//시작일자
	private String EdDt;		//종료일자
	private String PrtCd;		//거래처코드
	private String PrtNm;		//거래처이름
	private String PwdUpdDt;	//비밀번호 변경일자
	private Date FstRegDt;		//최초등록일자
	private String FstUserId;	//최초등록자
	private Date LstUpdCd;		//최종수정일자
	private String LstUpdId;	//최종수정자
	
	
	//생성자
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(String userId, String userNm, int userDtCd, String useYN, String userPwd, String stDt, String edDt,
			String prtCd, String prtNm, String pwdUpdDt, Date fstRegDt, String fstUserId, Date lstUpdCd, String lstUpdId) {
		this.userId = userId;
		this.userNm = userNm;
		this.userDtCd = userDtCd;
		this.useYN = useYN;
		this.userPwd = userPwd;
		this.StDt = stDt;
		this.EdDt = edDt;
		this.PrtCd = prtCd;
		this.PrtNm = prtNm;
		this.PwdUpdDt = pwdUpdDt;
		this.FstRegDt = fstRegDt;
		this.FstUserId = fstUserId;
		this.LstUpdCd = lstUpdCd;
		this.LstUpdId = lstUpdId;
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

	public String getUseYN() {
		return useYN;
	}

	public void setUseYN(String useYN) {
		this.useYN = useYN;
	}

	public String getUserPwd() {
		return userPwd;
	}

	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}

	public String getStDt() {
		return StDt;
	}

	public void setStDt(String stDt) {
		this.StDt = stDt;
	}

	public String getEdDt() {
		return EdDt;
	}

	public void setEdDt(String edDt) {
		this.EdDt = edDt;
	}

	public String getPrtCd() {
		return PrtCd;
	}

	public void setPrtCd(String prtCd) {
		this.PrtCd = prtCd;
	}

	public String getPrtNm() {
		return PrtNm;
	}

	public void setPrtNm(String prtNm) {
		this.PrtNm = prtNm;
	}
	
	public String getPwdUpdDt() {
		return PwdUpdDt;
	}

	public void setPwdUpdDt(String pwdUpdDt) {
		this.PwdUpdDt = pwdUpdDt;
	}

	public Date getFstRegDt() {
		return FstRegDt;
	}

	public void setFstRegDt(Date fstRegDt) {
		this.FstRegDt = fstRegDt;
	}

	public String getFstUserId() {
		return FstUserId;
	}

	public void setFstUserId(String fstUserId) {
		this.FstUserId = fstUserId;
	}

	public Date getLstUpdCd() {
		return LstUpdCd;
	}

	public void setLstUpdCd(Date lstUpdCd) {
		this.LstUpdCd = lstUpdCd;
	}

	public String getLstUpdId() {
		return LstUpdId;
	}

	public void setLstUpdId(String lstUpdId) {
		this.LstUpdId = lstUpdId;
	}

	//toString
	@Override
	public String toString() {
		return "User [userId=" + userId + ", userNm=" + userNm + ", userDtCd=" + userDtCd + ", useYN=" + useYN
				+ ", userPwd=" + userPwd + ", StDt=" + StDt + ", EdDt=" + EdDt + ", PrtCd=" + PrtCd + ", PrtNm=" + PrtNm 
				+ ", PwdUpdDt=" + PwdUpdDt + ", FstRegDt=" + FstRegDt + ", FstUserId=" + FstUserId + ", LstUpdCd=" + LstUpdCd
				+ ", LstUpdId=" + LstUpdId + "]";
	}
}
