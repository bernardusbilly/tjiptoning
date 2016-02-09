$(window).ready(function() {
	$('.loading').hide();
});

var timeOutToggle = function() {
	$('.about-me').toggle();
};

$(document).ready(function() {
	
	$('.parallax').parallax();
	var timeOut = 300;

	var aboutMe = false;

	$('.main-info').click(function() {
		if (aboutMe === false) {
			$('.about-me').animate({height: "500px"}, 500);
			aboutMe = true;
		} else {
			$('.about-me').animate({height: "0px"}, 500);
			aboutMe = false;
		}
	});

	var frontend = false;
	var dropFrontEnd = "400px";

	var activateFrontEnd = function() {
		frontend = true;
		$('#backend').css("margin-top", dropFrontEnd);
		$('#fullstack').css("margin-top", dropFrontEnd);
		$('#photography').css("margin-top", dropFrontEnd);
		$('body').animate({
			scrollTop: $('#frontend').offset().top
		}, "easein");
		$('#content-frontend').show();
	}

	var deactivateFrontEnd = function() {
		frontend = false;
		$('#backend').css("margin-top", "0");
		$('#fullstack').css("margin-top", "0");
		$('#photography').css("margin-top", "0");
		$('#content-frontend').hide();
	}

	$('#frontend').click(function() {
		if (frontend == false) {
			deactivateBackEnd();
			deactivateFullStack();
			deactivatePhotography();
			setTimeout(function() {
				activateFrontEnd();
			}, timeOut);
		} else {
			deactivateFrontEnd();	
		}
	});

	var backend = false;
	var shiftBackEnd = parseInt($('.block').css("width"), 10);

	// always update the block size
	$(window).resize(function() {
		shiftBackEnd = parseInt($('.block').css("width"), 10);

		// when backend is active - keep updating the shifted block
		if (backend == true) {
			$('#backend').css("left", -shiftBackEnd);
			$('#fullstack').css("left", -2*shiftBackEnd);
			$('#photography').css("left", -3*shiftBackEnd);
		}
	});

	var activateBackEnd = function() {
		backend = true;
		$('#frontend').css("position", "absolute");
		$('#frontend').css("z-index", "0");
		$('#frontend').css("left", 0);
		$('#backend').css("position", "absolute");
		$('#backend').css("z-index", "10");
		$('#backend').css("left", -shiftBackEnd);
		$('#fullstack').css("position", "absolute");
		$('#fullstack').css("z-index", "0");
		$('#fullstack').css("left", -2*shiftBackEnd);
		$('#photography').css("position", "absolute");
		$('#photography').css("z-index", "0");
		$('#photography').css("left", -3*shiftBackEnd);
	}

	var deactivateBackEnd = function() {
		backend = false;
		$('#frontend').css("position", "relative");
		$('#frontend').css("z-index", "0");
		$('#frontend').css("left", "0");
		$('#backend').css("position", "relative");
		$('#backend').css("z-index", "0");
		$('#backend').css("left", "0");
		$('#fullstack').css("position", "relative");
		$('#fullstack').css("z-index", "0");
		$('#fullstack').css("left", "0");
		$('#photography').css("position", "relative");
		$('#photography').css("z-index", "0");
		$('#photography').css("left", "0");
	}

	$('#backend').click(function() {
		if (backend == false) {
			deactivateFrontEnd();
			deactivateFullStack();
			deactivatePhotography();
			setTimeout(function() {
				activateBackEnd();	
			}, timeOut);
		} else {
			deactivateBackEnd();
		}
	});

	var activateFullstack = function() {
		fullstack = true;
		$('#fullstack').css("top", "221px");
		$('body').animate({
			scrollTop: $('#frontend').offset().top
		}, "easein");
	}

	var deactivateFullStack = function() {
		fullstack = false;
		$('#fullstack').css("top", "0");
	}

	var fullstack = false;

	$('#fullstack').click(function() {
		if (fullstack == false) {
			deactivateFrontEnd();
			deactivateBackEnd();
			deactivatePhotography();
			setTimeout(function() {
				activateFullstack();	
			}, timeOut);
		} else {
			deactivateFullStack();
		}
	});

	var activatePhotography = function() {
		photography = true;
		$('.block').css("background-color", "black");
		$('.block').css("border", "1px solid black");
		$('.block').css("color", "white");
	}

	var deactivatePhotography = function() {
		photography = false;
		$('.block').css("background-color", blockColor);
		$('.block').css("border", "1px solid" + blockBorderColor);
		$('.block').css("color", blockFontColor);
	}

	var blockColor = $('.block').css("background-color");
	var blockBorderColor = $('.block').css("border-left-color");
	var blockFontColor = $('.block').css("color");

	var photography = false;

	$('#photography').click(function() {
		if (photography == false) {
			deactivateFrontEnd();
			deactivateBackEnd();
			deactivateFullStack();
			setTimeout(function() {
				activatePhotography();	
			}, timeOut);
		} else {
			deactivatePhotography();
		}
	});

});