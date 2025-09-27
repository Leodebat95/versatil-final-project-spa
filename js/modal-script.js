$(document).ready(function() {
	
	$('a[name=modal]').click(function(e) {
		
		e.preventDefault();

		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		
		$('#mask').css({'width':maskWidth, 'height':maskHeight});
 
		$('#mask').fadeIn(1000);
		$('#mask').fadeTo("slow", 0.8);


		var winH = $(window).height();
		var winW = $(window).width();

		var id = $(this).attr('href');
		 
		$(id).css('top', (winH - $(id).height()) /2);
		$(id).css('left', (winW - $(id).width()) /2);

		$(id).fadeIn(2000);
	});


	$('.window .close').click(function(e) {

		e.preventDefault();
		$('#mask, .window').hide();
	});


	$('#mask').click(function() {

		$(this).hide();
		$('.window').hide();
	});
});
