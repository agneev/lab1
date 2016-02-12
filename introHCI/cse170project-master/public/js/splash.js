'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$('.enter_link').click(function() { 
	        $(this).parent().fadeOut(500);
	 });
}