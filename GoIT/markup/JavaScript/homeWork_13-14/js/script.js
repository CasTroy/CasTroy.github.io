'use strict'
$(function(){
//here i am setting object in localstorage
	setObjact();
//here i am getting object out localstorage
	var test = JSON.parse(getObject());
	var tmpl = _.template($('#test').html());
	var result = tmpl(test);
	$('body').append(result);
/*show result*/	
	var showResult = false;
	$('#buttonOn').on('click', function(){
		if(!showResult)
		{
			createWindow();
			$(this).attr("disabled", true);
			$('#buttonOff').attr("disabled", false);
			/*animate*/
				$('.container').animate({
					top: "0px"
				}, 1500, 'easeInOutElastic');
			setTimeout(function(){
				showResult = true;
			}, 1500);
		}
		
	})
/*try again*/	
	$('#buttonOff').on('click', function(){
		if(showResult)
		{
		/*animate*/
			$('.container').animate({
				top: "-600px"
			}, 1500, 'easeInOutElastic');
			$(this).attr("disabled", true);
			$('#buttonOn').attr("disabled", false);
			setTimeout(function(){
				$('.container').remove();
				showResult = false;
				location.reload();
			}, 1500);
		}
	})
/*create window*/
	function createWindow(){
		var answers = [
			false,
			false,
			false
		]
		if($('#number0').attr("checked"))
			answers[0] = true;
		if($('#number5').attr("checked"))
			answers[1] = true;
		if($('#number7').attr("checked"))
			answers[2] = true;


		var container = document.createElement('div');
		container.setAttribute("class", "container");
		$('body').append(container);


		var resultTest = document.createElement('h1');
		resultTest.setAttribute("class", "resultTitle");
		resultTest.innerHTML= "Result of Test";
		$(container).append(resultTest);


		var containerList =  document.createElement('ol');
		containerList.setAttribute("class", "container__list");
		$(container).append(containerList);

		for(var i = 0; i < test.numberOfQuestions; ++i)
		{
			var containerItem = document.createElement('li');
			containerItem.setAttribute("class", "container__item");
			$(containerList).append(containerItem);

			var containerItemQuestion = document.createElement('h4');	
			containerItemQuestion.setAttribute("class", "container__itemQuestion");

			var containerItemText = document.createElement('p');	
			containerItemText.setAttribute("class", "container__itemText");
			switch(i){
				case 0:
					containerItemQuestion.innerHTML = "What Is Html?";
					if(answers[0])
					{
						containerItemText.style.color = "green";
						containerItemText.innerHTML = test.test[i].answer[0];
					}
					else
					{
						containerItemText.style.color = "red";
						containerItemText.innerHTML = "incorrect unswer";
					}
				break;
				case 1:
					containerItemQuestion.innerHTML = "What Is tag?";
					if(answers[1]){
						containerItemText.style.color = "green";
						containerItemText.innerHTML = test.test[i].answer[2];
					}
					else{
						containerItemText.style.color = "red";
						containerItemText.innerHTML = "incorrect unswer";
					}
				break;
				case 2:
					containerItemQuestion.innerHTML = "What Is attribute?";
					if(answers[2])
					{
						containerItemText.style.color = "green";
						containerItemText.innerHTML = test.test[i].answer[1];
					}
					else{
						containerItemText.style.color = "red";
						containerItemText.innerHTML = "incorrect unswer";
					}
				break;
				case 3:
					containerItemQuestion.innerHTML = "Who is John Doe?";
					if(man && JohnDoe)
					{
						containerItemText.style.color = "green";
						containerItemText.innerHTML = test.test[i].answer[0] + " and " +test.test[i].answer[1];
					}
					else{
						containerItemText.style.color = "red";
						containerItemText.innerHTML = "incorrect unswer";
					}
				break;

			}
			$(containerItem).append(containerItemQuestion);
			$(containerItem).append(containerItemText);

			
		}

			
	}
/*events*/
	/*question 1*/
		$('#number0').on('click', function(){
			checkFirst('#number0', '#number1', '#number2')
		})
		$('#number1').on('click', function(){
			checkSecond('#number0', '#number1', '#number2')
		})
		$('#number2').on('click', function(){
			checkThird('#number0', '#number1', '#number2');
		})
	/*question 2*/
		$('#number3').on('click', function(){
			checkFirst('#number3', '#number4', '#number5')
		})
		$('#number4').on('click', function(){
			checkSecond('#number3', '#number4', '#number5')
		})
		$('#number5').on('click', function(){
			checkThird('#number3', '#number4', '#number5');
		})
	/*question 3*/
			$('#number6').on('click', function(){
				checkFirst('#number6', '#number7', '#number8')
			})
			$('#number7').on('click', function(){
				checkSecond('#number6', '#number7', '#number8')
			})
			$('#number8').on('click', function(){
				checkThird('#number6', '#number7', '#number8');
			})
	/*question 4*/
			var man = false;
			var JohnDoe = false;		
			$('#number9').on('click', function(){
				man = !man;		
			})
			$('#number10').on('click', function(){
				JohnDoe = !JohnDoe;
			})

	/*functions of cheked the answar*/
		function checkFirst(id1, id2, id3){
			$(id1).attr("checked", "checked");
			$(id2).attr("checked", false);
			$(id3).attr("checked", false);
		}
		function checkSecond(id1, id2, id3){
			$(id1).attr("checked", false);
			$(id2).attr("checked", "checked");
			$(id3).attr("checked", false);
		}
		function checkThird(id1, id2, id3){
			$(id1).attr("checked", false);
			$(id2).attr("checked", false);
			$(id3).attr("checked", "checked");
		}
/*set Object*/
	function setObjact(){
	/*contant oftest*/
		var test = [{
			question: "What Is Html?",
			answer: [
				"HyperText Markup Language",
				"It's a very beautiful thing",
				"I don`t know",
			]
		},
		{
			question: "What Is tag?",
			answer: [
				"It`s special characters of CSS markup",
				"It`s special characters of JavaScript markup",
				"It`s special characters of HTML markup",
			]
		},
		{
			question: "What Is attribute?",
			answer: [
				"It`s name tag",
				"It`s property tag",
				"It's special method in the JQuery library",
			]
		},
		{
			question: "Who is John Doe?",
			answer: [
				"Man",
				"John Doe",
				"Dog",
			]
		}
		]
	/*characteristics of questions*/
		var questions = {
			title: "Testing",
			test,
			buttonOn: "check result",
			buttonOff: "try again",
			numberOfQuestions: 4,
			numberOfAnswers: 3,
			id: 0,
			twoAnswers: 'select two answers',
		}
	/*set to localStorage*/	
		localStorage.setItem('questions', JSON.stringify(questions))

	}
/*get Object*/	
	function getObject(){
		return localStorage.getItem('questions');
	}
});