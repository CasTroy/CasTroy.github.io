requirejs.config({
	paths: {
		'jquery': 'jquery-1.12.2.min',
		'tmpl': 'tmpl',
		'carousel' : 'owl.carousel.min',
		'imagesloaded' : 'imagesloaded-v3.min',
		'masonry': 'masonry-v3.min'
	},
	shim:{
		'jquery': {
			exports: 'jQuery'
		},
		'tmpl': {
			exports: 'tmpl'
		},
		'carousel': {
			deps: ['jquery'],
			exports: 'carousel'
		},
		'imagesloaded': {
			deps: ['jquery'],
			exports: 'imagesloaded'
		},
		'masonry': {
			exports: 'masonry'
		}
	}
});
require(
	[
		'jquery',
		'tmpl',
		'carousel',
		'imagesloaded',
		'masonry',
		'model',
		'view',
		'controller'
	],
	function ($, tmpl, carousel, imagesloaded, masonry, model, view, controller){
		//couresel
		$('.owl-carousel').owlCarousel({
	        loop:true,
	        margin:10,
	        nav:true,
	        responsive:{
	            0:{
	                items:1
	            }
	        }
		})
		function getXmlHttp(){
		  var xmlhttp;
		  try {
		    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		  } catch (e) {
		    try {
		      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		    } catch (E) {
		      xmlhttp = false;
		    }
		  }
		  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		    xmlhttp = new XMLHttpRequest();
		  }
		  return xmlhttp;
		}
		//ajax
	    $.getJSON('http://api.pixplorer.co.uk/image?word=&amount=7&size=m', function(data) {
            var m = new model(data);
            var v = new view(m);
            var c = new controller(m, v);
	    })

	    
	    //hide butoon of navigations
        $('.owl-prev').html(' ');
        $('.owl-next').html(' ');
		
		$('body').on('click', '.item--picture', show);
		$('body').on('click', '.center', remove);
});


function show(){

	$('body').append('<div class = "center"><img src = "#" class = "center__img"></div>')

	$('html body').css('min-height', '100%')

	$('.center').css({
		'min-width': '100%',
		'min-height': '100%',
		background: 'rgba(0,0,0,0.8)',
		'top': '0px',
		'width': '100%', 
		'position': 'fixed',
		'z-index': '3'
	})
	$('.center__img').attr('src', $(this).attr('src'))

	$('.center__img').css({
		top: '25%', 
		left: '25%',
		width: '50%',
		height: '50%',
		'position': 'absolute',
	})

}

function remove(){
	$('.center').remove();
}
