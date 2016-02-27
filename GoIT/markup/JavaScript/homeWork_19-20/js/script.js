'use strict'
$(function(){
//slider	
	$(window).load(function() {
		$('.blueberry').blueberry();
	});
//plus
	$('.link').hover(function(){
		$(this).find('.link__bg').css({
			display: "inline"
		})
	},
	function(){
		$(this).find('.link__bg').css({
			display: "none"
		})
	});	
	

//panel	news
	$(".panel").on('click', function(){
		var height = parseInt($(this).parent().css('height'));
		var parent = $(this).parent();
		var obj = $(this);
		if(height < 100)
		{
			
			$('.panel').css({
				color: "#434343",
				background: "white"
			})
			$(this).css({
				color: "white",
				background: "#f4b60d"
			})
			$('.panel').find('.plus').html('-');
			$('.item').css({
				height: "34px"
			})
			obj.find('.plus').html('+');
			parent.animate({
				height: "175px" 
			}, 500)
		}
		else{
			$('.panel').css({
				color: "#434343",
				background: "white"
			})
			$(this).find('.plus').html('-');
			$(this).parent().animate({
			height: "34px" 
			}, 500)
		}
	})

//json
//skills
	var sortSkills = [];
	var skills = _.map(objects, 'skills');
		skills = _.uniqWith(skills, _.isEqual);
	$.each(skills, function(){
		$.each(this, function(){
			sortSkills.push(this);
		})
	})
	sortSkills	= _.uniqWith(sortSkills, _.isEqual);
	sortSkills = _.sortBy(sortSkills);
	console.log('sorted array of skills: ', sortSkills);
//names
	objects = _.uniqWith(objects, _.isEqual)
	objects = _.sortBy(objects, ['friends'])
	var names = _.map(objects, 'name');
	console.log('\n array of name sorted of friends: ', names);
//friends
	var friends = _.map(objects, 'friends');
	var newFriends = [];
	$.each(friends, function(){
		$.each(this, function(){
			newFriends.push(this.name);
		})
	})
	newFriends = _.uniqWith(newFriends, _.isEqual)
	console.log('\n array of friends: ', newFriends);

});