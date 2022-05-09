/**
 * 
 */
$(function(){
	//new Date 포맷변경(YYYY-MM-DD)
	$.getFormatDate = function(date){
	    var year = date.getFullYear();              //yyyy
	    var month = (1 + date.getMonth());          //M
	    month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
	    var day = date.getDate();                   //d
	    day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
	    return  year + '-' + month + '-' + day;     //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
	}
	
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
	
	//ToDate 유효성 검사(FromDate보다 작은값 막기,날짜 오류 제어)
	$.checkValidToDate = function(toSlt,fromSlt){
//		if($.checkValidDate($(toSlt).val())==false){
//			//alert('잘못된 형식의 날짜 입니다');
//			
//			//ToDate값 재설정
//			var vDate = $(toSlt).val().split('-'); //-로 잘라서 가져오기		
//			var y = parseInt(vDate[0], 10),
//    			m = parseInt(vDate[1], 10),
//    			d = parseInt(vDate[2], 10)
//		
//			var rDate = new Date(y, m, 0).;		//각 월의 마지막 일로 리셋
//			rDate.setMonth(rDate.getMonth()-1);	//월-1로 설정(해당 월의 마지막 날이어야 하기 때문)
//		
//			var fDate = $.getFormatDate(rDate); //date 포멧팅
//			$(toSlt).val(fDate);
//			
//		}else 
		if($(toSlt).val()<$(fromSlt).val()) { 		//ToDate가 FromDate보다 작을 때
			alert("값은 "+$(fromSlt).val()+" 이후여야 합니다."); 	//alert
			
			//ToDate값 재설정
			var fDate = new Date($(fromSlt).val())			//FromDate Date형으로
			fDate.setDate(fDate.getDate()+1)				//FromDate+1일
			
			var formatfDate = $.getFormatDate(fDate);
			$(toSlt).val(formatfDate); 						//ToDate값 FromDate+1일로 설정
		}		
	}
	
	//FromDate 유효성 검사(ToDate보다 큰값 막기,날짜 오류 제어)
	$.checkValidFromDate = function(toSlt,fromSlt){
//		if($.checkValidDate($(fromSlt).val())==false){
//			//alert('잘못된 형식의 날짜 입니다');
//			
//			//ToDate값 재설정
//			var vDate = $(fromSlt).val().split('-'); //-로 잘라서 가져오기		
//			var y = parseInt(vDate[0], 10),
//        		m = parseInt(vDate[1], 10),
//        		d = parseInt(vDate[2], 10)
//			
//			var rDate = new Date(y, m, 0).;		//각 월의 마지막 일로 리셋
//			rDate.setMonth(rDate.getMonth()-1);	//월-1로 설정(해당 월의 마지막 날이어야 하기 때문)
//			
//			var fDate = $.getFormatDate(rDate); //date 포멧팅
//			$(fromSlt).val(fDate);
//			
//		}else 
		if($(fromSlt).val()>$(toSlt).val()) { 		//FromDate가 ToDate보다 클 때
			alert("값은 "+$(toSlt).val()+" 이전이여야 합니다."); 	//alert
			
			//FromDate값 재설정
			var tDate = new Date($(toSlt).val());			//ToDate Date형으로
			tDate.setDate(tDate.getDate()-1);				//ToDate-1일
			
			var formattDate = $.getFormatDate(tDate);
			$(fromSlt).val(formattDate); 					//FromDate값 ToDate-1일로 설정
		}		
	}
	
	//닫기버튼 클릭시 창닫기
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
	
	//키보드 Enter 이벤트
	$.keydownEnter = function(selector,click){
		$(selector).keydown(function(keyNum){	//현재의 키보드의 입력값을 keyNum으로 받음 
			if(keyNum.keyCode == 13){ 			//keydown으로 발생한 keyNum의 숫자체크 : 숫자가 enter의 아스키코드 13과 같으면 
				$(click).click(); 				//기존에 정의된 클릭함수를 호출 
			};
		});
	}
});