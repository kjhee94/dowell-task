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
	
	if($('#jsDtTo').val()<$('#jsDtFrom').val()){
		alere("이전일은 검색할 수 없습니다");
	}
	
	//resetBtn 클릭시 초기화
	$("#resetBtn").click(function(){
		//매장값 세팅
		$(".style-input[name='prtCd']").val($(this).children().attr('prtCd'));
		$(".style-input[name='prtNm']").val($(this).children().next().attr('prtNm'));
		
		//고객번호 세팅
		$(".style-input[name='custNo']").val('');
		$(".style-input[name='custNm']").val('');
		
		//고객상태 세팅
		$(".box-input-radio>label>input[value='all']").prop("checked", true);
		
		//날짜값 세팅
		var today = new Date().toISOString().substring(0, 10);
		$('#jsDtTo').val(today);
		var agoDate = new Date(new Date().getTime()-(7*24*60*60*1000)).toISOString().substring(0, 10);
		$('#jsDtFrom').val(agoDate);
		
		//결과값 세팅
		var prtCd = $(this).children().attr('prtCd');
		var userDtCd = $(this).children().next().next().attr('userDtCd');
		
		$.ajax({
			url:"/customer/selectAllCust.do",
			data:{"prtCd":prtCd,"userDtCd":userDtCd},
			type:"post",
			success: function(result){
				/////////////////////////////////
			},
			error: function(){
				console.log("ajax 통신 실패");
			}
		})
	});
});

