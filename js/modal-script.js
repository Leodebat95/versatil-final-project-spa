// Os cards do portfólio (a[name=modal]) são injetados no <main> pelo
// fetch() da SPA, DEPOIS do document.ready. Por isso usamos delegação
// de eventos a partir do document: o handler é registrado uma vez e
// funciona mesmo para elementos criados dinamicamente depois.
$(document).ready(function() {

	$(document).on('click', 'a[name=modal]', function(e) {

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


	$(document).on('click', '.window .close', function(e) {

		e.preventDefault();
		$('#mask, .window').hide();
	});


	$(document).on('click', '#mask', function() {

		$(this).hide();
		$('.window').hide();
	});
});
