<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>고객 조회</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/resources/common/common.css">
<link rel="stylesheet" href="/resources/css/customer/searchPopUp.css">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
</head>
<body>
	<div class="container">
		<form id="searchPrt" action="" method="get">
			<div class="box-title">
				<span class="main-title">고객조회</span>
				<button id="resetBtn" type="reset">
					<span class="material-icons">restart_alt</span>
				</button>
			</div>
			
			<div class="box-search">
				<div class="area-input">
					<div class="one-input">
						<span class="search-title">고객이름</span>
						<input class="style-input" type="text" name="custNm" autofocus>
					</div>
					<div class="one-input">
						<span class="search-title">핸드폰번호</span>
						<input class="style-input" type="text" name="mblNo">
					</div>
				</div>
				<div class="area-btn">
					<button type="submit">
						<span class="material-icons">search</span>
					</button>
				</div>
			</div>
		</form>
		
		<div class="box-result">
			<div class="result-title">
				<span class="checkbox cb2">선택</span>
				<span class="custNo">고객번호</span>
				<span class="custNm">고객이름</span>
				<span class="mblNo">핸드폰번호</span>
				<span class="custSs">고객상태</span>
			</div>
			<div class="result-content">
				<span class="checkbox cb2">
					<input type="checkbox" custNo="">
				</span>
					<span class="custNo">1000000001</span>
				<span class="custNm">강주희</span>
				<span class="mblNo">010-1234-4567</span>
				<span class="custSs">정상</span>
			</div>
			<div class="result-content">
				<span class="checkbox cb2">
					<input type="checkbox" custNo="">
				</span>
					<span class="custNo">1000000001</span>
				<span class="custNm">강주희</span>
				<span class="mblNo">010-1234-4567</span>
				<span class="custSs">정상</span>
			</div>
			<div class="result-content">
				<span class="checkbox cb2">
					<input type="checkbox" custNo="">
				</span>
					<span class="custNo">1000000001</span>
				<span class="custNm">강주희</span>
				<span class="mblNo">010-1234-4567</span>
				<span class="custSs">정상</span>
			</div>
			<div class="result-content">
				<span class="checkbox cb2">
					<input type="checkbox" custNo="">
				</span>
					<span class="custNo">1000000001</span>
				<span class="custNm">강주희</span>
				<span class="mblNo">010-1234-4567</span>
				<span class="custSs">정상</span>
			</div>
			<div class="result-content">
				<span class="checkbox cb2">
					<input type="checkbox" custNo="">
				</span>
					<span class="custNo">1000000001</span>
				<span class="custNm">강주희</span>
				<span class="mblNo">010-1234-4567</span>
				<span class="custSs">정상</span>
			</div>
			<div class="result-content">
				<span class="checkbox cb2">
					<input type="checkbox" custNo="">
				</span>
					<span class="custNo">1000000001</span>
				<span class="custNm">강주희</span>
				<span class="mblNo">010-1234-4567</span>
				<span class="custSs">정상</span>
			</div>
			<div class="result-content">
				<span class="checkbox cb2">
					<input type="checkbox" custNo="">
				</span>
					<span class="custNo">1000000001</span>
				<span class="custNm">강주희</span>
				<span class="mblNo">010-1234-4567</span>
				<span class="custSs">정상</span>
			</div>
			<div class="result-content">
				<span class="checkbox cb2">
					<input type="checkbox" custNo="">
				</span>
					<span class="custNo">1000000001</span>
				<span class="custNm">강주희</span>
				<span class="mblNo">010-1234-4567</span>
				<span class="custSs">정상</span>
			</div>
			<div class="result-content">
				<span class="checkbox cb2">
					<input type="checkbox" custNo="">
				</span>
					<span class="custNo">1000000001</span>
				<span class="custNm">강주희</span>
				<span class="mblNo">010-1234-4567</span>
				<span class="custSs">정상</span>
			</div>
			<div class="result-content">
				<span class="checkbox cb2">
					<input type="checkbox" custNo="">
				</span>
					<span class="custNo">1000000001</span>
				<span class="custNm">강주희</span>
				<span class="mblNo">010-1234-4567</span>
				<span class="custSs">정상</span>
			</div>
			<div class="result-content">
				<span class="checkbox cb2">
					<input type="checkbox" custNo="">
				</span>
					<span class="custNo">1000000001</span>
				<span class="custNm">강주희</span>
				<span class="mblNo">010-1234-4567</span>
				<span class="custSs">정상</span>
			</div>
		</div>
		
		<div class="box-btn">
			<button class="btn-close">닫기</button>
			<button class="btn-apply">적용</button>
		</div>
	</div>
</body>
</html>