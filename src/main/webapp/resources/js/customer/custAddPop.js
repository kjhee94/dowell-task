/**
 * 
 */
$(function(){
	//라디오버튼 디폴트
	$('#sexCd0').attr("checked",true);		//여성 체크
	$('#psmtGrcCd0').attr("checked",true);	//자택 체크
	
	//------------------------------------유효성 검사
	//유효성 검사 이벤트
	$.validEvent('insert');
	
	//등록버튼 클릭 시
	$("#applyBtn").click(function(){
		if($.checkAll()){									//유효성 검사 통과시
			if(confirm("신규고객을 등록하시겠습니까?")){				//더블체크
				//휴대폰번호 조합
				var mblNo0 = $('#mblNo0').val().trim();		//사용자가 입력한 값 공백 제거
				var mblNo1 = $('#mblNo1').val().trim();		//사용자가 입력한 값 공백 제거
				var mblNo2 = $('#mblNo2').val().trim();		//사용자가 입력한 값 공백 제거
				var mblNo =  mblNo0+mblNo1+mblNo2;			//합치기
				
				//이메일 주소 조합
				var email0 = $('#email0').val().trim();		//사용자가 입력한 값 공백 제거
				var email1 = $('#email1').val().trim();		//사용자가 입력한 값 공백 제거
				var email =  email0+'@'+email1;				//합치기(@포함)
				
				//날짜 포맷변경
				var brdyDtOrg = $('#brdyDt').val();				//기존값
				var brdyDt = brdyDtOrg.replace(/\-/g,'');		//특수문자 제외
				
				var mrrgDtOrg = $('#mrrgDt').val();				//기존값
				var mrrgDt = mrrgDtOrg.replace(/\-/g,'');		//특수문자 제외
				
				//form 요소 직렬화
				var form = $('#custAddForm').serialize();
				//form 추가
				form += "&mblNo="+mblNo;
				form += "&email="+email;
				form += "&brdyDt="+brdyDt;
				form += "&mrrgDt="+mrrgDt;
				
				$.ajax({
					url : "/customer/insertCust.do",
					type : "post",
					async: true,
					data: form,
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					dataType: "json",
					success : function(data) {
						//연결성공
						if(data["result"]) { //정상적으로 데이터가 왔을 경우(try)
							if(data["seccessYN"]=="Y"){ //데이터 삽입 성공
								alert("등록이 완료되었습니다.");
								window.close();
							}else {//데이터 삽입 실패
								alert("등록 실패. 관리자에게 문의해 주세요");
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
		}
	})
});