$(document).ready(function(){
	var check;
	var months = ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'];	
	for(var i=0;i<months.length;i++){
		var el = document.createElement('li');
		el = $(el).addClass('month');
		el = $(el).attr('id',i+1);
		el = $(el).text(months[i]);
		$('ul.list').append(el);		
	}

	$('.select,.fa').on('click',function(){
		check = 0;
		$('.group').removeClass('active error').toggleClass('on-select');
		$('.fa').toggleClass('fa-rotate');
		check = 1;
	});

	$('li.month').on('click',function(){
		var selectedMonth = $(this).text();
		$('li.month').removeClass('selected');
		$('span.content').text(selectedMonth);
		$('.group').removeClass('error').addClass('active');
		$(this).toggleClass('selected');
	});
	$(this).click(function(event) {
	    if (!$(event.target).is(".select,.checkbox,.content,.fa") ) {
	        $(".group").removeClass("on-select");
	        if($('.content').text() != ''){
	        	$(".group").addClass("active");
	        }
	        $('.fa').removeClass('fa-rotate');
		    if($('.content').text()== "" && check == 1){
		       	$('.group').addClass('error');
		    }
	    }
	});
	$('input[type="checkbox"]').on('click',function(){
		if(!$(this).attr('checked')){
			$('.month-picker').addClass('disabled');
			$(this).attr('checked', "");
			$('.group').removeClass().addClass('group');
			if($('.content').text() != ''){
				$('.group').addClass('passive');
			}
		}
		else if($(this).attr('checked',"")) {
			$('.month-picker').removeClass('disabled');
			$(this).removeAttr('checked');
			 if($('.content').text()== "" ){
			 	$('.group').addClass('error');
			 }else{
			 	$('.group').removeClass('passive').addClass('active');
			 }
		}
	});

	$(this).on("click",function(event){
		console.log($(event.target).attr('class'));
	});
});