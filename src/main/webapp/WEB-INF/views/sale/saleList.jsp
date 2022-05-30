<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>고객 판매 관리</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/resources/common/common.css">
<link rel="stylesheet" href="/resources/common/include.css">
<link rel="stylesheet" href="/resources/css/sale/saleList.css">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script src="/resources/common/common.js"></script>
<script src="/resources/common/gnb.js"></script>
<script src="/resources/js/sale/saleList.js"></script>
</head>
<body>
<div id="wrap">
		<!-- header -->
		<jsp:include page="/WEB-INF/views/common/header.jsp"></jsp:include>
		
		<!-- content -->
		<div id="content">
			<div class="container">
				<div class="box-title">
					<span class="main-title">고객판매관리</span>
					<button id="resetBtn" class="btn-reset" type="reset">
						<span class="material-icons">restart_alt</span>
					</button>
					<c:if test="${sessionScope.user.userDtCd eq '2'}">
						<button id="custAddBtn" class="btn-add" type="button">판매등록</button>
					</c:if>
				</div>
					
				<div class="box-search">
					<form id="SearchSaleForm">
						<div class="area-input">
							<div class="one-search">
								<span class="search-title"><span class="required">*</span>판매일자</span>
								<div class="box-input-date">
									<input id="salDtFrom" type="date" name="salDtFrom" max="${requestScope.map.salDtTo}" value="${requestScope.map.salDtFrom}">
									<input id="salDtTo" type="date" name="salDtTo" max="9999-12-31" min="${requestScope.map.salDtFrom}" value="${requestScope.map.salDtTo}">
								</div>
							</div>
							<div class="one-search">
								<span class="search-title"><span class="required">*</span>매장</span>
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
						<span class="salDt">판매일자</span>
						<span class="custNo">고객번호</span>
						<span class="custNm">고객명</span>
						<span class="salNo">판매번호</span>
						<span class="sale half-height">
							<span class="tit-title">판매</span>
							<div>
								<span class="totSalQty">수량</span>
								<span class="totSalAmt">금액</span>
							</div>
						</span>
						<span class="payment half-height">
							<span class="tit-title">수금</span>
							<div>
								<span class="cshStlmAmt">현금</span>
								<span class="crdStlmAmt">카드</span>
								<span class="pntStlmAmt">포인트</span>
							</div>
						</span>
						<span class="fstUserNm">등록자</span>
						<span class="fstRegDt">등록시간</span>
					</div>
					<div id="result" class="result-content">
						<p>해당하는 판매내역이 없습니다.</p>
					</div>
					<div id="sum" class="tot-sum">
						<span class="sum-title">합계</span>
						<div class="sum-result">
							<span id="sumTotSalQty"></span>
							<span id="sumTotSalAmt"></span>
							<span id="sumCshStlmAmt"></span>
							<span id="sumCrdStlmAmt"></span>
							<span id="sumPntStlmAmt"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- footer -->
		<%-- <jsp:include page="/WEB-INF/views/common/footer.jsp"></jsp:include> --%>
	</div>
</body>
</html>