/**
 * 
 */
$(function(){
	
	//input focus val 끝으로
	var len = $('input[autofocus]').val().length;
	$('input[autofocus]')[0].setSelectionRange(len, len);
	
	
	//input date 날짜 변경시 min max 변경
	$('#jsDtTo').change(function(){
		var jsDtTo = $('#jsDtTo').val();
		$('#jsDtFrom').attr('max',jsDtTo);
	});
	$('#jsDtFrom').change(function(){
		var jsDtFrom = $('#jsDtFrom').val();
		$('#jsDtTo').attr('min',jsDtFrom);
	});
	
	
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
	
	//prtSearchBtn 클릭시 팝업 오픈
	$('#custAddBtn').click(function(){
		var option = 'width=450, height=500, top=50, left=50, location=no';
		window.open('/customer/insertCust.do', '신규 고객 등록', option);
	});
});

