/**
 * 
 */
$(function(){
	//input date 날짜 기본값 세팅
	//오늘날짜
	var today = new Date().toISOString().substring(0, 10);
	$('#jsDtTo').val(today);
	//일주일전
	var agoDate = new Date(new Date().getTime()-(7*24*60*60*1000)).toISOString().substring(0, 10);
	$('#jsDtFrom').val(agoDate);
	
	
	//resetBtn 클릭시 초기화
	$('#resetBtn').click(function(){
		window.location.href = '/customer/selectOwnCust.do'
	});
	
	
	//prtSearchBtn 클릭시 팝업 오픈
	$('#prtSearchBtn').click(function(){
		var option = 'width=450, height=500, top=50, left=50, location=no';
		window.open('/customer/selectAllPrt.do', '매장 조회', option);
	});
	
	//custSearchBtn 클릭시 팝업 오픈
	$('#custSearchBtn').click(function(){
		var option = 'width=650, height=500, top=50, left=50, location=no';
		window.open('/customer/selectAllCust.do', '고객 조회', option);
	});
	
	//updListBtn 클릭시 팝업 오픈
	$('.btn-history').click(function(){
		var custNo = $(this).prev().text();
		var option = 'width=1000, height=500, top=50, left=50, location=no';
		window.open('/customer/selectCustHt.do?custNo='+custNo, '고객 이력', option);
	});
});

