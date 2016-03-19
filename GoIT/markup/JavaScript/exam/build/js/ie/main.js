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

    
    //ajax
    var xmlhttp = getXmlHttp()
    if(window.XDomainRequest) 
        xmlhttp.open('GET', 'http://api.pixplorer.co.uk/image?word=black bg&amount=7&size=m', false);
    else
        xmlhttp.open('GET', 'http://api.pixplorer.co.uk/image?word=black bg&amount=7&size=m', false);
    xmlhttp.send(null);
    var obj = eval('('+xmlhttp.responseText+')')
    if(xmlhttp.status == 200) {
      var model = new Model(obj);
      var view = new View(model);
      var controller = new Controller(model, view);
    }


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

        var xmlhttp = getXmlHttp()
        xmlhttp.open('GET', 'http://api.pixplorer.co.uk/image?word='+text+'&amount=7&size=m', false);
        xmlhttp.send(null);
        var obj = eval('('+xmlhttp.responseText+')')
        if(xmlhttp.status == 200) {
                var model = new Model(obj);
                var view = new View(model);
                var controller = new Controller(model, view);
            }
        })
}

function getXmlHttp(){
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}