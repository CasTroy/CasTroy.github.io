require(['imagesloaded', 'masonry'], function(imagesloaded, masonry){
	
	


	




	var grid = document.querySelector('.grid');
	var msnry = new masonry( grid, {
	  // options... 
	  itemSelector: '.item',
	  columnWidth: 200
	});
})