/**
 * 
 */
$(function(){
	//라디오버튼 디폴트
	$('#sexCd0').attr("checked",true);		//여성 체크
	$('#psmtGrcCd0').attr("checked",true);	//자택 체크
	
	//------------------------------------유효성 검사
	//이름 유효성 검사
	$('#custNmInfo').blur(function(){ 
		$.checkNameValid();
	});
	
	//직업코드 유효성 검사
	$('#pocCd').blur(function(){ 
		$.checkPocValid();
	});
	
	//생일  유효성 검사
	var date = new Date();					//오늘 날짜
	var today = $.getFormatDate(date);		//포맷팅된 오늘 날짜

	$('#brdyDt').attr('max',today);			//오늘 이후 생일 설정 불가
	
	$('#brdyDt').blur(function(){ 
		$.checkBrdyDtValid();
	});
	
	//핸드폰 유효성 검사
	$('#mblNo2').blur(function(){ 
		$.checkMblNoValid();
	});
	
	//이메일 유효성 검사
	$('#email1').blur(function(){ 
		$.checkEmailValid();
	});
	
	//주소 유효성 검사
	$('#addrDtl').blur(function(){ 
		$.checkAddrValid();
	});
	
	//결혼기념일 유효성 검사
	$('#mrrgDt').blur(function(){ 
		$.checkMrrgDtValid();
	});
	
	//등록버튼 클릭 시
	$("#applyBtn").click(function(){
		//전체 유효성 검사 진행
		$.checkNameValid();
		$.checkPocValid();
		$.checkBrdyDtValid();
		$.checkMblNoValid();
		$.checkEmailValid();
		$.checkAddrValid();
		$.checkMrrgDtValid();
		
		if($.checkAllAdd()){								//유효성 검사 통과시(유효성이 통과되면 메세지 박스 display:none상태)
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
		}else {
			alert("입력 내용을 다시 확인해 주세요")
			$('html').scrollTop(0);
			return false;
		}
	})
});