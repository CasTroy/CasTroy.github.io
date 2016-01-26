'use strict'
$(function(){
//here i am setting object in localstorage
	setObjact();
//here i am getting object out localstorage
	var testing = JSON.parse(getObject());
	var tmpl = _.template($('#test').html());
	var result = tmpl(testing);
	$('body').append(result);		
/*create window*/
	function createWindow(){
	/*creat DOM*/
		/*create div*/
		var container = document.createElement('div');
		container.setAttribute("class", "container");
		$('body').append(container);
		/*create h1*/
		var resultTest = document.createElement('h1');
		resultTest.setAttribute("class", "resultTitle");
		resultTest.innerHTML= "Result of Test";
		$(container).append(resultTest);
		/*create ol*/
		var containerList =  document.createElement('div');
		containerList.setAttribute("class", "container__result");
		$(container).append(containerList);

		var containerText = document.createElement('p');
		containerText.setAttribute("class", "container__text");
		$(containerList).append(containerText);

	
	/*number of questions*/
		var countQuestions = 0;
		for(var index in testing.questions)
			countQuestions++;
	/*count of true answers*/	
			var ans = 0;
	/*colections of input (radio:checked)*/		
		var colectionRadio = $('input:radio:checked');
	
	/*if object of colections has true answer count of true answers increases*/	
		for(var i = 0; colectionRadio[i]; ++i)
		{
			if(colectionRadio.eq(i).hasClass('right'))
				ans++;
		}
	/*colections of input (checkbox:checked)*/
		var colectionCheckBox = $('input:checkbox:checked');
	/*count for two true answer */
		var countTwoAnswer = 0;

	/*if two objacts have two right answers count for two true answer increases*/
		for(var i = 0; colectionCheckBox[i]; ++i)
		{
			for(var j = 0; colectionCheckBox[j]; ++j)
			{
				if(colectionCheckBox.eq(j).hasClass('wrong'))
				{	
					if(countTwoAnswer)
						countTwoAnswer--;
				}
				else if(colectionCheckBox.eq(j).hasClass('right'+i))
					countTwoAnswer++;
			}
			if(countTwoAnswer === 2)
				ans++;
			countTwoAnswer = 0;
		}
	/*find result*/	
		var res = (ans/countQuestions)*100;
	/*show result*/
		if(res < 30)
			$('.container__text').css({
				color: "red",
				background: "#363636"
			})
		else if(res > 30 && res < 80)
			$('.container__text').css({
				color: "#FFB90F",
				background: "#1E90FF"
			})
		else if(res >= 80)
			$('.container__text').css({
				color: "#00EE76",
				background: "#8DEEEE"
			})

		containerText.innerHTML = Math.round(res) + "%";	
	}
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
				}, 1500, 'easeInOutElastic',function(){showResult = true;});
		}
	});
/*try again*/	
	$('#buttonOff').on('click', function(){
		if(showResult)
		{
		/*animate*/
			$('.container').animate({
				top: "-600px"
			}, 1500, 'easeInOutElastic', function(){
				$('.container').remove();
				showResult = false;
				location.reload();
			});
			$(this).attr("disabled", true);
			$('#buttonOn').attr("disabled", false);
		}
	})
/*get Object*/	
	function getObject(){
		return localStorage.getItem('questions');
	}	
/*set Object*/
	function setObjact(){
		var questions = {
		    '1': {
		        'title': 'What is HTML?',
		        'answers': [
		            'Hypertext Markup Language',
		            'Objective Programming Language',
		            'How To Make Landingpage'
		        ],
		        'check': 0,
		        'oneAnswer': true
		    },
		    '2': {
		        'title': 'What is CSS?',
		        'answers': [
		            'Censor Sold Solar System',
		            'Central Sugar Station',
		            'Cascading Style Sheets'
		        ],
		        'check': 2,
		        'oneAnswer': true
		    },
		    '3': {
		        'title': 'What is JavaScript?',
		        'answers': [
		            'Analog of Java with more functions',
		            'High-level interpreted programming language',
		            'Language of Javas in Star Wars'
		        ],
		        'check': 1,
		        'oneAnswer': true
		    },
		     '4': {
		        'title': 'Who is John Doe?',
		        'answers': [
		            "Man",
		            "John Doe",
		            "Dog",
		        ],
		        'check': 0,
		        'check_two': 1,
		        'oneAnswer': false
		    },
		     '5': {
		        'title': 'What is XML?',
		        'answers': [
		            "Is a software and hardware independent tool",
		            "Xerxes My Language",
		            "Is very nise thing",
		        ],
		        'check': 0,
		        'oneAnswer': true
		    },
		    '6': {
		        'title': 'Who is Don Joe?',
		        'answers': [
		            "Don Joe",
		            "Dog",
		            "Woman",
		        ],
		        'check': 0,
		        'check_two': 2,
		        'oneAnswer': false
		    },
		}

		var tmp = {
			textTitle: 'Testing',
			questions,
			nameForRadBox: 0,
			nameForChBox: 0,
			buttonOn: "check result",
			buttonOff: "try again",
		}
		localStorage.setItem('questions', JSON.stringify(tmp))
	}
});

