<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>고객 정보 조회</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/resources/common/common.css">
<link rel="stylesheet" href="/resources/common/include.css">
<link rel="stylesheet" href="/resources/css/customer/custInfo.css">
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script src="/resources/common/common.js"></script>
<script src="/resources/common/gnb.js"></script>
<script src="/resources/js/customer/custInfo.js"></script>
</head>
<body>
	<div id="wrap">
		<!-- header -->
		<jsp:include page="/WEB-INF/views/common/header.jsp"></jsp:include>
		
		<!-- content -->
		<div id="content">
			<div class="container">
				<div class="box-title">
					<span class="main-title">고객정보조회</span>
					<button id="resetBtn" class="btn-reset" type="reset">
						<span class="material-icons">restart_alt</span>
					</button>
				</div>
				<div class="box-search">
					<form id=" ">
						<div class="area-search-input">
							<span class="search-title">고객번호</span>
							<div class="box-input-text">
								<input id="custNo" class="style-input" type="text" name="custNo" value="${requestScope.map.custNo}" autofocus autocomplete='off'>
								<button id="custSearchBtn" class="btn-one-search" type="button">
									<span class="material-icons">search</span>
								</button>
								<input id="custNm" class="style-input" type="text" name="custNm" autocomplete='off'>
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
					<form id="updateCustInfo">
						<fieldset>
							<legend>고객기본정보</legend>
							<div class="column-two">
								<div class="one-input">
									<div class="area-input">
										<span class="input-title"><span class="required">*</span>고객명</span>
										<div class="box-input">
											<input id="custNmInfo" class="style-input" type="text" name="custNm" placeholder="홍길동" autocomplete='off'>
										</div>
									</div>
									<!-- <div id="custNmMsg" class="area-msg"></div> -->
								</div>
								<div class="one-input">
									<div class="area-input">
										<span class="input-title"><span class="required">*</span>생년월일</span>
										<div class="box-input">
											<input id="brdyDt" class="style-input" type="date" name="brdyDt" max="9999-12-13">
										</div>
									</div>
									<!-- <div id="brdyDtMsg" class="area-msg"></div> -->
								</div>
								<div class="one-input">
									<div class="area-input">
										<span class="input-title">성별</span>
										<div class="box-radio">
											<c:forEach items="${requestScope.map.sList}" var="s" varStatus="status">
												<label><input id="sexCd${status.index}" type="radio" name="sexCd" value="${s.sexCd}">${s.sexNm}</label>
											</c:forEach>
										</div>
									</div>
								</div>
								<div class="one-input">
									<div class="area-input">
										<span class="input-title"><span class="required">*</span>생일</span>
										<div class="box-radio">
											<label><input type="radio" name="scalYn" value="0">양력</label>
											<label><input type="radio" name="scalYn" value="1">음력</label>
										</div>
									</div>
								</div>
								<div class="one-input">
									<div class="area-input">
										<span class="input-title">결혼기념일</span>
										<div class="box-input">
											<input id="mrrgDt" class="style-input" type="date" name="mrrgDt" max="9999-12-13">
										</div>
									</div>
									<!-- <div id="mrrgDtMsg" class="area-msg"></div> -->
								</div>
								
								<div class="one-input">
									<div class="area-input">
										<span class="input-title"><span class="required">*</span>직업코드</span>
										<div class="box-input">
											<select id="pocCd" name="pocCd" class="style-input">
												<option disabled>선택</option>
												<c:forEach items="${requestScope.map.pList}" var="p" varStatus="status">
													<option id="pocCd${status.index}" value="${p.pocCd}">${p.pocNm}</option>
												</c:forEach>
											</select>
											<span class="material-icons select-arrow">expand_more</span>
										</div>
									</div>
									<!-- <div id="pocMsg" class="area-msg"></div> -->
								</div>
								
								<div class="one-input">
									<div class="area-input">
										<span class="input-title"><span class="required">*</span>휴대폰번호</span>
										<div class="box-input">
											<input id="mblNo0" class="style-input mblNo" type="text" maxlength="3" placeholder="010" autocomplete='off'>
											<input id="mblNo1" class="style-input mblNo" type="text" maxlength="4" placeholder="0000" autocomplete='off'>
											<input id="mblNo2" class="style-input mblNo" type="text" maxlength="4" placeholder="0000" autocomplete='off'>
											<button id="checkMblNo" class="btn-check" type="button">
												<span class="material-icons">done</span>
											</button>
										</div>
									</div>
									<!-- <div id="mblNoMsg" class="area-msg"></div> -->
								</div>
								<div class="one-input">
									<div class="area-input">
										<span class="input-title"><span class="required">*</span>가입매장</span>
										<div class="box-input">
											<input id="prtCd" class="style-input prt" type="text" name="prtCd">
											<button id="prtSearchBtn" class="btn-one-search" type="button">
												<span class="material-icons">search</span>
											</button>
											<input id="prtNm" class="style-input prt" type="text" name="prtNm" autocomplete='off'>
										</div>
									</div>
								</div>
								<div class="one-input">
									<div class="area-input">
										<span class="input-title"><span class="required">*</span>우편물 수령</span>
										<div class="box-radio">
											<c:forEach items="${requestScope.map.gList}" var="g" varStatus="status">
												<label><input id="psmtGrcCd${status.index}" type="radio" name="psmtGrcCd" value="${g.psmtGrcCd}">${g.psmtGrcNm}</label>
											</c:forEach>
										</div>
									</div>
								</div>
								<div class="one-input">
									<div class="area-input">
										<span class="input-title"><span class="required">*</span>이메일</span>
										<div class="box-input">
											<input id="email0" class="style-input email" type="text" placeholder="ID" autocomplete='off'>@
											<input id="email1" class="style-input email" type="text" placeholder="email.com" autocomplete='off'>
										</div>
									</div>
									<!-- <div id="emailMsg" class="area-msg"></div> -->
								</div>
							</div>
							
							<div class="column-two">
								<div class="one-input">
									<div class="area-input">
										<span class="input-title addr-height">주소</span>
										<div class="box-addr">
											<input id="addr" class="style-input addr" type="text" name="addr" placeholder="기본주소" autocomplete='off'>
											<input id="addrDtl" class="style-input addr" type="text" name="addrDtl" placeholder="상세주소" autocomplete='off'>
										</div>
									</div>
									<!-- <div id="addrMsg" class="area-msg"></div> -->
								</div>
								
								<div class="one-input">
									<div class="area-input">
										<span class="input-title"><span class="required">*</span>고객상태</span>
										<div class="box-radio box-custss">
											<c:forEach items="${requestScope.map.cList}" var="c" varStatus="status">
												<label><input id="custSsCd${status.index}" type="radio" name="custSsCd" value="${c.custSsCd}">${c.custSsNm}</label>
											</c:forEach>
										</div>
									</div>
								</div>
								<div class="one-input">
									<div class="area-input">
										<span class="input-title">최초가입일자</span>
										<div class="box-input">
											<input id="fstJsDt" class="style-input" type="text" name="fstJsDt" readonly>
										</div>
									</div>
								</div>
								<div class="one-input">
									<div class="area-input">
										<span class="input-title">가입일자</span>
										<div class="box-input">
											<input id="jsDt" class="style-input" type="text" name="jsDt" readonly>
										</div>
									</div>
								</div>
								<div class="one-input">
									<div class="area-input">
										<span class="input-title">중지일자</span>
										<div class="box-input">
											<input id="stpDt" class="style-input" type="text" name="stpDt" readonly>
										</div>
									</div>
								</div>
								<div class="one-input">
									<div class="area-input">
										<span class="input-title">해지일자</span>
										<div class="box-input">
											<input id="cnclDt" class="style-input" type="text" name="cnclDt" readonly>
										</div>
									</div>
								</div>
								<div class="one-input">
									<div class="area-input">
										<span class="input-title">해지사유</span>
										<div class="box-input">
											<input id="cnclCnts" class="style-input" type="text" name="cnclCnts" readonly>
										</div>
									</div>
									<div id="cCntsMsg" class="area-msg"></div>
								</div>
							</div>
						</fieldset>
						
						<fieldset class="column-three">
							<legend>구매</legend>
							<div class="one-input">
								<div class="area-input">
									<span class="input-title">총 구매금액</span>
									<div class="box-input">
										<input id="totlPrsAmt" class="style-input" type="text" readonly>
									</div>
								</div>
							</div>
							<div class="one-input">
								<div class="area-input">
									<span class="input-title">당월구매금액</span>
									<div class="box-input">
										<input id="prsAmtMth" class="style-input" type="text" readonly>
									</div>
								</div>
							</div>
							<div class="one-input">
								<div class="area-input">
									<span class="input-title">최종구매일</span>
									<div class="box-input">
										<input id="lstPrsDt" class="style-input" type="text" readonly>
									</div>
								</div>
							</div>
						</fieldset>
						
						<fieldset class="column-three">
							<legend>수신동의 (통합)</legend>
							<div class="one-input">
								<div class="area-input">
									<span class="input-title"><span class="required">*</span>이메일 수신동의</span>
									<div class="box-radio">
										<label><input type="radio" name="emailRcvYn" value="Y">예</label>
										<label><input type="radio" name="emailRcvYn" value="N">아니오</label>
									</div>
								</div>
							</div>
							<div class="one-input">
								<div class="area-input">
									<span class="input-title"><span class="required">*</span>SMS 수신동의</span>
									<div class="box-radio">
										<label><input type="radio" name="smsRcvYn" value="Y">예</label>
										<label><input type="radio" name="smsRcvYn" value="N">아니오</label>
									</div>
								</div>
							</div>
							<div class="one-input">
								<div class="area-input">
									<span class="input-title"><span class="required">*</span>DM 수신동의</span>
									<div class="box-radio">
										<label><input type="radio" name="dmRcvYn" value="Y">예</label>
										<label><input type="radio" name="dmRcvYn" value="N">아니오</label>
									</div>
								</div>
							</div>
						</fieldset>
					</form>
					
					<div class="box-btn">
						<button class="btn-golist"><a href="/customer/custList.do">목록</a></button>
						<c:if test="${sessionScope.user.userDtCd eq '2'}">
							<button id="updateBtn" class="btn-save">저장</button>
						</c:if>
					</div>
				</div>
			</div>
		</div>
		
		<!-- footer -->
		<jsp:include page="/WEB-INF/views/common/footer.jsp"></jsp:include>
	</div>
</body>
</html>