(function($){
	$.fn.carousel = function(options){

		var defaults = {
			speed: 500
		}
		var setings = $.extend(defaults, options);

		var leftUIElement = $('.carousel-arrow-left');
		var rightUIElement = $('.carousel-arrow-right');
		var carouselList = $('.carousel__list'); 

		var pixelsOffset = 125;
		var currentLeftValue = 0;
		var elementsCount = carouselList.find('li').length;
		var minOffset = - ((elementsCount - 5) * pixelsOffset);
		var maxOffset = 0;


		leftUIElement.click(function(){
			if(currentLeftValue != maxOffset)
			{
				currentLeftValue += 125;
		        carouselList.animate({
		        	left : currentLeftValue + "px",
		     	}, setings.speed);
		    }
		});
		rightUIElement.click(function(){
			if(currentLeftValue != minOffset)
			{
				currentLeftValue -= 125;
		        carouselList.animate({
		        	left : currentLeftValue + "px"
		        }, setings.speed);
			}
		});

		return this;
	}
})(jQuery);



/*
$(function(){


	/*
	

});*/
