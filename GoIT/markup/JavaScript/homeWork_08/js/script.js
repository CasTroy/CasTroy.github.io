$(function(){
//find body tag and create container
	var $body = $('body');
	$body.append('<form action = "#" class = "forma"></form>');
//find form and create intuts
	var $forma = $('.forma');
	//box for all
		$forma.append("<div class = 'forAll'></div>")
	//first name
		$('.forAll').append("<div class = 'boxForFirstName box'></div>")
		var $boxForFirstName = $('.boxForFirstName');
		$boxForFirstName.append('<label class = "lb" for = "firstName">First name</label>');
		$boxForFirstName.append('<input type = "text" id = "firstName" class = "inpt">');
		$boxForFirstName.append('<span class = "hint fName">Please provide your first name</span>');
	//last name
		$('.forAll').append("<div class = 'boxForLastName box'></div>")
		var $boxForLastName = $('.boxForLastName');
		$boxForLastName.append('<label class = "lb" for = "lastName">Last name</label>');
		$boxForLastName.append('<input type = "text" id = "lastName" class = "inpt">');
		$boxForLastName.append('<span class = "hint lName">Please provide your last name</span>');
	//addres
		$('.forAll').append("<div class = 'boxForAdrees box'></div>")
		var $boxForAdrees = $('.boxForAdrees');
		$boxForAdrees.append('<label class = "lb" for = "address">Address</label>');
		$boxForAdrees.append('<input type = "text" id = "address" class = "inpt">');
		$boxForAdrees.append('<span class = "hint addr">Your home or work address</span>');
	//button
		$forma.append("<button class = 'showH'>Show help</button>");
	//events
		//hint fist name
			$('#firstName').on('mouseover', function(){
				$('.fName').animate({
					opacity: 1
				}, 500)
			})
			$('#firstName').on('mouseout', function(){
				$('.fName').animate({
					opacity: 0
				}, 500)
			})
		//hint last name
			$('#lastName').on('mouseover', function(){
				$('.lName').animate({
					opacity: 1
				}, 500)
			})
			$('#lastName').on('mouseout', function(){
				$('.lName').animate({
					opacity: 0
				}, 500)
			})
		//hint address
			$('#address').on('mouseover', function(){
				$('.addr').animate({
					opacity: 1
				}, 500)
			})
			$('#address').on('mouseout', function(){
				$('.addr').animate({
					opacity: 0
				}, 500)
			})
		//opacity button show help
			$('.showH').on('mouseover', function(){
				$('.showH').css("opacity", "1");
			})
			$('.showH').on('mouseout', function(){
				$('.showH').css("opacity", "0.5");
			})

		//hint all
			$('.showH').on('click', function(){
					$('.fName').animate({
						opacity: 1
					}, 500)
					$('.lName').animate({
						opacity: 1
					}, 500)
					$('.addr').animate({
						opacity: 1
					}, 500)
				})
});

 /*http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js*/