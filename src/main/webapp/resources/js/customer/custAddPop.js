/**
 * 
 */
$(function(){
	//라디오버튼 디폴트
	$('#psmtGrcCd0').attr("checked",true);
	$('#sexCd0').attr("checked",true);
	
	
	//이름 2자 이상만 등록가능
	if(custNm.length==1){ //custNm은 1자 검색 불가
		alert("이름은 2자 이상 검색이 가능합니다.")
		return false;
	}
	
	
	//등록버튼 입력시
	$("#applyBtn").click(function(){
		
		
		
	})
});