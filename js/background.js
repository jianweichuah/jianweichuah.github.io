var tmp = ''

$(function() {
	$.vegas('slideshow', {
		backgrounds: [
			{ src: tmp + 'images/1.jpg', fade: 2000},
			{ src: tmp + 'images/2.jpg', fade: 2000},
			{ src: tmp + 'images/3.jpg', fade: 2000},
			{ src: tmp + 'images/4.jpg', fade: 2000},
			{ src: tmp + 'images/5.jpg', fade: 2000},
			{ src: tmp + 'images/6.jpg', fade: 2000},
			{ src: tmp + 'images/7.jpg', fade: 2000},
			{ src: tmp + 'images/8.jpg', fade: 2000},
			{ src: tmp + 'images/9.jpg', fade: 2000},
			{ src: tmp + 'images/10.jpg', fade: 2000},
			{ src: tmp + 'images/11.jpg', fade: 2000}
		],
		preload: true
	});
	$.vegas('overlay', {
		src:'/Users/jchuah/Github/jianweichuah.github.io/js/vegas/overlays/01.png'
	});
});
$(document).ready(function() { 
	$(".content").css("display", "none");
	$(".content").fadeIn(2000);
});