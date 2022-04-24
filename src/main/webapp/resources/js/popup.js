/**
 * 
 */
$(function(){
	//닫기버튼 클릭시 창닫기
	$('.btn-close').click(function(){
		window.close();
	});
	
	//---------------------------------매장조회
	//resetPrtBtn 클릭시 초기화
	$('#resetPrtBtn').click(function(){
		window.location.href = '/customer/selectAllPrt.do'
	});
	
	//체크박스 단일선택
	$('.cb-prt>input').click(function(){
		if($(this).prop('checked')){
			$('.cb-prt>input').prop('checked',false);
			$(this).prop('checked',true);
			
			//값을 보내기 위해 임의의 속성에 값 넣어놓기
			var prtCd = $(this).parent().next().text();
			var prtNm = $(this).parent().next().next().text()
			$('.btn-prt-apply').attr('data-prtcd',prtCd);
			$('.btn-prt-apply').attr('data-prtnm',prtNm);
		};
	});
	
	//값 적용하기
	$('.btn-prt-apply').click(function(){
		var prtCd = $(this).attr('data-prtcd');
		var prtNm = $(this).attr('data-prtnm');
		
		window.close();
		$(opener.document).find('input[name="prtCd"]').val(prtCd);
		$(opener.document).find('input[name="prtNm"]').val(prtNm);
	});
	
	//행 더블클릭
	$('.result-prt-content').dblclick(function(){
		//보낼값 변수값 지정
		var prtCd = $(this).find('.prtCd').text();
		var prtNm = $(this).find('.prtNm').text()
		
		//값 적용하기
		window.close();
		$(opener.document).find('input[name="prtCd"]').val(prtCd);
		$(opener.document).find('input[name="prtNm"]').val(prtNm);
	});
	
	
	//---------------------------------고객조회
	//resetCustBtn 클릭시 초기화
	$('#resetCustBtn').click(function(){
		window.location.href = '/customer/selectAllCust.do'
	});
	
	//이름 2자 이상 검색가능
	$('button[type="submit"]').click(function(){
		var custNm = $('input[name="custNm"]').val();
		
		if(custNm.length==1){
			alert("이름은 2자 이상 검색이 가능합니다.")
			return false;
		}
	});
	
	//체크박스 단일선택
	$('.cb-cust>input').click(function(){
		if($(this).prop('checked')){
			$('.cb-cust>input').prop('checked',false);
			$(this).prop('checked',true);
			
			//값을 보내기 위해 임의의 속성에 값 넣어놓기
			var custNo = $(this).parent().next().text();
			var custNm = $(this).parent().next().next().text()
			$('.btn-cust-apply').attr('data-custno',custNo);
			$('.btn-cust-apply').attr('data-custnm',custNm);
		};
	});
	
	//값 적용하기
	$('.btn-cust-apply').click(function(){
		var custNo = $(this).attr('data-custno');
		var custNm = $(this).attr('data-custnm');
		
		window.close();
		$(opener.document).find('input[name="custNo"]').val(custNo);
		$(opener.document).find('input[name="custNm"]').val(custNm);
	});
	
	//행 더블클릭
	$('.result-cust-content').dblclick(function(){
		//보낼값 변수값 지정
		var custNo = $(this).find('.custNo').text();
		var custNm = $(this).find('.custNm').text()
		
		//값 적용하기
		window.close();
		$(opener.document).find('input[name="custNo"]').val(custNo);
		$(opener.document).find('input[name="custNm"]').val(custNm);
	});
	
//	
//	//---------------------------------고객이력
//	if($('.chgCd').text()=='고객상태'){
//		var chgBfCnt = $(this).next().text();
//		var chgAftCnt = $(this).next().next().text();
//		
//		if(chgBfCnt='10'){$(this).next().text('정상')}
//		if(chgBfCnt='80'){$(this).next().text('중지')}
//		if(chgBfCnt='90'){$(this).next().text('해지')}
//		
//		if(chgAftCnt='10'){$(this).next().text('정상')}
//		if(chgAftCnt='80'){$(this).next().text('중지')}
//		if(chgAftCnt='90'){$(this).next().text('해지')}
//	}
});