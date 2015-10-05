$(document).ready(function() {

	// $('a').mouseenter(function() {
	// 	$(this).css({
	// 		'-webkit-transform': 'scale(5)',
	// 		'moz-transform' : 'scale(5)',
	// 		'-ms-transform' : 'scale(5)',
	// 		'-o-transform' : 'scale(5)',
	// 		'transform' : 'scale(5)'
	// 	});
	// 	console.log('hello');
	// });
	// $('a').mouseleave(function() {
	// 	$(this).css('color', 'pink');
	// });

	function sunset() {
		$('.sunset').fadeIn(1000);
		$('.darknessWrap').fadeIn(4000);
		$('.flameLight').fadeIn(4000);
		$('.sunset').animate({
			marginTop: '0'				
		}, 2000, 'linear', function() {
			$('.nightSky').fadeIn(1000);
			var wait2 = setTimeout(function() {
				sunrise();
			}, 5000);
		});
	}
	function sunrise() {
		$('.nightSky').fadeOut(1000);
		$('.darknessWrap').fadeOut(4000);
		$('.flameLight').fadeOut(4000);
		$('.sunset').animate({
			marginTop: '-260px'
		}, 2000, 'linear', function() {
			$('.sunset').fadeOut(1000);
			var wait3 = setTimeout(function() {
				sunset();
			}, 5000);
		});
	}
	var wait = setTimeout(function() {
		sunset();
	}, 5000);
});