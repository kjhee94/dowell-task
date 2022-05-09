<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>변경 이력</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/resources/common/common.css">
<link rel="stylesheet" href="/resources/css/customer/popup.css">
<link rel="stylesheet" href="/resources/css/customer/custHt.css">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script src="/resources/common/common.js"></script>
<script src="/resources/js/customer/custHtPop.js"></script>
</head>
<body>
	<div class="container">
		<div class="box-title">
			<span class="main-title">변경이력</span>
		</div>
		
		<div class="box-user">
			<span class="search-title">고객</span>
			<div class="box-info">
				<input id="custCd" type="text" class="style-input" value="" readonly>
				<input id="custNm" type="text" class="style-input" value="" readonly>
			</div>
		</div>
					
		<div class="box-result">
			<div class="result-title">
				<span class="chgDt">변경일자</span>
				<span class="chgCd">변경항목</span>
				<span class="chgBfCnt">변경전</span>
				<span class="chgAftCnt">변경후</span>
				<span class="lstUpdId">수정자</span>
				<span class="lstUpdDt">수정일시</span>
			</div>
			<div id="result" class="result-content">
				<p>변경내역이 없습니다.</p>
			</div>
		</div>
				
		<div class="box-btn">
			<button id="closeBtn" class="btn-close">닫기</button>
		</div>
	</div>
</body>
</html>