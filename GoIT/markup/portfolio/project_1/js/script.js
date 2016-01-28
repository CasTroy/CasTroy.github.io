'use strict'
$(function(){
	var check = true;
	$('.inset__works').on('click', function(){
		if(check)
		{
		 	check = false;
		 	$(".information").animate({
		 		opacity: "0"
		 	}, 1000, function(){
		 		check = true;
		 		$(".information").css({
		 			display: "none"
		 		})
		 	})
		}		
	})
	$('.inset__information').on('click', function(){
	 	if(check)
	 	{
	 		check = false;
	 		$(".information").css({
	 			display: "block"
	 		})
		 	$(".information").animate({
		 		opacity: "1"
		 	},1000, function(){
		 		check = true
		 	})
	 	}
	})
});