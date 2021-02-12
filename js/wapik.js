$(document).ready(function() {
	$(".header_top_burger").click(function(event) {
		$(".header_top_burger, .header_top_menu").toggleClass('active');
		$("body").toggleClass('lock');
	});
});







































