/**
 * 
 */

$(document).ready(function(){
	
	//name삭제 시 code삭제
	$.delectCode('#custNm','#custNo');
	
	//고객이름 직접입력
	$.custKeydownSearch();
	
	//custSearchBtn 클릭시 팝업 오픈
	$.popupOpen($('#custSearchBtn'),'650','500','/customer/custPop.do','custPopOpen');
	
	//prdSearchBtn 클릭시 팝업 오픈
	$.popupOpen($('#prdSearchBtn'),'650','500','/sale/prdPop.do','prdPopOpen');

});