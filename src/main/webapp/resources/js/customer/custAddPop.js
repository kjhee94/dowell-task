/**
 * 
 */
$(function(){
	//라디오버튼 디폴트
	$('#psmtGrcCd0').attr("checked",true);
	$('#sexCd0').attr("checked",true);
	
	//이름 2자 이상만 등록가능
	$('#custNm input').blur(function(){ 
		var custNm = $('#custNm input').val().trim();	//사용자가 입력한 값 공백 제거
		var msg = $('#custNm>.area-msg');
		
		if(custNm.length==1){				//이름 1자 입력시
			msg.css('display','block')
			msg.text('2자 이상 입력해주세요.')
		}else {
			msg.css('display','none')
		}
	});
	
	//생일 미래일자 불가
	var date = new Date();						//오늘 날짜
	var today = $.getFormatDate(date);			//포맷
	
	$('#brdyDt input').attr('max',today);		//생일 max 오늘로 설정
	
	$('#brdyDt input').blur(function(){ 
		var brdyDt = $('#brdyDt input').val();	//사용자가 임력한 값
		var msg = $('#brdyDt>.area-msg');
		
		if(brdyDt>today){						//입력한 값이 오늘보다 클 때
			msg.css('display','block')
			msg.text('오늘날짜 이전으로 입력해주세요.')
			$('#brdyDt input').val(today);
		}else {
			msg.css('display','none')
		}
	});
	
	//핸드폰 자릿수 체크
	$('#mblNo input[name="lstMblNo"]').blur(function(){ 
		var fstMblNo = $('#mblNo input[name="fstMblNo"]').val().trim();	//사용자가 입력한 값 공백 제거
		var mdlMblNo = $('#mblNo input[name="mdlMblNo"]').val().trim();	//사용자가 입력한 값 공백 제거
		var lstMblNo = $('#mblNo input[name="lstMblNo"]').val().trim();	//사용자가 입력한 값 공백 제거
		var msg = $('#mblNo>.area-msg');

		//010-000-0000 || 010-0000-0000형태가 아닐 때
		if(/^[0-9]{3}/.test(fstMblNo) && /^[0-9]{3,4}/.test(mdlMblNo) && /^[0-9]{4}/.test(lstMblNo)){
			msg.css('display','none');
		}else {
			msg.css('display','block');
			msg.text('10자 또는 11자로 입력해주세요.');
		}
		
		//000-000-0000 || 000-0000-0000 사용불가
		var fullMblNo =  fstMblNo+'-'+mdlMblNo+'-'+lstMblNo;
		var pattern = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/;
		var result =  pattern.test(fullMblNo)
		
		if(result) {
			if(result && (fullMblNo=='000-000-0000' || fullMblNo=='000-0000-0000')){
				msg.css('display','block');
				msg.text('사용할 수 없는 번호 입니다.');
			}else {
				msg.css('display','none');
			}
		}
	});
	
	
	
	
	
	//등록버튼 입력시
	$("#applyBtn").click(function(){
		
		
	})
});