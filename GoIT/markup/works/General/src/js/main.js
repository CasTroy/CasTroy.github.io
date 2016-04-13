requirejs.config({
	paths: {
		'angular': 'angular.min',
		'app': 'app',
		'contoller': 'contoller',
		'jquery': 'jquery-1.12.2.min',
		'masonry': 'masonry-v3.min'
	},
	shim:{
		'angular':{
			exports: 'angular'
		},
		'jquery': {
			exports: 'jquery'
		},
		'masonry': {
			exports: 'masonry'
		}
	}
});
require([
	'angular',
	'app',
	'contoller',
	'jquery',
	'masonry'

],
	function(angular, app, controller, $, masonry){
		console.log($('.grid'));

		var msnry = new masonry( '.grid', {
			itemSelector: '.grid-item',
	 		columnWidth: '.grid-item'
		});
});
