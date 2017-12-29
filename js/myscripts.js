

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
	"\"I killed fiddy men.\" <br>-Cotton Hill",
	"\"The day after Thanksgiving is, in my opinion, the biggest shopping day of the year.\" <br>-Peggy Hill",
	"\"SpaPeggy and Meatballs.\" <br>-Peggy Hill",
	"\"Education is the sleeping pill that dreams are made of.\" <br>-Peggy Hill",
	"\"You cannot make authentic guacamole out of lima beans and Ritz crackers.\" <br>-Peggy Hill",
	"\"Dang ol' destiny, man. Talkin' 'bout the planets align, just like a big ol' dipper, man.\" <br>-Boomhauer",
	"\"For God's sake, Hank, act like an adult, and keep it down, guys, will you? I am trying to get through an article on vintage Camaros, and I've been on the same dang page for twenty minutes.\" <br>Boomhauer",
	"\"Yeah man talkin' bout wah-hahahaha....dang ol' boo, man.\" <br>-Boomhauer",
	"\"I sure hope they have cigarettes in hell.\" <br>Dale Gribble"
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











