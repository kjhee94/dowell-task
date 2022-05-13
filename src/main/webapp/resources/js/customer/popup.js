/**
 * 
 */

$(function(){
	//--------------------------------------------매장조회
	$('#prtSearchBtn').click(function(){

		var keyword = $('#keyword').val().trim(); 	//사용자가 검색한 값 공백 제거
		var data = {"keyword" : keyword};
		
		if(keyword.length==0){ 						//keyword의 길이가 0일 때(검색어가 비어있을 경우)
			alert("검색어를 입력하세요.")
			return false;
		}
		
		$.ajax({
			url : "/customer/selectPrt.do",
			type : "post",
			async: true,
			data: data,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			dataType: "json",
			success : function(data) {
				//연결성공
				var $resultTag = $("#result"); 	//데이터를 넣을 요소
				$("#result").empty(); 			//내용 초기화
				
				if(data["result"]) {	//정상적으로 데이터가 왔을 경우(try)
					if(data["list"].length>0){	//조회 결과가 0개 이상일 때
						$.each(data["list"], function(index,item){ //list 반복문
							var str = '<div class="one-content">'+
									  '<span class="checkbox cb-prt">'+
									  '<input type="checkbox">'+
									  '</span>'+
									  '<span class="prtCd">'+item.prtCd+'</span>'+
									  '<span class="prtNm">'+item.prtNm+'</span>'+
									  '<span class="prtSsNm">'+item.prtSsNm+'</span>'+
									  '</div>';
							$resultTag.append(str);
						});
						
						//스크롤바 생성시 table 비율 맞추기
						$.scrollBerTransform();
						
						//체크박스 단일선택
						$.oneCheck();
						
						//체크 후 적용 버튼 클릭시 값 적용하기
						$('#applyBtn').click(function(){
							var prtCd = $('input:checked').parent().parent().find('.prtCd').text(); //체크된 행에서 prtCd 가져오기
							var prtNm = $('input:checked').parent().parent().find('.prtNm').text(); //체크된 행에서 prtNm 가져오기
							
							window.close();
							$(opener.document).find('#prtCd').val(prtCd); //부모창 prtCd input에 삽입
							$(opener.document).find('#prtNm').val(prtNm); //부모창 prtNm input에 삽입
						});
						
						//행 더블클릭시 값 적용하기
						$('.one-content').dblclick(function(){
							//보낼값 변수값 지정
							var prtCd = $(this).find('.prtCd').text(); 	//클릭한 행에서 prtCd 가져오기
							var prtNm = $(this).find('.prtNm').text(); 	//클릭한 행에서 prtNm 가져오기
							
							//값 적용하기
							window.close();
							$(opener.document).find('#prtCd').val(prtCd); //부모창 prtCd input에 삽입
							$(opener.document).find('#prtNm').val(prtNm); //부모창 prtNm input에 삽입
						});
						
					}else {//조회 결과가 0개일 때
						var str = '<p>해당하는 매장이 없습니다.</p>';
						$resultTag.append(str);
					}
					
				}else { //비즈니스 로직중 에러가 났을 경우(catch)
					//alert에 에러표시
					alert("오류가 발생했습니다. 관리자에게 문의해 주세요.\n("+data["msg"]+")")
					
					var str = '<p>해당하는 매장이 없습니다.</p>';
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
				var str = '<p>해당하는 매장이 없습니다.</p>';
				$resultTag.append(str);
			}
		});
	});
	
	//키보드 Enter 이벤트
	$.keydownEnter('#keyword','#prtSearchBtn');
	
	//resetPrtBtn 클릭시 초기화
	$.reset('#resetPrtBtn','/customer/prtPop.do')
	
	
	//--------------------------------------------고객조회
	$('#custSearchBtn').click(function(){

		var custNm = $('#custNm').val().trim(); //사용자가 검색한 값 공백 제거
		var mblNo = $('#mblNo').val().trim();	//사용자가 검색한 값 공백 제거
		var data = {"custNm" : custNm,"mblNo" : mblNo};
		
		//이름 2자 이상만 검색가능 & 검색어 모두 다 비어있을 경우 alert
		if(custNm.length==1){ //custNm은 1자 검색 불가
			alert("이름은 2자 이상 검색이 가능합니다.")
			return false;
		}
		if(custNm.length==0 && mblNo.length==0){ //custNm, mblNo가 비어있을 경우
			alert("검색어를 입력하세요.")
			return false;
		}
		
		$.ajax({
			url : "/customer/selectCust.do",
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
							
							var str = '<div class="one-content one-prt-content">'+
									  '<span class="checkbox cb-cust">'+
									  '<input type="checkbox">'+
									  '</span>'+
									  '<span class="custNo">'+item.custNo+'</span>'+
									  '<span class="custNm">'+item.custNm+'</span>'+
									  '<span class="mblNo">'+item.mblNo+'</span>'+
									  '<span class="custSsNm">'+item.custSsNm+'</span>'+
									  '</div>';
							$resultTag.append(str);
						});
						
						//스크롤바 생성시 table 비율 맞추기
						$.scrollBerTransform();
						
						//체크박스 단일선택
						$.oneCheck();
						
						//적용 버튼 클릭시 값 적용하기
						$('#applyBtn').click(function(){
							var custNo = $('input:checked').parent().parent().find('.custNo').text();	//체크된 행에서 custNo 가져오기
							var custNm = $('input:checked').parent().parent().find('.custNm').text();	//체크된 행에서 custNm 가져오기
							
							window.close();
							$(opener.document).find('#custNo').val(custNo);	//부모창 custNo input에 삽입
							$(opener.document).find('#custNm').val(custNm);	//부모창 custNm input에 삽입
						});
						
						//행 더블클릭
						$('.one-prt-content').dblclick(function(){
							//보낼값 변수값 지정
							var custNo = $(this).find('.custNo').text();	//클릭한 행에서 custNo 가져오기
							var custNm = $(this).find('.custNm').text();	//클릭한 행에서 custNm 가져오기
							
							//값 적용하기
							window.close();
							$(opener.document).find('#custNo').val(custNo);	//부모창 custNo input에 삽입
							$(opener.document).find('#custNm').val(custNm);	//부모창 custNm input에 삽입
						});
						
					}else { //조회 결과가 0개일 때
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
	});
	
	//키보드 Enter 이벤트
	$.keydownEnter('#custNm','#custSearchBtn');
	$.keydownEnter('#mblNo','#custSearchBtn');
	
	//resetPrtBtn 클릭시 초기화
	$.reset('#resetCustBtn','/customer/custPop.do')
});