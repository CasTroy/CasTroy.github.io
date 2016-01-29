'use strict'
$(function(){
/*show infor or works*/
	var check = true;
	$('.inset__works').on('click', function(){
		if(check)
		{
		 	check = false;
		 	$(".information").animate({
		 		opacity: "0",
		 		marginLeft: "-1205px"
		 	}, 300, function(){
		 		check = true;
		 	})
		}		
	})
	$('.inset__information').on('click', function(){
	 	if(check)
	 	{
	 		check = false;
		 	$(".information").animate({
		 		opacity: "1",
		 		marginLeft: "0px"
		 	},300, function(){
		 		check = true
		 	})
	 	}
	})
/*show logos*/
	showLogo("#gitHub", "-243px");
	showLogo("#Linkedln", "-162px");
	showLogo("#ktep", "-80px");
	showLogo("#mntu", "0px");
	showLogo("#perspectiva", "-322px");
	showLogo("#goit", "-402px");
	function showLogo(name, positionImg){
		$(name).hover(
			function(){
					var element = $('<div class = "logo"></div>');
					$(name).find('span').append(element);
					$(name).find('.logo').css({
						top: "-90px",
						backgroundPosition: positionImg
					})
					$(name).find('.logo').animate({
						opacity: "1"
					}, 300)
			},
			function(){
				$(name).find('.logo').animate({
					opacity: "0"
				}, 300, function(){
					$(name).find('.logo').remove();
				})
				
				
			})
		}
/*show my photo*/
	$('.contact__photo').on('click', function(){
		var element = $('<div class = "smile"></div>');
		$('body').append(element);
		element.css({
			width: "100%",
			height: "100%",
			background: "rgba(0,0,0,0.9)",
			position: "fixed",
			top: "0px",
			opacity: "0"
		})
		element.click(removePhoto);

		var image = $('<div class = "pf"></div>');
		element.append(image);
		image.css({
			width: "500px",
			height: "700px",
			backgroundImage: "url(img/bomzh.jpg)",
			backgroundSize: "100%",
			backgroundRepeat: "no-repeat",
			margin: "5% auto 0",
			boxShadow: "2px 2px 5px black"
		})

		element.animate({
			opacity: "1"
		}, 1000)
	})
	function removePhoto(){
		this.remove();
	}

});