'use strict'
$(function(){
//slider	
	$(window).load(function() {
		$('.blueberry').blueberry();
	});
//panel	news
	$(".nPanel").on('click', function(){
		var height = parseInt($(this).parent().css('height'));
		var parent = $(this).parent();
		var obj = $(this);
		if(height < 100)
		{
			$('.nPanel').find('.nPlus').html('-');
			$('.nrItem').css({
				height: "34px"
			})
			obj.find('.nPlus').html('+');
			parent.animate({
				height: "175px" 
			}, 500)
		}
		else{
			$(this).find('.nPlus').html('-');
			$(this).parent().animate({
			height: "34px" 
			}, 500)
		}
	})

//json
//skills
	var skills = _.map(objects, 'skills');
		skills = _.uniqWith(skills, _.isEqual);
	var sortSkills = [];	
	$.each(skills, function(){
		sortSkills.push(_.sortBy(this));
	})
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