
$(document).ready(function() {

//��������/������ ������ "�����"
	$("#town").click(function(){
		$(".dropMap").toggle();
		$("#town span").toggleClass("grey");			
	});
	
	
	//������ ������ "�����" ��� ������� �� ���� ��� ���
	/*$(document).click(function(e){
    if ($(e.target).parents().filter('.dropMap:visible').length != 1) {
        $('.dropMap').hide();
    }
});*/
	
	//��������/������ ������ "�����������"
	$("#apatrs").click(function(){
		$(".dropApart").toggle();
		$("#apatrs span").toggleClass("grey");
	});
	
	//����� ������ �� ����������� ������ "�����������"
	$(".dropApart p").click(function(){
		var text = $(this).find("span").text();
		console.log(text);
		$("#apatrs span").text(text);
		$(".dropApart").css("display","none");
		$("#apatrs span").removeClass("grey");
	});
	
	//��������/������ �������� ����� �� �������� �����
	$(".dropApart p").hover(function(){
		$(this).find("img").toggle();
	});	
	
	//������ ������ "�����" ��� ����� ��� ���
	/*$(document).mouseup(function (e) {
		var container = $(".dropApart");
		if (container.has(e.target).length === 0){
        container.hide();
		$("#apatrs span").removeClass("grey");
		}
	});*/
	
	//��������/������ ��������� "���� ������"
	$("#calendarTo").click(function(){
		$(".dropCalendar").toggle();
		$("#calendarTo span").toggleClass("grey");
	});
	
	//������ ��������� "���� ������" ��� ����� ��� ���
	/*$(document).mouseup(function (e) {
		var container = $(".dropCalendarTo");
		if (container.has(e.target).length === 0){
        container.hide();
		$("#calendarTo span").removeClass("grey");
		}
	});*/
	//��������/������ ��������� "���� ������"
	$("#calendarOut").click(function(){
		$(".dropCalendarOut").toggle();
		$("#calendarOut span").toggleClass("grey");
	});
	
	
	//������������� ������� ��������� "���� ������"
	$('#dropCalendar').jCal({
	day:			new Date(),
	days:			1,
	showMonths:		2,
	monthSelect:	true,
	callback:		function (day, days) {
			
			var dayNumber = day.getDate(),
				monthNumber = day.getMonth()+1,
				yearNumber = day.getFullYear();
				
				if(monthNumber<10){
					monthNumber = "0" + monthNumber;
				}
				
				if(dayNumber<10){
					dayNumber = "0" + dayNumber;
				}
				
				selectDay = dayNumber + "." + monthNumber + "." + yearNumber;
	
			$("#calendarTo span").text(selectDay);
			$(".dropCalendar").css("display","none");
			$("#calendarTo span").removeClass("grey");
		}
	});
	
	//������ ��������� "���� ������" ��� ����� ��� ���
		/*$(document).mouseup(function (e) {
		var container = $(".dropCalendarOut");
		if (container.has(e.target).length === 0){
        container.hide();
		$("#calendarOut span").removeClass("grey");
		}
	});*/


//������������� ������� ��������� "���� ������"
	$('#dropCalendarOut').jCal({
	day:			new Date(),
	days:			1,
	showMonths:		2,
	monthSelect:	true,
	callback:		function (day, days) {
			
			var dayNumber = day.getDate(),
				monthNumber = day.getMonth()+1,
				yearNumber = day.getFullYear();
				
				if(monthNumber<10){
					monthNumber = "0" + monthNumber;
				}
				
				if(dayNumber<10){
					dayNumber = "0" + dayNumber;
				}
				
				selectDay = dayNumber + "." + monthNumber + "." + yearNumber;
	
			$("#calendarOut span").text(selectDay);
			$(".dropCalendarOut").css("display","none");
			$("#calendarOut span").removeClass("grey");
		}
	});

	//��������/������ ������ "������"
	$("#guests").click(function(){
		$(".dropGuests").toggle();
		$("#guests span").toggleClass("grey");
	});
	
	//������ ������ "������" ��� ����� ��� ���
	/*$(document).mouseup(function (e) {
		var container = $(".dropGuests");
		if (container.has(e.target).length === 0){
        container.hide();
		$("#guests span").removeClass("grey");
		}
	});*/
	//����� ������ �� ����������� ������ "������"
	$(".dropGuests p").click(function(){
		var text = $(this).text();
		$("#guests span").text(text).removeClass("grey");
		$(".dropGuests").css("display","none");
	});
	
	
	//��������/������ ����� �����
	$("#rus").click(function(){
		$(".dropRus").toggle();
	});
	
	
	//����� ������ �� ����������� ������ ������ �����
	$(".dropRus p").click(function(){
		var flagCurr = $(".langFlag").attr("src"),
			langCurr = $(".val span.lang").text();
			flagClick = $(this).find("img").attr("src"),
			langClick = $(this).find("span").text();
		$(".langFlag").attr("src", flagClick);	
		$(".val span.lang").text(langClick);
		
		$(this).find("img").attr("src", flagCurr);
		$(this).find("span").text(langCurr);
		
		$(".dropRus").css("display","none");
	});
	
	//��������/������ ����� ������
	$("#euro").click(function(){
		$(".dropEuro").toggle();
	});
	
	//����� ������ �� ����������� ������ ������ ������
	$(".dropEuro p").click(function(){
		var textFuture = $(this).html(),
			textCurr = $(".valChange").html();
		$(".valChange").html(textFuture);
		$(this).html(textCurr);
		
		$(".dropEuro").css("display","none");
		
	});
	//���������� ������ "����������� ��"
	$("#sort").click(function(){
		$(".dropSort").toggle();
	});
	
	$(document).mouseup(function (e) {
		var container = $(".dropSort");
		if (container.has(e.target).length === 0){
        container.hide();
		}
	});
	
	$(".dropSort p").click(function(){
		var text = $(this).text();
		$("#sort span").text(text);
	});
	
	//���������� ������ "���"
	$("#view").click(function(){
		$(".dropView").toggle();
	});
	
	
	$(".dropView p").click(function(){
		var text = $(this).text();
		$("#view span").text(text);
	});

	
	$(document).mouseup(function (e) {
		var container = $(".dropView");
		if (container.has(e.target).length === 0){
        container.hide();
		}
	});
	
	//���������� ������ "�� ��������"
	$("#onPage").click(function(){
		$(".dropOnPage").toggle();
	});
	
	$(".dropOnPage p").click(function(){
		var text = $(this).text();
		$("#onPage span").text(text);
		$(".dropOnPage").css("display","none");
	});
	
	$(document).mouseup(function (e) {
		var container = $(".dropOnPage");
		if (container.has(e.target).length === 0){
        container.hide();
		}
	});
	
	
	
	

	//������� ������� ����������� 
	
	$(".thumbGaleryImg").click(function(){
		var src = $(this).attr("src");
		$(".mainGaleryImg").attr("src", src);
	});
	
	//��������� ���������
	//���������� ��������� div ����������� ������ ��������� Div "<div class="scroll_child">"
      var quqntity=$(".thumbCild div").size();
	 

      //����� ������ ���� ���������
      var widthScroll=0;
      for (i=0;i<quqntity;i++){
        widthScroll+=$(".thumbCild div:eq("+i+")").width();
		 
      }

      //��������� ������ ��������� Div "<div class="scroll_child">"
      $(".thumbCild").width(widthScroll);

	  
	  $(".galeryRight").click(function(){
		$(".thumbCild").animate({"left": "+=100px"}, "slow");
		console.log($(".thumbCild").css("left"));
		if($(".thumbCild").css("left") == "0px"){$(".thumbCild").stop();}
	  });
	  
	  $(".galeryLeft").click(function(){
		$(".thumbCild").animate({"left": "-=100px"}, "slow");
		console.log($(".thumbCild").css("left"));
		if($(".thumbCild").css("left") == "-"+(quqntity-6)*100+"px"){$(".thumbCild").stop();}
	  });
	  
	  
	
	
	
	//��������� ������� �����
	$(".contentNav a").click(function(){
		var name = $(this).attr("name");
		$(".contentNav a").css("background","url()");
		$(".slideContent").fadeOut(1000);
		
		$(this).css("background","url(img/brownArrow.png) no-repeat center bottom");
		$("#"+name).fadeIn(1000);
	});
	


			
	
			
	//������������� ��������� �� �������� � ������� ����
	$('#calendarPrice').jCal({
	day:			new Date(),
	days:			1,
	showMonths:		2,
	monthSelect:	true,
	callback:		function (day, days) {
			console.log('selected ' + days + ' days starting ' + day);
			
		}
	});
	
	$('.calendarPrice .day').click(function(){
		$(this).toggleClass("reserve");
	});
	
	$(".calendarPrice .jCalMo .dow").eq(5).css("color","#f75b11");
		
	$(".calendarPrice .jCalMo .dow").eq(6).css("color","#f75b11");
	
	$(".calendarPrice .jCalMo .dow").eq(13).css("color","#f75b11");
	
	$(".calendarPrice .jCalMo .dow").eq(12).css("color","#f75b11");

	});