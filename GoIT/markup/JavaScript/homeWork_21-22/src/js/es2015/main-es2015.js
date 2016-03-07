let testing;
let tmpl;
let result;
$(function(){
//main

	let tmp = app.createTemplate(app.setObject());
	localStorage.setItem('questions', JSON.stringify(tmp));
	testing = JSON.parse(localStorage.getItem('questions'));
	tmpl = _.template($('#test').html());
	result = tmpl(testing);
	$('body').append(result);


	//click button
	$('#buttonOn').on('click', function(){
		app.createModal();
		app.showResult();
	})	
});