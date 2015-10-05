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
			$('.icon-sun-3').hide();
			$('.icon-moon-2').show();
			console.log(stop)
			var wait2 = setTimeout(function() {
				console.log('rip');
				sunrise();
			}, 5000);				
			$('.icon-moon-2').on('click', function() {
				clearTimeout(wait2);
				quickRise();
			});
		});
	}
	function quickSet() {
		$('.sunset').fadeIn(125);
		$('.darknessWrap').fadeIn(500);
		$('.flameLight').fadeIn(500);
		$('.sunset').animate({
			marginTop: '0'				
		}, 500, 'linear', function() {
			$('.nightSky').fadeIn(125);
			$('.icon-sun-3').hide();
			$('.icon-moon-2').show();
			
			$('.icon-moon-2').on('click', function() {
				quickRise();
			});
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
			$('.icon-moon-2').hide();
			$('.icon-sun-3').show();
			var wait3 = setTimeout(function() {
				console.log('rip');
				sunset();
			}, 5000);				
			$('.icon-sun-3').on('click', function() {
				clearTimeout(wait3);
				quickSet();
			});
		});
	}
	function quickRise() {
		$('.nightSky').fadeOut(250);
		$('.darknessWrap').fadeOut(500);
		$('.flameLight').fadeOut(500);
		$('.sunset').animate({
			marginTop: '-260px'
		}, 500, 'linear', function() {
			$('.sunset').fadeOut(125);
			$('.icon-moon-2').hide();
			$('.icon-sun-3').show();				
			$('.icon-sun-3').on('click', function() {
				quickSet();
			});
		});
	}
	var wait = setTimeout(function() {
		sunset();
	}, 5000);
	$('.icon-sun-3').on('click', function() {
		clearTimeout(wait);
		quickSet();
	})
});