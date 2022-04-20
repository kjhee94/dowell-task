<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/resources/common/common.css">
<link rel="stylesheet" href="/resources/css/user/login.css">
</head>
<body>
	<div id="content">
		<div class="box-login">
			<div class="logo">
				<img class="img-full" alt="로고이미지" src="/resources/images/logo.png">
			</div>
			<form id="loginForm" action="/user/login.do" method="post">
				<div class="box-input">
					<input type="text" class="style-input" name="userId" placeholder="아이디">
					<input type="password" class="style-input" name="userPwd" placeholder="비밀번호">
				</div>
				<input type="submit" value="로그인">
			</form>
		</div>
		<p class="copy">© Copyright dowellcommunity Inc. All Rights Reserved</p>
	</div>
</body>
</html>