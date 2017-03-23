$(function() {
	var body = $("body");
	var headerHeader = $("body").find("h1");

	function fadeIn(){
		body.hide();
		body.fadeIn(1000);
	}
	fadeIn();

	function headerFadeIn(){
		headerHeader.hide();
		headerHeader.delay(1000).fadeIn(1500);
	}
	headerFadeIn();

	function headerScroll() {
		headerHeader.click(function() {
		    $('html, body').animate({
		        scrollTop: $("#section").offset().top
		    }, 1000);
		});
	}
	headerScroll();
});
