'use strict'


var firsts =[{
		imageurl	: 'img/movies/vs.jpg',
		index		: 'нові серії',
		title		: 'величне століття',
		subtitle	: 'Сезон 7, серия 423'
	},
	{
		imageurl	: 'img/movies/field.jpg',
		index		: '',
		title		: 'ceвiлiя / днiпро',
		subtitle	: 'Єврокубок'
	},
	{
		imageurl	: 'img/movies/bvb.jpg',
		index		: '',
		title		: 'байер / іскра',
		subtitle	: 'Єврокубок'
	},
	{
		imageurl	: 'img/movies/bvb.jpg',
		index		: '',
		title		: 'байер / іскра',
		subtitle	: 'Єврокубок'
	},
	{
		imageurl	: 'img/movies/bvb.jpg',
		index		: '',
		title		: 'байер / іскра',
		subtitle	: 'Єврокубок'
	},
	{
		imageurl	: 'img/movies/bvb.jpg',
		index		: '',
		title		: 'байер / іскра',
		subtitle	: 'Єврокубок'
	},
	{
		imageurl	: 'img/movies/paris.jpg',
		index		: '',
		title		: 'байер / іскра',
		subtitle	: 'Єврокубок'
	},
	{
		imageurl	: 'img/movies/bvb.jpg',
		index		: '',
		title		: 'байер / іскра',
		subtitle	: 'Єврокубок'
	},
	{
		imageurl	: 'img/movies/bvb.jpg',
		index		: '',
		title		: 'байер / іскра',
		subtitle	: 'Єврокубок'
	},
	{
		imageurl	: 'img/movies/euro.jpg',
		index		: '',
		title		: 'на зустріч торнадо',
		subtitle	: 'Документальне кіно'
	},
	{
		imageurl	: 'img/movies/paris.jpg',
		index		: '',
		title		: 'байер / іскра',
		subtitle	: 'Єврокубок'
	},
	]



$(function(){
	$('.owl-carousel').owlCarousel({
	    margin:10,
	    loop:true,
	    autoWidth:true,
	    items:1
	})


	var wrapper = tmpl($('#template').html(), {data: firsts});
	$('.first').append(wrapper)
    



});


