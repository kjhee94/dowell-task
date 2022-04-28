<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>신규 고객 등록</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/resources/common/common.css">
<link rel="stylesheet" href="/resources/css/customer/popup.css">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script src="/resources/js/customer/popup.js"></script>
</head>
<body>
	<div class="container">
		<form action="" method="post">
			<div class="box-title">
				<span class="main-title">신규고객등록</span>
				<button id="resetCustAddBtn" type="reset">
					<span class="material-icons">restart_alt</span>
				</button>
			</div>
			
			<span class="sub-title">고객기본정보</span>
			<div class="box-info">
				<div class="area-input">
					<div class="one-input">
						<span class="search-title"><span class="required">*</span>고객명</span>
						<input class="style-input" type="text" autofocus>
					</div>
					<div class="one-input">
						<span class="search-title"><span class="required">*</span>생년월일</span>
						<input class="style-input" type="date">
						<label><input type="radio" name="scalYn" value="0">양력</label>
						<label><input type="radio" name="scalYn" value="1">음력</label>
					</div>
					<div class="one-input">
						<span class="search-title"><span class="required">*</span>휴대폰번호</span>
						<select>
							<option>선택</option>
							<option>010</option>
						</select>
						<input class="style-input" type="text">
						<input class="style-input" type="text">
					</div>
					<div class="one-input">
						<span class="search-title"><span class="required">*</span>직업코드</span>
						<select>
							<option>선택</option>
							<option>회사원</option>
							<option>공무원</option>
							<option>전문직</option>
							<option>군인</option>
							<option>주부</option>
							<option>연예인</option>
							<option>기타</option>
						</select>
					</div>
					<div class="one-input">
						<span class="search-title">이메일</span>
						<input class="style-input" type="text">@
						<input class="style-input" type="text">
					</div>
					<div class="one-input">
						<span class="search-title">주소</span>
						<input class="style-input" type="text">
					</div>
					<div class="one-input">
						<span class="search-title"><span class="required">*</span>우편물 수령</span>
						<label><input type="radio" name="psmtGrcCd" value="H">자택</label>
						<label><input type="radio" name="psmtGrcCd" value="O">직장</label>
					</div>
					<div class="one-input">
						<span class="search-title">성별</span>
						<label><input type="radio" name="sexCd" value="F">여성</label>
						<label><input type="radio" name="sexCd" value="M">남성</label>
					</div>
					<div class="one-input">
						<span class="search-title">결혼기념일</span>
						<input class="style-input" type="date">
					</div>
					<div class="one-input">
						<span class="search-title">매장</span>
						<input class="style-input" type="text">
					</div>
				</div>
			</div>
			
			<span class="sub-title">수신동의 (통합)</span>
			<div class="box-info">
				<div class="area-input">
					<div class="one-input">
						<span class="search-title"><span class="required">*</span>이메일 수신동의</span>
						<label><input type="radio" name="emailRcvYn" value="Y">예</label>
						<label><input type="radio" name="emailRcvYn" value="N">아니오</label>
					</div>
					<div class="one-input">
						<span class="search-title"><span class="required">*</span>SMS 수신동의</span>
						<label><input type="radio" name="smsRcvYn" value="Y">예</label>
						<label><input type="radio" name="smsRcvYn" value="N">아니오</label>
					</div>
					<div class="one-input">
						<span class="search-title"><span class="required">*</span>DM 수신동의</span>
						<label><input type="radio" name="dmRcvYn" value="Y">예</label>
						<label><input type="radio" name="dmRcvYn" value="N">아니오</label>
					</div>
				</div>
			</div>
		</form>
		
		<div class="box-btn">
			<button class="btn-close">닫기</button>
			<button class="btn-apply btn-add-apply">등록</button>
		</div>
	</div>
</body>
</html>