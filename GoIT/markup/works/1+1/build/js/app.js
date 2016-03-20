requirejs.config({
	paths: {
		'jquery': 'jquery-1.12.2.min',
		'tmpl': 'tmpl',
		'carousel' : 'owl.carousel.min',
		'objects' : 'objects',
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
		'objects': {
			exports: 'objects'
		},
	}
});
require(
	[
		'jquery',
		'tmpl',
		'carousel',
		'objects'
	],
	function ($, tmpl, carousel, objects){
		$('.owl-carousel').owlCarousel({
		    margin:10,
		    loop:true,
		    autoWidth:true,
		    items:1
		})
		var wrapper = tmpl($('#template').html(), {data: firsts});
		$('.first').append(wrapper)
	}
);