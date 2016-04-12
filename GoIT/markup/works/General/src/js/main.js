requirejs.config({
	paths: {
		'angular': 'angular.min',
	},
	shim:{
		'angular':{
			exports: 'angular'
		},
	}
});
require([
	'controllers/MainCtrl',
]);
