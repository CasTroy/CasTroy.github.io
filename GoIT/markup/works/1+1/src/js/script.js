'use strict'


var objects =[{
		imageurl	: 'img/movies/vs.jpg',
		index		: 'нові серії',
		title		: 'величне століття',
		subtitle	: 'Сезон 7, серия 423'
	},
	{
		imageurl	: 'img/movies/vs.jpg',
		index		: 'нові жопы',
		title		: 'величне століття',
		subtitle	: 'Сезон 7, серия 423'
	}]


var object = {
	imageurl	: 'img/movies/vs.jpg',
	index		: 'нові серії',
	title		: 'величне століття',
	subtitle	: 'Сезон 7, серия 423'
}


$(function(){
	$('.owl-carousel').owlCarousel({
	    margin:10,
	    loop:true,
	    autoWidth:true,
	    items:1
	})



	
    //$('.wrapper').append(wrapper)
    $('.wrapper').each(function (i) {
    	/*var str = '#template'+i
    	var wrapper = tmpl($(str).html(), {data: objects});
    	//this.append(wrapper)
    	this.appendChild(wrapper);*/
    	console.log(this)
    })

   /* $(document.body).click(function () {
      $("div").each(function (i) {
        if (this.style.color != "blue") {
          this.style.color = "blue";
        } else {
          this.style.color = "";
        }
      });
    });*/
});


