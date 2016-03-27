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
    //hide butoon of navigations
        $('.owl-prev').html(' ');
        $('.owl-next').html(' ');
    
    //ajax
    var xmlhttp = getXmlHttp()
    xmlhttp.open('GET', 'http://api.pixplorer.co.uk/image?word=&amount=7&size=m', true);
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {
         if(xmlhttp.status == 200) {
          var data = eval('('+xmlhttp.responseText+')')
          var model = new Model(data);
          var view = new View(model);
          var controller = new Controller(model, view);
        }
      }
    };
    xmlhttp.send(null);

    $('body').on('click', '.item--picture', show);
    $('body').on('click', '.center', remove);
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
        xmlhttp.open('GET', 'http://api.pixplorer.co.uk/image?word='+text+'&amount=7&size=m', true);
        xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == 4) {
             if(xmlhttp.status == 200) {
              var obj = eval('('+xmlhttp.responseText+')')
              var model = new Model(obj);
              var view = new View(model);
            }
          }
        };
        xmlhttp.send(null);
    })
}
//
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

function show(){

  $('body').append('<div class = "center"><img src = "#" class = "center__img"></div>')

  $('html body').css('min-height', '100%')

  $('.center').css({
    'min-width': '100%',
    'min-height': '100%',
    background: 'rgba(0,0,0,0.8)',
    'top': '0px',
    'width': '100%', 
    'position': 'fixed',
    'z-index': '3'
  })
  $('.center__img').attr('src', $(this).attr('src'))

  $('.center__img').css({
    top: '25%', 
    left: '25%',
    width: '50%',
    height: '50%',
    'position': 'absolute',
  })

}

function remove(){
  $('.center').remove();
}


