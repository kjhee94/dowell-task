/**
 * 
 */
$(function(){
	//라디오버튼 디폴트
	$('#psmtGrcCd0').attr("checked",true);
	$('#sexCd0').attr("checked",true);
	
	//이름 유효성 검사
	$('#custNm input').blur(function(){ 
		var custNm = $('#custNm input').val().trim();	//사용자가 입력한 값 공백 제거
		var msg = $('#custNm>.area-msg');
		
		if(custNm.length==0){				//이름을 입력하지 않았을 때
			msg.css('display','block');
			msg.text('이름을 입력해 주세요.');
		}else if(custNm.length==1){			//이름 1자 일 때
			msg.css('display','block');
			msg.text('2자 이상 입력해 주세요.');
			//입력창 리셋
			$('#custNm input').val("");
		}else {
			msg.css('display','none');
		}
	});
	
	//직업코드 유효성 검사
	$('#poc select').blur(function(){ 
		var first = $('select>option:selected');
		var msg = $('#poc>.area-msg');
		
		if(first.text()=='선택'){			//첫번째 요소가 선택 되었을 때 (value 값이 없을 때)
			msg.css('display','block');
			msg.text('직업을 선택해 주세요.');
		}else {
			msg.css('display','none');
		}
	});
	
	//생일  유효성 검사
	var date = new Date();						//오늘 날짜
	var today = $.getFormatDate(date);			//포맷팅된 오늘 날짜
	
	$('#brdyDt input').attr('max',today);		//오늘 이후 생일 설정 불가
	
	$('#brdyDt input').blur(function(){ 
		var brdyDt = $('#brdyDt input').val();	//사용자가 입력한 값
		var msg = $('#brdyDt>.area-msg');
		
		if($.checkValidDate(brdyDt)==false){	//입력한 값이 날짜 유효성 체크 실패일 때
			msg.css('display','block');
			msg.text('잘못된 형식의 날짜입니다.');
			//입력창 리셋
			$('#brdyDt input').val("");
		}else if(brdyDt>today){					//입력한 값이 오늘보다 클 때
			msg.css('display','block');
			msg.text('오늘날짜 이전으로 입력해 주세요.');
			//입력창 리셋
			$('#brdyDt input').val("");
		}else {
			msg.css('display','none');
		}
	});
	
	//핸드폰 유효성 검사
	$('#mblNo input[name="lstMblNo"]').blur(function(){ 
		var fstMblNo = $('#mblNo input[name="fstMblNo"]').val().trim();	//사용자가 입력한 값 공백 제거
		var mdlMblNo = $('#mblNo input[name="mdlMblNo"]').val().trim();	//사용자가 입력한 값 공백 제거
		var lstMblNo = $('#mblNo input[name="lstMblNo"]').val().trim();	//사용자가 입력한 값 공백 제거
		
		var msg = $('#mblNo>.area-msg');

		if(/^[0-9]{3}/.test(fstMblNo) && /^[0-9]{3,4}/.test(mdlMblNo) && /^[0-9]{4}/.test(lstMblNo)){
			
			//000-000-0000 || 000-0000-0000 사용불가
			var fullMblNo =  fstMblNo+mdlMblNo+lstMblNo;	//하이픈 추가된 형태
			var pattern = /^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/;	//자릿수 정규화식
			var result =  pattern.test(fullMblNo);			//정규화 결과값
			
			if(result) {
				if(result && (fullMblNo=='0000000000' || fullMblNo=='00000000000')){
					msg.css('display','block');
					msg.text('사용할 수 없는 번호 입니다.');
					//입력창 리셋
					$('#mblNo input[name="fstMblNo"]').val("");
					$('#mblNo input[name="mdlMblNo"]').val("");
					$('#mblNo input[name="lstMblNo"]').val("");
				}else {
					//중복된 핸드폰 번호 불가
					$.ajax({
						url:"/customer/mblNoCheck.do",
						type:"post",
						async: true,
						data:{"mblNo":fullMblNo},
						dataType: "json",
						success: function(data){
							var msg = $('#mblNo>.area-msg');
							
							if(data["result"]) { //정상적으로 데이터가 왔을 경우(try)
								if(data["check"]=="Y"){ //중복체크 결과 사용 가능일 때
									msg.css('display','none');
								}else {	//중복체크 결과 중복일 때
									msg.css('display','block');
									msg.text('사용중인 핸드폰 번호입니다.')
									//입력창 리셋
									$('#mblNo input[name="fstMblNo"]').val("");
									$('#mblNo input[name="mdlMblNo"]').val("");
									$('#mblNo input[name="lstMblNo"]').val("");
								}
							}
							else { //비즈니스 로직중 에러가 났을 경우(catch)
								//alert에 에러표시
								alert("오류가 발생했습니다. 관리자에게 문의해 주세요.\n("+data["msg"]+")")
							}
						},
						error: function(){
							//alert에 에러표시
							alert("서버연결에 실패했습니다. 관리자에게 문의해 주세요.\n("+request.status+" : "+error+")")
							//console에 에러표시
							//console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						}
					});
				}
			}
		}else if(fstMblNo.length==0 && mdlMblNo.length==0 && lstMblNo.length==0){	//핸드폰 번호를 입력하지 않았을 때
			msg.css('display','block');
			msg.text('휴대폰 번호를 입력해 주세요.')
		}else {																		//(3)-(3,4)-(4)의 자릿수가 아닐 때
			msg.css('display','block');
			msg.text('숫자 10자 또는 11자로 입력해 주세요.');
		}
	});
	
	//직업코드 유효성 검사
	$('#email input[name="emailAddr"]').blur(function(){ 
		var emailId = $('#email input[name="emailId"]').val().trim();		//사용자가 입력한 값 공백 제거
		var emailAddr = $('#email input[name="emailAddr"]').val().trim();	//사용자가 입력한 값 공백 제거
		var msg = $('#email>.area-msg');
		
		if(emailId.length==0 || emailAddr.length==0){	//모두 입력이 되지 않았을 때
			msg.css('display','block');
			msg.text('이메일을 입력해 주세요.');
		}else {
			msg.css('display','none');
		}
	});
	
	//주소 유효성 검사
	$('#addr input[name="addrDtl"]').blur(function(){ 
		var addr = $('#addr input[name="addr"]').val().trim();		//사용자가 입력한 값 공백 제거
		var addrDtl = $('#addr input[name="addrDtl"]').val().trim();//사용자가 입력한 값 공백 제거
		var msg = $('#addr>.area-msg');
		
		if((addr.length==0 && addrDtl.length!=0)||(addr.length!=0 && addrDtl.length==0)){	//하나만 채워져 있는 경우
			msg.css('display','block');
			msg.text('주소를 모두 입력해주세요.');
		}else {
			msg.css('display','none');
		}
	});
	
	//결혼기념일 유효성 검사
//	$('#mrrgDt input').blur(function(){ 
//		var mrrgDt = $('#mrrgDt input').val();	//사용자가 입력한 값
//		
//		if($.checkValidDate(mrrgDt)==false){//입력한 값이 유효성  체크 실패일 때
//			msg.css('display','block');
//			msg.text('잘못된 형식의 날짜입니다');
//			$('#mrrgDt input').val("");
//		}else {
//			msg.css('display','none');
//		}
//	});
	
	
	//등록버튼 입력시
	$("#applyBtn").click(function(){
		
		
	})
});