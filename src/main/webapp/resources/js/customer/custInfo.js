/**
 * 
 */
$(function(){
	//---------------------------------------처음 로드시 기본세팅 값
	$.selectOneCust = function(){
		var custNo = $('#custNo').val();
		
		if(custNo.length!=0){
			$.ajax({
				url : "/customer/selectOneCust.do",
				type : "post",
				async: true,
				data: {"custNo":custNo},
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				dataType: "json",
				success : function(data) {
					//연결성공
					if(data["result"]) { //정상적으로 데이터가 왔을 경우(try)
						//검색창 이릅 가져오기
						$('#custNm').val(data["custNm"]);
						
						//고객기본정보 정보
						$('#custNmInfo').val(data["custNm"]);								//고객명
						$('input[value='+data.cust["sexCd"]+']').attr('checked',true);		//성별
						$('option[value='+data.cust["pocCd"]+']').attr('selected',true);	//직업코드
						$('#brdyDt').val(data.cust["brdyDt"]);								//생년월일
						$('input[value='+data.cust["scalYn"]+']').attr('checked',true);		//생일
						$('#mrrgDt').val(data.cust["mrrgDt"]);								//결혼기념일
						
						var mblNo = data.cust["mblNo"].split("-");							//휴대폰번호
						$('#mblNo0').val(mblNo[0]);
						$('#mblNo1').val(mblNo[1]);
						$('#mblNo2').val(mblNo[2]);
						
						var email = data.cust["email"].split("@");							//이메일
						$('#email0').val(email[0]);
						$('#email1').val(email[1]);
					
						$('input[value='+data.cust["psmtGrcCd"]+']').attr('checked',true);	//우편물수령
						$('#addr').val(data.cust["addr"]);									//주소
						$('#addrDtl').val(data.cust["addrDtl"]);
						$('#prtCd').val(data.cust["prtCd"]);								//가입매장
						$('#prtNm').val(data.cust["prtNm"]);
						$('input[value='+data.cust["custSsCd"]+']').attr('checked',true);	//고객상태
						$('#fstJsDt').val(data.cust["fstJsDt"]);							//최초가입일자
						$('#jsDt').val(data.cust["jsDt"]);									//가입일자
						$('#stpDt').val(data.cust["stpDt"]);								//중지일자
						$('#cnclDt').val(data.cust["cnclDt"]);								//해지일자
						$('#cnclCnts').val(data.cust["cnclCnts"]);							//해지사유
						
						//구매
						$('#totlPrsAmt').val(data.cust["totlPrsAmt"]);						//총 구매금액
						$('#prsAmtMth').val(data.cust["prsAmtMth"]);						//당월구매금액
						$('#lstPrsDt').val(data.cust["lstPrsDt"]);							//최종구매일
						
						//수신동의
						$('input[value='+data.cust["emailRcvYn"]+']').attr('checked',true);	//이메일수신동의
						$('input[value='+data.cust["smsRcvYn"]+']').attr('checked',true);	//sms수신동의
						$('input[value='+data.cust["dmRcvYn"]+']').attr('checked',true);	//dm수신동의
						
						
						//핸드폰 유효성 검사
						$('#checkMblNo').on('click', function(){ 
							$.checkMblNoValid(mblNo[0],mblNo[1],mblNo[2]);
						});
						
						//고객상태 제한
						$.custSsCdLimit(data.cust["custSsCd"]);
						
					}else { //비즈니스 로직중 에러가 났을 경우(catch)
						//alert에 에러표시
						alert("오류가 발생했습니다. 관리자에게 문의해 주세요.\n("+data["msg"]+")")
					}
				},
				error : function(request,status,error) {
					//alert에 에러표시
					alert("서버연결에 실패했습니다. 관리자에게 문의해 주세요.\n("+request.status+" : "+error+")")
					//console에 에러표시
					//console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				}
			});
		}
	}
	$.selectOneCust();
	
	
	//---------------------------------------검색버튼 클릭시 세팅 값
	$('#SearchBtn').click(function(){
		if(map.size>0){
			if(confirm("변경사항이 있습니다. 계속 진행하시겠습니까?")){	
				//selectSearchCust 함수 실행
				$.selectOneCust();
			}else{
				return false;
			}
		}else{
			//selectSearchCust 함수 실행
			$.selectOneCust();
		}
	});
	
	
	//---------------------------------------유효성 검사
	//이름 유효성 검사
	$('#custNmInfo').blur(function(){ 
		$.checkNameValid();
	});
	
	//생일  유효성 검사
	var date = new Date();					//오늘 날짜
	var today = $.getFormatDate(date);		//포맷팅된 오늘 날짜

	$('#brdyDt').attr('max',today);			//오늘 이후 생일 설정 불가
	
	$('#brdyDt').blur(function(){ 
		$.checkBrdyDtValid(today);
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
	
	//해지사유 유효성 검사
	$('#cnclCnts').blur(function(){ 
		$.checkcCntsValid();
	});
	
	
	//---------------------------------------정보 업데이트
	//변경내역 객체에 담기
	
	const cngData = [];
	const map = new Map();
	
	//변경내역 객체화
	$('#custNmInfo').change(function(){
		var value = $(this).val().trim();
		map.set("custNm",value);
	});
	$('input[name=sexCd]').change(function(){
		var value = $(this).val();
		map.set("sexCd",value);
	});
	$('select').change(function(){
		var value = $('option:selected').attr("value");
		map.set("pocCd",value);
	});
	$('#brdyDt').change(function(){
		var value = $(this).val().replace(/\-/g,'');
		map.set('brdyDt',value);
	});
	$('input[name=scalYn]').change(function(){
		var value = $(this).val();
		map.set("scalYn",value);
	});
	$('#mrrgDt').change(function(){
		var value = $(this).val().replace(/\-/g,'');
		map.set('mrrgDt',value);
	});
	$('input[id^=mblNo]').change(function(){
		$('#checkMblNo>span').css("color","coral");
		
		var mblNo0 = $('#mblNo0').val().trim();		//사용자가 입력한 값 공백 제거
		var mblNo1 = $('#mblNo1').val().trim();		//사용자가 입력한 값 공백 제거
		var mblNo2 = $('#mblNo2').val().trim();		//사용자가 입력한 값 공백 제거
		var value =  mblNo0+mblNo1+mblNo2;			//합치기
		
		map.set("mblNo",value);
	});
	$('input[id^=email]').change(function(){
		var email0 = $('#email0').val().trim();		//사용자가 입력한 값 공백 제거
		var email1 = $('#email1').val().trim();		//사용자가 입력한 값 공백 제거
		var value = email0+'@'+email1;				//합치기(@포함)
		
		map.set("email",value);
	});
	$('input[name=psmtGrcCd]').change(function(){
		var value = $(this).val();
		map.set("psmtGrcCd",value);
	});
	$('#addr').change(function(){
		var value = $(this).val().trim();
		map.set("addr",value);
	});
	$('#addrDtl').change(function(){
		var value = $(this).val().trim();
		map.set("addrDtl",value);
	});
	$('#cnclCnts').change(function(){
		var value = $(this).val().trim();
		map.set("cnclCnts",value);
	});
	$('input[name=custSsCd]').change(function(){
		var value = $(this).val();
		map.set("custSsCd",value);
	});
	$('input[name=emailRcvYn]').change(function(){
		var value = $(this).val();
		map.set("emailRcvYn",value);
	});
	$('input[name=smsRcvYn]').change(function(){
		var value = $(this).val();
		map.set("smsRcvYn",value);
	});
	$('input[name=dmRcvYn]').change(function(){
		var value = $(this).val();
		map.set("dmRcvYn",value);
	});
	
	
	$('#updateBtn').click(function(){
		//전체 유효성 검사 진행
		$.checkNameValid();
		$.checkBrdyDtValid();
		$.checkEmailValid();
		$.checkAddrValid();
		$.checkMrrgDtValid();
		if($("#custSsCd2").is(':checked')){
			$.checkcCntsValid();
		}
		
		if($.checkAllUpd){
			if(map.size>0){	
				if(confirm("고객정보를 수정하시겠습니까?")){	//더블체크
					
					map.set("custNo",$('#custNo').val());
					const obj = Object.fromEntries(map)
					console.log(obj);
					
					$.ajax({
						url : "/customer/updateCust.do",
						type : "post",
						async: true,
						data: obj,
						dataType: "json",
						success : function(data) {
							//연결성공
							if(data["result"]) { //정상적으로 데이터가 왔을 경우(try)
								if(data["seccessYN"]=="Y"){ //데이터 삽입 성공
									alert("수정이 완료되었습니다.");
									location.reload();
								}else {//데이터 삽입 실패
									alert("수정 실패. 관리자에게 문의해 주세요");
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
							console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						}
					});
				}else{
					return false;
				}
			}else {
				alert("변경내역이 없습니다.");
			}
		}else {
			alert("입력 내용을 다시 확인해 주세요");
			return false;
		}
			
	});
	
	
	//prtSearchBtn 클릭시 팝업 오픈
	$.popupOpen('#prtSearchBtn','450','/customer/prtPop.do','매장 조회');

	//custSearchBtn 클릭시 팝업 오픈
	$.popupOpen('#custSearchBtn','650','/customer/custPop.do','고객 조회');
	
	//resetBtn 클릭시 초기화
	var custNo = $('#custNo').val();
	$.reset('#resetBtn','/customer/custInfo.do?custNo='+custNo);
});