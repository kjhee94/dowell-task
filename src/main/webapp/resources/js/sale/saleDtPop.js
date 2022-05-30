/**
 * 
 */

$(document).ready(function(){
	
	//반품일떄 버튼 숨기기
	var salTpCd = $('#salTpCd').val();
	var sesPrtCd = $('#sesPrtCd').val();
	
	if(salTpCd=='RTN' || $('#prtCd').val()!=sesPrtCd){
		$('#applyBtn').css('display','none');
	}
	
	var prtCd = $('#prtCd').val();
	var salDt = $('#salDt').val().replace(/\-/g,"");
	var salNo = $('#salNo').val();
	var data = {"prtCd" : prtCd, "salDt" : salDt, "salNo" : salNo};
	
	//고객 이력 조회 ajax
	$.ajax({
		url : "/sale/selectSaleDt.do",
		type : "post",
		async: true,
		data: data,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		dataType: "json",
		success : function(data) {
			//연결성공
			var $resultTag = $("#result"); 	//데이터를 넣을 요소
			$("#result").empty(); 			//내용 초기화
			
			if(data["result"]) { //정상적으로 데이터가 왔을 경우(try)
				if(data["list"].length>0){ //조회 결과가 0개 이상일 때
					$.each(data["list"], function(index,item){ //list 반복문
						var str = '<div class="one-content">'+
								  '<span class="seqNum">'+item.seqNum+'</span>'+
								  '<span class="prdCd">'+item.prdCd+'</span>'+
								  '<span class="prdNm">'+item.prdNm+'</span>'+
								  '<span class="salQty">'+item.salQty+'</span>'+
								  '<span class="salVosAmt">'+item.salVosAmt+'</span>'+
								  '<span class="salVatAmt">'+item.salVatAmt+'</span>'+
								  '<span class="salAmt">'+item.salAmt+'</span>'+
								  '</div>';
						$resultTag.append(str);
					});
					
					//스크롤바 생성시 table 비율 맞추기
					$.scrollBerTransform();
					
				}else {//조회 결과가 0개일 때
					var str = '<p>상세내역이 없습니다.</p>';
					$resultTag.append(str);
				}
				
			}else { //비즈니스 로직중 에러가 났을 경우(catch)
				//alert에 에러표시
				alert("오류가 발생했습니다. 관리자에게 문의해 주세요.\n("+data["msg"]+")")
				
				var str = '<p>상세내역이 없습니다.</p>';
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
			//연결실패
			var str = '<p>상세내역이 없습니다.</p>';
			$resultTag.append(str);
		}
	});
	
	
	//반품 처리
	//반품 버튼 클릭시
	$('#applyBtn').click(function(){
		if(confirm("반품 처리하시겠습니까?")){
			$.ajax({
				url : "/sale/insertReturn.do",
				type : "post",
				async: true,
				data: data,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				dataType: "json",
				success : function(data) {
					//연결성공
					if(data["result"]) { //정상적으로 데이터가 왔을 경우(try)
						if(data["seccessYN"]=="Y"){ //데이터 삽입 성공
							alert("반품처리가 완료되었습니다.");
							location.reload();
						}else {//데이터 삽입 실패
							alert("반품 실패. 관리자에게 문의해 주세요");
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
		}else {
			return false;
		}
	});
});