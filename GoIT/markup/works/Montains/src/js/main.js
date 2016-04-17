requirejs.config({
	paths: {
		'angular': 'angular.min',
		'model': 'model',
		'app': 'app',
		'contoller': 'contoller',
		'jquery': 'jquery-1.12.2.min',
		'imagesloaded': 'imagesloaded-v3.min',
		'masonry': 'masonry-v3.min'
	},
	shim:{
		'angular':{
			exports: 'angular'
		},
		'jquery': {
			exports: 'jquery'
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
require([
	'angular',
	'model',
	'app',
	'contoller',
	'jquery',
	'imagesloaded',
	'masonry',
],
	function(angular, model, app, controller, $, imagesloaded, masonry){
		/*$('#gallery').imagesLoaded({background: '.grid-item'}, function (){
			var msnry = new masonry( '.grid', {
				itemSelector: '.grid-item',
		 		columnWidth: '.grid-item'
			})
		})*/

});
