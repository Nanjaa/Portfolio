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
		$('.sunset').animate({
			marginTop: '0'				
		}, 2000, 'linear', function() {
			$('.nightSky').fadeIn(1000);
		});
	}
	var wait = setInterval(function() {
		sunset();
	}, 1000);
});