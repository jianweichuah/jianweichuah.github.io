// Function to scroll the page to show timeline with animation
function scrollToTimeline() {
	$(document.body).animate({
	    'scrollTop':   $('#timeline').offset().top
	}, 1000);
}