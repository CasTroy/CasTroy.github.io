requirejs.config({
	paths: {
		'angular': 'angular.min',
		'jquery': 'jquery-1.12.2.min',
	},
	shim:{
		'angular':{
			exports: 'angular'
		},
		'jquery': {
			exports: 'jquery'
		},
	}
});
require([
	'angular',
	'jquery',
],
	function(angular, $){
		console.log();
});
