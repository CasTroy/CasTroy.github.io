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
	    var xmlhttp = getXmlHttp()
	    if(window.XDomainRequest) 
	        xmlhttp.open('GET', 'http://api.pixplorer.co.uk/image?word=black bg&amount=7&size=m', false);
	    else
	        xmlhttp.open('GET', 'http://api.pixplorer.co.uk/image?word=black bg&amount=7&size=m', false);
	    xmlhttp.send(null);
	    var obj = eval('('+xmlhttp.responseText+')')
	    if(xmlhttp.status == 200) {
	      var model = new model(obj);
	      var view = new view(model);
	      var controller = new controller(model, view);
	    }
	    //hide butoon of navigations
        $('.owl-prev').html(' ');
        $('.owl-next').html(' ');
	}
);