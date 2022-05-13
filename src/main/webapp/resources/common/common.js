/**
 * 
 */
$(function(){
	//keydown 이벤트시 날짜 유효성 체크
	$.checkValidKeydown = function(date1,date2,select) {
		date1.keydown(function(keyNum){ 
			if(keyNum.keyCode == 13){ 								//값변경 후 enter
				if(select==0){
					$.checkValidChangeDate(date1,date2,select); 	//jsDtFrom 유효성 체크
				}else {
					$.checkValidChangeDate(date1,date2,select); 	//jsDtTo 유효성 체크
				}
			};
		});
	}
	
	//blur 이벤트시  날짜 유효성 체크	
//	$.checkValidBlur = function(date1,date2,select) {			//blur이벤트
//		date1.blur(function(){ 
//			if(select==0){										//select=0이면 date1이 jsDtFrom
//				$.checkValidChangeDate(date1,date2,select); 	//jsDtFrom 유효성 체크
//			}else {
//				$.checkValidChangeDate(date1,date2,select); 	//jsDtTo 유효성 체크
//			}
//		});
//	}
	
	//Date 유효성 검사 후 날짜 변경
	$.checkValidChangeDate = function(date1,date2,select){
		if($.checkValidDate(date1.val())==false){			//날짜 유효성 체크 실패시
			alert('잘못된 형식의 날짜입니다');
			
			var date = new Date(date2.val());				//date2 Date형으로 변환
			if(select==0) {									//select=0이면 date1이 jsDtFrom
				date.setDate(date.getDate()-1)				//date-1일
			}else {											//select=0이면 date1이 jsDtFrom
				date.setDate(date.getDate()+1);				//date+1일
			}
			var formatDate = $.getFormatDate(date);			//포맷
			date1.val(formatDate);							//값변경
		} 
		else if(select==0 && date1.val()>date2.val()) {		//select=0이면 date1이 jsDtFrom
			alert("값은 "+date2.val()+" 이전이여야 합니다.");
			
			var date = new Date(date2.val());				//Date형으로 변환
			date.setDate(date.getDate()-1);					//date-1일
			var formatDate = $.getFormatDate(date);			//포맷
			date1.val(formatDate);							//값변경
			
		}else if(select==1 && date1.val()<date2.val()) {	//select=1이면 date1이 jsDtTo
			alert("값은 "+date2.val()+" 이후여야 합니다.");
			
			var date = new Date(date2.val());				//Date형으로 변환
			date.setDate(date.getDate()+1);					//date+1일
			var formatDate = $.getFormatDate(date);			//포맷
			date1.val(formatDate);							//값변경
		}
	};		
	
	//Date 유효성 검사(유효하지 않은 날짜)
	$.checkValidDate = function(value) {
		var result = true;
		try {
		    var date = value.split("-");				//'-'를 기준으로 자르기
		    var y = parseInt(date[0], 10),				//년 y에 저장
		        m = parseInt(date[1], 10),				//월 m에 저장
		        d = parseInt(date[2], 10);				//일 d에 저장
		    
		    var dateRegex = /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
		    result = dateRegex.test(d+'-'+m+'-'+y);		//성공하면 true리턴 실패시 catch로
		} catch (err) {	
			result = false;								//익셉션 발생시 fales리턴
		}    
	    return result;
	}
	
	//new Date 포맷변경(YYYY-MM-DD)
	$.getFormatDate = function(date){
	    var year = date.getFullYear();              	//yyyy
	    var month = (1 + date.getMonth());          	//M
	    month = month >= 10 ? month : '0' + month;  	//month 두자리로 저장
	    var day = date.getDate();                   	//d
	    day = day >= 10 ? day : '0' + day;          	//day 두자리로 저장
	    return  year + '-' + month + '-' + day;     	//'-' 추가하여 yyyy-mm-dd 형태 생성 가능
	}
	
	//닫기버튼 클릭시 팝업닫기
	$('#closeBtn').click(function(){
		window.close();
	});
	
	//스크롤바 생성 변형 함수
	$.scrollBerTransform = function(){
		$.fn.hasScrollBar = function() {
			return (this.prop("scrollHeight") == 0 && this.prop("clientHeight") == 0) || (this.prop("scrollHeight") > this.prop("clientHeight"));
		};
		if($('.result-content').hasScrollBar()) { 				//결과값이 많아 tbody에 스크롤바가 생길 경우
			$('.result-title').css('padding-right','16.5px'); 	//th의 tr에 스크롤바 넓이의 padding 추가  
		}else {
			$('.result-title').css('padding-right','0');
		}
	}
	
	//popup 오픈 함수
	$.popupOpen = function(selector,width,url,name){
		$(selector).click(function(){
			var option = 'width='+width+', height=500, top=50, left=50, location=no';
			window.open(url, name, option);
		});
	}
	
	//reset 함수
	$.reset = function(selector,url){
		$(selector).click(function(){
			window.location.href = url;	//새로고침
		});
	}
	
	//체크박스 단일선택
	$.oneCheck = function(){
		$('.checkbox>input').click(function(){
			if($(this).prop('checked')){ 					//체크박스 하나가 선택 됐을 때
				$('.checkbox>input').prop('checked',false);	//모든 체크박스 선택 해제
				$(this).prop('checked',true); 				//선택된 것만 다시 체크
			};
		});
	}
	
	//키보드 Enter 이벤트
	$.keydownEnter = function(selector,click){
		$(selector).keydown(function(keyNum){	//현재의 키보드의 입력값을 keyNum으로 받음 
			if(keyNum.keyCode == 13){ 			//keydown으로 발생한 keyNum의 숫자체크 : 숫자가 enter의 아스키코드 13과 같으면 
				$(click).click(); 				//기존에 정의된 클릭함수를 호출 
			};
		});
	}
	
	//------------------------------------회원등록 유효성 검사
	//이름 유효성 검사
	$.checkNameValid = function() {
		var custNm = $('#custNm input').val().trim();	//사용자가 입력한 값 공백 제거
		var msg = $('#custNm>.area-msg');
		
		if(custNm.length==0){							//이름을 입력하지 않았을 때
			msg.css('display','block');
			msg.text('이름을 입력해 주세요.');
		}else if(custNm.length==1){						//이름 1자 일 때
			msg.css('display','block');
			msg.text('2자 이상 입력해 주세요.');
			$('#custNm input').val("");					//입력창 리셋
		}else {
			msg.css('display','none');
		}
	}
	
	//직업코드 유효성 검사
	$.checkPocValid = function() {
		var first = $('select>option:selected');	//option의 첫번째 요소
		var msg = $('#poc>.area-msg');
		
		if(first.text()=='선택'){						//첫번째 요소가 선택 되었을 때 (value 값이 없을 때)
			msg.css('display','block');
			msg.text('직업을 선택해 주세요.');
		}else {
			msg.css('display','none');
		}
	}
	
	//생일 유효성 검사
	$.checkBrdyDtValid = function(today) {
		var brdyDt = $('#brdyDt input').val();	//사용자가 입력한 값
		var msg = $('#brdyDt>.area-msg');
		
		if($.checkValidDate(brdyDt)==false){	//입력한 값이 날짜 유효성 체크 실패일 때
			msg.css('display','block');
			msg.text('잘못된 형식의 날짜입니다.');
			$('#brdyDt input').val("");			//입력창 리셋
		}else if(brdyDt>today){					//입력한 값이 오늘보다 클 때
			msg.css('display','block');
			msg.text('오늘날짜 이전으로 입력해 주세요.');
			$('#brdyDt input').val("");			//입력창 리셋
		}else {
			msg.css('display','none');
		}
	}
	
	//핸드폰 유효성 검사
	$.checkMblNoValid = function(){
		var fstMblNo = $('#fstMblNo').val().trim();	//사용자가 입력한 값 공백 제거
		var mdlMblNo = $('#mdlMblNo').val().trim();	//사용자가 입력한 값 공백 제거
		var lstMblNo = $('#lstMblNo').val().trim();	//사용자가 입력한 값 공백 제거
		var msg = $('#mblNo>.area-msg');

		if(/^[0-9]{3}/.test(fstMblNo) && /^[0-9]{3,4}/.test(mdlMblNo) && /^[0-9]{4}/.test(lstMblNo)){	//올바른 자릿수일 때
			
			var fullMblNo =  fstMblNo+mdlMblNo+lstMblNo;	//하이픈 추가된 형태
			var pattern = /^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/;	//자릿수 정규화식
			var result =  pattern.test(fullMblNo);			//정규화 결과값
			
			if(result) {																//올바른 날짜식일 때
				if(result && (fullMblNo=='0000000000' || fullMblNo=='00000000000')){	//000-000-0000 || 000-0000-0000 일 때
					msg.css('display','block');
					msg.text('사용할 수 없는 번호 입니다.');
					//입력창 리셋
					$('#fstMblNo').val("");
					$('#mdlMblNo').val("");
					$('#lstMblNo').val("");
				}else {																	//자릿수도 맟고 날짜식도 맞고 0으로 구성되지 않은 번호 중에서
					$.ajax({															//중복된 핸드폰번호 체크
						url:"/customer/mblNoCheck.do",
						type:"post",
						async: true,
						data:{"mblNo":fullMblNo},
						dataType: "json",
						success: function(data){
							var msg = $('#mblNo>.area-msg');
							
							if(data["result"]) { 										//정상적으로 데이터가 왔을 경우(try)
								if(data["check"]=="Y"){ 								//중복체크 결과 사용 가능일 때
									msg.css('display','none');
								}else {													//중복체크 결과 중복일 때
									msg.css('display','block');
									msg.text('사용중인 핸드폰 번호입니다.')
									//입력창 리셋
									$('#fstMblNo').val("");
									$('#mdlMblNo').val("");
									$('#lstMblNo').val("");
								}
							}
							else { 														//비즈니스 로직중 에러가 났을 경우(catch)
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
		}else if(fstMblNo.length==0 && mdlMblNo.length==0 && lstMblNo.length==0){		//핸드폰 번호를 입력하지 않았을 때
			msg.css('display','block');
			msg.text('휴대폰 번호를 입력해 주세요.')
		}else {																			//(3)-(3,4)-(4)의 자릿수가 아닐 때
			msg.css('display','block');
			msg.text('숫자 10자 또는 11자로 입력해 주세요.');
		}
	}
	
	//이메일 유효성 검사
	$.checkEmailValid = function(){
		var emailId = $('#emailId').val().trim();		//사용자가 입력한 값 공백 제거
		var emailAddr = $('#emailAddr').val().trim();	//사용자가 입력한 값 공백 제거
		var msg = $('#email>.area-msg');
		
		if(emailId.length==0 || emailAddr.length==0){	//모두 입력이 되지 않았을 때
			msg.css('display','block');
			msg.text('이메일을 입력해 주세요.');
		}else {
			msg.css('display','none');
		}
	}
	
	//주소 유효성 검사
	$.checkAddrValid = function(){
		var addrBasic = $('#addrBasic').val().trim();	//사용자가 입력한 값 공백 제거
		var addrDtl = $('#addrDtl').val().trim();		//사용자가 입력한 값 공백 제거
		var msg = $('#addr>.area-msg');
		
		if((addrBasic.length==0 && addrDtl.length!=0)||(addrBasic.length!=0 && addrDtl.length==0)){	//하나만 채워져 있는 경우
			msg.css('display','block');
			msg.text('주소를 모두 입력해주세요.');
		}else {
			msg.css('display','none');
		}
	}
	
	//결혼기념일 유효성 검사
	$.checkMrrgDtValid = function(){
		var mrrgDt = $('#mrrgDt input').val();	//사용자가 입력한 값
		if($.checkValidDate(mrrgDt)==false){	//입력한 값이 유효성  체크 실패일 때
			msg.css('display','block');
			msg.text('잘못된 형식의 날짜입니다');
			$('#mrrgDt input').val("");
		}else {
			msg.css('display','none');
		}
	}
});