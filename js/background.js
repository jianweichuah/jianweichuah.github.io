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
			{ src: 'images/8.jpg', fade: 2000}
		],
		preload: true
	});
	$.vegas('overlay', {
		src:'js/vegas/overlays/01.png'
	});
});
$(window).load(function() {
	$("body").fadeIn(2000);
});