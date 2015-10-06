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
	function waitToGo(timeout) {
		var wait4 = setTimeout(function() {
			changeGo = true;
		}, timeout)
	}

	function changeButton(changeToDaytime) {
		console.log('hello it worked');
		if(changeToDaytime) {
			$('.changeTime').css('background-color', '#6dd6f6');
			$('.iconWrap').css('background-color', '#6dd6f6');
			$('.icon-moon-2').hide();
			$('.icon-sun-3').show();
		}
		else {
			$('.changeTime').css('background-color', '#5b3462');
			$('.iconWrap').css('background-color', '#5b3462');
			$('.icon-sun-3').hide();
			$('.icon-moon-2').show();
		}
	}

	var changeGo = true;

	function sunset() {
		if(changeGo) {
			changeGo = false;
			$('.sunset').fadeIn(1000);
			$('.darknessWrap').fadeIn(4000);
			$('.flameLight').fadeIn(4000);
			$('.stars').fadeIn(4000);
			$('.sunset').animate({
				marginTop: '0'				
			}, 2000, 'linear', function() {
				$('.nightSky').fadeIn(1000);
				waitToGo(1000);
				changeButton();
				var wait2 = setTimeout(function() {
					sunrise();
				}, 10000);	
				// If you click the button to semi-permanently change the time, it will stop the timer
				$('.icon-moon-2').on('click', function() {
					clearTimeout(wait2);
					quickRise();
				});
			});			
		}
	}
	function quickSet() {
		if(changeGo) {
			changeGo = false;
			$('.sunset').fadeIn(125);
			$('.darknessWrap').fadeIn(500);
			$('.flameLight').fadeIn(500);
			$('.stars').fadeIn(500);
			$('.sunset').animate({
				marginTop: '0'				
			}, 500, 'linear', function() {
				$('.nightSky').fadeIn(125);
				waitToGo(125);
				changeButton();
				// If you click the button to semi-permanently change the time, it will stop the timer
				$('.icon-moon-2').on('click', function() {
					quickRise();
				});
			});			
		}
	}
	function sunrise() {
		if(changeGo) {
			changeGo = false;
			$('.nightSky').fadeOut(1000);
			$('.darknessWrap').fadeOut(4000);
			$('.flameLight').fadeOut(4000);
			$('.stars').fadeOut(4000);
			$('.sunset').animate({
				marginTop: '-260px'
			}, 2000, 'linear', function() {
				$('.sunset').fadeOut(1000);
				waitToGo(1000);
				changeButton(true);
				// If you click the button to semi-permanently change the time, it will stop the timer
				var wait3 = setTimeout(function() {
					sunset();
				}, 10000);				
				$('.icon-sun-3').on('click', function() {
					clearTimeout(wait3);
					quickSet();
				});
			});			
		}
	}
	function quickRise() {
		if(changeGo) {
			changeGo = false;
			$('.nightSky').fadeOut(250);
			$('.darknessWrap').fadeOut(500);
			$('.flameLight').fadeOut(500);
			$('.stars').fadeOut(500);
			$('.sunset').animate({
				marginTop: '-260px'
			}, 500, 'linear', function() {
				$('.sunset').fadeOut(125);
				waitToGo(125);
				changeButton(true);
				// If you click the button to semi-permanently change the time, it will stop the timer
				$('.icon-sun-3').on('click', function() {
					quickSet();
				});
			});			
		}
	}
	var wait = setTimeout(function() {
		sunset();
	}, 5000);
	$('.icon-sun-3').on('click', function() {
		clearTimeout(wait);
		quickSet();
	})
});