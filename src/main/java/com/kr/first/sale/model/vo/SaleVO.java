package com.kr.first.sale.model.vo;

import java.util.Date;

public class SaleVO {

	private String prtCd;		//매장코드
	private String prtNm;		//매장이름		- JOIN
	private String salDt;		//판매일자
	private String salNo;		//판매번호
	private String salTpCd;		//판매구분코드	- SAL: 판매, RTN : 반품
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
	private Date fstRegDt;		//최초등록일자
	private String fstRegDtFm;	//최초등록일자
	private String fstUserId;	//최초등록자
	private Date lstUpdCd;		//최종수정일자
	private String lstUpdId;	//최종수정자
}
