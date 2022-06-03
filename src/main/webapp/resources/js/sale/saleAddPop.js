/**
 * 
 */

$(document).ready(function(){
	
	//판매구분 반품 막기
	$('option[value="RTN"]').prop('disabled',true);
	
	//name삭제 시 code삭제
	$.delectCode('#custNm','#custNo');
	
	//고객이름 직접입력
	$.custKeydownSearch();
	
	//custSearchBtn 클릭시 팝업 오픈
	$.popupOpen($('#custSearchBtn'),'650','500','/customer/custPop.do','custPopOpen');
	
	//상품 추가버튼 클릭시
	$('#prdAddBtn').click(function(){
		var index = $('#result').children().length;
		var $resultTag = $("#result");
		var str = '<div id="oneContent'+index+'" class="one-content">'+
				  '<span class="checkbox">'+
				  '<input id="checkbox'+index+'" type="checkbox">'+
				  '</span>'+
				  '<span class="seqNum">'+Number(index+1)+'</span>'+
				  '<span class="prdCd">'+
				  '<input id="prdCd'+index+'" onchange="prdCdAuto(this)" class="style-input" type="text" name="prdCd" autocomplete="off">'+
				  '<button id="prdSearchBtn'+index+'" onclick="prdPopOpen(this)" class="btn-one-search" type="button">'+
				  '<span class="material-icons">search</span>'+
				  '</button>'+
				  '</span>'+
				  '<span id="prdNm'+index+'" class="prdNm"></span>'+
				  '<span id="ivcoQty'+index+'" class="ivcoQty">0</span>'+
				  '<span class="salQty">'+
				  '<input id="salQty'+index+'" onchange="salAmtAuto(this)" class="style-input" name="salQty" type="text" value="0">'+
				  '</span>'+
				  '<span id="prdCsmrUpr'+index+'" class="prdCsmrUpr">0</span>'+
				  '<span id="salAmt'+index+'" class="salAmt">0</span>'+
				  '</div>';
		$resultTag.append(str);
	});
	
	//상품 제거버튼 클릭시
	$('#prdRmvBtn').click(function(){
		
	});
	
	//저장버튼 클릭시
	$('#applyBtn').click(function(){
		//고객번호가 없을 때
		if($('#custNo').val().length==0){
			alert("고객번호를 입력해주세요.");
			$('#custNm').focus();
			return false;
		}
		
	});
});

//prdSearchBtn 클릭시 팝업 오픈
function prdPopOpen(e) {
	var index = $(e).attr('id').replace(/[^0-9]/g,"");
	var option = 'width=650, height=500, top=50, left=50, location=no';
	openPrdPop = window.open('/sale/prdPop.do', 'prdPopOpen', option);		

	openPrdPop.onload = function(){
		openPrdPop.document.getElementById("index").value = index;
	}
}

//상품코드 직접 입력
function prdCdAuto(e) {
	var index = $(e).attr('id').replace(/[^0-9]/g,"");
	var prtCd = $('#prtCd').val();
	var keyword = $('#prdCd'+index).val().trim();
	var data = {"prtCd" : prtCd, "keyword" : keyword};
	
	if(keyword.length==0){
		$.prdCdReset('none');
		return false;
	}
	
	$.ajax({
		url : "/sale/selectPrd.do",
		type : "post",
		async: true,
		data: data,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		dataType: "json",
		success : function(data) {
			//연결성공
			if(data["result"]) {	//정상적으로 데이터가 왔을 경우(try)
				if(data["list"].length==1){	//조회 결과가 1개일 때
					$.each(data["list"], function(i,item){
						if(item.prdSsCd!='R'){
							$.prdCdReset("상품상태가 정상이 아닙니다.",index);
						}else if(item.prdCsmrUpr=='0'){
							$.prdCdReset("소비자단가가 없습니다.",index);
						}else if(item.ivcoQty=='0'){
							$.prdCdReset("재고가 없습니다.",index);
						}else{
							$('#prdCd'+index).val(item.prdCd);
							$('#prdNm'+index).text(item.prdNm);
							$('#ivcoQty'+index).text(item.ivcoQty);
							$('#prdCsmrUpr'+index).text(item.prdCsmrUpr);
						}
					});
				}else if(data["list"].length>1){ //조회 결과가 1개 이상일 때
					
					//팝업창 오픈
					var option = 'width=650, height=500, top=50, left=50, location=no';
		            var openPrdPop = window.open('/sale/prdPop.do', 'prdPopOpen', option);		
		
					openPrdPop.onload = function(){
						openPrdPop.document.getElementById("keyword").value = $('#prdCd'+index).val();
						openPrdPop.document.getElementById("index").value = index;
						openPrdPop.document.getElementById("prdSearchBtn").click();
						
						//부모창에 값 비우기
						$.prdCdReset('none',index);
					}
				}else {//조회 결과가 0개일 때
					alert('조회 결과가 없습니다.');
					$('#prdCd'+index).val('');
					$('#prdNm'+index).text('');
					$('#ivcoQty'+index).text('0');
					$('#prdCsmrUpr'+index).text('0');
					return false;
				}
			}else { //비즈니스 로직중 에러가 났을 경우(catch)
				//alert에 에러표시
				alert("오류가 발생했습니다. 관리자에게 문의해 주세요.\n("+data["msg"]+")")
			}
		},
		error : function(request,status,error) {
			//연결실패
			//alert에 에러표시
			alert("서버연결에 실패했습니다. 관리자에게 문의해 주세요.\n("+request.status+" : "+error+")")
			//console에 에러표시
			//console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
	});
}

//판매수량 입력시 금액 변경
function salAmtAuto(e) {
	var index = $(e).attr('id').replace(/[^0-9]/g,"");
	var salQty = $('#salQty'+index).val();
	var prdCsmrUpr = $('#prdCsmrUpr'+index).text().replace(/\,/g,"");
	var salAmt = Number(salQty)*Number(prdCsmrUpr);
	
	$('#salAmt'+index).text(salAmt.toLocaleString());
	
	//자식요소의 갯수 구하기
	var length = $('#result').children().length;
	
	//합계구하기
	$.sumvalue(length, "#salQty", "#sumSalQty",'ADD','val');
	$.sumvalue(length, "#salAmt", "#sumSalAmt",'ADD');
}