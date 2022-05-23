/**
 * 
 */
$(function(){
	
//	if($('#custNm').val()==""){
//		var option = 'width=650, height=500, top=50, left=50, location=no';
//		window.open('/customer/custPop.do', 'custPopOpen', option);
//	}
	
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
					//라디오버튼 초기화
					$('input[type="radio"]').prop("checked",false)
					
					//연결성공
					if(data["result"]) { //정상적으로 데이터가 왔을 경우(try)
						//검색창 이릅 가져오기
						$('#custNm').val(data["custNm"]);
						
						//변경 전 값 저장
						$('#bfCustNm').val(data.cust["custNm"]);
						$.RmvHyp(data.cust["brdyDt"],"#bfBrdyDt");		//YYYY-MM-DD -> YYYYMMDD
						$('#bfSexCd').val(data.cust["sexCd"]);
						$('#bfScalYn').val(data.cust["scalYn"]);
						$.RmvHyp(data.cust["mrrgDt"],"#bfMrrgDt");		//YYYY-MM-DD -> YYYYMMDD
						$('#bfPocCd').val(data.cust["pocCd"]);
						$('#bfMblNo').val(data.cust["mblNo"]);
						$('#bfPrtCd').val(data.cust["prtCd"]);
						$('#bfPsmtGrcCd').val(data.cust["psmtGrcCd"]);
						$('#bfEmail').val(data.cust["email"]);
						$('#bfAddr').val(data.cust["addr"]);
						$('#bfAddrDtl').val(data.cust["addrDtl"]);
						$('#bfCustSsCd').val(data.cust["custSsCd"]);
						$.RmvHyp(data.cust["fstJsDt"],"#bfFstJsDt");	//YYYY-MM-DD -> YYYYMMDD
						$.RmvHyp(data.cust["jsDt"],"#bfJsDt");			//YYYY-MM-DD -> YYYYMMDD
						$.RmvHyp(data.cust["stpDt"],"#bfStpDt");		//YYYY-MM-DD -> YYYYMMDD
						$.RmvHyp(data.cust["cnclDt"],"#bfCnclDt");		//YYYY-MM-DD -> YYYYMMDD
						$('#bfCnclCnts').val(data.cust["cnclCnts"]);
						$('#bfEmailRcvYn').val(data.cust["emailRcvYn"]);
						$('#bfSmsRcvYn').val(data.cust["smsRcvYn"]);
						$('#bfDmRcvYn').val(data.cust["dmRcvYn"]);
						
						
						//고객기본정보 정보
						$('#custNmInfo').val(data["custNm"]);													//고객명
						$('#brdyDt').val(data.cust["brdyDt"]);													//생년월일
						$('input[name="sexCd"][value='+data.cust["sexCd"]+']').prop('checked',true);			//성별
						$('input[name="scalYn"][value='+data.cust["scalYn"]+']').prop('checked',true);			//생일
						$('#mrrgDt').val(data.cust["mrrgDt"]);													//결혼기념일
						$('option[value='+data.cust["pocCd"]+']').prop('selected',true);						//직업코드
						var mblNo = data.cust["mblNo"]															//휴대폰번호
						if(mblNo.length==10){
							$('#mblNo0').val(mblNo.substr(0, 3));
							$('#mblNo1').val(mblNo.substr(3, 3));
							$('#mblNo2').val(mblNo.substr(6, 4));
						}else if (mblNo.length==11){
							$('#mblNo0').val(mblNo.substr(0, 3));
							$('#mblNo1').val(mblNo.substr(3, 4));
							$('#mblNo2').val(mblNo.substr(7, 4));
						}
						$('#prtCd').val(data.cust["prtCd"]);													//가입매장
						$('#prtNm').val(data.cust["prtNm"]);
						$('input[name="psmtGrcCd"][value='+data.cust["psmtGrcCd"]+']').prop('checked',true);	//우편물수령
						var email = data.cust["email"].split("@");												//이메일
						$('#email0').val(email[0]);
						$('#email1').val(email[1]);
						$('#addr').val(data.cust["addr"]);														//주소
						$('#addrDtl').val(data.cust["addrDtl"]);												//상세주소
						$('input[name="custSsCd"][value='+data.cust["custSsCd"]+']').prop('checked',true);		//고객상태
						$('#fstJsDt').val(data.cust["fstJsDt"]);												//최초가입일자
						$('#jsDt').val(data.cust["jsDt"]);														//가입일자
						$('#cnclCnts').val(data.cust["cnclCnts"]);												//해지사유
						$('#stpDt').val(data.cust["stpDt"]);													//중지일자
						$('#cnclDt').val(data.cust["cnclDt"]);													//해지일자
						
						//구매	
						$('#totlPrsAmt').val(data.cust["totlPrsAmt"]);											//총 구매금액
						$('#prsAmtMth').val(data.cust["prsAmtMth"]);											//당월구매금액
						$('#lstPrsDt').val(data.cust["lstPrsDt"]);												//최종구매일
						
						//수신동의
						$('input[name="emailRcvYn"][value='+data.cust["emailRcvYn"]+']').prop('checked',true);	//이메일수신동의
						$('input[name="smsRcvYn"][value='+data.cust["smsRcvYn"]+']').prop('checked',true);		//sms수신동의
						$('input[name="dmRcvYn"][value='+data.cust["dmRcvYn"]+']').prop('checked',true);		//dm수신동의
						
						//고객상태 제한
						$.custSsCdLimit(data.cust["custSsCd"]);
						
//						var bfObj = $('#bfCntForm').serializeArray();
//						console.log(bfObj);
						
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
	//input에 변화 감지
	var changResult = true; 	//변화가 없는 초기 상태
	
	$('#updateCustInfo input').change(function(){	//변화가 있을 시
		changResult = false;	//false로 변환
	});
	//alert(changResult);
	
	$('#SearchBtn').click(function(){
		//매장코드가 바뀌었을떄 포함
		if($('#prtCd').val()!=$('#bfPrtCd').val()){	
			changResult = false;	//false로 변환
			//alert(changResult);
		}
		if(changResult){
			//selectSearchCust 함수 실행
			$.selectOneCust();
		}else{
			if(confirm("수정된 내역이 있습니다.\n변경내역이 사라지는데 그래도 하시겠습니까?")){	
				//selectSearchCust 함수 실행
				$.selectOneCust();
			}else{
				return false;
			}
		}
	});
	
	//---------------------------------------유효성 검사
	
	$.validEvent('update');
	
	//업데이트 버튼 클릭시
	$('#updateBtn').click(function(){
		if($.checkAll("update")){ 	//유효성 검사가 참이면
			//보낼 value값 정리
			var aftCustSsCd = $('input[id^="custSsCd"]:checked').val();
			var bfCustSsCd = $('#bfCustSsCd').val();
			var custNm = $('#custNmInfo').val();		//고객명 가져오기
			var mblNo0 = $('#mblNo0').val().trim();		//사용자가 입력한 값 공백 제거
			var mblNo1 = $('#mblNo1').val().trim();		//사용자가 입력한 값 공백 제거
			var mblNo2 = $('#mblNo2').val().trim();		//사용자가 입력한 값 공백 제거
			var mblNo = mblNo0+mblNo1+mblNo2;			//변경 후 값 합쳐서 저장
			
			if(bfCustSsCd=='10'){
				if(aftCustSsCd=='80'){
					$('#custNmMdf').val(custNm);					//기본이름 저장
					$('#mblNo').val(mblNo);							//기본 핸드폰번호 저장
					$.RmvHyp($('#jsDt').val(),"#jsDtMdf");			//가입일자 
					var date = new Date();							//오늘
					var formatDate = $.getFormatDate(date);			//포맷
					$.RmvHyp(formatDate,"#stpDtMdf");				//중지일자 오늘로 변경
				}else{
					$('#custNmMdf').val(custNm);					//기본이름 저장
					$('#mblNo').val(mblNo);							//기본 핸드폰번호 저장
					$.RmvHyp($('#jsDt').val(),"#jsDtMdf");			//가입일자 
				}
			}else if(bfCustSsCd=='80'){
				if(aftCustSsCd=='90'){
					$('#custNmMdf').val("해지고객");					//고객명 해지고객으로 변경
					var mblNoRpc =	mblNo.replace(/\d/g,"0");		//휴대폰 번호 0으로 변경
					$('#mblNo').val(mblNoRpc);
					$.RmvHyp($('#jsDt').val(),"#jsDtMdf");			//가입일자 
					$.RmvHyp($('#stpDt').val(),"#stpDtMdf");		//중지일자 
					var date = new Date();							//오늘
					var formatDate = $.getFormatDate(date);			//포맷
					$.RmvHyp(formatDate,"#cnclDtMdf");				//해지일자 오늘로 변경
				}else if(aftCustSsCd=='10'){
					$('#custNmMdf').val(custNm);					//기본이름 저장
					$('#mblNo').val(mblNo);							//기본 핸드폰번호 저장
					$.RmvHyp($('#jsDt').val(),"#jsDtMdf");			//가입일자 
				}else{
					$('#custNmMdf').val(custNm);					//기본이름 저장
					$('#mblNo').val(mblNo);							//기본 핸드폰번호 저장
					$.RmvHyp($('#jsDt').val(),"#jsDtMdf");			//가입일자 
					$.RmvHyp($('#stpDt').val(),"#stpDtMdf");		//중지일자 
				}
			}else{
				if(aftCustSsCd=='10'){
					$('#custNmMdf').val(custNm);					//기본이름 저장
					$('#mblNo').val(mblNo);							//기본 핸드폰번호 저장
					var date = new Date();							//오늘
					var formatDate = $.getFormatDate(date);			//포맷
					$.RmvHyp(formatDate,"#jsDtMdf");				//가입일자 오늘로 변경
					$('#stpDtMdf').val('');							//중지일자 초기화
					$('#cnclDtMdf').val('');						//해지일자 초기화
					$('#cnclCnts').val('');							//해지사유 초기화
				}else{
					$('#custNmMdf').val("해지고객");					//고객명 해지고객으로 변경
					var mblNoRpc =	mblNo.replace(/\d/g,"0");		//휴대폰 번호 0으로 변경
					$('#mblNo').val(mblNoRpc);
					$.RmvHyp($('#jsDt').val(),"#jsDtMdf");			//가입일자 
					$.RmvHyp($('#stpDt').val(),"#stpDtMdf");		//중지일자 
					$.RmvHyp($('#cnclDt').val(),"#cnclDtMdf");		//중지일자 
				}
			}
			
			//날짜 포맷변경
			$.RmvHyp($('#brdyDt').val(),"#brdyDtMdf");		//YYYY-MM-DD -> YYYYMMDD
			$.RmvHyp($('#mrrgDt').val(),"#mrrgDtMdf");		//YYYY-MM-DD -> YYYYMMDD
			
			//이메일 주소 조합
			var email0 = $('#email0').val().trim();		//사용자가 입력한 값 공백 제거
			var email1 = $('#email1').val().trim();		//사용자가 입력한 값 공백 제거
			var email = email0+'@'+email1;				//변경 후 값 합쳐서 저장
			$('#email').val(email);
			
			//변경전 form 객체
			var bfObj = $('#bfCntForm').serializeArray();
			console.log(bfObj);
			//변경후 form 객체
			var aftObj = $('#updateCustInfo').serializeArray();
			console.log(aftObj);
			
			//--------------------------ajax로 배열2(수정에 사용할 [변경항목,변경내용])
			var formData = new FormData(document.getElementById('updateCustInfo'));
			var cUpObj={};
			for(var pair of formData.entries()) {
				cUpObj[pair[0]] = pair[1];
			}
			console.log('수정 객체 : '+JSON.stringify(cUpObj));
			
			//--------------------------ajax로 배열1(변경이력에 사용할 [변경코드,변경전내용,변경후내용])
			var cHtArr = new Array();
			
			for(var i=0; i<bfObj.length; i++){
				if(bfObj[i].value!=aftObj[i].value && bfObj[i].name!='JS_DT' && bfObj[i].name!='STP_DT' && bfObj[i].name!='CNCL_DT'){

					var cHtObj = {
							chgCd : bfObj[i].name,			//ex)key: chgCd / value : CUST_NM
							chgBfCnt : bfObj[i].value,		//ex)key: chgBfCnt / value : 홍길동
							chgAftCnt : aftObj[i].value,	//ex)key: chgAftCnt / value : 홍길똥
						}
					cHtArr.push(cHtObj);
				}
			}
			console.log('변경이력 배열 : '+JSON.stringify(cHtArr));
			
			//--------------------------ajax에 보낼 전체 데이터
			var allObj = {
					cUpdData : cUpObj,
					cHtData : cHtArr,
					custNo : $('#custNo').val()
			}
			//console.log('전체 데이터 : '+allObj)
			
			if(changResult){	//변경내역이 없으면
				alert("변경내역이 없습니다.");
			}else {				//변경내역이 있으면
				if(confirm("고객정보를 수정하시겠습니까?")){	//더블체크
					
					$.ajax({
						url : "/customer/updateCust.do",
						type : "post",
						contentType: "application/json; charset=UTF-8",
						data : JSON.stringify(allObj),
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
							//console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						}
					});
				}else{
					$('#jsDtMdf').val('');
					$('#stpDtMdf').val('');
					$('#cnclDtMdf').val('');
					return false;
				}
			}
		}
	});
	
	//prtSearchBtn 클릭시 팝업 오픈
	$.popupOpen($('#prtSearchBtn'),'450','500','/customer/prtPop.do','prtPopOpen');

	//custSearchBtn 클릭시 팝업 오픈
	$.popupOpen($('#custSearchBtn'),'650','500','/customer/custPop.do','custPopOpen');
	
	//resetBtn 클릭시 초기화
	$('#resetBtn').click(function(){
		var custNo = $('#custNo').val();
		window.location.href = '/customer/custInfo.do?custNo='+custNo;	//새로고침
	});
});