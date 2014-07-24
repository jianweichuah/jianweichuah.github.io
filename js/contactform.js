// Function to show popup contact form when the button is clicked.
function show_popup() {
	document.getElementById('popup_holder').style.display = "block";
}

// Function to check the popup box when a click event occured
function check(e){
	// Get the target clicked.
	var target = (e && e.target) || (event && event.srcElement); 
	 
	var popupHolder = document.getElementById('popup_holder');
	// Decide whether or not to close the popup
	checkPopupBox(target) ? popupHolder.style.display='none' : null;
} 
 
//function to check parent node and return result accordingly
function checkPopupBox(target){
	// Goes up the node to see if the target clicked is outside of 
	// the popup box or the close button
	while(target.parentNode){
		// Target within popup box
		if (target == document.getElementById('popup_contact_form')) {
			return false;
		} else if (target == document.getElementById('close')) {
			return true;
		}

		// Goes up 1 level
		target = target.parentNode;
	}
	// target is anywhere else, close it.
	return true;
}