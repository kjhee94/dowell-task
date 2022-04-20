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
<link rel="stylesheet" href="/resources/css/customer/selectCust.css">
</head>
<body>
	<div id="wrap">
		<!-- header -->
		<jsp:include page="/WEB-INF/views/common/header.jsp"></jsp:include>
		
		<!-- content -->
		<div id="content">
			<div class="container">
				<form action="" id="searchForm">
					<div class="box-title">
						<span class="main-title">고객조회</span>
						<button id="resetBtn" type="reset">
							<span class="material-icons">restart_alt</span>
						</button>
						<button id="addCustBtn" type="button">신규등록</button>
					</div>
					
					<div class="box-search">
						<div class="area-input">
							<div class="one-search">
								<span class="search-title">매장</span>
								<input class="style-input" type="text" name="prtCd" readonly value="${sessionScope.user.prtCd}">
								<button id="prtSearchBtn" type="button">
									<span class="material-icons">search</span>
								</button>
								<input class="style-input" type="text" name="prtNm" autofocus value="${sessionScope.user.prtNm}">
							</div>
							<div class="one-search">
								<span class="search-title">고객번호</span>
								<input class="style-input" type="text" name="custNo" readonly>
								<button id="custNoSearchBtn"  type="button">
									<span class="material-icons">search</span>
								</button>
								<input class="style-input" type="text" name="custNm">
							</div>
							<div class="one-search">
								<span class="search-title">
									<span class="required">*</span>
									고객상태
								</span>
								<div class="box-input-radio">
									<label><input type="radio" name="custSsCd" value="all" checked>전체</label>
									<label><input type="radio" name="custSsCd" value="10">정상</label>
									<label><input type="radio" name="custSsCd" value="80">중지</label>
									<label><input type="radio" name="custSsCd" value="90">해제</label>
								</div>
							</div>
							<div class="one-search">
								<span class="search-title">
									<span class="required">*</span>
									가입일자
								</span>
								<div class="box-input-date">
									<input type="date" name="jsDt1" value="2000-01-01">
									<input type="date" name="jsDt2" value="2000-01-01">
								</div>
								
							</div>
						</div>
						<div class="area-btn">
							<input type="submit" value="조회">
						</div>
					</div>
				</form>
				
				<div class="box-result">
					<div class="result-title">
						<span class="custNo">고객번호</span>
						<span class="custNm">고객이름</span>
						<span class="mblNo">휴대폰번호</span>
						<span class="custSs">고객상태</span>
						<span class="jsDt">가입일자</span>
						<span class="jnPrt">가입매장</span>
						<span class="firReg">등록자</span>
						<span class="lstUpdDt">수정일자</span>
					</div>
					<div class="result-cust">
						<span class="custNo">1</span>
						<span class="custNm">홍*동</span>
						<span class="mblNo">010-****-0001</span>
						<span class="custSs">정상</span>
						<span class="jsDt">2001-01-19</span>
						<span class="jnPrt">강남매장</span>
						<span class="firReg">20220409/강주희</span>
						<span class="lstUpdDt">2021-08-01/20220409</span>
					</div>
					<div class="result-cust">
						<span class="custNo">1</span>
						<span class="custNm">홍*동</span>
						<span class="mblNo">010-****-0001</span>
						<span class="custSs">정상</span>
						<span class="jsDt">2001-01-19</span>
						<span class="jnPrt">강남매장</span>
						<span class="firReg">20220409/강주희</span>
						<span class="lstUpdDt">2021-08-01/20220409</span>
					</div>
					<div class="result-cust">
						<span class="custNo">1</span>
						<span class="custNm">홍*동</span>
						<span class="mblNo">010-****-0001</span>
						<span class="custSs">정상</span>
						<span class="jsDt">2001-01-19</span>
						<span class="jnPrt">강남매장</span>
						<span class="firReg">20220409/강주희</span>
						<span class="lstUpdDt">2021-08-01/20220409</span>
					</div>
				</div>
			</div>
		</div>
		
		<!-- footer -->
		<jsp:include page="/WEB-INF/views/common/footer.jsp"></jsp:include>
	</div>
</body>
</html>