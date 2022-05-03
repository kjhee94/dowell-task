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
<script src="/resources/js/customer/custList.js"></script>
</head>
<body>
	<div id="wrap">
		<!-- header -->
		<jsp:include page="/WEB-INF/views/common/header.jsp"></jsp:include>
		
		<!-- content -->
		<div id="content">
			<div class="container">
				<form action="/customer/selectSearchCust.do" method="post">
					<div class="box-title">
						<span class="main-title">고객조회</span>
						<button id="resetBtn" class="btn-reset" type="reset">
							<span class="material-icons">restart_alt</span>
						</button>
						<c:if test="${sessionScope.user.userDtCd eq '2'}">
							<button id="custAddBtn" type="button">신규등록</button>
						</c:if>
					</div>
					
					<div class="box-search">
						<div class="area-input">
							<div class="one-search">
								<span class="search-title">매장</span>
								<div class="box-input-text">
									<input class="style-input" type="text" name="prtCd" value="${requestScope.cust.prtCd}" autofocus>
									<button id="prtSearchBtn" type="button">
										<span class="material-icons">search</span>
									</button>
									<input class="style-input" type="text" name="prtNm" value="${requestScope.cust.prtNm}">
								</div>
							</div>
							<div class="one-search">
								<span class="search-title">고객번호</span>
								<div class="box-input-text">
									<input class="style-input" type="text" name="custNo" value="${requestScope.cust.custNo}">
									<button id="custSearchBtn" type="button">
										<span class="material-icons">search</span>
									</button>
									<input class="style-input" type="text" name="custNm" value="${requestScope.cust.custNm}">
								</div>
							</div>
							<div class="one-search">
								<span class="search-title">
									<span class="required">*</span>
									고객상태
								</span>
								<div class="box-input-radio">
									<c:if test="${requestScope.cust.custSsCd eq null}">
										<label><input type="radio" name="custSsCd" value="all" checked>전체</label>
										<label><input type="radio" name="custSsCd" value="10">정상</label>
										<label><input type="radio" name="custSsCd" value="80">중지</label>
										<label><input type="radio" name="custSsCd" value="90">해지</label>
									</c:if>
									<c:if test="${requestScope.cust.custSsCd eq '10'}">
										<label><input type="radio" name="custSsCd" value="all">전체</label>
										<label><input type="radio" name="custSsCd" value="10" checked>정상</label>
										<label><input type="radio" name="custSsCd" value="80">중지</label>
										<label><input type="radio" name="custSsCd" value="90">해지</label>
									</c:if>
									<c:if test="${requestScope.cust.custSsCd eq '80'}">
										<label><input type="radio" name="custSsCd" value="all">전체</label>
										<label><input type="radio" name="custSsCd" value="10">정상</label>
										<label><input type="radio" name="custSsCd" value="80" checked>중지</label>
										<label><input type="radio" name="custSsCd" value="90">해지</label>
									</c:if>
									<c:if test="${requestScope.cust.custSsCd eq '90'}">
										<label><input type="radio" name="custSsCd" value="all">전체</label>
										<label><input type="radio" name="custSsCd" value="10">정상</label>
										<label><input type="radio" name="custSsCd" value="80">중지</label>
										<label><input type="radio" name="custSsCd" value="90" checked>해지</label>
									</c:if>
								</div>
							</div>
							<div class="one-search">
								<span class="search-title">
									<span class="required">*</span>
									가입일자
								</span>
								<div class="box-input-date">
									<input type="date" name="jsDtFrom" id="jsDtFrom" max="${requestScope.cust.jsDtTo}" value="${requestScope.cust.jsDtFrom}">
									<input type="date" name="jsDtTo" id="jsDtTo" min="${requestScope.cust.jsDtFrom}" value="${requestScope.cust.jsDtTo}">
								</div>
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
						<span class="custNo">고객번호</span>
						<span class="custNm">고객이름</span>
						<span class="mblNo">휴대폰번호</span>
						<span class="custSsNm">고객상태</span>
						<span class="jsDt">가입일자</span>
						<span class="prtNm">가입매장</span>
						<span class="firReg">등록자</span>
						<span class="lstUpdDt">수정일자</span>
					</div>
					<div class="result-content">
						<c:choose>
							<c:when test="${!requestScope.list.isEmpty() }">
								<c:forEach items="${requestScope.list }" var="c">
									<div class="one-content">
										<span class="custNo">
											<span>${c.custNo}</span>
											<button class="btn-history" type="button">
												<span class="material-icons">list_alt</span>
											</button>
										</span>
										<span class="custNm">
											<span>${c.custNm}</span>
											<button class="btn-detail" type="button">
												<span class="material-icons">list_alt</span>
											</button>
										</span>
										<span class="mblNo">${c.mblNo}</span>
										<span class="custSsNm">${c.custSsNm}</span>
										<span class="jsDt">${c.jsDt}</span>
										<span class="prtNm">${c.prtNm}</span>
										<span class="firReg">${c.fstUserId} / ${c.fstUserNm}</span>
										<span class="lstUpdDt">${c.lstUpdDtFm}</span>
									</div>
								</c:forEach>
							</c:when>
							<c:otherwise>
								<p>해당하는 고객이 없습니다.</p>
							</c:otherwise>
						</c:choose>
					</div>
				</div>
			</div>
		</div>
		
		<!-- footer -->
		<jsp:include page="/WEB-INF/views/common/footer.jsp"></jsp:include>
	</div>
	
	
</body>
</html>