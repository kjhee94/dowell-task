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
		//index는 result의 자식의 갯수
		var index = $('#result').children().length;
		var $resultTag = $("#result");
		var str = '<div id="oneContent'+index+'" class="one-content">'+
				  '<span class="checkbox">'+
				  '<input id="checkbox'+index+'" type="checkbox" checked onclick="check(this)">'+
				  '</span>'+
				  '<span class="seqNum">'+Number(index+1)+'</span>'+
				  '<span class="prdCd">'+
				  '<input id="prdCd'+index+'" onchange="prdCdAuto(this)" class="style-input" type="text" autocomplete="off">'+
				  '<button id="prdSearchBtn'+index+'" onclick="prdPopOpen(this)" class="btn-one-search" type="button">'+
				  '<span class="material-icons">search</span>'+
				  '</button>'+
				  '</span>'+
				  '<span id="prdNm'+index+'" class="prdNm"></span>'+
				  '<span id="ivcoQty'+index+'" class="ivcoQty">0</span>'+
				  '<span class="salQty">'+
				  '<input id="salQty'+index+'" onchange="salAmtAuto(this)" class="style-input" type="text" placeholder="0" autocomplete="off">'+
				  '</span>'+
				  '<span id="prdCsmrUpr'+index+'" class="prdCsmrUpr">0</span>'+
				  '<input id="salVosAmt'+index+'" type="hidden">'+
				  '<input id="salVatAmt'+index+'" type="hidden">'+
				  '<span id="salAmt'+index+'" class="salAmt">0</span>'+
				  '</div>';
		$resultTag.append(str);
		
		//스크롤바 제어
		$.scrollBerTransform('saleDt');
	});
	
	//상품 제거버튼 클릭시
	$('#prdRmvBtn').click(function(){
		//length는 result의 자식의 갯수
		var length = $('#result').children().length;
		var index = length-1;
		
		if(index!='0'){
			$('#oneContent'+index).remove();
			
			//합계구하기
			$.checkSumValue(length, "#salQty", "#sumSalQty",'val','text');
			$.checkSumValue(length, "#salAmt", "#sumSalAmt",'text','text');
		}
		
		//스크롤바 제어
		$.scrollBerTransform('saleDt');
	});
	
	//저장버튼 클릭시
	$('#applyBtn').click(function(){
		//고객번호가 없을 때
		if($('#custNo').val().length==0){
			alert("고객번호를 입력해주세요.");
			$('#custNm').focus();
			return false;
		}
		
		//체크박스가 선택된 것이 없을 떄
		if ($("input:checkbox").is(":checked")==false) {
			alert('체크박스를 선택해 주세요.');
			return false;
		}else {
			//자식요소의 갯수 구하기
			var length = $('#result').children().length;
			
			for(var i=0; i<length; i++){
				if($('#checkbox'+i).is(":checked") && $('#prdCd'+i).val().length==0){
					//console.log(i);
					alert('상품코드를 입력해 주세요.');
					$('#prdCd'+i).focus();
					return false;
				}
				if($('#checkbox'+i).is(":checked") && $('#salQty'+i).val().length==0) {
					//console.log(i);
					alert('판매수량을 입력해 주세요.');
					$('#salQty'+i).focus();
					return false;
				}
			}
		}
		
		//결제금액이 비어있을 때
		if($('#cshStlmAmt').val().length==0 && $('#crdStlmAmt').val().length==0){
			alert('결제금액을 입력해 주세요.');
			$('#cshStlmAmt').focus();
			return false;
		}
		
		//합계 계산
		var length = $('#result').children().length;
		
		$.checkSumValue(length,'#salQty','#totSalQty','val','val');
		$.checkSumValue(length,'#salAmt','#totSalAmt','text','val');
		$.checkSumValue(length,'#salVosAmt','#totVosAmt','val','val');
		$.checkSumValue(length,'#salVatAmt','#totVatAmt','val','val');
		
		//현금+카드
		var cshStlmAmt = $('#cshStlmAmt').val().replace(/\,/g,"");
		//console.log(cshStlmAmt);
		var crdStlmAmt = $('#crdStlmAmt').val().replace(/\,/g,"");
		//console.log(crdStlmAmt);
		var stlmAmt = Number(cshStlmAmt)+Number(crdStlmAmt);
		//console.log(stlmAmt);
		
		//판매금액과 결제금액이 다를 때
		if($('#totSalAmt').val()!=stlmAmt){
//			console.log($('#totSalAmt').val());
//			console.log(stlmAmt);
			alert('판매금액과 결제금액이 동일하지 않습니다.');
			$('#cshStlmAmt').focus();
			return false;
		}
		
		//카드금액이 비어있지 않을 때
		var crdNo0 = $('#crdNo0').val().trim();
		var crdNo1 = $('#crdNo1').val().trim();
		var crdNo2 = $('#crdNo2').val().trim();
		var crdNo3 = $('#crdNo3').val().trim();
		$('#crdNo').val(crdNo0+crdNo1+crdNo2+crdNo3);
		
		if($('#crdStlmAmt').val().length!=0){
			if($('#vldYM').val().length==0){
				alert('유효일자를 입력해 주세요.');
				$('#vldYM').focus();
				return false;
			}else if($('#crdCoCd>option:selected').text()=='선택') {
				alert('카드회사를 선택해 주세요.');
				$('#crdCoCd').focus();
				return false;
			}else if($('#crdNo').val().length!=16){
				alert('카드번호 16자리를 입력해 주세요.');
				$('#crdNo0').focus();
				return false;
			}
		}
		
		//-------------------------------------------------ajax에 담을 데이터
		//날짜 포맷변경
		$.RmvHyp($('#salDt').val(),"#salDtMdf");		//YYYY-MM-DD -> YYYYMMDD
		
		//가격 포멧변경
		$.RmvCom($('#cshStlmAmt').val(),"#cshStlmAmtMdf");
		$.RmvCom($('#crdStlmAmt').val(),"#crdStlmAmtMdf");
		
		//-------------------------------------------------판매객체
		var formData = new FormData(document.getElementById('saleForm'));		//key: form의 name / value: form의 value 
		var sObj={};															//Object 선언
		
		for(var pair of formData.entries()) {
			sObj[pair[0]] = pair[1];											//객체에 넣기
		}
		console.log('판매 객체 : '+JSON.stringify(sObj));
		
		//-------------------------------------------------판매상세 객체
		var sDtArr = new Array();						//Array선언
		var sDtObj={};	
		
		var length = $('#result').children().length;
		
		for(var i=0; i<length; i++){
			if($('#checkbox'+i).is(":checked")){
				sDtObj = {
						prdCsmrUpr : $('#prdCsmrUpr'+i).text().replace(/\,/g,""),
						salQty : $('#salQty'+i).val(),
						salAmt : $('#salAmt'+i).text().replace(/\,/g,""),
						salVosAmt : $('#salVosAmt'+i).val(),
						salVatAmt : $('#salVatAmt'+i).val(),
						prdCd : $('#prdCd'+i).val(),
						ivcoQty : Number($('#ivcoQty'+i).text())-$('#salQty'+i).val()
					}
				sDtArr.push(sDtObj);
			}
		}
		console.log('판매상세 배열 : '+JSON.stringify(sDtArr));
		
		//-------------------------------------------------ajax에 보낼 전체 데이터
		var allObj = {
				saleData : sObj,
				saleDtData : sDtArr,
				prtCd : $('#prtCd').val(),
				salDt : $('#salDtMdf').val(),
				salTpCd : $('#salTpCd').val(),
				custNo : $('#custNo').val()
		}
		console.log('전체 데이터 : '+JSON.stringify(allObj));
		
		//저장
		if(confirm("판매내역을 저장하시겠습니까?")){
			
			$.ajax({
				url : "/sale/insertSale.do",
				type : "post",
				contentType: "application/json; charset=UTF-8",
				data : JSON.stringify(allObj),
				dataType: "json",
				success : function(data) {
					//연결성공
					if(data["result"]) { //정상적으로 데이터가 왔을 경우(try)
						if(data["seccessYN"]=="Y"){ //데이터 삽입 성공
							alert("저장이 완료되었습니다.");
							window.close();
						}else {//데이터 삽입 실패
							alert("저장 실패. 관리자에게 문의해 주세요");
						}
					}else { //비즈니스 로직중 에러가 났을 경우(catch)
						//alert에 에러표시
						alert("오류가 발생했습니다. 관리자에게 문의해 주세요.\n("+data["msg"]+")");
					}
				},
				error : function(request,status,error) {
					//alert에 에러표시
					alert("서버연결에 실패했습니다. 관리자에게 문의해 주세요.\n("+request.status+" : "+error+")")
					//console에 에러표시
					//console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				}
			});
			
		}else{
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
		$.prdCdReset('none',index);
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
					$.each(data["list"], function(idx,item){
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
							
							//합계 리셋
							$('#salQty'+index).val('');
							$('#salAmt'+index).text('0');
							
							$.allSum();
						}
					});
				}else if(data["list"].length>1){ //조회 결과가 1개 이상일 때
					//팝업창 오픈
					var option = 'width=650, height=500, top=50, left=50, location=no';
		            var openPrdPop = window.open('/sale/prdPop.do', 'prdPopOpen', option);		
		
					openPrdPop.onload = function(){
						openPrdPop.document.getElementById("keyword").value = $('#prdCd'+index).val();
						openPrdPop.document.getElementById("index").value = index;
						
						//부모창에 값 비우기
						$.prdCdReset('none',index);
					}
				}else {//조회 결과가 0개일 때
					$.prdCdReset('조회 결과가 없습니다.',index);
					return false;
				}
				
				//같은 상품코드가 있을경우
				var length = $('#result').children().length;
				for(var i=0; i<length; i++){
					if(i!=index && $('#prdCd'+i).val()==$('#prdCd'+index).val() && $('#prdCd'+i).val().length!=0){
						console.log('i : '+i+','+$('#prdCd'+i).val()+' index : '+index+','+$('#prdCd'+index).val());
						alert('동일한 상품이 있습니다.');
						$.prdCdReset('none',index);
						$('#prdCd'+i).focus();
					}
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
	
	//상품코드가 비어 있지 않을 때
	if($('#prdCd'+index).val().length!=0){
		
		//입력한 수량
		var salQty = $('#salQty'+index).val();
		var ivcoQty = $('#ivcoQty'+index).text();
		
		if(!$.isNumber(salQty)){
			alert('숫자만 입력해 주세요.');
			$('#salQty'+index).val(salQty.replace(/[^0-9]/g,''));
			return false;
		}
		
		if(Number(ivcoQty)<salQty){
			alert('매장재고가 부족합니다.');
			$('#salQty'+index).val('');
			$('#salQty'+index).focus();
			return false;
		}
		
		var prdCsmrUpr = $('#prdCsmrUpr'+index).text().replace(/\,/g,"");
		var salAmt = Number(salQty)*Number(prdCsmrUpr);
		
		//부가세액 공급가액 계산
		var prdCsmrUpr = $('#prdCsmrUpr'+index).text().replace(/\,/g,"");
		var salVatAmt = Number(salAmt)*0.1;
		var salVosAmt = Number(salAmt)-Number(salVatAmt);

		$('#salVatAmt'+index).val(salVatAmt);
		$('#salVosAmt'+index).val(salVosAmt);
		$('#salAmt'+index).text(salAmt.toLocaleString());
		
		$.allSum();
	}else {
		alert('상품코드를 입력해주세요.');
		$('#salQty'+index).val('')
	}
	
}

//결제금액 숫자 포멧팅
function inputNumberFormat(obj) {
    obj.value = comma(uncomma(obj.value));
}

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}

//체크박스 해지시 합계 재계산
function check(e) {
	$.allSum();
}