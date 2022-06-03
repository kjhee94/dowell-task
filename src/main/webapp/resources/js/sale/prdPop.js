/**
 * 
 */
$(document).ready(function(){
	$.selectPrd = function(){
		var prtCd = $('#prtCd').val(); 				//사용자가 검색한 값 공백 제거
		var keyword = $('#keyword').val().trim();	//사용자가 검색한 값 공백 제거
		var data = {"prtCd" : prtCd, "keyword" : keyword};
		
		//keyword가 비어있을 경우
		if(keyword.length==0){ 
			alert("검색어를 입력하세요.")
			return false;
		}
		
		//재고 조회ajax
		$.ajax({
			url : "/sale/selectPrd.do",
			type : "post",
			async: true,
			data: data,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			dataType: "json",
			success : function(data) {
				//연결성공
				var $resultTag = $("#result");	//데이터를 넣을 요소
				$("#result").empty(); 			//내용 초기화
				
				if(data["result"]) {	//정상적으로 데이터가 왔을 경우(try)
					if(data["list"].length>0){	//조회 결과가 0개 이상일 때
						$.each(data["list"], function(index,item){ //list 반복문
							
							var str = '<div id="oneContent'+index+'" class="one-content">'+
									  '<input id="prdSsCd'+index+'" type="hidden" value="'+item.prdSsCd+'">'+
									  '<span class="checkbox">'+
									  '<input id="checkbox'+index+'" type="checkbox">'+
									  '</span>'+
									  '<span id="prdCd'+index+'" class="prdCd">'+item.prdCd+'</span>'+
									  '<span id="prdNm'+index+'" class="prdNm">'+item.prdNm+'</span>'+
									  '<span id="ivcoQty'+index+'" class="ivcoQty">'+item.ivcoQty+'</span>'+
									  '<span id="prdCsmrUpr'+index+'" class="prdCsmrUpr">'+item.prdCsmrUpr+'</span>'+
									  '</div>';
							$resultTag.append(str);
						});
						
						//스크롤바 생성시 table 비율 맞추기
						$.scrollBerTransform();
						
						//체크박스 단일선택
						$.oneCheck();
						
						//적용 버튼 클릭시 체크박스 값 적용하기
						var index = $('#index').val();
						$.clickBtnApply(data["list"].length,'#prdCd','#prdNm','#ivcoQty','#prdCsmrUpr','prd', index);
						
						//체크박스 비활성화
						for(var i=0; i<data["list"].length; i++){
							//상품상태가 해지일 때
							if($('#prdSsCd'+i).val()=='C'){
								$('#checkbox'+i).prop('disabled',true);
								$('#oneContent'+i+'>span').css('color','#F1C701');
								$('#oneContent'+i+'>span').css('cursor','auto');
								//재고수량또는 소비자가가 0일 때
							}else if($('#ivcoQty'+i).text()=='0'||$('#prdCsmrUpr'+i).text()=='0'){
								$('#checkbox'+i).prop('disabled',true);
								$('#oneContent'+i+'>span').css('color','#C8C8C8');
								$('#oneContent'+i+'>span').css('cursor','auto');
							}
						}
						
					}else { //조회 결과가 0개일 때
						var str = '<p>해당하는 상품이 없습니다.</p>';
						$resultTag.append(str);
					}
				}else { //비즈니스 로직중 에러가 났을 경우(catch)
					//alert에 에러표시
					alert("오류가 발생했습니다. 관리자에게 문의해 주세요.\n("+data["msg"]+")")
					
					var str = '<p>해당하는 상품이 없습니다.</p>';
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
				
				var str = '<p>해당하는 상품이 없습니다.</p>';
				$resultTag.append(str);
			}
		});
	}
	
	//검색버튼 클릭시 검색
	$('#prdSearchBtn').click(function(){
		$.selectPrd();
	});
	
	//부모창에서 값이 바로 넘어왔을때
	if($('#keyword').val()!=null && $('#keyword').val().length!=0){
		$.selectPrd();
	}
	
	//키보드 Enter 이벤트(Enter시 바로 검색)
	$.keydownEnter($('#keyword'),$('#prdSearchBtn'));
});