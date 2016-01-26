'use strict'
$(function(){
/*top menu*/	
	var showMenu = false;
	$('.top__list').on('click', function(){
		if(!showMenu)
		{
			$(this).animate({
				height: "306px",
			},500)
		}
		else
		{
			unShow('.top__list');
		}
		showMenu =! showMenu;
	});
	function unShow(name){
		$(name).animate({
			height: "22px",
		},500)
	}
	$('.boost').hover(
		function(){
			if(showMenu){
				showMenu =! showMenu;
				unShow('.top__list');
			}
		}
	);

/*courusel*/
	$('.carousel').carousel({
		speed: 500 // speed of move
	});
/*hint*/


	/*name*/
		var speenShow = 1000;
		$('.boost__name').hover(
			function(){
				$('.boost__form').append('<div class = "hint name"><p>enter of full name</p></div>');
				$('.hint').animate({
					opacity: "1"
				}, speenShow)
			},
			function(){
				$('.hint').remove();
			});
		function deleteElement(name){
			
		}
	/*email*/	
		$('.boost__email').hover(
			function(){
				$('.boost__form').append('<div class = "hint email"><p>enter of Email Addres</p></div>');
				$('.hint').animate({
					opacity: "1"
				}, speenShow)
		},
			function(){
				$('.hint').remove();
		});
	/*phone*/
		$('.boost__phone').hover(
			function(){
				$('.boost__form').append('<div class = "hint phone"><p>enter of phone number</p></div>');
				$('.hint').animate({
					opacity: "1"
				}, speenShow)
		},
			function(){
				$('.hint').remove();
		});

});