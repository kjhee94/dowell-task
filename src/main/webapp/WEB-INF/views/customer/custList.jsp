<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>고객 조회</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/resources/common/common.css">
<link rel="stylesheet" href="/resources/common/include.css">
<link rel="stylesheet" href="/resources/css/customer/custList.css">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script src="/resources/common/common.js"></script>
<script src="/resources/common/gnb.js"></script>
<script src="/resources/js/customer/custList.js"></script>
</head>
<body>
	<div id="wrap">
		<!-- header -->
		<jsp:include page="/WEB-INF/views/common/header.jsp"></jsp:include>
		
		<!-- content -->
		<div id="content">
			<div class="container">
				<div class="box-title">
					<span class="main-title">고객조회</span>
					<button id="resetBtn" class="btn-reset" type="reset">
						<span class="material-icons">restart_alt</span>
					</button>
					<c:if test="${sessionScope.user.userDtCd eq '2'}">
						<button id="custAddBtn" class="btn-add" type="button">신규등록</button>
					</c:if>
				</div>
					
				<div class="box-search">
					<form id="SearchCustForm">
						<div class="area-input">
							<div class="one-search">
								<span class="search-title">매장</span>
								<div class="box-input-text">
									<c:choose>
										<c:when test="${sessionScope.user.userDtCd eq '2'}">
											<input id="prtCd" class="style-input" type="text" name="prtCd" value="${sessionScope.user.prtCd}" readonly autocomplete='off'>
											<button id="prtSearchBtn" class="btn-one-search" type="button">
												<span class="material-icons">search</span>
											</button>
											<input id="prtNm" class="style-input" type="text" name="prtNm" value="${sessionScope.user.prtNm}" autofocus autocomplete='off'>
										</c:when>
										<c:otherwise>
											<input id="prtCd" class="style-input" type="text" name="prtCd" readonly autocomplete='off'>
											<button id="prtSearchBtn" class="btn-one-search" type="button">
												<span class="material-icons">search</span>
											</button>
											<input id="prtNm" class="style-input" type="text" name="prtNm" autofocus autocomplete='off'>
										</c:otherwise>
									</c:choose>
								</div>
							</div>
							<div class="one-search">
								<span class="search-title">고객번호</span>
								<div class="box-input-text">
									<input id="custNo" class="style-input" type="text" name="custNo" readonly autocomplete='off'>
									<button id="custSearchBtn" class="btn-one-search" type="button">
										<span class="material-icons">search</span>
									</button>
									<input id="custNm" class="style-input" type="text" name="custNm" autocomplete='off'>
								</div>
							</div>
							<div class="one-search">
								<span class="search-title"><span class="required">*</span>고객상태</span>
								<div class="box-input-radio">
									<label><input type="radio" name="custSsCd" id="all" value="all" checked>전체</label>
									<c:forEach items="${requestScope.map.dtList}" var="dt">
										<label><input type="radio" name="custSsCd" value="${dt.custSsCd}">${dt.custSsNm}</label>
									</c:forEach>
								</div>
							</div>
							<div class="one-search">
								<span class="search-title"><span class="required">*</span>가입일자</span>
								<div class="box-input-date">
									<input id="jsDtFrom" type="date" name="jsDtFrom" max="${requestScope.map.jsDtTo}" value="${requestScope.map.jsDtFrom}">
									<input id="jsDtTo" type="date" name="jsDtTo" max="9999-12-31" min="${requestScope.map.jsDtFrom}" value="${requestScope.map.jsDtTo}">
								</div>
							</div>
						</div>
						
						<div class="area-btn">
							<button id="SearchBtn" class="btn-submit" type="button">
								<span class="material-icons">search</span>
							</button>
						</div>
					</form>
				</div>
				
				
				<div class="box-result">
					<div class="result-title">
						<span class="custNo">고객번호</span>
						<span class="custNm">고객이름</span>
						<span class="mblNo">휴대폰번호</span>
						<span class="custSsNm">고객상태</span>
						<span class="jsDt">가입일자</span>
						<span class="prtNm">가입매장</span>
						<span class="fstUser">등록자</span>
						<span class="lstUpdDt">수정일자</span>
					</div>
					<div id="result" class="result-content">
						<p>해당하는 고객이 없습니다.</p>
					</div>
				</div>
			</div>
		</div>
		
		<!-- footer -->
		<%-- <jsp:include page="/WEB-INF/views/common/footer.jsp"></jsp:include> --%>
	</div>
</body>
</html>