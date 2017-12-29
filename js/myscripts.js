

// $.getJSON("http://ron-swanson-quotes.herokuapp.com/v2/quotes", function(json) {
// 	$.each(json, function() {
// 		$(".quote").html('"' + this + '"');
// 	});
// });

// $(".getQuote").click(function() {
// 	$.getJSON("http://ron-swanson-quotes.herokuapp.com/v2/quotes", function(json) {
// 		$.each(json, function() {
// 			$(".quote").html('"' + this + '"');
// 		});
// 	});
// });

// $(".twitter").click(function() {
// 	$(this).attr("href", "https://twitter.com/intent/tweet?");
// });

var quotes = [
	"\"I know what's wrong with it. It's a Ford. You know what they say Ford stands for, don't ya? It stands for 'Fix it again, Tony'.\" <br>-Dale Gribble",
	"\“Dear Lord, I don't want to go back to college. So please, help me be sexy.\" <br>- Luanne",
	"\“That boy ain't right\" <br>- Hank Hill",
	"\“Bwahhh!\" <br>- Hank Hill",
	"\“I don't have an anger problem, I have an idiot problem!\” <br>- Hank Hill",
	"\"I can show you how to make a bomb of a roll of toilet paper and a stick of dynamite.\" <br>-Dale Gribble",
	"\"That's my purse! I don't know you!\" <br>-Bobby Hill",
	"\"A youngster with a tool in both hands has no hands left to do drugs.\" <br>-Hank Hill",
	"\"Pocket sand!\" <br>-Dale Gribble",
	"\"Good God, you've got a fat neck Hank!\" <br>-Cotton Hill",
	"\"C'mon grease monkey, let's tango!\" <br>-Cotton Hill",
	"\"I killed fiddy men.\" <br>-Cotton Hill"
];

window.onload = newQuote();

function newQuote() {
	var randomNum = (Math.floor((Math.random()) * quotes.length));
	document.getElementById("quoteDisplay").innerHTML = quotes[randomNum];
	var tweetQuote = quotes[randomNum].split(' ').join('%20');
	tweetQuote = tweetQuote.split('<br>').join('');
  	tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote;
  	$('.twitter-share').attr('href', tweetQuote);

}











