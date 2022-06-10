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
	$.selectSearchSale = function(){
		//form 요소 직렬화
		var form = $('#SearchSaleForm').serialize();
		
		//고객 판매 조회 ajax
		$.ajax({
			url : "/sale/selectSearchSale.do",
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
									  '<span id="salDt'+index+'" class="salDt">'+item.salDt+'</span>'+
									  '<span id="custNo'+index+'" class="custNo">'+item.custNo+'</span>'+
									  '<span id="custNm'+index+'" class="custNm">'+item.custNm+'</span>'+
									  '<span class="salNo">'+
									  	'<span id="salNo'+index+'" class="salNoCnt">'+item.salNo+'</span>'+
									  	'<button class="btn-icon" onclick="saleDtPopOpen('+index+')" type="button">'+
									  		'<span class="material-icons">list_alt</span>'+
									  	'</button>'+
									  '</span>'+
									  '<input id="prtCd'+index+'" type="hidden" value="'+item.prtCd+'">'+
									  '<input id="prtNm'+index+'" type="hidden" value="'+item.prtNm+'">'+
									  '<input id="salTpCd'+index+'" type="hidden" value="'+item.salTpCd+'">'+
									  '<span class="sale half-height">'+
									  	'<span id="totSalQty'+index+'" class="totSalQty '+item.salTpCd+'">'+item.totSalQty+'</span>'+
										'<span id="totSalAmt'+index+'" class="totSalAmt '+item.salTpCd+'">'+item.totSalAmt+'</span>'+
									  '</span>'+
									  '<span class="payment half-height">'+
										'<span id="cshStlmAmt'+index+'" class="cshStlmAmt">'+item.cshStlmAmt+'</span>'+
										'<span id="crdStlmAmt'+index+'" class="crdStlmAmt">'+item.crdStlmAmt+'</span>'+
										'<span id="pntStlmAmt'+index+'" class="pntStlmAmt">'+item.pntStlmAmt+'</span>'+
								  	  '</span>'+
									  '<span class="fstUserNm">'+item.fstUserNm+'</span>'+
									  '<span class="fstRegDt">'+item.fstRegDtFm+'</span>'+
									  '</div>';
							$resultTag.append(str);
							
						});
						
						//스크롤바 생성시 table 비율 맞추기
						$.scrollBerTransform('sale');
						
						//합계 영역 보이기
						$('#sum').css('display','flex');
						
						//합계 더하기
						$.sumValue(data["list"].length, "#totSalQty", "#sumTotSalQty");
						$.sumValue(data["list"].length, "#totSalAmt", "#sumTotSalAmt");
						$.sumValue(data["list"].length, "#cshStlmAmt", "#sumCshStlmAmt");
						$.sumValue(data["list"].length, "#crdStlmAmt", "#sumCrdStlmAmt");
						$.sumValue(data["list"].length, "#pntStlmAmt", "#sumPntStlmAmt");
						
					}else {//조회 결과가 0명일 때
						var str = '<p>해당하는 판매내역이 없습니다.</p>';
						$resultTag.append(str);
						$('#sum').css('display','none');
					}
				}else { //비즈니스 로직중 에러가 났을 경우(catch)
					//alert에 에러표시
					alert("오류가 발생했습니다. 관리자에게 문의해 주세요.\n("+data["msg"]+")")
					
					var str = '<p>해당하는 판매내역이 없습니다.</p>';
					$resultTag.append(str);
					$('#sum').css('display','none');
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
				
				var str = '<p>해당하는 판매내역이 없습니다.</p>';
				$resultTag.append(str);
				$('#sum').css('display','none');
			}
		});
	}
	$.selectSearchSale();
	
	
	//---------------------------------------검색버튼 클릭시 세팅 값
	$('#SearchBtn').click(function(){
		var prtCd = $('#prtCd').val(); //사용자가 검색한 값 공백 제거
		var salDtFrom = $('#salDtFrom').val(); //사용자가 검색한 값 공백 제거
		var salDtTo = $('#salDtTo').val(); //사용자가 검색한 값 공백 제거
		
		//날짜가 비었을 때
		if(salDtFrom.length==0){ 						
			alert("판매일자를 선택하세요.");
			$('#salDtFrom').focus();
			return false;
		}
		//날짜가 비었을 때
		if(salDtTo.length==0){ 						
			alert("판매일자를 선택하세요.");
			$('#salDtTo').focus();
			return false;
		}
		
		//keyword의 길이가 0일 때(검색어가 비어있을 경우)
		if(prtCd.length==0){ 						
			alert("매장을 선택하세요.");
			$('#prtNm').focus();
			return false;
		}
		
		//함수 재실행
		$.selectSearchSale();
	});
	
	//prtSearchBtn 클릭시 팝업 오픈
	$.popupOpen($('#prtSearchBtn'),'450','500','/customer/prtPop.do','prtPopOpen');

	//custSearchBtn 클릭시 팝업 오픈
	$.popupOpen($('#custSearchBtn'),'650','500','/customer/custPop.do','custPopOpen');

	//saleAddBtn 클릭시 팝업 오픈
	$.popupOpen($('#saleAddBtn'),'850','675','/sale/saleAddPop.do','saleAddPop');

	//resetBtn 클릭시 초기화
	$.reset($('#resetBtn'),'/sale/saleList.do');
});

//saleDtPopOpen 함수 실행(ajax에서 append된 값)
function saleDtPopOpen(index) {
	
	var option = 'width=900, height=511, top=50, left=50, location=no';
	openSaleDtPop = window.open('/sale/saleDtPop.do', 'saleDtPopOpen', option);
	
	openSaleDtPop.onload = function(){
		openSaleDtPop.document.getElementById("prtCd").value = $("#prtCd"+index).val();
		openSaleDtPop.document.getElementById("prtNm").value = $("#prtNm"+index).val();
		openSaleDtPop.document.getElementById("custNo").value = $("#custNo"+index).text();
		openSaleDtPop.document.getElementById("custNm").value = $("#custNm"+index).text();
		openSaleDtPop.document.getElementById("totSalQty").value = $("#totSalQty"+index).text();
		openSaleDtPop.document.getElementById("totSalAmt").value = $("#totSalAmt"+index).text();
		openSaleDtPop.document.getElementById("cshStlmAmt").value = $("#cshStlmAmt"+index).text();
		openSaleDtPop.document.getElementById("crdStlmAmt").value = $("#crdStlmAmt"+index).text();
		openSaleDtPop.document.getElementById("salDt").value = $("#salDt"+index).text();
		openSaleDtPop.document.getElementById("salNo").value = $("#salNo"+index).text();
		openSaleDtPop.document.getElementById("salTpCd").value = $("#salTpCd"+index).val();
	}
}