/**
 * 
 */
$(function(){
	//input 내에서 focus를 value 끝으로 이동
	$.focusEnd = function(){
		var len = $('input[autofocus]').val().length;
		$('input[autofocus]')[0].setSelectionRange(len, len);
	}
	
	//keydown 이벤트시 날짜 유효성 체크
	$.checkValidKeydown = function(date1,date2,select) {
		date1.keydown(function(keyNum){ 
			if(keyNum.keyCode == 13){ 						//값변경 후 enter(keyCode : 13)
				$.checkValidChangeDate(date1,date2,select);	//날짜 유효성 체크
			};
		});
	}
	
	//Date 유효성 검사 후 날짜 변경
	$.checkValidChangeDate = function(date1,date2,select){
		if($.checkValidDate(date1.val())==false){			//날짜 유효성 검사 실패시
			$.alertChangeDate("잘못된 형식의 날짜입니다",date2,date1,select);
		} 
		else if(select==0 && date1.val()>date2.val()) {		//select=0이면 date1이 jsDtFrom
			$.alertChangeDate("값은 "+date2.val()+" 이전이여야 합니다.",date2,date1,select);
			
		}else if(select==1 && date1.val()<date2.val()) {	//select=1이면 date1이 jsDtTo
			$.alertChangeDate("값은 "+date2.val()+" 이후여야 합니다.",date2,date1,select);
		}
	};
	
	//alert 후 날짜 재설정 
	$.alertChangeDate = function(msg,date2,date1,select){
		alert(msg);
		
		var date = new Date(date2.val());				//Date형으로 변환
		if(select==0) {									//select=0이면 date1이 jsDtFrom
			date.setDate(date.getDate()-1);				//date-1일
		}else {											//select=1이면 date1이 jsDtTo
			date.setDate(date.getDate()+1);				//date+1일
		}
		var formatDate = $.getFormatDate(date);			//포맷
		date1.val(formatDate);							//값변경
	}
	
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
	
	//date 포맷변경(YYYY-MM-DD)
	$.getFormatDate = function(date){
	    var year = date.getFullYear();              	//yyyy
	    var month = (1 + date.getMonth());          	//M
	    month = month >= 10 ? month : '0' + month;  	//month 두자리로 저장
	    var day = date.getDate();                   	//d
	    day = day >= 10 ? day : '0' + day;          	//day 두자리로 저장
	    return  year + '-' + month + '-' + day;     	//'-' 추가하여 yyyy-mm-dd 형태 생성 가능
	}
	
	//name삭제 시 code삭제
	$.delectCode = function(name,code){
		$(name).blur(function(){
			if($(name).val().length==0){
				$(code).val('');
			}
		});
	}
	
	//매장 직접입력
	$.prtKeydownSearch = function(){
		$('#prtNm').keydown(function(keyNum){ 
			if(keyNum.keyCode == 13){ 						//값변경 후 enter(keyCode : 13)
				var keyword = $('#prtNm').val().trim();
				var data = {"keyword" : keyword};
				
				if(keyword.length==0){
					$('#prtCd').val('');
					return false;
				}else {
					$.ajax({
						url : "/customer/selectPrt.do",
						type : "post",
						async: true,
						data: data,
						contentType: "application/x-www-form-urlencoded; charset=UTF-8",
						dataType: "json",
						success : function(data) {
							//연결성공
							if(data["result"]) {	//정상적으로 데이터가 왔을 경우(try)
								if(data["list"].length==1){	//조회 결과가 1개일 때
									$.each(data["list"], function(index,item){
										$('#prtCd').val(item.prtCd);
										$('#prtNm').val(item.prtNm);
									});
								}else if(data["list"].length>1){ //조회 결과가 1개 이상일 때
									//팝업창 오픈
									var openPrtPop;
									
									var option = 'width=450, height=500, top=50, left=50, location=no';
						            openPrtPop = window.open('/customer/prtPop.do', 'prtPopOpen', option);		
						
									openPrtPop.onload = function(){
										openPrtPop.document.getElementById("keyword").value = $('#prtNm').val();
										openPrtPop.document.getElementById("prtSearchBtn").click();
									}
						
								}else {//조회 결과가 0개일 때
									alert('조회 결과가 없습니다.');
									$('#prtCd').val('');
									$('#prtNm').val('');
									return false;
								}
							}else { //비즈니스 로직중 에러가 났을 경우(catch)
								//alert에 에러표시
								alert("오류가 발생했습니다. 관리자에게 문의해 주세요.\n("+data["msg"]+")")
							}
						},
						error : function(request,status,error) {
							//연결실패
							//alert에 에러표시
							alert("서버연결에 실패했습니다. 관리자에게 문의해 주세요.\n("+request.status+" : "+error+")")
							//console에 에러표시
							//console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						}
					});
				}
			};
		});
	}
	
	//고객이름 직접입력
	$.custKeydownSearch = function(){
		$('#custNm').keydown(function(keyNum){ 
			if(keyNum.keyCode == 13){ 						//값변경 후 enter(keyCode : 13)
				var custNm = $('#custNm').val().trim();
				var mblNo = '';
				var data = {"custNm" : custNm, "mblNo" : mblNo};
				
				if(custNm.length==0){
					$('#custNo').val('');
					return false;
				}else if(custNm.length==1){
					alert('고객이름 2자 이상 검색이 가능합니다.');
					return false;
				}else {
					$.ajax({
						url : "/customer/selectCust.do",
						type : "post",
						async: true,
						data: data,
						contentType: "application/x-www-form-urlencoded; charset=UTF-8",
						dataType: "json",
						success : function(data) {
							//연결성공
							if(data["result"]) {	//정상적으로 데이터가 왔을 경우(try)
								if(data["list"].length==1){	//조회 결과가 1개일 때
									$.each(data["list"], function(index,item){
										$('#custNo').val(item.custNo);
										$('#custNm').val(item.custNm);
									});
								}else if(data["list"].length>1){ //조회 결과가 1개 이상일 때
									//팝업창 오픈
									var openCustPop;
									
									var option = 'width=650, height=500, top=50, left=50, location=no';
						            openCustPop = window.open('/customer/custPop.do', 'custPopOpen', option);
						
									openCustPop.onload = function(){
										openCustPop.document.getElementById("custNm").value = $('#custNm').val();
										openCustPop.document.getElementById("custSearchBtn").click();
									}
						
								}else {//조회 결과가 0개일 때
									alert('조회 결과가 없습니다.');
									$('#custNo').val('');
									$('#custNm').val('');
									return false;
								}
							}else { //비즈니스 로직중 에러가 났을 경우(catch)
								//alert에 에러표시
								alert("오류가 발생했습니다. 관리자에게 문의해 주세요.\n("+data["msg"]+")")
							}
						},
						error : function(request,status,error) {
							//연결실패
							//alert에 에러표시
							alert("서버연결에 실패했습니다. 관리자에게 문의해 주세요.\n("+request.status+" : "+error+")")
							//console에 에러표시
							//console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						}
					});
				}
			};
		});
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
			$('.result-title').css('padding-right','0');		//스크롤바가 없는경우 padding 0
		}
	}
	
	//popup 오픈 함수
	$.popupOpen = function(selector,width,height,url,name){
		selector.click(function(){
			var option = 'width='+width+', height='+height+', top=50, left=50, location=no';
			window.open(url, name, option);
		});
	}
	
	//reset 함수
	$.reset = function(selector,url){
		selector.click(function(){
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
	
	//적용 버튼 클릭시 체크박스 값 적용하기
	$.clickBtnApply = function(classCode,className,idCode,idName){
		$('#applyBtn').click(function(){
			if($('.checkbox>input').is(":checked")){	//체크된 것이 있을 때
				//보낼값 변수값 지정
				var code = $('input:checked').parent().parent().find(classCode).text(); //체크된 행에서 classCode 가져오기
				var name = $('input:checked').parent().parent().find(className).text(); //체크된 행에서 className 가져오기

				window.close();
				//값 적용하기
				$(opener.document).find(idCode).val(code);	//부모창 idCode에 삽입
				$(opener.document).find(idName).val(name);	//부모창 idName에 삽입
			}
		});
	}
	
	//행 더블클릭시 값 적용하기
	$.dblclickApply = function(classCode,className,idCode,idName){
		$('.one-content').dblclick(function(){
			//보낼값 변수값 지정
			var code = $(this).find(classCode).text(); 	//클릭한 행에서 classCode 가져오기
			var name = $(this).find(className).text(); 	//클릭한 행에서 className 가져오기
				
			window.close();
			//값 적용하기
			$(opener.document).find(idCode).val(code);	//부모창 idCode에 삽입
			$(opener.document).find(idName).val(name);	//부모창 idName에 삽입	
		});
	}

	//popup 검색 공통함수
	$.allPopSearchFunc = function(classCode,className,idCode,idName){
		//스크롤바 생성 변형 함수
		$.scrollBerTransform();
		
		//체크박스 단일선택
		$.oneCheck();
		
		//행 더블클릭시 값 적용하기
		$.clickBtnApply(classCode,className,idCode,idName)
		
		//행 더블클릭시 값 적용하기
		$.dblclickApply(classCode,className,idCode,idName)
	}
	
	//체크 없이 적용했을 때
	$.nonCheckApply = function(){
		$('#applyBtn').click(function(){
			if($('.checkbox>input').is(":checked")==false){	//체크된 것이 없을 때
				alert('체크박스를 선택해 주세요.');
				return false;
			}
		});
	}
	
	//키보드 Enter 이벤트
	$.keydownEnter = function(selector,click){
		selector.keydown(function(keyNum){		//현재의 키보드의 입력값을 keyNum으로 받음 
			if(keyNum.keyCode == 13){ 			//keydown으로 발생한 keyNum의 숫자체크 : 숫자가 enter의 아스키코드 13과 같으면 
				click.click(); 					//기존에 정의된 클릭함수를 호출 
			};
		});
	}
	
	//날짜 하이픈 제거
	$.RmvHyp = function(date,selector){
		if(date!=null && date!='-'){
			var dateRpc = date.replace(/\-/g,"");	//'-'제거
			$(selector).val(dateRpc);
		}
	}
	
	//날짜 하이픈 추가
	$.addHyp = function(noHyp,selector){
		var date = $(noHyp).val();
		var hypDate = date.substr(0, 4)+'-'+date.substr(4, 2)+'-'+date.substr(6, 2);
		
		$(selector).val(hypDate);
	}
	
	//일자 오늘로 변경
	$.todayFormat = function(selector){
		var date = new Date();							//오늘
		var formatDate = $.getFormatDate(date);			//포맷
		$.RmvHyp(formatDate,selector);					//selector 오늘로 변경
	}
	
	//-------------------------------------------------------------------유효성 검사
	//유효성 검사 이벤트
	$.validEvent = function(select){
		//핸드폰번호 변경시
		$('#mblNo0').change(function(){	//변화가 있을 시
			$('#checkMblNo>span').css("color","#FF5E4D");
		});
		$('#mblNo1').change(function(){	//변화가 있을 시
			$('#checkMblNo>span').css("color","#FF5E4D");
		});
		$('#mblNo2').change(function(){	//변화가 있을 시
			$('#checkMblNo>span').css("color","#FF5E4D");
		});
		
		//이름 유효성 검사 이벤트
		$('#custNmInfo').blur(function(){ 
			$.checkNameValid();
		});
		
		//직업코드 유효성 검사 이벤트
		$('select').blur(function(){ 
			$.checkPocValid();
		});
		
		//생일  유효성 검사 이벤트
		var date = new Date();					//오늘 날짜
		var today = $.getFormatDate(date);		//포맷팅된 오늘 날짜

		$('#brdyDt').attr('max',today);			//오늘 이후 생일 설정 불가
		
		$('#brdyDt').blur(function(){ 
			$.checkBrdyDtValid(select);
		});
		
		//핸드폰 유효성 검사 이벤트
		$('#checkMblNo').on('click', function(){ 
			$.checkMblNoValid(select);
		});
		
		//이메일 유효성 검사 이벤트
		$('#email0').blur(function(){ 
			$.checkEmailValid();
		});
		$('#email1').blur(function(){ 
			$.checkEmailValid();
		});
		
		//주소 유효성 검사 이벤트
		$('#addr').blur(function(){ 
			$.checkAddrValid();
		});
		$('#addrDtl').blur(function(){ 
			$.checkAddrDtlValid();
		});
		
		//결혼기념일 유효성 검사 이벤트
		$('#mrrgDt').blur(function(){ 
			$.checkMrrgDtValid(select);
		});
	}
	
	//이름 유효성 검사
	$.checkNameValid = function() {
		var custNm = $('#custNmInfo').val().trim();		//사용자가 입력한 값 공백 제거
		
		if(custNm.length==1){							//이름 1자 일 때
			$.validResult('F','고객명은 2자 이상 입력해 주세요.','#custNmInfo');
		}else if(custNm.length>1) {
			$.validResult('T','None','#custNmInfo');
		}
	}
	
	//직업코드 유효성 검사
	$.checkPocValid = function() {
		var pocCd = $('select>option:selected');	//option의 첫번째 요소

		if(!(pocCd.text()=='선택')){					//첫번째 요소가 선택 되었을 때 (value 값이 있을 때)
			$.validResult('T','None','select');
		}
	}
	
	//생일 유효성 검사
	$.checkBrdyDtValid = function(select) {
		var date = new Date();							//오늘 날짜
		var today = $.getFormatDate(date);				//포맷팅된 오늘 날짜
		
		var brdyDt = $('#brdyDt').val();				//사용자가 입력한 값
		
		if($.checkValidDate(brdyDt)==false){			//입력한 값이 날짜 유효성 체크 실패일 때
			$.validResult('F','None','#brdyDt');
			if(select=='insert'){
				$('#brdyDt').val("");					//입력창 리셋
			}else {
				$.addHyp('#bfBrdyDt','#brdyDt');		//기존값
			}
		}else if(brdyDt>today){							//입력한 값이 오늘보다 클 때
			$.validResult('F','미래일자는 입력이 불가능 합니다','#brdyDt');
			if(select=='insert'){
				$('#brdyDt').val("");					//입력창 리셋
			}else {
				$.addHyp('#bfBrdyDt','#brdyDt');		//기존값
			}
		}else {
			$.validResult('T','None','#brdyDt');
		}
	}
	
	//핸드폰 유효성 검사
	$.checkMblNoValid = function(select){
		var mblNo0 = $('#mblNo0').val().trim();	//사용자가 입력한 값 공백 제거
		var mblNo1 = $('#mblNo1').val().trim();	//사용자가 입력한 값 공백 제거
		var mblNo2 = $('#mblNo2').val().trim();	//사용자가 입력한 값 공백 제거
		var mblNo = mblNo0+mblNo1+mblNo2;		//합친 형태
		var checkBtn = $('#checkMblNo>span');
		
		if(/^[0-9]{3}[0-9]{3,4}[0-9]{4}/.test(mblNo)){			//올바른 자릿수일 때
			if(mblNo=='0000000000' || mblNo=='00000000000'){	//0으로 구성된 번호 일 때(해지고객 번호)
				$.validResult('F','핸드폰 번호 000-000-0000 or 000-0000-0000\n사용할 수 없는 번호 입니다','#mblNo0','#mblNo1','#mblNo2',select);
			}else {												//자릿수도 맟고 0으로 구성되지 않은 번호 중에서
				var custNo = $('#custNo').val();
				
				$.ajax({										//중복된 핸드폰 번호 찾기
					url:"/customer/mblNoCheck.do",
					type:"post",
					async: true,
					data:{"mblNo":mblNo,"custNo":custNo},
					dataType: "json",
					success: function(data){
						if(data["result"]) { 					//정상적으로 데이터가 왔을 경우(try)
							if(data["check"]=="Y"){ 			//중복체크 결과 사용 가능일 때
								$.validResult('T','사용 가능한 핸드폰 번호입니다.','#mblNo0','#mblNo1','#mblNo2',select);
							}else if(data["check"]=="mine"){
								$.validResult('T','기존 핸드폰 번호입니다.','#mblNo0','#mblNo1','#mblNo2',select);
							}else {								//중복체크 결과 중복일 때
								if(select=="insert"){
									$.validResult('F','사용중인 핸드폰 번호입니다.','#mblNo0','#mblNo1','#mblNo2',select);
								}else {
									$.validResult('F','동일한 번호가 있습니다.','#mblNo0','#mblNo1','#mblNo2',select);
								}
							}
						}
						else { 									//비즈니스 로직중 에러가 났을 경우(catch)
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
		}else if(mblNo0.length==0 && mblNo1.length==0 && mblNo2.length==0){				//핸드폰 번호를 입력하지 않았을 때
			$.validResult('F','휴대폰 번호를 입력해 주세요.','#mblNo0','#mblNo1','#mblNo2');
		}else {													//(3)-(3,4)-(4)의 자릿수가 아닐 때
			$.validResult('F','숫자 10자 또는 11자로 입력해 주세요.','#mblNo0','#mblNo1','#mblNo2');
		}
	}
	
	//이메일 유효성 검사
	$.checkEmailValid = function(){
		var email0 = $('#email0').val().trim();		//사용자가 입력한 값 공백 제거
		var email1 = $('#email1').val().trim();		//사용자가 입력한 값 공백 제거

		if(!(email0.length==0 || email1.length==0)){	//모두 입력되었을 때
			$.validResult('T','None','#email0','#email1');
			return true;
		}
	}
	
	//주소 유효성 검사
	$.checkAddrValid = function(){
		var addr = $('#addr').val().trim();				//사용자가 입력한 값 공백 제거
		var addrDtl = $('#addrDtl').val().trim();		//사용자가 입력한 값 공백 제거
		if(addr.length!=0) {
			if(addrDtl.length!=0){
				$.validResult('T','None','#addr','#addrDtl');
			}else {
				$.validResult('F','주소를 모두 입력해주세요.','#addrDtl','#addr');
			}
		}else{
			if(addrDtl.length==0){
				$.validResult('T','None','#addr','#addrDtl');
			}
		}
	}
	//상세주소 유효성검사
	$.checkAddrDtlValid = function(){
		var addr = $('#addr').val().trim();				//사용자가 입력한 값 공백 제거
		var addrDtl = $('#addrDtl').val().trim();		//사용자가 입력한 값 공백 제거
		
		if(addrDtl.length!=0) {
			if(addr.length!=0){
				$.validResult('T','None','#addr','#addrDtl');
			}else {
				$.validResult('F','주소를 모두 입력해주세요.','#addr','#addrDtl');
			}
		}else{
			if(addr.length==0){
				$.validResult('T','None','#addr','#addrDtl');
			}
		}
	}
	
	//결혼기념일 유효성 검사
	$.checkMrrgDtValid = function(){
		var mrrgDt = $('#mrrgDt').val();		//사용자가 입력한 값
		
		if($.checkValidDate(mrrgDt)==false){	//입력한 값이 유효성  체크 실패일 때
			if(select=='insert'){
				$('#mrrgDt').val("");			//입력창 리셋
			}else {
				$.addHyp('#bfMrrgDt','#mrrgDt');//기존값
			}
		}
	}
	
	//유효성 결과 처리
	$.validResult = function(result,msg,selector1,selector2,selector3,select){
		if(result=='F'){
			if(msg!='None'){
				alert(msg);
			}
			$(selector1).css("border",'2px solid #FF5E4D');
			$(selector2).css("border",'2px solid #FF5E4D');
			$(selector3).css("border",'2px solid #FF5E4D');
			setTimeout(function(){ 
				$(selector1).focus(); 
			}, 10)
			
			if(select=='insert'){
				$(selector1).val("");
				$(selector2).val("");
				$(selector3).val("");
			}else if(select=='update') {
				var mblNo = $('#bfMblNo').val();
				$.eachMblNoPut(mblNo);
				$(selector1).css("border",'1px solid #c8c8c8');
				$(selector2).css("border",'1px solid #c8c8c8');
				$(selector3).css("border",'1px solid #c8c8c8');
				$('#checkMblNo>span').css("color","#9BDF30");
			}
			return false;
		}else if(result=='T'){
			if(msg!='None'){
				alert(msg);
			}
			$(selector1).css("border",'1px solid #c8c8c8');
			$(selector2).css("border",'1px solid #c8c8c8');
			$(selector3).css("border",'1px solid #c8c8c8');
			if(select!=null){
				$('#checkMblNo>span').css("color","#9BDF30");
			}
			return true;
		}
	}
	
	//유효성 전체검사
	$.checkAll = function(select) {
		var checkBtnColor = $('#checkMblNo>span').css("color");
		var custNm = $('#custNmInfo').val().trim();
		var pocCd = $('select>option:selected');
		var brdyDt = $('#brdyDt').val();
		var email0 = $('#email0').val().trim();
		var email1 = $('#email1').val().trim();
		var addr = $('#addr').val().trim();
		var addrDtl = $('#addrDtl').val().trim();
		
		if(custNm.length==0){																	//고객명 미입력
			$.validResult('F','고객명을 입력해 주세요.','#custNmInfo');
		}else if(pocCd.text()=='선택'){															//직업코드 미입력
			$.validResult('F','직업코드를 입력해 주세요.','select');	
		}else if(brdyDt.length==0){																//생년월일 미입력
			$.validResult('F','생년월일을 입력해 주세요.','#brdyDt');
		}else if(checkBtnColor === 'rgb(255, 94, 77)'){											//휴대폰 번호 번호 미확인
			if(select=="update"){
				$.validResult('F','변경버튼 확인','#mblNo0','#mblNo1','#mblNo2');
			}else{
				$.validResult('F','휴대폰 번호 체크 버튼을 눌러주세요.','#mblNo0','#mblNo1','#mblNo2');
			}
		}else if(email0.length==0 || email1.length==0){											//이메일 미입력
			$.validResult('F','이메일을 입력해 주세요.','#email0','#email1');
		}else if((addr.length==0 && addrDtl.length!=0)||(addr.length!=0 && addrDtl.length==0)) {//주소 유효성 재검사
			$.validResult('F','주소를 모두 입력해주세요.','#addr','#addrDtl');
		}
		//모두통과시 true
		else{
			return true;
		}
	}
	
	//핸드폰번호 쪼개서 넣기
	$.eachMblNoPut = function(mblNo){
		if(mblNo.length==10){
			$('#mblNo0').val(mblNo.substr(0, 3));
			$('#mblNo1').val(mblNo.substr(3, 3));
			$('#mblNo2').val(mblNo.substr(6, 4));
		}else if (mblNo.length==11){
			$('#mblNo0').val(mblNo.substr(0, 3));
			$('#mblNo1').val(mblNo.substr(3, 4));
			$('#mblNo2').val(mblNo.substr(7, 4));
		}
	}
	
	//고객상태에 따라 비활성화
	$.custSsCdLimit = function(custSsCd){
		//현재 선택된 value 값에 따른 비활성화 설정
		var checkBtnColor = $('#checkMblNo>span').css("color");
		
		if(custSsCd=='10'){				//정상이 선택되어 있는 경우
			//alert("초기정상선택");
			$.radioState('#custSsCd0','A');		//정상 활성화
			$.radioState('#custSsCd1','A');		//중지 활성화
			$.radioState('#custSsCd2','D');		//해지 비활성화
			$.readonly('off');					//input readonly 설정
			if(checkBtnColor !== 'rgb(155, 223, 48)'){
				$.checkMblNoBtn('on');			//휴대폰번호 조회 이벤트 재생성
				$('#checkMblNo>span').css("color","#9BDF30");
			}
		}else if(custSsCd=='80'){			//중지가 선택되어 있는  경우
			//alert("초기중지선택");
			$.radioState('#custSsCd0','A');		//정상 활성화
			$.radioState('#custSsCd1','A');		//중지 활성화
			$.radioState('#custSsCd2','A');		//해지 활성화
			$.readonly('off');					//input readonly 설정
			if(checkBtnColor !== 'rgb(155, 223, 48)'){
				$.checkMblNoBtn('on');			//휴대폰번호 조회 이벤트 재생성
				$('#checkMblNo>span').css("color","#9BDF30");
			}
			
			//정상버튼 클릭
			$('input[id=custSsCd0]').off('click').on('click', function() {
				//alert("정상체크1");
				$('#cnclCnts').attr("readonly",true);	//해지사유 비활성화
				$('#cnclCnts').val('');
			});
			//중지버튼 클릭
			$('input[id=custSsCd1]').off('click').on('click', function() {
				//alert("중지체크1");
				$('#cnclCnts').attr("readonly",true);	//해지사유 비활성화
				$('#cnclCnts').val('');
			});
			//해지버튼 클릭
			$('input[id=custSsCd2]').off('click').on('click', function() {
				//alert("해지체크1");
				$('#cnclCnts').attr("readonly",false);	//해지사유 활성화
				$('#cnclCnts').focus();					//해지사유 포커스	
			});
			
		}else if(custSsCd=='90') {			//해지가 선택되어 있는  경우
			//alert("초기해지선택");
			$.radioState('#custSsCd0','A');		//정상 활성화
			$.radioState('#custSsCd1','D');		//중지 비활성화
			$.radioState('#custSsCd2','A');		//해지 활성화
			$.readonly('on');					//해지일때 input readonly 설정
			$.checkMblNoBtn();					//휴대폰번호 조회 막기
			
			//정상버튼 클릭
			$('input[id=custSsCd0]').off('click').on('click', function() {
				//alert("정상체크2");
				$.custSsOnclickSetting('rename');
			});
			//해지버튼 클릭
			$('input[id=custSsCd2]').off('click').on('click', function() {
				//alert("해지체크2");
				$.custSsOnclickSetting('cancel');
			});
		}
	}
	
	//라디오버튼 비활성화/활성화
	$.radioState = function(selector,state){
		if(state=='D'){										//라디오 버튼 비활성화
			$(selector).attr("disabled",true);				//버튼 선택불가능
			$(selector).parent().css("color","#c8c8c8");	//색상 연하게
		}else {												//라디오 버튼 활성화
			$(selector).attr("disabled",false);				//버튼 선택가능
			$(selector).parent().css("color","#707070");	//색상 원상복구
		}
	}

	//readonly 설정
	$.readonly = function(select){
		if(select=="on"){
			$('#cnclCnts').attr("readonly",false);			//해지사유 활성화
			$("#custNmInfo").attr("readonly",true);			//고객이름 비활성화
			$("#mblNo0").attr("readonly",true);				//휴대폰번호 비활성화
			$("#mblNo1").attr("readonly",true);
			$("#mblNo2").attr("readonly",true);
		}else{
			$('#cnclCnts').attr("readonly",true);			//해지사유 비활성화
			$("#custNmInfo").attr("readonly",false);		//고객이름 활성화
			$("#mblNo0").attr("readonly",false);			//휴대폰번호 활성화
			$("#mblNo1").attr("readonly",false);
			$("#mblNo2").attr("readonly",false);
		}
	};
	
	//고객상태에 따른 이름 핸드폰 번호 세팅
	$.custSsOnclickSetting = function(select){
		if(select=='cancel'){									//해지로 변경
			$.readonly('on');									//해지일 때 readonly 설정
			$("#custNmInfo").val($('#bfCustNm').val());			//고객이름 -> 변경전 데이터
			var mblNo = $('#bfMblNo').val();					//휴대폰번호 -> 변경전 데이터
			$.eachMblNoPut(mblNo);
			$.checkMblNoBtn();									//휴대폰번호 이벤트 막기
		}else{													//정보 재설정이 필요할 때
			$.readonly('off');									//해지가 아닐 때 readonly 설정
			$("#custNmInfo").val("");							//이름과 휴대폰번호 value값 지우기
			$('#mblNo0').val("");
			$('#mblNo1').val("");
			$('#mblNo2').val("");
			$.checkMblNoBtn('on');								//휴대폰번호 조회 이벤트 재생성
		}
	}
	
	//휴대폰번호 이벤트
	$.checkMblNoBtn = function(select){
		$('#custNmInfo').css("border",'1px solid #c8c8c8');
		$('#mblNo0').css("border",'1px solid #c8c8c8');
		$('#mblNo1').css("border",'1px solid #c8c8c8');
		$('#mblNo2').css("border",'1px solid #c8c8c8');
		if(select=='on'){
			$('#checkMblNo>span').css("color","#FF5E4D");		//아이콘 색상 빨강
			$('#checkMblNo').css('cursor','pointer');			//커서 손가락
			$('#checkMblNo').on('click', function(){ 			//이밴트 생성
				$.checkMblNoValid('update');
			});
		}else {
			$('#checkMblNo>span').css("color","#707070");		//아이콘 색상 무채색
			$('#checkMblNo').css('cursor','default');			//커서 기본
			$("#checkMblNo").off("click");						//이벤트 끄기
		}
	}
});