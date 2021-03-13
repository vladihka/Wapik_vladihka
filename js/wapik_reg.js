$(document).ready(function() {
	$(".login_reg").click(function(event) {
		$(".login").css('display', 'none');
		$(".register").css('display','block');
	});
	$(".register_log").click(function(event) {
		$(".login").css('display', 'block');
		$(".register").css('display','none');
	});
});







































