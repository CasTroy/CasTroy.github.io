	/*document.getElementById("content").innerHTML = 'Новое содержимое';
	document.getElementById("content").style.color = "red";
	document.getElementById("content").style.opacity = "0.5";
	document.getElementById("content").style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=50)";*/


'use strict'
$(function(){
    //courusel
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
    //masonry
    $('.paint').masonry({
      itemSelector: '.paint__item',
      columnWidth: '.paint__item'
    });


    //picture
    $.getJSON('http://api.pixplorer.co.uk/image?word=black background&amount=7&size=m', function(data){
        var array = [];
        var obj = {
            url: 'none',
            word: 'none'
        }
        for(var index in data.images)
        {
            obj.url = data.images[index].imageurl;
            obj.word = data.images[index].word;
            array.push(data.images[index]);
        }
        var model = new Model(array);
        var view = new View(model);
    }); 
});


//m
function Model(data){
    var self = this;
    self.data = data;
}
//v
function View(model){
    var self = this;
    self.renderList = function (data) {
        var html = $('#template').html();
        var content = tmpl(html, model);
        $('.ideas').append(content)
    };
    self.renderList();
}
//c