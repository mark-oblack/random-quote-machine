
/*$(document).ready(function() {
	$(".getQuote").click(function() {
		$(".quote").html("New Quote");
		$(".author").html("New Author");
	});
});*/

$(".getQuote").click(function() {
	$.getJSON("http://ron-swanson-quotes.herokuapp.com/v2/quotes", function(json) {
		$.each(json, function() {
			$(".quote").html('"' + this + '"');
		});
	});
});