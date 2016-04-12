requirejs.config({
	paths: {
		'angular': 'angular.min'
	},
	shim:{
		'angular':{
			exports: 'angular'
		}
	}
});
require([
	'controllers/MainCtrl'
]);

/*requirejs.config({
	paths: {
		'jquery': 'jquery-1.12.2.min',
		'imagesloaded' : 'imagesloaded-v3.min',
		'masonry': 'masonry-v3.min',
		'angular': 'angular.min'
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
		},
		'angular':{
			exports: 'angular'
		}
	}
});
require(
	[
		'jquery',
		'imagesloaded',
		'masonry',
		'angular'
	],
function (jQ, imagesloaded, masonry, angular){
	
	//masonry
	var msnry = new masonry( '.grid', {
      itemSelector: '.item',
      columnWidth: '.item',
    });
	

    

	

});*/