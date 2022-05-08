/**
 * 
 */
$(function(){
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