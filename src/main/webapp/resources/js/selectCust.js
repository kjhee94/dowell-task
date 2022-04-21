/**
 * 
 */
$(function(){
	//input date 날짜 기본값 세팅
	//오늘날짜
	var today = new Date().toISOString().substring(0, 10);
	//console.log(today);
	$('#jsDtTo').val(today);
	//일주일전
	var agoDate = new Date(new Date().getTime()-(7*24*60*60*1000)).toISOString().substring(0, 10);
	//console.log(agoDate);
	$('#jsDtFrom').val(agoDate);
	
	//고객이름 마킹처리
	
	//휴대폰번호 마킹처리
	
	
});