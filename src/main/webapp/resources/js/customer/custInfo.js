/**
 * 
 */
$(function(){
	
	//input 내에서 focus를 value 끝으로 이동
	$.focusEnd();
	
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
												
						var mblNo = data.cust["mblNo"]										//휴대폰번호
						if(mblNo.length==10){
							$('#mblNo0').val(mblNo.substr(0, 3));
							$('#mblNo1').val(mblNo.substr(3, 3));
							$('#mblNo2').val(mblNo.substr(6, 4));
						}else if (mblNo.length==11){
							$('#mblNo0').val(mblNo.substr(0, 3));
							$('#mblNo1').val(mblNo.substr(3, 4));
							$('#mblNo2').val(mblNo.substr(7, 4));
						}
													
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
						
						//변경 전 값 저장
						$('#bfCustNm').val(data.cust["custNm"])
						$('#bfBrdyDt').val(data.cust["brdyDt"])
						$('#bfSexCd').val(data.cust["sexCd"])
						$('#bfScalYn').val(data.cust["scalYn"])
						$('#bfMrrgDt').val(data.cust["mrrgDt"])
						$('#bfPocCd').val(data.cust["pocCd"])
						$('#bfMblNo').val(data.cust["mblNo"])
						$('#bfPrtCd').val(data.cust["prtCd"])
						$('#bfPsmtGrcCd').val(data.cust["psmtGrcCd"])
						$('#bfEmail').val(data.cust["email"])
						$('#bfAddr').val(data.cust["addr"])
						$('#bfAddrDtl').val(data.cust["addrDtl"])
						$('#bfCustSsCd').val(data.cust["custSsCd"])
						$('#bfFstJsDt').val(data.cust["fstJsDt"])
						$('#bfJsDt').val(data.cust["jsDt"])
						$('#bfStpDt').val(data.cust["stpDt"])
						$('#bfCnclDt').val(data.cust["cnclDt"])
						$('#bfCnclCnts').val(data.cust["cnclCnts"])
						$('#bfEmailRcvYn').val(data.cust["emailRcvYn"])
						$('#bfSmsRcvYn').val(data.cust["smsRcvYn"])
						$('#bfDmRcvYn').val(data.cust["dmRcvYn"])
						
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
					//연결실패
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
//		if(map.size>0){
//			if(confirm("변경사항이 있습니다. 계속 진행하시겠습니까?")){	
//				//selectSearchCust 함수 실행
//				$.selectOneCust();
//			}else{
//				return false;
//			}
//		}else{
			//selectSearchCust 함수 실행
			$.selectOneCust();
//		}
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
		
		if($.checkAllUpd){ 		//유효성 검사가 참이면
			
			var mblNo0 = $('#mblNo0').val().trim();	//사용자가 입력한 값 공백 제거
			var mblNo1 = $('#mblNo1').val().trim();	//사용자가 입력한 값 공백 제거
			var mblNo2 = $('#mblNo2').val().trim();	//사용자가 입력한 값 공백 제거
			var mblNo = mblNo0+mblNo1+mblNo2;
			$('#mblNo').val(mblNo);
			
			var email0 = $('#email0').val().trim();		//사용자가 입력한 값 공백 제거
			var email1 = $('#email1').val().trim();		//사용자가 입력한 값 공백 제거
			var email = email0+'@'+email1;
			$('#email').val(email);
			
			var bfObj = new FormData(document.getElementById('bfCntForm'));
			var aftObj = new FormData(document.getElementById('updateCustInfo'));
			
			
			if($.checkAllUpd){	 	//map.size>0
				if(confirm("고객정보를 수정하시겠습니까?")){	//더블체크

					

					var chgCd = new Array();
					for (var key of bfObj.keys()) {
						chgCd.push(key);
					}
					var chgBfCnt = new Array();
					for (var values of bfObj.values()) {
						chgBfCnt.push(values);
					}
					var chgAftCnt = new Array();
					for (var values of aftObj.values()) {
						chgAftCnt.push(values);
					}
					
					var info = new Array();
					
//					for(var i=0; i<chgCd.length; i++){
//						var arr = [ chgCd[i], chgBfCnt[i], chgAftCnt[i] ]
//						info.push(arr);
//					}
					
					var formData = [];
					
					for(var i=0; i<chgCd.length; i++){
						var formData = new FormDate();
						
						formData.append('chgCd',chgCd[i]);
						formData.append('chgBfCnt',chgBfCnt[i]);
						formData.append('chgAftCnt',chgAftCnt[i]);
						info.push(arr);
					};
				
//					
//					console.log(formData[0].get("chgCd"));
//					console.log(formData[1].get("chgCd"));
//					console.log(formData[2].get("chgCd"));
//					console.log(formData[3].get("chgCd"));
//					console.log(formData[4].get("chgCd"));
					
					
					
					$.ajax({
						url : "/customer/updateCust.do",
						type : "post",
						async: true,
						data: info,
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
	$.popupOpen($('#prtSearchBtn'),'450','500','/customer/prtPop.do','prtPopOpen');

	//custSearchBtn 클릭시 팝업 오픈
	$.popupOpen($('#custSearchBtn'),'650','500','/customer/custPop.do','custPopOpen');
	
	//resetBtn 클릭시 초기화
	var custNo = $('#custNo').val();
	$.reset('#resetBtn','/customer/custInfo.do?custNo='+custNo);
});