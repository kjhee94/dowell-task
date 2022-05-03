<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>매장 조회</title>
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
		<form action="/customer/selectPrt.do" method="post">
			<div class="box-title">
				<span class="main-title">매장조회</span>
				<button id="resetPrtBtn" class="btn-reset" type="reset">
					<span class="material-icons">restart_alt</span>
				</button>
			</div>
			
			<div class="box-search">
				<div class="area-input-prt">
					<span class="search-title">매장</span>
					<input class="style-input" type="search" name="keyword" value="${requestScope.keyword}" autofocus>
				</div>
				<div class="area-btn">
					<button type="submit" id="prtSearchBtn">
						<span class="material-icons">search</span>
					</button>
				</div>
			</div>
		</form>
		
		<div class="box-result">
			<div class="result-title">
				<span class="checkbox cb-prt">선택</span>
				<span class="prtCd">매장코드</span>
				<span class="prtNm">매장명</span>
				<span class="prtSsNm">매장상태</span>
			</div>
			<div class="result-content">
				<c:choose>
					<c:when test="${requestScope.pList!=null }">
						<c:choose>
							<c:when test="${!requestScope.pList.isEmpty()}">
								<c:forEach items="${requestScope.pList }" var="pl">
									<div class="one-content one-prt-content">
										<span class="checkbox cb-prt">
											<input type="checkbox">
										</span>
										<span class="prtCd">${pl.prtCd}</span>
										<span class="prtNm">${pl.prtNm}</span>
										<span class="prtSsNm">${pl.prtSsNm}</span>
									</div>
								</c:forEach>
							</c:when>
							<c:otherwise>
								<p>해당하는 매장이 없습니다.</p>
							</c:otherwise>
						</c:choose>
					</c:when>
					<c:otherwise>
						<p>매장을 검색해주세요.</p>
					</c:otherwise>
				</c:choose>
			</div>
		</div>
		
		<div class="box-btn">
			<button class="btn-close">닫기</button>
			<button class="btn-apply btn-prt-apply">적용</button>
		</div>
	</div>
</body>
</html>