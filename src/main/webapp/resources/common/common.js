/**
 * 
 */
$(function(){
	//keydown 이벤트시 유효성
	$.checkValidKeydown = function(date1,date2,select) {
		date1.keydown(function(keyNum){ 
			if(keyNum.keyCode == 13){ 										//값변경 후 enter
				if(select==0){
					$.checkValidChangeDate(date1,date2,select); 	//유효성 체크
				}else {
					$.checkValidChangeDate(date1,date2,select); 	//유효성 체크
				}
			};
		});
	}
	
	//blur 이벤트시 유효성
//	$.checkValidBlur = function(date1,date2,select) {
//		date1.blur(function(){ 				//값변경 후 blur
//			$.checkValidChangeDate(date1,date2,select);	//유효성 체크
//		});
//	}
	
	//Date 유효성 검사 후 날짜 변경
	$.checkValidChangeDate = function(date1,date2,select){
		if($.checkValidDate(date1.val())==false){
			alert('잘못된 형식의 날짜입니다');
			
			var date = new Date(date2.val());										//Date형으로 변환
			
			if(select==0) {
				var resetDate = new Date(date.getFullYear(), date.getMonth(), 1);	//첫번쨰 날 가져오기
			}else {
				var resetDate = new Date(date.getFullYear(), date.getMonth()+1, 0);	//마지막 날 가져오기
			}
			
			var formatDate = $.getFormatDate(resetDate);							//포멧
			date1.val(formatDate);													//값변경
		} 
		else if(select==0 && date1.val()>date2.val()) {
			alert("값은 "+date2.val()+" 이전이여야 합니다.");
			
			var date = new Date(date2.val());		//Date형으로 변환
			date.setDate(date.getDate()-1);			//date-1일
			var formatDate = $.getFormatDate(date);	//포멧
			date1.val(formatDate);					//값변경
			
		}else if(select==1 && date1.val()<date2.val()) {
			alert("값은 "+date2.val()+" 이후여야 합니다.");
			
			var date = new Date(date2.val());		//Date형으로 변환
			date.setDate(date.getDate()+1);			//date+1일
			var formatDate = $.getFormatDate(date);	//포멧
			date1.val(formatDate);					//값변경
		}
	};		
	
	//Date 유효성 검사(유효하지 않은 날짜)
	$.checkValidDate = function(value) {
		var result = true;
		try {
		    var date = value.split("-");
		    var y = parseInt(date[0], 10),
		        m = parseInt(date[1], 10),
		        d = parseInt(date[2], 10);
		    
		    var dateRegex = /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
		    result = dateRegex.test(d+'-'+m+'-'+y);
		} catch (err) {
			result = false;
		}    
	    return result;
	}
	
	//new Date 포맷변경(YYYY-MM-DD)
	$.getFormatDate = function(date){
	    var year = date.getFullYear();              //yyyy
	    var month = (1 + date.getMonth());          //M
	    month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
	    var day = date.getDate();                   //d
	    day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
	    return  year + '-' + month + '-' + day;     //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
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
				$('.checkbox>input').prop('checked',false); //모든 체크박스 선택 해제
				$(this).prop('checked',true); 				//선택된 것만 다시 체크
			};
		});
	}
	
	//체크 후 적용 버튼 클릭시 값 적용하기
//	$.checkApply = function(data1, data2) {
//		$('#applyBtn').click(function(){
//			var data1 = $('input:checked').parent().parent().find('".'+data1+'"').text(); //체크된 행에서 data1 가져오기
//			var data2 = $('input:checked').parent().parent().find('".'+data2+'"').text(); //체크된 행에서 data2 가져오기
//			
//			window.close();
//			$(opener.document).find('"#'+data1+'"').val(data1); //부모창 data1 input에 삽입
//			$(opener.document).find('"#'+data2+'"').val(data2); //부모창 data2 input에 삽입
//		});
//	}
	
	//키보드 Enter 이벤트
	$.keydownEnter = function(selector,click){
		$(selector).keydown(function(keyNum){	//현재의 키보드의 입력값을 keyNum으로 받음 
			if(keyNum.keyCode == 13){ 			//keydown으로 발생한 keyNum의 숫자체크 : 숫자가 enter의 아스키코드 13과 같으면 
				$(click).click(); 				//기존에 정의된 클릭함수를 호출 
			};
		});
	}
});