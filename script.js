$(document).ready(function() {

	// Reset the go timer so that you can change the time again
	function waitToGo(timeout) {
		var wait4 = setTimeout(function() {
			changeGo = true;
		}, timeout)
	}

	// change the css of the button from night to day and vise versa
	function changeButton(changeToDaytime) {
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

	// the sunset functions (normal and quick)
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
	// The sunrise functions (normal and quick)
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
	// Starts the time changing functions
	var wait = setTimeout(function() {
		sunset();
	}, 3000);
	// If you click the button before the sun automatically sets, it'll stop the automation
	$('.icon-sun-3').on('click', function() {
		clearTimeout(wait);
		quickSet();
	})

	// scroll through the slideshow
	// This will keep track of what picture you're on in the slideshow
	var oshuPicture = 1,
		marvelPicture = 1;

	// click the left arrow (if it's available)
	$('.leftArrow').on('click', function() {
		if($(this).parent().attr('class') === 'projectSlideshow oshu') {
			if(oshuPicture === 2) {
				oshuPicture = 1;
				$('.oshuPreview').attr('src', 'images/oshu1.png');
				$('.leftArrow').css('border-right', '25px solid #85c0dc');
			}
			else if(oshuPicture === 3) {
				oshuPicture = 2;
				$('.oshuPreview').attr('src', 'images/oshu2.png');
				$('.rightArrow').css('border-left', '25px solid #d6eaf3');
			}

		}
		else {
			if(marvelPicture === 2) {
				marvelPicture = 1;
				$('.marvelPreview').attr('src', 'images/marvel1.png');
				$('.leftArrow').css('border-right', '25px solid #85c0dc');
			}
			else if(marvelPicture === 3) {
				marvelPicture = 2;
				$('.marvelPreview').attr('src', 'images/marvel2.png');
				$('.rightArrow').css('border-left', '25px solid #d6eaf3');
			}
		}
	})
	// click the right arrow (if it's available)
	$('.rightArrow').on('click', function() {
		if($(this).parent().attr('class') === 'projectSlideshow oshu') {
			if(oshuPicture === 1) {
				oshuPicture = 2;
				$('.oshuPreview').attr('src', 'images/oshu2.png');
				$('.leftArrow').css('border-right', '25px solid #d6eaf3');
			}
			else if(oshuPicture === 2) {
				oshuPicture = 3;
				$('.oshuPreview').attr('src', 'images/oshu3.png');
				$('.rightArrow').css('border-left', '25px solid #85c0dc');
			}

		}
		else {
			if(marvelPicture === 1) {
				marvelPicture = 2;
				$('.marvelPreview').attr('src', 'images/marvel2.png');
				$('.leftArrow').css('border-right', '25px solid #d6eaf3');
			}
			else if(marvelPicture === 2) {
				marvelPicture = 3;
				$('.marvelPreview').attr('src', 'images/marvel3.png');
				$('.rightArrow').css('border-left', '25px solid #85c0dc');
			}
		}
	})

	// This is the function where the nameplate becomes the header

	$(window).scroll(function() {
		$('.navWrap').css('top', Math.max(0, 275 - $(this).scrollTop()));
		var scroll = $(this).scrollTop(),
			myHeight = $(window).height();
		if(scroll > myHeight) {
			$('.navWrap').css('opacity', '1');
			$('h1').css('font-size', '4rem');
			$('h1').css('margin-bottom', '0');
		}
		else if(scroll < myHeight) {
			$('.navWrap').css('opacity', '0.8');
			$('h1').css('font-size', '5rem');
			$('h1').css('margin-bottom', '2rem');
		}
	});




});