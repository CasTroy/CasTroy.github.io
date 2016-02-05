'use strict'
$(function(){
/*HOME WORK 15*/	
	$('html').keydown(function(e){
		if(event.keyCode == 13)
		{
			e.preventDefault();
			getObject(0);
		}
	});
	$('.button').on('click', function(){
		getObject(0);
	})
	
	
/*HOME WORK 16*/
	/*create classes*/
		function human(){
			this.name   = 'name';
			this.age    = 0;
			this.sex    = 'sex';
			this.height = 0;
			this.weight = 0;
		}
		function worker(){
			this.company    = 'google';
			this.salary     = 10000;
			this.goToWork = function(){
				return 'went to work';
			};
		}
		function student(){
			this.univercity     = 'Kyiv College';
			this.scholarship    = 100;
			this.gotToWatchTV = function(){
				return 'went to watch tv';
			};
		}
	/*init*/	
		var newHuman = new human();
		worker.prototype = newHuman;
		student.prototype = newHuman;
	/*create objects*/
		var newStudent = new student();
		var newWorker = new worker();
	/*set parameters to objects*/
		/*set worker*/
			newWorker.name 		= 'Jack';
			newWorker.age 		= 26;
			newWorker.sex 		= "man";
			newWorker.height 	= 180;
			newWorker.weight	= 80;
		/*set student*/
			newStudent.name = "Natali";
			newStudent.age 	= 18;
			newStudent.sex 	= "woman";
			newStudent.height = 160;
			newStudent.weight = 45;
	/*show result*/
		/*worker*/
			console.log('Worker:\t\t',newWorker.name,
						 "\n  age:\t\t", newWorker.age,
						 "\n  sex:\t\t", newWorker.sex,
						 "\n  height:\t", newWorker.height,
						 "\n  weight:\t", newWorker.weight		 
			);
			console.log(newWorker.name,newWorker.goToWork()); 
			
			
		/*student*/
			console.log('\nStudent:\t',newStudent.name,
						 "\n  age:\t\t", newStudent.age,
						 "\n  sex:\t\t", newStudent.sex,
						 "\n  height:\t", newStudent.height,
						 "\n  weight:\t", newStudent.weight);
			console.log(newStudent.name,newStudent.gotToWatchTV()); 
});
/*FOR H.M. 15*/
	var element;
	var count = 0;

	function getObject(step){
		var text = $('#text').val();
		$.getJSON("http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=8&start=" + step + "&q='"+text+"'&callback=GoogleCallback&context=?");		
	}
	function GoogleCallback (func, data) {
		$('.list').remove();
		element = data;
		var tmpl = _.template($('#test').html());
		var result = tmpl(element);
		$('body').append(result);

		$('.navigation__item').css("color", "#4285f4");
		$('.navigation__item')[count].style.color = "black";
	}
	function showList(index){
		count = index;
		$('.navigation').remove();
		$('.list').remove();
		getObject(index*8);
	}
 
