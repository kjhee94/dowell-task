<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
		<header>
			<div class="box-side">
				<div class="logo">
					<a href="#">
						<img class="img-full" alt="로고이미지" src="/resources/images/logo_w.png">
					</a>
				</div>
				<nav>
					<ul id="gnb">
						<li>
							<div class="gnb-list">
								<span class="material-icons icon-main">person_outline</span>
								고객
								<span class="material-icons icon-arrow">expand_less</span>
							</div>
							<ul class="lnb">
								<li><a href="#">ㆍ 고객 조회</a></li>
								<li><a href="#">ㆍ 고객 정보 조회</a></li>
							</ul>
						</li>
						<li>
							<div class="gnb-list">
								<span class="material-icons icon-main">shopping_cart</span>
								판매
								<span class="material-icons icon-arrow">expand_less</span>
							</div>
							<ul class="lnb">
								<li><a href="#">ㆍ 고객 판매 관리</a></li>
								<li><a href="#">ㆍ 판매 실적</a></li>
							</ul>
						</li>
						<li>
							<div class="gnb-list">
								<span class="material-icons icon-main">receipt_long</span>
								주문
								<span class="material-icons icon-arrow">expand_less</span>
							</div>
							<ul class="lnb">
								<li><a href="#">ㆍ 주문 등록</a></li>
								<li><a href="#">ㆍ 주문 진행 조회</a></li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
			<div class="box-top">
				<div class="box-user">
					<span>${sessionScope.user.prtNm}</span>
					<span>${sessionScope.user.userNm} 님</span>
					<a href="/user/logout.do">로그아웃</a>
				</div>
			</div>
			
		</header>