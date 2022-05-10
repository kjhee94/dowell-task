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
<link rel="stylesheet" href="/resources/css/customer/custAdd.css">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script src="/resources/js/customer/popup.js"></script>
</head>
<body>
	<div class="container">
		<form action="" method="post">
			<div class="box-title">
				<span class="main-title">신규고객등록</span>
				<button id="resetCustAddBtn" class="btn-reset" type="reset">
					<span class="material-icons">restart_alt</span>
				</button>
			</div>
			
			<fieldset>
				<legend>고객기본정보</legend>
				<div class="one-input">
					<span class="search-title"><span class="required">*</span>고객명</span>
					<div class="box-input">
						<input class="style-input" type="text" id="custNm" name="custNm" autofocus>
					</div>
				</div>
				<div class="one-input">
					<span class="search-title"><span class="required">*</span>생년월일</span>
					<div class="box-input">
						<input class="style-input" type="date" name="brdyDt">
					</div>
				</div>
				<div class="one-input">
					<span class="search-title"><span class="required">*</span>휴대폰번호</span>
					<div class="box-input">
						<input class="style-input mblNo" type="text" name="fstMblNo">
						<input class="style-input mblNo" type="text" name="mdlMblNo">
						<input class="style-input mblNo" type="text" name="lstMblNo">
					</div>
				</div>
				<div class="one-input">
					<span class="search-title"><span class="required">*</span>직업코드</span>
					<div class="box-input">
						<select name="pocCd" class="style-input">
							<option selected>선택</option>
							<option value="10">회사원</option>
							<option value="20">공무원</option>
							<option value="30">전문직</option>
							<option value="40">군인</option>
							<option value="50">주부</option>
							<option value="90">연예인</option>
							<option value="99">기타</option>
						</select>
					</div>
				</div>
				<div class="one-input">
					<span class="search-title"><span class="required">*</span>우편물 수령</span>
					<div class="box-input">
						<label><input type="radio" name="psmtGrcCd" value="H" checked>자택</label>
						<label><input type="radio" name="psmtGrcCd" value="O">직장</label>
					</div>
				</div>
				<div class="one-input">
					<span class="search-title">이메일</span>
					<div class="box-input">
						<input class="style-input" type="text" class="email" name="emailId">
						<input class="style-input" type="text" class="email" name="emailAddr">
					</div>
				</div>
				<div class="one-input">
					<span class="search-title">주소</span>
					<div class="box-input">
						<input class="style-input" type="text" name="addr">
						<input class="style-input" type="text" name="addrDtl">
					</div>
				</div>
				
				<div class="one-input">
					<span class="search-title">결혼기념일</span>
					<div class="box-input">
						<input class="style-input" type="date" name="mrrgDt">
					</div>
				</div>
				<div class="one-input">
					<span class="search-title">성별</span>
					<div class="box-input">
						<label><input type="radio" name="sexCd" value="F" checked>여성</label>
						<label><input type="radio" name="sexCd" value="M">남성</label>
					</div>
				</div>
				<div class="one-input">
					<span class="search-title">생일</span>
					<div class="box-input">
						<label><input type="radio" name="scalYn" value="0" checked>양력</label>
						<label><input type="radio" name="scalYn" value="1">음력</label>
					</div>
				</div>
				<div class="one-input">
					<span class="search-title">매장</span>
					<div class="box-input">
						${sessionScope.user.prtCd} / ${sessionScope.user.prtNm}
					</div>
				</div>
			</fieldset>
			<fieldset>
				<legend>수신동의 (통합)</legend>
				<div class="one-input">
					<span class="search-title"><span class="required">*</span>이메일 수신동의</span>
					<div class="box-input">
						<label><input type="radio" name="emailRcvYn" value="Y">예</label>
						<label><input type="radio" name="emailRcvYn" value="N" checked>아니오</label>
					</div>
				</div>
				<div class="one-input">
					<span class="search-title"><span class="required">*</span>SMS 수신동의</span>
					<div class="box-input">
						<label><input type="radio" name="smsRcvYn" value="Y">예</label>
						<label><input type="radio" name="smsRcvYn" value="N" checked>아니오</label>
					</div>
				</div>
				<div class="one-input">
					<span class="search-title"><span class="required">*</span>DM 수신동의</span>
					<div class="box-input">
						<label><input type="radio" name="dmRcvYn" value="Y">예</label>
						<label><input type="radio" name="dmRcvYn" value="N" checked>아니오</label>
					</div>
				</div>
			</fieldset>
		</form>
		
		<div class="box-btn">
			<button id="closeBtn" class="btn-close">닫기</button>
			<button class="btn-apply btn-add-apply">등록</button>
		</div>
	</div>
</body>
</html>