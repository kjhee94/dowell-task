<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>변경 이력</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/resources/common/common.css">
<link rel="stylesheet" href="/resources/css/customer/searchPopUp.css">
<link rel="stylesheet" href="/resources/css/customer/selectCustHt.css">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
</head>
<body>
	<div class="container">
		<form id="searchPrt" action="" method="get">
			<div class="box-title">
				<span class="main-title">변경이력</span>
			</div>
			
			<div class="box-user">
				<span class="search-title">고객</span>
				<div class="box-info">
					<input type="text" class="style-input" value="1000000001" readonly>
					<input type="text" class="style-input" value="강주희" readonly>
				</div>
			</div>
		</form>
		
		<div class="box-result">
			<div class="result-title">
				<span class="chgDt">변경일자</span>
				<span class="chgCd">변경항목</span>
				<span class="chgBfCnt">변경전</span>
				<span class="chgAftCnt">변경후</span>
				<span class="lstUpdId">수정자</span>
				<span class="lstUpdDt">수정일시</span>
			</div>
			<div class="result-content">
				<span class="chgDt">2021-07-12</span>
				<span class="chgCd">휴대폰번호</span>
				<span class="chgBfCnt">서울시 서대문 홍제동</span>
				<span class="chgAftCnt">서울시 강남구 대치동</span>
				<span class="lstUpdId">20210801 / 박소연</span>
				<span class="lstUpdDt">2021-09-16 20210801</span>
			</div>
			<div class="result-content">
				<span class="chgDt">2021-07-12</span>
				<span class="chgCd">휴대폰번호</span>
				<span class="chgBfCnt">서울시 서대문 홍제동</span>
				<span class="chgAftCnt">서울시 강남구 대치동</span>
				<span class="lstUpdId">20210801 / 박소연</span>
				<span class="lstUpdDt">2021-09-16 20210801</span>
			</div>
			<div class="result-content">
				<span class="chgDt">2021-07-12</span>
				<span class="chgCd">휴대폰번호</span>
				<span class="chgBfCnt">서울시 서대문 홍제동</span>
				<span class="chgAftCnt">서울시 강남구 대치동</span>
				<span class="lstUpdId">20210801 / 박소연</span>
				<span class="lstUpdDt">2021-09-16 20210801</span>
			</div>
			<div class="result-content">
				<span class="chgDt">2021-07-12</span>
				<span class="chgCd">휴대폰번호</span>
				<span class="chgBfCnt">서울시 서대문 홍제동</span>
				<span class="chgAftCnt">서울시 강남구 대치동</span>
				<span class="lstUpdId">20210801 / 박소연</span>
				<span class="lstUpdDt">2021-09-16 20210801</span>
			</div>
			<div class="result-content">
				<span class="chgDt">2021-07-12</span>
				<span class="chgCd">휴대폰번호</span>
				<span class="chgBfCnt">서울시 서대문 홍제동</span>
				<span class="chgAftCnt">서울시 강남구 대치동</span>
				<span class="lstUpdId">20210801 / 박소연</span>
				<span class="lstUpdDt">2021-09-16 20210801</span>
			</div>
			<div class="result-content">
				<span class="chgDt">2021-07-12</span>
				<span class="chgCd">휴대폰번호</span>
				<span class="chgBfCnt">서울시 서대문 홍제동</span>
				<span class="chgAftCnt">서울시 강남구 대치동</span>
				<span class="lstUpdId">20210801 / 박소연</span>
				<span class="lstUpdDt">2021-09-16 20210801</span>
			</div>
			<div class="result-content">
				<span class="chgDt">2021-07-12</span>
				<span class="chgCd">휴대폰번호</span>
				<span class="chgBfCnt">서울시 서대문 홍제동</span>
				<span class="chgAftCnt">서울시 강남구 대치동</span>
				<span class="lstUpdId">20210801 / 박소연</span>
				<span class="lstUpdDt">2021-09-16 20210801</span>
			</div>
			<div class="result-content">
				<span class="chgDt">2021-07-12</span>
				<span class="chgCd">휴대폰번호</span>
				<span class="chgBfCnt">서울시 서대문 홍제동</span>
				<span class="chgAftCnt">서울시 강남구 대치동</span>
				<span class="lstUpdId">20210801 / 박소연</span>
				<span class="lstUpdDt">2021-09-16 20210801</span>
			</div>
		</div>
		
		<div class="box-btn">
			<button class="btn-close">닫기</button>
		</div>
	</div>
</body>
</html>