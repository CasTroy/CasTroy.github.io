'use strict'
$(function(){
	
	$('.owl-carousel').owlCarousel();
	



	$('.button').on('click', function () {
		var str = $("form").serialize();
	 	alert( str );
	})
	
});