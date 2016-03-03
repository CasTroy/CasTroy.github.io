requirejs.config({
	paths: {
		'jquery': 'http://code.jquery.com/jquery-1.11.3.min',
		'tmpl': 'tmpl'
	},
	shim:{
		'jquery': {
			exports: 'jQuery'
		},
		'tmpl': {
			exports: 'tmpl'
		}
	}
});
require(
	[
		'jquery',
		'tmpl',
		'model',
		'view',
		'controller'
	],
	function($, tmpl, model, view, controller){	
		var first = ['test 1','test 2','test 3'];
		var Model = new model(first);
		var View = new view(Model);
		var Controller = new controller(Model, View);
	}
);
