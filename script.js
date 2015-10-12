$(document).ready(function() {
	// If you refresh, scroll back to the top
	$(this).scrollTop(0);

	// This for loop is to generate all the projects based off the array in projects.js
	for(i=0; i < projects.length; i++) {
		$('.projectsWrap').append('<div class="row projectsRow projectsContent"><div class="container"><div class="project border"><div class="noSelect ' + projects[i].class + '"><div class="leftArrow inline ' + projects[i].left + '"></div><img class="' + projects[i].picClass + ' fullPic inline" src="' + projects[i].pic1 + '"><div class="rightArrow inline ' + projects[i].right + '"></div></div><div class="padding"><h3>' + projects[i].name + '</h3><p>' + projects[i].desc + '</p><p class="projectTools">' + projects[i].tools + '</p></div></div></div></div>');
	};

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
	// If you click the button before the sun automatically sets, it'll stop the automatic animation
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
		if($(this).parent().attr('class') === 'noSelect oshu') {
			if(oshuPicture === 2) {
				oshuPicture = 1;
				$('.oshuPreview').attr('src', 'images/oshu1.png');
				$('.oshuLeft').css('border-right', '25px solid #85c0dc');
			}
			else if(oshuPicture === 3) {
				oshuPicture = 2;
				$('.oshuPreview').attr('src', 'images/oshu2.png');
				$('.oshuRight').css('border-left', '25px solid #d6eaf3');
			}

		}
		else {
			if(marvelPicture === 2) {
				marvelPicture = 1;
				$('.marvelPreview').attr('src', 'images/marvel1.png');
				$('.marvelLeft').css('border-right', '25px solid #85c0dc');
			}
			else if(marvelPicture === 3) {
				marvelPicture = 2;
				$('.marvelPreview').attr('src', 'images/marvel2.png');
				$('.marvelRight').css('border-left', '25px solid #d6eaf3');
			}
		}
	})
	// click the right arrow (if it's available)
	$('.rightArrow').on('click', function() {
		if($(this).parent().attr('class') === 'noSelect oshu') {
			if(oshuPicture === 1) {
				console.log('oh hello you');
				oshuPicture = 2;
				$('.oshuPreview').attr('src', 'images/oshu2.png');
				$('.oshuLeft').css('border-right', '25px solid #d6eaf3');
			}
			else if(oshuPicture === 2) {
				oshuPicture = 3;
				$('.oshuPreview').attr('src', 'images/oshu3.png');
				$('.oshuRight').css('border-left', '25px solid #85c0dc');
			}

		}
		else {
			if(marvelPicture === 1) {
				marvelPicture = 2;
				$('.marvelPreview').attr('src', 'images/marvel2.png');
				$('.marvelLeft').css('border-right', '25px solid #d6eaf3');
			}
			else if(marvelPicture === 2) {
				marvelPicture = 3;
				$('.marvelPreview').attr('src', 'images/marvel3.png');
				$('.marvelRight').css('border-left', '25px solid #85c0dc');
			}
		}
	})

	// This is the function where the nameplate becomes the header

	$(window).scroll(function() {
		// variables that will be used throughout this function
		var scroll = $(this).scrollTop(),
			myHeight = $(window).height(),
			minimize = myHeight - 90;
		// This beginning function acts as a media query, determining where the navbar rests at the beginning 
		navScroll(scroll, myHeight, minimize);
	});

	function navScroll(scroll, height, minimize) {
		$('header').css('top', Math.max(0, 275 - scroll));
		if(scroll > minimize) {
			$('nav').css('opacity', '1');
			$('header').css('background-color', 'gray');
			$('h1').css('font-size', '4rem');
			$('h1').css('margin-bottom', '0');
		}
		else if(scroll < minimize) {
			$('nav').css('opacity', '0.8');
			$('header').css('background-color', 'transparent');
			$('h1').css('font-size', '5rem');
			$('h1').css('margin-bottom', '2rem');
		}
	}

	// This is so that when you click on one of the in-page links, you scroll down nicely 

	$('a').on('click', function() {
		$('html, body').animate({
			scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
		}, 500);
		return false;
	});

});