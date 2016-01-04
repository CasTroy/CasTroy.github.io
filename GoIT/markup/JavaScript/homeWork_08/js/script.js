$(function(){
var title;
var showOn = false;
/*functions-----------------*/
//fonction add himt
	function addHint(id, name, child){
		title = $(id).attr('title');
		$(name).append('<span class = "hint"></span>');
		var ch = $('.hint').addClass(child);
		$(ch).text(title);
		$(ch).animate({
			opacity: 1
		}, 500)
	}
//fonction add all hint
	function addAllHint(){
		showOn = true;
		addHint('#firstName', '.boxForFirstName', 'fName');
		addHint('#lastName', '.boxForLastName', 'lName');
		addHint('#address', '.boxForAdrees', 'addr');
	}
//fonction delete hint	
	function deleteHint(name){
		$('.'+name).remove();
	}
//fonction delete all hint
	function deleteAllHint(){
		showOn = false;
		$('.fName').remove();
		$('.lName').remove();
		$('.addr').remove();
	}
/*events--------------------*/
//event add help first name
	$('#firstName').on('mouseover', function(){
		if(showOn)
			deleteAllHint();
		addHint('#firstName', '.boxForFirstName', 'fName')
	})
	//event delete help
		$('#firstName').on('mouseout', function(){
			deleteHint('fName');
		})
//event add help last name
	$('#lastName').on('mouseover', function(){
		if(showOn)
			deleteAllHint();
		addHint('#lastName', '.boxForLastName', 'lName')
	})
	//event delete help
		$('#lastName').on('mouseout', function(){
			deleteHint('lName');
		})
//event add help address
	$('#address').on('mouseover', function(){
		if(showOn)
			deleteAllHint();
		addHint('#address', '.boxForAdrees', 'addr')
	})
	//event delete help
		$('#address').on('mouseout', function(){
			deleteHint('addr');
		})
//opacity button show help
	$('.showH').on('mouseover', function(){
		$('.showH').css("opacity", "1");
	})
	$('.showH').on('mouseout', function(){
		$('.showH').css("opacity", "0.5");
	})
//event hint all
	$('.showH').on('click', function(){
		if(!showOn)
			addAllHint();
		})
});
