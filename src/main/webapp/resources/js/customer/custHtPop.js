/**
 * 
 */
$(function(){
	
	var custNo = $('#custNo').val();
	var data = {"custNo" : custNo};
	
	//고객 이력 조회 ajax
	$.ajax({
		url : "/customer/selectCustHt.do",
		type : "post",
		async: true,
		data: data,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		dataType: "json",
		success : function(data) {
			//연결성공
			$('#custNm').val(data["custNm"]);
			
			var $resultTag = $("#result"); 	//데이터를 넣을 요소
			$("#result").empty(); 			//내용 초기화
			
			if(data["result"]) { //정상적으로 데이터가 왔을 경우(try)
				if(data["list"].length>0){ //조회 결과가 0개 이상일 때
					$.each(data["list"], function(index,item){ //list 반복문
						var str = '<div class="one-content">'+
								  '<span class="chgDt">'+item.chgDt+'</span>'+
								  '<span class="chgCd">'+item.chgCd+'</span>'+
								  '<span class="chgBfCnt">'+item.chgBfCnt+'</span>'+
								  '<span class="chgAftCnt">'+item.chgAftCnt+'</span>'+
								  '<span class="lstUpdId">'+item.lstUpdId+' / '+item.lstUpdNm+'</span>'+
								  '<span class="lstUpdDt">'+item.lstUpdDtFm+'</span>'+
								  '</div>';
						$resultTag.append(str);
					});
					
					//스크롤바 생성시 table 비율 맞추기
					$.scrollBerTransform();
					
				}else {//조회 결과가 0개일 때
					var str = '<p>변경내역이 없습니다.</p>';
					$resultTag.append(str);
				}
				
			}else { //비즈니스 로직중 에러가 났을 경우(catch)
				//alert에 에러표시
				alert("오류가 발생했습니다. 관리자에게 문의해 주세요.\n("+data["msg"]+")")
				
				var str = '<p>변경내역이 없습니다.</p>';
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
			var str = '<p>변경내역이 없습니다.</p>';
			$resultTag.append(str);
		}
	});
});