/**
 * 
 */
$(function(){
	
	//autofocus된 input 내에서 focus를 value 끝으로 이동
	$.focusEnd();
	
	//input date 유효성 검사
	//input date 날짜 변경시 min max 변경
	$('#salDtFrom').change(function(e){ 		//FromDate의 값이 변경 될 때
		var fromVal = $('#salDtFrom').val();
		$('#salDtTo').attr('min',fromVal);	//ToDate의 최솟값 FromDate로 변경 (그 이하의 값 선택 제한)
	});
	$('#salDtTo').change(function(){ 		//ToDate의 값이 변경 될 때
		var toVal = $('#salDtTo').val();
		$('#salDtFrom').attr('max',toVal); 	//FromDate의 최댓값 ToDate로 변경 (그 이상의 값 선택 제한)
	});
	
	//date 유효성 alert 
	$.checkValidKeydown($('#salDtFrom'),$('#salDtTo'),0);
	$.checkValidKeydown($('#salDtTo'),$('#salDtFrom'),1);
	
	//name삭제 시 code삭제
	$.delectCode('#prtNm','#prtCd');
	$.delectCode('#custNm','#custNo');
	
	//매장 직접입력
	$.prtKeydownSearch();
	
	//고객이름 직접입력
	$.custKeydownSearch();

	//함수 정의(검색시 재호출하기 위해)
	$.selectSearchCustSale = function(){
		//form 요소 직렬화
		var form = $('#SearchSaleForm').serialize();
		
		//회원 조회 ajax
		$.ajax({
			url : "/sale/selectSearchCustSale.do",
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
//							var str = ;
							$resultTag.append(str);
						});
						
						//스크롤바 생성시 table 비율 맞추기
						$.scrollBerTransform();
						
					}else {//조회 결과가 0명일 때
						var str = '<p></p>';
						$resultTag.append(str);
					}
				}else { //비즈니스 로직중 에러가 났을 경우(catch)
					//alert에 에러표시
					alert("오류가 발생했습니다. 관리자에게 문의해 주세요.\n("+data["msg"]+")")
					
					var str = '<p></p>';
					$resultTag.append(str);
				}
			},
			error : function(request,status,error) {
				//연결실패
				//alert에 에러표시
				alert("서버연결에 실패했습니다. 관리자에게 문의해 주세요.\n("+request.status+" : "+error+")")
				//console에 에러표시
				//console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				
				var $resultTag = $("#result");
				//내용 초기화
				$("#result").empty();
				
				var str = '<p></p>';
				$resultTag.append(str);
			}
		});
	}
	$.selectSearchCustSale();
	
	
	//---------------------------------------검색버튼 클릭시 세팅 값
	$('#SearchBtn').click(function(){
		//함수 재실행
		$.selectSearchCustSale();
	});
	
	//prtSearchBtn 클릭시 팝업 오픈
	$.popupOpen($('#prtSearchBtn'),'450','500','/customer/prtPop.do','prtPopOpen');

	//custSearchBtn 클릭시 팝업 오픈
	$.popupOpen($('#custSearchBtn'),'650','500','/customer/custPop.do','custPopOpen');

	//custAddBtn 클릭시 팝업 오픈
	//$.popupOpen($('#custAddBtn'),'850','630','/customer/custAddPop.do','custAddPop');

	//resetBtn 클릭시 초기화
	$.reset($('#resetBtn'),'/sale/saleList.do');
});

//custHtPopOpen 함수 실행(ajax에서 append된 값)
function custHtPopOpen(index) {
	
//	var custNo = $("#custNo"+index).text();
//	
//	var option = 'width=1000, height=500, top=50, left=50, location=no';
//	window.open('/customer/custHtPop.do?custNo='+custNo, 'custHtPopOpen', option);
}