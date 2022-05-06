/**
 * 
 */
$(function(){
	//input 내에서 focus를 value 끝으로 이동
	var len = $('input[autofocus]').val().length;
	$('input[autofocus]')[0].setSelectionRange(len, len);
	
	//input date 날짜 변경시 min max 변경
	var jsDtTo = $('#jsDtTo').val();
	var jsDtFrom = $('#jsDtFrom').val();
	
	$('#jsDtTo').change(function(){
		$('#jsDtFrom').attr('max',jsDtTo);
	});
	$('#jsDtFrom').change(function(){
		$('#jsDtTo').attr('min',jsDtFrom);
	});
	
	//처음 로드시 기본세팅 값
	var params = {};
	
	params["prtCd"] = $("#prtCd").val();
	params["prtNm"] = $("#prtNm").val();
	params["custSsCd"] = $('input[type="radio"]:checked').val();
	params["jsDtTo"] = jsDtTo;
	params["jsDtFrom"] = jsDtFrom;
	
	$.ajax({
		url : "/customer/selectSearchCust.do",
		type : "post",
		dataType : "json",
		data: JSON.stringify(params),
		success : function(data) {
			
			var $resultTag = $("#result");
			
			$.each(data, function(index,item){
				var str = '<div class="one-content">'+
						  '<span class="custNo">'+
						  	'<span>'+item.custNo+'</span>'+
						  	'<button class="btn-icon btn-history" type="button">'+
						  		'<span class="material-icons">list_alt</span>'+
							'</button>'+
						  '</span>'+
						  '<span class="custNm">'+
						  	'<span>'+item.custNm+'</span>'+
						  	'<button class="btn-icon btn-btn-update" type="button">'+
						  		'<span class="material-icons">list_alt</span>'+
							'</button>'+
						  '</span>'+
						  '<span class="mblNo">'+item.mblNo+'</span>'
						  '<span class="custSsNm">'+item.custSsNm+'</span>'
						  '<span class="jsDt">'+item.jsDt+'</span>'
						  '<span class="prtNm">'+item.prtNm+'</span>'
						  '<span class="firReg">'+item.firRegId+'</span>'
						  '<span class="lstUpdDt">'+item.lstUpdDtFm+'</span>'
						  '</div>';
				
				$resultTag.append(str);
			});
		},
		error : function() {
			console.log("ajax 통신 실패")
			
			var $resultTag = $("#result");
			var str = '<p>해당하는 고객이 없습니다.</p>';
			$resultTag.append(str);
		}
	});
	
	//스크롤바 생성시 result-title 늘리기
	$.fn.hasScrollBar = function() {
		return (this.prop("scrollHeight") == 0 && this.prop("clientHeight") == 0) || (this.prop("scrollHeight") > this.prop("clientHeight"));
	};
	if($('.result-content').hasScrollBar()){
		$('.result-title').css('padding-right','16.5px');
	}
});

//resetBtn 클릭시 초기화
$('#resetBtn').click(function(){
	window.location.href = '/customer/selectOwnCust.do'
});

//prtSearchBtn 클릭시 팝업 오픈
$('#prtSearchBtn').click(function(){
	var option = 'width=450, height=500, top=50, left=50, location=no';
	window.open('/customer/prtPop.do', '매장 조회', option);
});

//custSearchBtn 클릭시 팝업 오픈
$('#custSearchBtn').click(function(){
	var option = 'width=650, height=500, top=50, left=50, location=no';
	window.open('/customer/custPop.do', '고객 조회', option);
});

//btn-history 클릭시 팝업 오픈
$('.btn-history').click(function(){
	var custNo = $(this).prev().text();
	var option = 'width=1000, height=500, top=50, left=50, location=no';
	window.open('/customer/selectCustHt.do?custNo='+custNo, '고객 이력', option);
});

//custAddBtn 클릭시 팝업 오픈
$('#custAddBtn').click(function(){
	var option = 'width=450, height=500, top=50, left=50, location=no';
	window.open('/customer/insertCust.do', '신규 고객 등록', option);
});

