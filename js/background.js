$(function() {
	$.vegas('slideshow', {
		backgrounds: [
			{ src: 'images/1.jpg', fade: 2000},
			{ src: 'images/2.jpg', fade: 2000},
			{ src: 'images/3.jpg', fade: 2000},
			{ src: 'images/4.jpg', fade: 2000},
			{ src: 'images/5.jpg', fade: 2000},
			{ src: 'images/6.jpg', fade: 2000},
			{ src: 'images/7.jpg', fade: 2000},
			{ src: 'images/8.jpg', fade: 2000},
			{ src: 'images/9.jpg', fade: 2000},
			{ src: 'images/10.jpg', fade: 2000},
			{ src: 'images/11.jpg', fade: 2000}
		],
		preload: true
	});
	$.vegas('overlay', {
		src:'js/vegas/overlays/01.png'
	});
});
$(document).ready(function() { 
	$(".content").css("display", "none");
	$(".content").fadeIn(2000);
});