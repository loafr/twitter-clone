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
	$('.tweet-compose').keypress(function() { 
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
		var tweetMessage = $('.tweet-compose').val();
		$('.tweet').prepend(tweetMessage);
	});
















 });
