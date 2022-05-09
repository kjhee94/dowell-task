/**
 * 
 */
$(function(){
	//input 내에서 focus를 value 끝으로 이동
	var len = $('input[autofocus]').val().length;
	$('input[autofocus]')[0].setSelectionRange(len, len);
	
	//input date 유효성 검사
	//input date 날짜 변경시 min max 변경
	var jsDtFrom = $('#jsDtFrom').val();
	var jsDtTo = $('#jsDtTo').val();
	
	$('#jsDtFrom').change(function(){ 		//FromDate의 값이 변경 될 때
		$('#jsDtTo').attr('min',jsDtFrom);	//ToDate의 최솟값 FromDate로 변경 (그 이하의 값 선택 제한)
	});
	$('#jsDtTo').change(function(){ 		//ToDate의 값이 변경 될 때
		$('#jsDtFrom').attr('max',jsDtTo); 	//FromDate의 최댓값 ToDate로 변경 (그 이상의 값 선택 제한)
	});
	
	//input date Enter시 유효성 alert 
	$('#jsDtTo').keydown(function(keyNum){ 
		if(keyNum.keyCode == 13){ 	//값변경 후 enter 
			$.checkValidToDate('#jsDtTo','#jsDtFrom');
		};
	});
	$('#jsDtFrom').keydown(function(keyNum){ 
		if(keyNum.keyCode == 13){ 	//값변경 후 enter 
			$.checkValidFromDate('#jsDtTo','#jsDtFrom');
		};
	});
	
	//input date Blur시 유효성 alert 
	$('#jsDtTo').blur(function(){ 
		$.checkValidToDate('#jsDtTo','#jsDtFrom');
	});
	$('#jsDtFrom').blur(function(){ 
		$.checkValidFromDate('#jsDtTo','#jsDtFrom');
	});
	
	
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
									  '<span class="mblNo">'+item.mblNo+'</span>'+
									  '<span class="custSsNm">'+item.custSsNm+'</span>'+
									  '<span class="jsDt">'+item.jsDt+'</span>'+
									  '<span class="prtNm">'+item.prtNm+'</span>'+
									  '<span class="fstUser">'+item.fstUserId+' / '+item.fstUserNm+'</span>'+
									  '<span class="lstUpdDt">'+item.lstUpdDtFm+'</span>'+
									  '</div>';
							$resultTag.append(str);
						});
						
						//스크롤바 생성시 table 비율 맞추기
						$.scrollBerTransform();
						
						//btn-history 클릭시 팝업 오픈
						$('.btn-history').click(function(){
							
							var custNo = $(this).prev().text();
							
							var option = 'width=1000, height=500, top=50, left=50, location=no';
							custHtPop = window.open('/customer/CustHtPop.do', '고객 이력', option);
							
//							custHtPop.document.getElementById("cInput").value = document.getElementById("pInput").value;
//							$(custHtPop.document).find("input[id='custCd']").val(custNo);
						});
						
					}else {//조회 결과가 0명일 때
						var str = '<p>해당하는 고객이 없습니다.</p>';
						$resultTag.append(str);
					}
				}else { //비즈니스 로직중 에러가 났을 경우(catch)
					//alert에 에러표시
					alert("오류가 발생했습니다. 관리자에게 문의해주세요.\n("+data["msg"]+")")
					
					var str = '<p>해당하는 고객이 없습니다.</p>';
					$resultTag.append(str);
				}
			},
			error : function(request,status,error) {
				//alert에 에러표시
				alert("서버연결에 실패했습니다. 관리자에게 문의해주세요.\n("+request.status+" : "+error+")")
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
	$.popupOpen('#custAddBtn','450','/customer/insertCust.do','신규 고객 등록');

	//resetBtn 클릭시 초기화
	$.reset('#resetBtn','/customer/custList.do');
});