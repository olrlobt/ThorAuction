<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- security tag -->
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>세상의 모든 경매: BIDCOIN르의 실시간 대장간</title>
<c:import url="./template/boot.jsp"></c:import>
<link href="/css/reset.css" rel="stylesheet">
  <link href="/images/miniLogo_BidCoin.png" rel="shortcut icon" type="image/x-icon">
</head>
<script defer src="/js/admin/kakaoLoginCheck.js"></script>
<body>
	<c:import url="./template/header.jsp"></c:import>
	<section class="container d-flex flex-wrap justify-content-center">

		<h1>토르의 실시간 대장간 메인</h1>

		<div class="mt-5">
			<a href="../mypage/update">회원정보 수정</a>
			<a href="../mypage/delete">회원탈퇴</a>
		</div>

<!-- 	<a href="/oauth2/authorization/naver" style="padding-left: 20px; padding-right: 20px;">
		<img style="width: 80px; height: 80px;" src="/images/social/naver.png">
	</a> -->
	</section>
	<c:import url="./template/footer.jsp"></c:import>
</body>
</html>
