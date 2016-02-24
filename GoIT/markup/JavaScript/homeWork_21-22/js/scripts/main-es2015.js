'use strict';

var testing = undefined;
var tmpl = undefined;
var result = undefined;
$(function () {
	//main

	var tmp = createTemplate(setObject());
	localStorage.setItem('questions', JSON.stringify(tmp));

	testing = JSON.parse(localStorage.getItem('questions'));
	tmpl = _.template($('#test').html());
	result = tmpl(testing);
	$('body').append(result);

	//click button
	$('#buttonOn').on('click', function () {
		createModal();
		showResult();
	});
});