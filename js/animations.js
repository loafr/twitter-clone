

 $(document).ready(function() {

	$('.tweet-compose').on('focus', function(){
		$('.tweet-compose').css('height', '66px');
		$('#tweet-controls').css('display', 'block');
		$
	});
	$('.tweet-compose').on('blur', function(){
		$('.tweet-compose').css('height', '33px');
	});

	$('.tweet-compose').on('keypress', function() {
		$('#char-count').val();
	});
 	


 });