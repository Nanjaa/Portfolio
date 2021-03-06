$(document).ready(function() {
	// If you refresh, scroll back to the top
	// $(document, window).scrollTop(0);
	$('html, body').animate({
		scrollTop: 0
	}, 500);

	// This for loop is to generate all the projects based off the array in projects.js
	for(var i=0; i < projects.length; i++) {
		var projectText = '<div class="row projectsRow projectsContent"><div class="container"><div class="project">';

		if(projects[i].link) {
			projectText += '<a title="Visit Site" href="' + projects[i].link + '" target="_blank"><h3 class="underline">' + projects[i].name + '</h3></a>';
		}
		else {
			projectText += '<h3 class="underline">' + projects[i].name + '</h3>';
		}

		projectText += '<div class="noSelect padding ' + projects[i].class + '"><img class="previewPic inline pic1" src="' + projects[i].pic + '"></div><div><a title="Visit GitHub" href="' + projects[i].git + '" target="_blank"><i class="icon-github-squared"></i></a>';

		if (projects[i].link) {
			projectText += '<a title="Visit Site" href="' + projects[i].link + '" target="_blank"><i class="icon-picture"></i></a><a title="Visit GitHub" href="' + projects[i].git + '" target="_blank"><i class="icon-github-squared"></i></a>';
		}
		
		projectText += '<p>' + projects[i].desc + '</p><p class="projectTools">' + projects[i].tools + '</p></div></div></div></div>';

		if (projects.length > 1 && i !== projects.length - 1) {
			projectText += '<div class="padding"></div>';
		}

		$('.projectsWrap').append(projectText);
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
				// If you click the button to semi-permantly change the time, it will stop the timer
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
	}, 1500);
	// If you click the button before the sun automatically sets, it'll stop the automatic animation
	$('.icon-sun-3').on('click', function() {
		clearTimeout(wait);
		quickSet();
	})

	// scroll through the slideshow
	// This will keep track of what picture you're on in the slideshow
	var oshuPicture = 1,
		tashaPicture = 1,
		arPicture = 1;

	// These are the functions that will be used if you click left
	// oshu (left)
	function leftOshu() {
		if(oshuPicture === 2) {
			oshuPicture = 1;
			$('.oshuPreview').fadeOut(100);
			$('.oshuLeft').css('border-right', '25px solid #85c0dc');
			setTimeout(function() {
				$('.oshuPreview').attr('src', 'images/oshu1.png').fadeIn(100);
			}, 100);
		}
		else if(oshuPicture === 3) {
			oshuPicture = 2;
			$('.oshuPreview').fadeOut(100);
			$('.oshuRight').css('border-left', '25px solid #d6eaf3');
			setTimeout(function() {
				$('.oshuPreview').attr('src', 'images/oshu2.png').fadeIn(100);
			}, 100);
		}
	}
	// archaic rebirth (left)
	function leftAr() {
		if(arPicture === 2) {
			arPicture = 1;
			$('.arPreview').fadeOut(100);
			$('.arLeft').css('border-right', '25px solid #85c0dc');
			setTimeout(function() {
				$('.arPreview').attr('src', 'images/ar1.png').fadeIn(100);
			}, 100);
		}
		else if(arPicture === 3) {
			arPicture = 2;
			$('.arPreview').fadeOut(100);
			$('.arRight').css('border-left', '25px solid #d6eaf3');
			setTimeout(function() {
				$('.arPreview').attr('src', 'images/ar2.png').fadeIn(100);
			}, 100);
		}
	}
	// tasha (left)
	function leftTasha() {
		if(tashaPicture === 2) {
			tashaPicture = 1;
			$('.tashaPreview').fadeOut(100);
			$('.tashaLeft').css('border-right', '25px solid #85c0dc');
			setTimeout(function() {
				$('.tashaPreview').attr('src', 'images/tasha1.png').fadeIn(100);
			}, 100);
		}
		else if(tashaPicture === 3) {
			tashaPicture = 2;
			$('.tashaPreview').fadeOut(100);
			$('.tashaRight').css('border-left', '25px solid #d6eaf3');
			setTimeout(function() {
				$('.tashaPreview').attr('src', 'images/tasha2.png').fadeIn(100);
			}, 100);
		}
	}
	// These are the functions that will be used if you click right
	// oshu (right)
	function rightOshu() {
		if(oshuPicture === 1) {
			oshuPicture = 2;
			$('.oshuPreview').fadeOut(100);
			$('.oshuLeft').css('border-right', '25px solid #d6eaf3');
			setTimeout(function() {
				$('.oshuPreview').attr('src', 'images/oshu2.png').fadeIn(100);
			}, 100);
		}
		else if(oshuPicture === 2) {
			oshuPicture = 3;
			$('.oshuPreview').fadeOut(100);
			$('.oshuRight').css('border-left', '25px solid #85c0dc');
			setTimeout(function() {
				$('.oshuPreview').attr('src', 'images/oshu3.png').fadeIn(100);
			}, 100);
		}
	}
	// archaic rebirth (right)
	function rightAr() {
		if(arPicture === 1) {
			arPicture = 2;
			$('.arPreview').fadeOut(100);
			$('.arLeft').css('border-right', '25px solid #d6eaf3');
			setTimeout(function() {
				$('.arPreview').attr('src', 'images/ar2.png').fadeIn(100);
			}, 100);
		}
		else if(arPicture === 2) {
			arPicture = 3;
			$('.arPreview').fadeOut(100);
			$('.arRight').css('border-left', '25px solid #85c0dc');
			setTimeout(function() {
				$('.arPreview').attr('src', 'images/ar3.png').fadeIn(100);
			}, 100);
		}
	}
	// tasha (right)
	function rightTasha() {
		if(tashaPicture === 1) {
			tashaPicture = 2;
			$('.tashaPreview').fadeOut(100);
			$('.tashaLeft').css('border-right', '25px solid #d6eaf3');
			setTimeout(function() {
				$('.tashaPreview').attr('src', 'images/tasha2.png').fadeIn(100);
			}, 100);
		}
		else if(tashaPicture === 2) {
			tashaPicture = 3;
			$('.tashaPreview').fadeOut(100);
			$('.tashaRight').css('border-left', '25px solid #85c0dc');
			setTimeout(function() {
				$('.tashaPreview').attr('src', 'images/tasha3.png').fadeIn(100);
			}, 100);
		}
	}

	// click the left arrow (if it's available)
	$('.leftArrow').on('click', function() {
		if($(this).parent().attr('class') === 'noSelect oshu') {
			leftOshu();
		}
		else if($(this).parent().attr('class') === 'noSelect tasha') {
			leftTasha();
		}
		else {
			leftAr();
		}
	})
	// click the right arrow (if it's available)
	$('.rightArrow').on('click', function() {
		if($(this).parent().attr('class') === 'noSelect oshu') {
			rightOshu();
		}
		else if($(this).parent().attr('class') === 'noSelect tasha') {
			rightTasha();
		}
		else {
			rightAr();
		}
	});
	
	// This variable will be used shortly
	var exit = true;
	// Click on the preview picture to enlarge it
	$('.previewPic').on('click', function() {
		if($(document).width() > 780) {
			$('.enlargedSrc').attr('src', $(this).attr('src'));
			$('.shadowbox').fadeIn();
			// Click outside of the enlarged picture to close it
			var waitToClick = setTimeout(function() {
				exit = true;
				$(document).on('click', function(e) {
					var target = e.target;
					if($(target).is('.enlargedSrc')) {
					}
					else if(exit) {
						exit = false;
						$('.shadowbox').fadeOut();
						clearTimeout(waitToClick);
					}
				});		
			}, 100);			
		}
	});

	// This is the function where the nameplate becomes the header

	$(window).scroll(function() {
		// variables that will be used throughout this function
		var scroll = $(this).scrollTop(),
			myHeight = $(window).height(),
			size1 = '7rem',
			size2 = '5rem',
			headerLocation = '275px';
		// This beginning function acts as a media query
		// header height
		if(($(window).height() < 50)) {
			console.log('hello');
		}
		navScroll(scroll, myHeight, size1, size2);		
	});

	function navScroll(scroll, height, size1, size2) {
		// Variables that will determine the rest of the function
		// 
		$('header').css('top', Math.max(0, 275 - scroll));
		if(scroll > 275) {
			$('nav').css('opacity', '1');
			$('header').css('background-color', '#feffa4');
			$('h1').css('font-size', size2);
			$('h1').css('margin-bottom', '0');
			$('h1').css('text-shadow', 'none');
		}
		else if(scroll < 275) {
			$('nav').css('opacity', '0.8');
			$('header').css('background-color', 'transparent');
			$('h1').css('font-size', size1);
			$('h1').css('margin-bottom', '2rem');
			$('h1').css('text-shadow', '0 0 5px #7c7c7c');
		}
	}

	// This is so that when you click on one of the in-page links, you scroll down nicely 

	$('.headerLink').on('click', function() {
		$('html, body').animate({
			scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
		}, 500);
		return false;
	});

	// This is for when you click the header to return to the top of the page

	$('h1').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

});