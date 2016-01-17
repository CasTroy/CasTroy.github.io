(function($){
	$.fn.carousel = function(options){
	/*options*/
		var defaults = {
			speed: 500
		}
		var setings = $.extend(defaults, options);
	/*get elements of html*/	
		var leftUIElement = $('.carousel-arrow-left');
		var rightUIElement = $('.carousel-arrow-right');
		var carouselList = $('.carousel__list'); 
	/*varible*/
		var pixelsOffset = 125;
		var currentLeftValue = 0;
		var elementsCount = carouselList.find('li').length;
		var minOffset = - ((elementsCount - 5) * pixelsOffset);
		var maxOffset = 0;
	/*function for click on lefft button*/
		leftUIElement.click(function(){
			if(currentLeftValue != maxOffset)
			{
				currentLeftValue += 125;
		        carouselList.animate({
		        	left : currentLeftValue + "px",
		     	}, setings.speed);
		    }
		});
	/*function for click on right button*/	
		rightUIElement.click(function(){
			if(currentLeftValue != minOffset)
			{
				currentLeftValue -= 125;
		        carouselList.animate({
		        	left : currentLeftValue + "px"
		        }, setings.speed);
			}
		});
	/*end*/
		return this;
	}
})(jQuery);

