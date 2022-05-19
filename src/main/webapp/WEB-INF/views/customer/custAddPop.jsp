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
<link rel="stylesheet" href="/resources/css/customer/custAdd.css">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script src="/resources/common/common.js"></script>
<script src="/resources/js/customer/custAddPop.js"></script>
</head>
<body>
	<div class="container">
		<div class="box-title">
			<span class="main-title">신규고객등록</span>
			<!-- <button id="resetCustAddBtn" class="btn-reset" type="reset">
				<span class="material-icons">restart_alt</span>
			</button> -->
		</div>
		
		<form id="custAddForm" method="post">
			<fieldset>
				<legend>고객기본정보</legend>
				<div class="one-input">
					<span class="input-title"><span class="required">*</span>고객명</span>
					<div class="box-input">
						<input id="custNmInfo" class="style-input" type="text" name="custNm" autofocus autocomplete='off'>
					</div>
				</div>
				<div class="one-input">
					<span class="input-title"><span class="required">*</span>직업코드</span>
					<div class="box-input">
						<select id="pocCd" name="pocCd" class="style-input">
							<option selected disabled>선택</option>
							<c:forEach items="${requestScope.map.pList}" var="p" varStatus="status">
								<option id="pocCd${status.index}" value="${p.pocCd}">${p.pocNm}</option>
							</c:forEach>
						</select>
						<span class="material-icons select-arrow">expand_more</span>
					</div>
				</div>
				<div class="one-input">
					<span class="input-title"><span class="required">*</span>생년월일</span>
					<div class="box-input">
						<input id="brdyDt" class="style-input" type="date" max="9999-12-13">
					</div>
				</div>
				<div class="one-input">
					<span class="input-title">성별</span>
					<div class="box-radio">
						<c:forEach items="${requestScope.map.sList}" var="s" varStatus="status">
							<label><input id="sexCd${status.index}" type="radio" name="sexCd" value="${s.sexCd}">${s.sexNm}</label>
						</c:forEach>
					</div>
				</div>
				<div class="one-input">
					<span class="input-title"><span class="required">*</span>휴대폰번호</span>
					<div class="box-input">
						<input id="mblNo0" class="style-input mblNo" type="text" maxlength="3" autocomplete='off'>
						<input id="mblNo1" class="style-input mblNo" type="text" maxlength="4" autocomplete='off'>
						<input id="mblNo2" class="style-input mblNo" type="text" maxlength="4" autocomplete='off'>
						<button id="checkMblNo" class="btn-check" type="button">
							<span class="material-icons">done</span>
						</button>
					</div>
				</div>
				<div class="one-input">
					<span class="input-title">생일</span>
					<div class="box-radio">
						<label><input type="radio" name="scalYn" value="0" checked>양력</label>
						<label><input type="radio" name="scalYn" value="1">음력</label>
					</div>
				</div>
				<div class="one-input">
					<span class="input-title"><span class="required">*</span>우편물 수령</span>
					<div class="box-radio">
						<c:forEach items="${requestScope.map.gList}" var="g" varStatus="status">
							<label><input id="psmtGrcCd${status.index}" type="radio" name="psmtGrcCd" value="${g.psmtGrcCd}">${g.psmtGrcNm}</label>
						</c:forEach>
					</div>
				</div>
				<div class="one-input">
					<span class="input-title"><span class="required">*</span>이메일</span>
					<div class="box-input">
						<input id="email0" class="style-input email" type="text" autocomplete='off'>@
						<input id="email1" class="style-input email" type="text" autocomplete='off'>
					</div>
				</div>
				<div class="one-input row-addr">
					<span class="input-title">주소</span>
					<div class="box-addr">
						<input id="addr" class="style-input addr" type="text" name="addr" autocomplete='off'>
						<input id="addrDtl" class="style-input addr" type="text" name="addrDtl" autocomplete='off'>
					</div>
				</div>
				<div class="one-input">
					<span class="input-title">결혼기념일</span>
					<div class="box-input">
						<input id="mrrgDt" class="style-input" type="date" max="9999-12-13">
					</div>
				</div>
				<div class="one-input">
					<span class="input-title">매장</span>
					<div class="box-input">
						<input class="style-input prt" type="text" name="prtCd" value="${sessionScope.user.prtCd}" readonly>
						<input class="style-input prt" type="text" name="prtNm" value="${sessionScope.user.prtNm}" readonly>
					</div>
				</div>
			</fieldset>
			
			<fieldset>
				<legend>수신동의 (통합)</legend>
				<div class="one-input">
					<span class="input-title"><span class="required">*</span>이메일 수신동의</span>
					<div class="box-radio">
						<label><input type="radio" name="emailRcvYn" value="Y">예</label>
						<label><input type="radio" name="emailRcvYn" value="N" checked>아니오</label>
					</div>
				</div>
				<div class="one-input">
					<span class="input-title"><span class="required">*</span>SMS 수신동의</span>
					<div class="box-radio">
						<label><input type="radio" name="smsRcvYn" value="Y">예</label>
						<label><input type="radio" name="smsRcvYn" value="N" checked>아니오</label>
					</div>
				</div>
				<div class="one-input">
					<span class="input-title"><span class="required">*</span>DM 수신동의</span>
					<div class="box-radio">
						<label><input type="radio" name="dmRcvYn" value="Y">예</label>
						<label><input type="radio" name="dmRcvYn" value="N" checked>아니오</label>
					</div>
				</div>
			</fieldset>
		</form>
		<div class="box-btn">
			<button id="closeBtn" class="btn-close">닫기</button>
			<button id="applyBtn" class="btn-apply">등록</button>
		</div>
	</div>
</body>
</html>