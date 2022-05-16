/**
 * 
 */
$(function(){
	//input 내에서 focus를 value 끝으로 이동
	var len = $('input[autofocus]').val().length;
	$('input[autofocus]')[0].setSelectionRange(len, len);
	
	//input date 유효성 검사
	//input date 날짜 변경시 min max 변경
	$('#jsDtFrom').change(function(e){ 		//FromDate의 값이 변경 될 때
		var fromVal = $('#jsDtFrom').val();
		$('#jsDtTo').attr('min',fromVal);	//ToDate의 최솟값 FromDate로 변경 (그 이하의 값 선택 제한)
	});
	$('#jsDtTo').change(function(){ 		//ToDate의 값이 변경 될 때
		var toVal = $('#jsDtTo').val();
		$('#jsDtFrom').attr('max',toVal); 	//FromDate의 최댓값 ToDate로 변경 (그 이상의 값 선택 제한)
	});
	
	//date 유효성 alert 
	var jsDtFrom = $('#jsDtFrom');
	var jsDtTo = $('#jsDtTo');
	
	$.checkValidKeydown(jsDtFrom,jsDtTo,0);
	$.checkValidKeydown(jsDtTo,jsDtFrom,1);
	
	//---------------------------------------처음 로드시 기본세팅 값
	//함수 정의
	$.selectSearchCust = function(){
		//form 요소 직렬화
		var form = $('#SearchCustForm').serialize();
		
		$.ajax({
			url : "/customer/selectSearchCust.do",
			type : "post",
			async: true,
			data: form,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			dataType: "json",
			success : function(data) {
				//연결성공
				var $resultTag = $("#result"); //데이터를 넣을 요소
				//내용 초기화
				$("#result").empty();
				
				if(data["result"]) { //정상적으로 데이터가 왔을 경우(try)
					if(data["list"].length>0){ //조회 결과가 0명 이상일 때
						
						$.each(data["list"], function(index,item){ //list 반복문
							var str = '<div class="one-content">'+
									  '<span class="custNo">'+
									  	'<span id="custNo'+index+'">'+item.custNo+'</span>'+
									  	'<button class="btn-icon" onclick="custHtPopOpen('+index+')" type="button">'+
									  		'<span class="material-icons">list_alt</span>'+
										'</button>'+
//										'<form id="hiddenForm'+index+'" method="post"><input type="hidden" name="custNo" value="'+item.custNo+'"></form>'+
									  '</span>'+
									  '<span class="custNm">'+
									  	'<span>'+item.custNm+'</span>'+
									  	'<button class="btn-icon" onclick="custInfoOpen('+index+')" type="button">'+
									  		'<span class="material-icons">list_alt</span>'+
										'</button>'+
									  '</span>'+
									  '<span class="mblNo">'+item.mblNo+'</span>'+
									  '<span class="custSsNm">'+item.custSsNm+'</span>'+
									  '<span id="jsDt'+index+'" class="jsDt">'+item.jsDt+'</span>'+
									  '<span class="prtNm">'+item.prtNm+'</span>'+
									  '<span class="fstUser">'+item.fstUserId+' / '+item.fstUserNm+'</span>'+
									  '<span class="lstUpdDt">'+item.lstUpdDtFm+'</span>'+
									  '</div>';
							$resultTag.append(str);
						});
						
						//스크롤바 생성시 table 비율 맞추기
						$.scrollBerTransform();
						
					}else {//조회 결과가 0명일 때
						var str = '<p>해당하는 고객이 없습니다.</p>';
						$resultTag.append(str);
					}
				}else { //비즈니스 로직중 에러가 났을 경우(catch)
					//alert에 에러표시
					alert("오류가 발생했습니다. 관리자에게 문의해 주세요.\n("+data["msg"]+")")
					
					var str = '<p>해당하는 고객이 없습니다.</p>';
					$resultTag.append(str);
				}
			},
			error : function(request,status,error) {
				//alert에 에러표시
				alert("서버연결에 실패했습니다. 관리자에게 문의해 주세요.\n("+request.status+" : "+error+")")
				//console에 에러표시
				//console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				
				//연결실패
				var $resultTag = $("#result");
				//내용 초기화
				$("#result").empty();
				var str = '<p>해당하는 고객이 없습니다.</p>';
				$resultTag.append(str);
			}
		});
	}
	$.selectSearchCust();
	
	
	//---------------------------------------검색버튼 클릭시 세팅 값
	$('#SearchBtn').click(function(){
		//selectSearchCust 함수 실행
		$.selectSearchCust();
	});
	
	//prtSearchBtn 클릭시 팝업 오픈
	$.popupOpen('#prtSearchBtn','450','/customer/prtPop.do','매장 조회');

	//custSearchBtn 클릭시 팝업 오픈
	$.popupOpen('#custSearchBtn','650','/customer/custPop.do','고객 조회');

	//custAddBtn 클릭시 팝업 오픈
	$.popupOpen('#custAddBtn','480','/customer/custAddPop.do','신규 고객 등록');

	//resetBtn 클릭시 초기화
	$.reset('#resetBtn','/customer/custList.do');
});

//custHtPopOpen 함수 실행
function custHtPopOpen(index) {
	
	var custNo = $("#custNo"+index).text();

	var option = 'width=1000, height=500, top=50, left=50, location=no';
	window.open('/customer/custHtPop.do?custNo='+custNo, 'custHtPopOpen', option);
	
//	var hiddenForm = $("#hiddenForm"+index)
//	
//	hiddenForm.target="custHtPopOpen";
//	hiddenForm.action="/customer/CustHtPop.do";
//	hiddenForm.submit();
}

//custInfoOpen 함수 실행
function custInfoOpen(index) {
	
	var custNo = $("#custNo"+index).text();
	location.href='/customer/custInfo.do?custNo='+custNo;
}
