<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>판매 상세 조회</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/resources/common/common.css">
<link rel="stylesheet" href="/resources/common/popup.css">
<link rel="stylesheet" href="/resources/css/sale/saleDtPop.css">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script src="/resources/common/common.js"></script>
<script src="/resources/common/gnb.js"></script>
<script src="/resources/js/sale/saleDtPop.js"></script>
</head>
<body>
	<div class="container">
		<div class="box-title">
			<span class="main-title">판매상세조회</span>
		</div>
		
		<div class="box-search">
			<div class="one-row two-row">
				<div class="one-input">
					<span class="search-title">매장</span>
					<div class="box-info">
						<input id="prtCd" type="text" class="style-input" readonly>
						<input id="prtNm" type="text" class="style-input" readonly>
					</div>
				</div>
				<div class="one-input">
					<span class="search-title">고객번호</span>
					<div class="box-info">
						<input id="custNo" type="text" class="style-input" readonly>
						<input id="custNm" type="text" class="style-input" readonly>
					</div>
				</div>
			</div>
			<div class="one-row four-row">
				<div class="one-input">
					<span class="search-title">판매수량</span>
					<div class="box-info">
						<input id="totSalQty" type="text" class="style-input" readonly>
					</div>
				</div>
				<div class="one-input">
					<span class="search-title">판매금액</span>
					<div class="box-info">
						<input id="totSalAmt" type="text" class="style-input" readonly>
					</div>
				</div>
				<div class="one-input">
					<span class="search-title">현금</span>
					<div class="box-info">
						<input id="cshStlmAmt" type="text" class="style-input" readonly>
					</div>
				</div>
				<div class="one-input">
					<span class="search-title">카드</span>
					<div class="box-info">
						<input id="crdStlmAmt" type="text" class="style-input" readonly>
					</div>
				</div>
			</div>
			
			<input id="salDt" type="hidden">
			<input id="salNo" type="hidden">
			<input id="salTpCd" type="hidden">
		</div>
					
		<div class="box-result">
			<div class="result-title">
				<span class="seqNum">번호</span>
				<span class="prdCd">상품코드</span>
				<span class="prdNm">상품명</span>
				<span class="salQty">판매수량</span>
				<span class="salVosAmt">공급가</span>
				<span class="salVatAmt">부가세</span>
				<span class="salAmt">판매금액</span>
			</div>
			<div id="result" class="result-content">
				<p>상세내역이 없습니다.</p>
			</div>
			<div id="sum" class="result-sum">
				<span class="total">합계</span>
				<span id="sumSalQty" class="salQty"></span>
				<span id="sumSalVosAmt" class="salVosAmt"></span>
				<span id="sumSalVatAmt" class="salVatAmt"></span>
				<span id="sumSalAmt" class="salAmt"></span>
			</div>
		</div>
				
		<div class="box-btn">
			<button id="closeBtn" class="btn-close">닫기</button>
			<c:if test="${sessionScope.user.userDtCd eq '2'}">
				<input id="sesPrtCd" type="hidden" value="${sessionScope.user.prtCd}">
				<button id="applyBtn" class="btn-apply">반품</button>
			</c:if>
			
			
		</div>
	</div>
</body>
</html>