$(function() {
	  // Инициализация слайдера
	  $('.jcarousel').jcarousel({
	    // Базовые настройки скрипта пишутся здесь
	  });
	   // Инициализация прокрутки слайдера
	  $('.jcarousel-prev').jcarouselControl({
	      target: '-=1'
	  });

	  $('.jcarousel-next').jcarouselControl({
	      target: '+=1'
	  });



	 // $("select").selectbox();
        $('select').selectric();

    /* $('.first__item').on('click', function(){
   		$('.first__item').animate({ //анимация стиля заданного обьекта с классом colorMe
			 backgroundColor: '#75cff0' 
			 });
     })*/

    /* jQuery(".first__item").mouseover(function() {
		   $(this).animate({ backgroundColor: "olive" }, 2000);
		});
		jQuery(".first__item").mouseleave(function() {
		   $(this).animate({ backgroundColor: "aqua" }, 2000);
		});*/


	 $('.first__active').hover(
	  	function() {
		  	$('.secondList').animate({height: "400px"}, 300)
		  	$('.second__item').animate({backgroundColor: "#4F4F4F"}, 1000);
		  	$('.second__text').animate({color: "#CFCFCF"}, 1000);

	  	},

		 function(){
	  		$('.secondList').animate({height: "0px"}, 300)
	  		$('.second__item').animate({ backgroundColor: "#363636" }, 1000);
	  		$('.second__text').animate({color: "white"}, 1000);
	  	}
	)

	 $('.second__active').hover(
	  	function() {
		  	$('.thirdList').animate({height: "300px"}, 300)
		  	$('.third__item').animate({ backgroundColor: "#696969" }, 1000);
		  	$('.third__text').animate({color: "#1C1C1C"}, 1000);
		},
		 function(){
	  		$('.thirdList').animate({height: "0px"}, 300)
	  		$('.third__item').animate({ backgroundColor: "#363636" }, 1000);
	  		$('.third__text').animate({color: "#white"}, 1000);
	  	}
	  )

	  $('.third__active').hover(
	  	function() {
	  		$('.fourthList').animate({height: "180px"}, 300)
	  		$('.fourth__item').animate({ backgroundColor: "#828282" }, 1000);
	  		$('.fourth__text').animate({color: "black"}, 1000);
		},
		 function(){
	  		$('.fourthList').animate({height: "0px"}, 300)
	  		$('.fourth__item').animate({ backgroundColor: "#363636" }, 1000);
	  		$('.fourth__text').animate({color: "white"}, 1000);
	  	}
	  )

	
	 /* $('.first__item').on('mouseout', function(){
	  	$('.secondList').animate(
	  		{height: "0px"}, 500)
	  })*/

});



