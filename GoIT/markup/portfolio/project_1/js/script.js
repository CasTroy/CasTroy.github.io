'use strict'
$(function(){

	


showInformation('#educ', '.education');
showInformation('#cource', '.courses');



function showInformation(id, block){
	var check = false;
	var stopClick = true;
	$(id).hover()

	/*
	$(id).on('click', function(){
	if(stopClick)
	{
		stopClick = false;
		if(!check){
			$(block).animate({
				height: "250px"
			}, 500, function(){
				stopClick = true;
			})
		}else{
			$(block).animate({
				height: "50px"
			}, 500, function(){
				stopClick = true;
			})
		}
		check =!check;
	}	
	})*/
}
});