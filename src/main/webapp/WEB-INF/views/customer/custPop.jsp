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
<link rel="stylesheet" href="/resources/css/customer/popup.css">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script src="/resources/js/customer/popup.js"></script>
</head>
<body>
	<div class="container">
		<form action="/customer/selectCust.do" method="post">
			<div class="box-title">
				<span class="main-title">고객조회</span>
				<button id="resetCustBtn" class="btn-reset" type="reset">
					<span class="material-icons">restart_alt</span>
				</button>
			</div>
			
			<div class="box-search">
				<div class="area-input">
					<div class="one-input">
						<span class="search-title">고객이름</span>
						<input class="style-input" type="text" name="custNm" value="${requestScope.custNm}" autofocus>
					</div>
					<div class="one-input">
						<span class="search-title">핸드폰번호</span>
						<input class="style-input" type="text" name="mblNo" value="${requestScope.mblNo}">
					</div>
				</div>
				<div class="area-btn">
					<button id="custSearchBtn" class="btn-search" type="submit">
						<span class="material-icons">search</span>
					</button>
				</div>
			</div>
		</form>
		
		<div class="box-result">
			<div class="result-title">
				<span class="checkbox cb-cust">선택</span>
				<span class="custNo">고객번호</span>
				<span class="custNm">고객명</span>
				<span class="mblNo">핸드폰번호</span>
				<span class="custSsNm">고객상태</span>
			</div>
			<div class="result-content">
				<c:choose>
					<c:when test="${requestScope.cList!=null } && ${!requestScope.cList.isEmpty()}">
						<c:forEach items="${requestScope.cList }" var="cl">
							<div class="one-content one-cust-content">
								<span class="checkbox cb-cust">
									<input type="checkbox">
								</span>
									<span class="custNo">${cl.custNo}</span>
								<span class="custNm">${cl.custNm}</span>
								<span class="mblNo">${cl.mblNo}</span>
								<span class="custSsNm">${cl.custSsNm}</span>
							</div>
						</c:forEach>
					</c:when>
					<c:otherwise>
						<p>해당하는 고객이 없습니다.</p>
					</c:otherwise>
				</c:choose>
			</div>
		</div>
		
		<div class="box-btn">
			<button id="closeBtn" class="btn-close">닫기</button>
			<button id="applyBtn" class="btn-apply btn-cust-apply">적용</button>
		</div>
	</div>
</body>
</html>