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



/*
$.ajax({
    url: 'https://api.pixplorer.co.uk/image?word=black bg&amount=7&size=m',
    data: 'this is data being posted to the server',
    contentType: 'text/plain',
    type: 'POST',
    dataType: 'json'
    }).done(function(data) {
       document.getElementById("lkn").setAttribute("href", "https://www.google.com.ua/?gws_rd=ssl"); 
});*/

if(window.XDomainRequest) {
    // Use Microsoft XDR
    var xdr = new XDomainRequest();
    xdr.open("get", "http://api.pixplorer.co.uk/image?word=black bg&amount=7&size=m");
    xdr.onload=xdrLoad;
} else {
    alert(1)
}


function xdrLoad()
{
   var data=xdr;
   document.getElementById("lkn").setAttribute("href", data.images[0].imageurl); 
}
  /*  //ajax images
    $.ajax({
        url: 'http://api.pixplorer.co.uk/image?word=black bg&amount=7&size=m',
        success: function(data){
            var model = new Model(data);
            var view = new View(model);
            var controller = new Controller(model, view);
        }



    })
*/
    


    //hide butoon of navigations
        $('.owl-prev').html(' ');
        $('.owl-next').html(' ');
});


//m
function Model(obj){
    var self = this;
    self.init = function(data){
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
        self.data = array;
    }
    self.init(obj);
}
//v
function View(model){
    var self = this;
    self.renderList = function () {
        var wrapper = tmpl($('#template').html(), model);
        $('.ideas').append(wrapper)
    
        
      $('#gallery').imagesLoaded(function (){
            $('.grid').masonry({
              itemSelector: '.grid--item',
              columnWidth: '.grid--item',
              gutter: 10
            });
        })
    };
    self.renderList();
}
//c
function Controller(model, view){
    var self = this;
    $('#search').on('click', function(event){
        event.preventDefault();
        var text = $('#edit').val();
        $('.grid').remove();
        $.ajax({
            url: 'http://api.pixplorer.co.uk/image?word='+text+'&amount=7&size=m',
            success: function(data){
                model.init(data);
                view.renderList();
            }
        })
    })
}