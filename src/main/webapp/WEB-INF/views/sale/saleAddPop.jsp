<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>고객 판매 수금 등록</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/resources/common/common.css">
<link rel="stylesheet" href="/resources/common/popup.css">
<link rel="stylesheet" href="/resources/css/sale/saleAddPop.css">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script src="/resources/common/common.js"></script>
<script src="/resources/common/gnb.js"></script>
<script src="/resources/js/sale/saleAddPop.js"></script>
</head>
<body>
	<div class="container">
		<div class="box-title">
			<span class="main-title">고객판매수금등록</span>
		</div>
		
		<div class="box-search">
			<input id="prtCd" type="hidden" name="prtCd" value="${sessionScope.user.prtCd}">
			<div class="one-input">
				<span class="search-title"><span class="required">*</span>판매일자</span>
				<div class="box-info">
					<input id="salDt" type="date" value="${requestScope.map.salDt}" readonly>
					<input id="salDtMdf" type="hidden" name="salDt">
				</div>
			</div>
			<div class="one-input">
				<span class="search-title"><span class="required">*</span>판매구분</span>
				<div class="box-info">
					<select id="salTpCd" name="salTpCd" class="style-input">
						<c:forEach items="${requestScope.map.stList}" var="st" varStatus="status">
							<option id="salTpCd${status.index}" value="${st.salTpCd}">${st.salTpNm}</option>
						</c:forEach>
					</select>
					<span class="material-icons select-arrow">expand_more</span>
				</div>
			</div>
			<div class="one-input">
				<span class="search-title"><span class="required">*</span>고객번호</span>
				<div class="box-info box-cust">
					<input id="custNo" class="style-input" type="text" name="custNo" readonly autocomplete='off'>
					<button id="custSearchBtn" class="btn-one-search" type="button">
						<span class="material-icons">search</span>
					</button>
					<input id="custNm" class="style-input" type="text" autofocus autocomplete='off'>
				</div>
			</div>
		</div>
		
		<form id="saleForm">
			<fieldset>
				<legend>결제 금액</legend>
				<input id="totSalQty" type="hidden" name="totSalQty">
				<input id="totSalAmt" type="hidden" name="totSalAmt">
				<input id="totVosAmt" type="hidden" name="totVosAmt">
				<input id="totVatAmt" type="hidden" name="totVatAmt">
				<div class="one-input">
					<span class="input-title">현금</span>
					<div class="box-input">
						<input id="cshStlmAmt" class="style-input" type="text" onkeyup="inputNumberFormat(this)" autocomplete='off'>
						<input id="cshStlmAmtMdf" type="hidden" name="cshStlmAmt">
					</div>
				</div>
				<div class="one-input">
					<span class="input-title">카드금액</span>
					<div class="box-input">
						<input id="crdStlmAmt" class="style-input" type="text" name="crdStlmAmt"  onkeyup="inputNumberFormat(this)" autocomplete='off'>
						<input id="crdStlmAmtMdf" type="hidden" name="crdStlmAmt">
					</div>
				</div>
				<div class="one-input">
					<span class="input-title">유효일자</span>
					<div class="box-input">
						<input id="vldYM" class="style-input" type="text" maxlength="6" name="vldYM" readonly autocomplete='off' placeholder="MMYYYY">
					</div>
				</div>
				<div class="one-input">
					<span class="input-title">카드회사</span>
					<div class="box-input">
						<select id="crdCoCd" name="crdCoCd" disabled class="style-input">
							<option selected disabled>선택</option>
							<c:forEach items="${requestScope.map.ccList}" var="cc" varStatus="status">
								<option id="crdCoCd${status.index}" value="${cc.crdCoCd}">${cc.crdCoNm}</option>
							</c:forEach>
						</select>
						<span class="material-icons select-arrow">expand_more</span>
					</div>
				</div>
				<div class="one-input box-crdNo">
					<span class="input-title">카드번호</span>
					<div class="box-input">
						<input id="crdNo0" class="style-input" type="text" maxlength="4" readonly autocomplete='off'>
						<input id="crdNo1" class="style-input" type="text" maxlength="4" readonly autocomplete='off'>
						<input id="crdNo2" class="style-input" type="text" maxlength="4" readonly autocomplete='off'>
						<input id="crdNo3" class="style-input" type="text" maxlength="4" readonly autocomplete='off'>
						<input id="crdNo" name="crdNo" type="hidden">
					</div>
				</div>
			</fieldset>
		</form>
					
		<div class="box-result">
			<div class="btn-add">
				<button id="prdAddBtn" class="btn-icon" type="button">
					<span class="material-icons">add</span>
				</button>
				<button id="prdRmvBtn" class="btn-icon" type="button">
					<span class="material-icons">remove</span>
				</button>
			</div>
			<div class="result-title">
				<span class="checkbox">선택</span>
				<span class="seqNum">번호</span>
				<span class="prdCd">상품코드</span>
				<span class="prdNm">상품명</span>
				<span class="ivcoQty">매장재고</span>
				<span class="salQty">판매수량</span>
				<span class="prdCsmrUpr">소비자가</span>
				<span class="salAmt">판매금액</span>
			</div>
			<div id="result" class="result-content">
				<div id="oneContent0" class="one-content">
					<span class="checkbox">
						<input id="checkbox0" type="checkbox" checked onclick="check(this)">
					</span>
					<span class="seqNum">1</span>
					<span class="prdCd">
						<input id="prdCd0" onchange="prdCdAuto(this)" class="style-input" type="text" autocomplete='off'>
						<button id="prdSearchBtn0" onclick="prdPopOpen(this)" class="btn-one-search" type="button">
							<span class="material-icons">search</span>
						</button>
					</span>
					<span id="prdNm0" class="prdNm"></span>
					<span id="ivcoQty0" class="ivcoQty">0</span>
					<span class="salQty">
						<input id="salQty0" onchange="salAmtAuto(this)" class="style-input" type="text" placeholder="0" autocomplete='off'>
					</span>
					<span id="prdCsmrUpr0" class="prdCsmrUpr">0</span>
					<input id="salVosAmt0" type="hidden">
					<input id="salVatAmt0" type="hidden">
					<span id="salAmt0" class="salAmt">0</span>
				</div>
			</div>
			<div id="sum" class="tot-sum">
				<span class="sum-title">합계</span>
				<div class="sum-result">
					<span id="sumSalQty">0</span>
					<span id="sumSalAmt">0</span>
				</div>
			</div>
		</div>
				
		<div class="box-btn">
			<button id="closeBtn" class="btn-close">닫기</button>
			<button id="applyBtn" class="btn-apply">저장</button>
		</div>
	</div>
</body>
</html>