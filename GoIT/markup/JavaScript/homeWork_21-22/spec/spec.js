//var setObject = require('../js/scripts/functions-es2015.js');
var app = require('../js/scripts/functions-es2015.js');

var questions = {
    '1': {
        'title': 'Whats is HTML?',
        'answers': [
            'Hypertext Markup Language',
            'Objective Programming Language',
            'How To Make Landingpage'
        ],
        'check': 0,
        'oneAnser': true
    },
    '2': {
        'title': 'What is CSS?',
        'answers': [
            'Censor Sold Solar System',
            'Central Sugar Station',
            'Cascading Style Sheets'
        ],
        'check': 2,
        'oneAnser': true
    },
    '3': {
        'title': 'What is JavaScript?',
        'answers': [
            'Analog of Java with more functions',
            'High-level interpreted programming language',
            'Language of Javas in Star Wars'
        ],
        'check': 1,
        'oneAnser': true
    },
    '4': {
        'title': 'Who is Jon Doe?',
        'answers': [
            'Dog',
            'Man',
            'Jon Doe'
        ],
        'check': 1,
        'check2': 2,
        'oneAnser': false
    },
    '5': {
        'title': 'What is CSS?',
        'answers': [
            'Censor Sold Solar System',
            'Central Sugar Station',
            'Cascading Style Sheets'
        ],
        'check': 2,
        'oneAnser': true
    },
    '6': {
        'title': 'Who is Jon Doe?',
        'answers': [
            'Dog',
            'Man',
            'Jon Doe'
        ],
        'check': 1,
        'check2': 2,
        'oneAnser': false
    },
}



var tmp = {
	textTitle: 'Testing',
	questions,
	nameForInput: 0,
	buttonOn: 'show result'
}


describe("app", function() {
  it("call setObject: result is not equal", function() {
  	var result;
  	result = app.setObject();
    expect(result).toEqual(questions);
  });

  it("call createTemplate: result is not equal", function() {
		var result;
		result = app.createTemplate(questions);
		expect(result).toEqual(tmp);	
	});

});
