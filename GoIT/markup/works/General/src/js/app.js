requirejs.config({
	paths: {
		'jquery': 'jquery-1.12.2.min',
		'imagesloaded' : 'imagesloaded-v3.min',
		'masonry': 'masonry-v3.min'
	},
	shim:{
		'jquery': {
			exports: 'jQuery'
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
		'imagesloaded',
		'masonry',
	],
function ($, imagesloaded, masonry){
	
});