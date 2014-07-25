$(document).ready(function() {
	$("#send").click(function(e){
		// Prevent it from submitting the form and refreshing the page
		e.preventDefault();
		// First clear the error
		$("#form_error").html("");

		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();

		if (name == '' || email == '' || message == '') {
			$("#form_error").html("Please fill in all fields!");
		} else {
			// Validate the email.
			var EMAIL_REGEX = new RegExp("^[\\S]+@[\\S]+\\.[\\S]+$");
			if (EMAIL_REGEX.test(email) === false) {
				$("#form_error").html("Please provide a valid email!");
			} else {
				// Append subject 
				var subject = escape("Hello from " + name);
				var body = escape(message);
				// Open up the email client to send the email
				window.location.href ="mailto:jianweichuah@gmail.com?subject=" + subject + "&body=" + body;
				// Close the popup!
				document.getElementById('popup_holder').style.display = "none";
			}
	    }
	});
});

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