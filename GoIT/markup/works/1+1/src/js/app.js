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

	var wrapper = tmpl($('#page_1').html(), {data: firsts});
	$('.item--first').append(wrapper);
	var wrap = tmpl($('#page_2').html(), {data: second});
	$('.item--second').append(wrap)


	}
);