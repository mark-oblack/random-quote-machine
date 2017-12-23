

$.getJSON("http://ron-swanson-quotes.herokuapp.com/v2/quotes", function(json) {
	$.each(json, function() {
		$(".quote").html('"' + this + '"');
	});
});

$(".getQuote").click(function() {
	$.getJSON("http://ron-swanson-quotes.herokuapp.com/v2/quotes", function(json) {
		$.each(json, function() {
			$(".quote").html('"' + this + '"');
		});
	});
});

$(".fa-twitter").click(function() {
	$(this).attr("href", "https://twitter.com/intent/tweet?" + this);
});