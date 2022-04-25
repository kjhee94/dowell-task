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
<script src="/resources/js/popup.js"></script>
</head>
<body>
	<div class="container">
		<div class="box-title">
			<span class="main-title">변경이력</span>
		</div>
		
		<div class="box-user">
			<span class="search-title">고객</span>
			<div class="box-info">
				<input type="text" class="style-input" value="${requestScope.custNo}" readonly>
				<input type="text" class="style-input" value="${requestScope.custNm}" readonly>
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
			<c:choose>
				<c:when test="${!requestScope.list.isEmpty() }">
					<c:forEach items="${requestScope.list }" var="h">
						<div class="result-content">
							<span class="chgDt">${h.chgDt}</span>
							<span class="chgCd">${h.chgCd}</span>
							<span class="chgBfCnt">
								<c:choose>
									<c:when test="${h.chgCd eq '고객상태'}">
										<c:if test="${h.chgBfCnt eq '10'}">정상</c:if>
										<c:if test="${h.chgBfCnt eq '80'}">중지</c:if>
										<c:if test="${h.chgBfCnt eq '90'}">해지</c:if>
									</c:when>
									<c:when test="${h.chgCd eq '직업'}">
										<c:if test="${h.chgBfCnt eq '10'}">학생</c:if>
										<c:if test="${h.chgBfCnt eq '20'}">회사원</c:if>
										<c:if test="${h.chgBfCnt eq '30'}">공무원</c:if>
										<c:if test="${h.chgBfCnt eq '40'}">전문직</c:if>
										<c:if test="${h.chgBfCnt eq '50'}">군인</c:if>
										<c:if test="${h.chgBfCnt eq '60'}">주부</c:if>
										<c:if test="${h.chgBfCnt eq '90'}">연예인</c:if>
										<c:if test="${h.chgBfCnt eq '99'}">기타</c:if>
									</c:when>
									<c:otherwise>
										${h.chgBfCnt}
									</c:otherwise>
								</c:choose>
							</span>
							<span class="chgAftCnt">
								<c:choose>
									<c:when test="${h.chgCd eq '고객상태'}">
										<c:if test="${h.chgAftCnt eq '10'}">정상</c:if>
										<c:if test="${h.chgAftCnt eq '80'}">중지</c:if>
										<c:if test="${h.chgAftCnt eq '90'}">해지</c:if>
									</c:when>
									<c:when test="${h.chgCd eq '직업'}">
										<c:if test="${h.chgAftCnt eq '10'}">학생</c:if>
										<c:if test="${h.chgAftCnt eq '20'}">회사원</c:if>
										<c:if test="${h.chgAftCnt eq '30'}">공무원</c:if>
										<c:if test="${h.chgAftCnt eq '40'}">전문직</c:if>
										<c:if test="${h.chgAftCnt eq '50'}">군인</c:if>
										<c:if test="${h.chgAftCnt eq '60'}">주부</c:if>
										<c:if test="${h.chgAftCnt eq '90'}">연예인</c:if>
										<c:if test="${h.chgAftCnt eq '99'}">기타</c:if>
									</c:when>
									<c:otherwise>
										${h.chgAftCnt}
									</c:otherwise>
								</c:choose>
							</span>
							<span class="lstUpdId">${h.lstUpdId} / ${h.lstUpdNm}</span>
							<span class="lstUpdDt">${h.lstUpdDt}</span>
						</div>
					</c:forEach>
				</c:when>
				<c:otherwise>
					<p>변경내역이 없습니다.</p>
				</c:otherwise>
			</c:choose>	
		</div>
				
		<div class="box-btn">
			<button class="btn-close">닫기</button>
		</div>
	</div>
</body>
</html>