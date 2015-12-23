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
			

/*
//find container and create box
	var $container = $('section');
	$container.addClass('container');
	$container.append('<div></div>');
//find box 
	var $box = $('div');
	$box.addClass('box');
//create first block and second block	
	$box.append("<div class = 'firstBlock'></div>");
	$box.append("<div class = 'secondBlock'></div>");
	var $firstBlock = $('.firstBlock');
	var $secondBlock = $('.secondBlock');
//first block contant
	$firstBlock.append("<button class = 'insets nunc'></button>");
	$('.nunc')
		.text("Nunc tincidunt")
		.attr('tabindex', '0');

	$firstBlock.append("<button class = 'insets proin'></button>");
	$('.proin')
		.text("Proin dolor")
		.attr('tabindex', '1');

	$firstBlock.append("<button class = 'insets aenean'></button>");
	$('.aenean')
		.text("Aenean lacinia")
		.attr('tabindex', '2');
//secnd block contant
	$secondBlock.append("<div class = 'nunc_text'></div>");
	$('.nunc_text').text("Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.");
	
	$secondBlock.append("<div class = 'proin_text'></div>");
	$('.proin_text').text("Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.");

	$secondBlock.append("<div class = 'aenean_text'></div>");
	$('.aenean_text').text("Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.")
//events
	//nunc click mouse
		$('.nunc').on('click', function(){
			count = 0;
			activeNunc();
		});
	//proin click mouse
		$('.proin').on('click', function(){
			count = 1;
			activeProin();
		});
	//aenean click mouse
		$('.aenean').on('click', function(){
			count = 2;
			activeAenean();
		});


	var count = 0;
	$('body').keydown(function(e) {
    if (e.keyCode == 9) {
    	count === 2 ? count = 0 : count++;

    	switch(count){
    		case 0:
    			 activeNunc();
    		break;
    		case 1:
    			activeProin();
    		break;
    		case 2:
    			activeAenean();
    		break;
    	}
    }
});

function activeNunc(){
	//nunc inset
		$('.nunc_text').css("display", "block");
		$('.nunc').css({
			background: 'white'
		});			
	//proin inset
		$('.proin_text').css("display", "none");
		$('.proin').css({
			background: '#eeeeee'
		});
	//aenean inset
		$('.aenean_text').css("display", "none");
		$('.aenean').css({
			background: '#eeeeee'
		});
}
function activeProin(){
	//proin inset
		$('.proin_text').css("display", "block");
		$('.proin').css({
			background: 'white'
		});	
	//nunc inset
		$('.nunc_text').css("display", "none");
		$('.nunc').css({
			background: '#eeeeee'
		});	
	//aenean inset
		$('.aenean_text').css("display", "none");
		$('.aenean').css({
			background: '#eeeeee'
		});		
}

function activeAenean(){
	//aenean inset
		$('.aenean_text').css("display", "block");
		$('.aenean').css({
			background: 'white'
		});	
	//nunc inset
		$('.nunc_text').css("display", "none");
		$('.nunc').css({
			background: '#eeeeee'
		});	
	//proin inset
		$('.proin_text').css("display", "none");
		$('.proin').css({
			background: '#eeeeee'
		});
}
*/
});