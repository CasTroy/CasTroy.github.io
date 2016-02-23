'use strict';

/*let obj = {
	messege: function (name) {
		return 'Hello, ' + name;
	}
}

module.exports = obj;*/

$(function () {
	//set	
	var setObject = function setObject() {
		var questions = {
			'1': {
				'title': 'Whats is HTML?',
				'answers': ['Hypertext Markup Language', 'Objective Programming Language', 'How To Make Landingpage'],
				'check': 0,
				'oneAnser': true
			},
			'2': {
				'title': 'What is CSS?',
				'answers': ['Censor Sold Solar System', 'Central Sugar Station', 'Cascading Style Sheets'],
				'check': 2,
				'oneAnser': true
			},
			'3': {
				'title': 'What is JavaScript?',
				'answers': ['Analog of Java with more functions', 'High-level interpreted programming language', 'Language of Javas in Star Wars'],
				'check': 1,
				'oneAnser': true
			},
			'4': {
				'title': 'Who is Jon Doe?',
				'answers': ['Dog', 'Man', 'Jon Doe'],
				'check': 1,
				'check2': 2,
				'oneAnser': false
			},
			'5': {
				'title': 'What is CSS?',
				'answers': ['Censor Sold Solar System', 'Central Sugar Station', 'Cascading Style Sheets'],
				'check': 2,
				'oneAnser': true
			},
			'6': {
				'title': 'Who is Jon Doe?',
				'answers': ['Dog', 'Man', 'Jon Doe'],
				'check': 1,
				'check2': 2,
				'oneAnser': false
			}
		};
		var tmp = {
			textTitle: 'Testing',
			questions: questions,
			nameForInput: 0,
			buttonOn: 'show result'
		};
		localStorage.setItem('questions', JSON.stringify(tmp));
	};
	//get	
	var getObject = function getObject() {
		return localStorage.getItem('questions');
	};
	//show result	
	var showResult = function showResult() {
		var elements = $('input:radio');
		var indexElement = 0;
		var elementsCh = $('input:checkbox');
		var indexElementCh = 0;
		for (var index in testing.questions) {
			if (testing.questions[index].oneAnser) {
				testing.questions[index].answers.forEach(function (item, i) {
					if (elements[indexElement].checked) {
						$('.list__answerOne')[indexElement].style.color = "black";
						$('.list__answerOne')[indexElement].style.fontFamily = "amblebolditalic";
					}

					if (i === testing.questions[index].check) {
						if (elements[indexElement].checked) {
							$(".list__item")[index - 1].style.background = "rgba(0,255,0, 0.4)";
							$('.list__answerOne')[indexElement].style.color = "black";
						}
					}
					indexElement++;
				});
			} else {
				(function () {
					var countForAnswers = 0;
					testing.questions[index].answers.forEach(function (item, i) {
						if (elementsCh[indexElementCh].checked) {
							$('.list__answerTwo')[indexElementCh].style.color = "black";
							$('.list__answerTwo')[indexElementCh].style.fontFamily = "amblebolditalic";
						}
						if (i === testing.questions[index].check || i === testing.questions[index].check2) {
							if (elementsCh[indexElementCh].checked) {
								countForAnswers++;
								$('.list__answerTwo')[indexElementCh].style.color = "black";
							}
						}
						if (countForAnswers === 2) $(".list__item")[index - 1].style.background = "rgba(0,255,0, 0.4)";
						indexElementCh++;
					});
					countForAnswers = 0;
				})();
			}
		}
		indexElement = 0;
	};
	//create modal window
	var createModal = function createModal() {
		var baground = $('<div class = "baground"></div>');
		var container = $('<div class = "container"></div>');
		baground.append(container);
		var list = $('<ol class = "list"></ol>');
		container.append(list);

		var _loop = function _loop() {
			var itm = $('<li class = "list__item"></li>');
			list.append(itm);
			var quest = $('<h4 class = "list__quest"></h4>');
			itm.append(quest);
			quest.text(testing.questions[index].title);
			var answer = $('<ul class = "list__answer"></ul>');
			itm.append(answer);

			testing.questions[index].answers.forEach(function (item) {
				var answerItem = undefined;
				if (testing.questions[index].oneAnser) answerItem = $('<li class = "list__answerOne"></li>');else answerItem = $('<li class = "list__answerTwo"></li>');
				answer.append(answerItem);
				answerItem.text(item);
			});
		};

		for (var index in testing.questions) {
			_loop();
		}
		var button = $('<input type = "submit" value = "try again" id = "buttonOff">');
		button.click(removeModal);
		container.append(button);
		$('body').append(baground);
	};
	//delete modal window			
	var removeModal = function removeModal() {
		$("input").attr("checked", false);
		$('.baground').remove();
	};

	//main	
	setObject();
	var testing = JSON.parse(getObject());
	var tmpl = _.template($('#test').html());
	var result = tmpl(testing);
	$('body').append(result);

	//click button
	$('#buttonOn').on('click', function () {
		createModal();
		showResult();
	});
});