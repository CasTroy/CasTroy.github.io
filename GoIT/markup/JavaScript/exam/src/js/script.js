	/*document.getElementById("content").innerHTML = 'Новое содержимое';
	document.getElementById("content").style.color = "red";
	document.getElementById("content").style.opacity = "0.5";
	document.getElementById("content").style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=50)";*/

'use strict'
$(function(){
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        }
    }
	})

    $('.grid').masonry({
      // options...
      itemSelector: '.grid-item',
      columnWidth: 200
    });
    
});

