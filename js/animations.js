 $(document).ready(function() {

 	//increase tweet field height
	$('.tweet-compose').on('focus', function(){
		$(this).css('height', '66px');
		$('#tweet-controls').css('display', 'block');
	});

	//decrease tweet field height
	$('.tweet-compose').on('blur', function(){
		$('.tweet-compose').css('height', '33px');
	});

	//Character counter
	$('.tweet-compose').on('keydown, keypress, keyup', function() { 
    var tweetLength = $('.tweet-compose').val().length; 
	var tweetCount = 140 - tweetLength;
	$('#char-count').html(tweetCount);
    if(tweetCount <= 10) {
        $('#char-count').css({'color' : 'red'})
    }
    else {
        $('#char-count').css({'color' : '#999'})
    }
    if(tweetCount < 0) {
        $('.button').prop('disabled', true); 
    } else {
        $('.button').prop('disabled', false);
    }
 	});

	//Prepend new Tweet
	$('#tweet-submit').on('click', function(){
	if($('.tweet-compose').val().length !== 0) {
		var tweetMessage = $('.tweet-compose').val();
		//html stuff to inject:
		var htmlInject = "<div class=\"tweet\"><div class=\"content\"><img class=\"avatar\" src=\"img/alagoon.jpg\"/><strong class=\"fullname\">Logan Robins </strong><span class=\"username\">@LxRx</span><p class=\"tweet-text\">" + tweetMessage + "</p><div class=\"tweet-actions\"><ul><li><span class=\"icon action-reply\"></span> Reply</li><li><span class=\"icon action-retweet\"></span> Retweet</li><li><span class=\"icon action-favorite\"></span> Favorite</li><li><span class=\"icon action-more\"></span> More</li></ul></div><div class=\"stats\"><div class=\"retweets\"><p class=\"num-retweets\">12</p><p>RETWEETS</p></div><div class=\"favorites\"><p class=\"num-favorites\">1</p><p>FAVORITES</p></div><div class=\"users-interact\"></div><div class=\"time\">1:04 PM - 19 Sep 13</div></div><div class=\"reply\"><img class=\"avatar\" src=\"img/alagoon.jpg\"/></div></div></div>";
		$('#stream').prepend(htmlInject);
		$(".tweet-compose").val(""); // makes the form an empty string after the submit click
		$('#char-count').text('140'); // resets counter to 140 after submit
	} else {
	alert("Please enter some text to tweet");
}
});


/*
	//Reveal Stats on Tweet Click
	$('.tweet').on('click', '.stats', function() {  //this revealed ALL stats on click
		$('.stats').toggle();
		$('.reply').toggle();
		return false;
	});
*/


$('.stats').hide();
$('.reply').hide();
$('.tweet').click(function() { //hides tweet stats and reply when you click on another tweet
    $('.stats').hide();
    $('.reply').hide();
    $(this).find('.stats').show();
    $(this).find('.reply').show();
});

$(document).click(function(event) {  //hides tweet stats and reply when you click outside of any tweet.
    if(!$(event.target).closest('.tweet').length) { 
        $('.stats').hide();
        $('.reply').hide();
        
    }        
});







 });
