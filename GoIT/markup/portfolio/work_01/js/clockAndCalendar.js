$(function(){
	var day = 0;
	var month = 0;
	var hours = 0;
	var minutes = 0;
	var second = 0;
	var year = 0;
	var yearNum = 2016;
	//hide 31 numbers
	$('.calendar__col')[30].style.display = "none";
//clock	
	var time = document.getElementById('timeOfClock');
	var interval = setInterval(moveSecond, 1000)
//next month
	function countDay(){	
		switch(month)
			{
				case 0:
					if(day === 30)
					{
						day = 0;
						moveMonth();
						$('.month').text("Февраль - "+yearNum);
						if(!year)
						{
							$('.calendar__col')[30].style.opacity = "0";
							$('.calendar__col')[29].style.opacity = "0";
						}
						else
						{
							$('.calendar__col')[30].style.opacity = "0";
							$('.calendar__col')[29].style.opacity = "0";
							$('.calendar__col')[28].style.opacity = "0";
						}
					}
				break;
				case 1:
					if(!year)
					{
						if(day === 29)
						{
							day = 0;
							moveMonth();
							$('.month').text("Март - "+yearNum);
							$('.calendar__col')[30].style.opacity = "1";
							$('.calendar__col')[29].style.opacity = "1";
						}
						
					}
					else
						if(day === 28){
							day = 0;
							moveMonth();
							$('.month').text("Март - "+yearNum);
							$('.calendar__col')[30].style.opacity = "1";
							$('.calendar__col')[29].style.opacity = "1";
							$('.calendar__col')[28].style.opacity = "1";
						}
				break;
				case 2:
					if(day === 31){
						day = 0;
						moveMonth();
						$('.month').text("Апрель - "+yearNum);
						$('.calendar__col')[30].style.opacity = "0";
					}
				break;
				case 3:
					if(day === 30){
						day = 0;
						moveMonth();
						$('.month').text("Май - "+yearNum);
						$('.calendar__col')[30].style.opacity = "1";
					}
				break;
				case 4:
					if(day === 31){
						day = 0;
						moveMonth();
						$('.month').text("Июнь - "+yearNum);
						$('.calendar__col')[30].style.opacity = "0";
					}
				break;
				case 5:
					if(day === 30){
						day = 0;
						moveMonth();
						$('.month').text("Июль - "+yearNum);
						$('.calendar__col')[30].style.opacity = "1";
					}
				break;
				case 6:
					if(day === 31){
						day = 0;
						moveMonth();
						$('.month').text("Август - "+yearNum);
					}
				break;
				case 7:
					if(day === 31){
						day = 0;
						moveMonth();
						$('.month').text("Сентябрь - "+yearNum);
						$('.calendar__col')[30].style.opacity = "0";
					}
				break;
				case 8:
					if(day === 30){
						day = 0;
						moveMonth();
						$('.month').text("Октябрь - "+yearNum);
						$('.calendar__col')[30].style.opacity = "1";
					}
				break;
				case 9:
					if(day === 31){
						day = 0;
						moveMonth();
						$('.month').text("Ноябрь - "+yearNum);
						$('.calendar__col')[30].style.opacity = "0";
					}
				break;
				case 10:
					if(day === 30){
						day = 0;
						moveMonth();
						$('.month').text("Декабрь - "+yearNum);
						$('.calendar__col')[30].style.opacity = "1";
					}
				break;
				case 11:
					if(day === 31){
						day = 0;
						moveMonth();
						$('.month').text("Январь - "+yearNum);
						$('.calendar__col')[30].style.opacity = "0";
					}
				break;
			}
	}
	//move month
		function moveMonth(){
			if(month < 12)
			 	month++
			else{
				month = 0;
				yearNum++;
				year > 4 ? year = 0 : year++;
			}
		}
//next second
	function moveSecond(){


		second++;
		if(second > 59)
		{
			second = 0
			minutes++;
			if(minutes > 59)
			{
				minutes = 0;
				hours++;
				if(hours > 23)
				{
					hours = 0;
					$('.calendar__col')[day].style.backgroundColor = "#602a65";
					$('.calendar__col')[day].style.boxShadow = "none";
					$('.calendar__col')[day].style.color = "white";
					day++;
					if(day > 27)
						countDay();	
				} 
			}
		}

		if(hours < 10)
		{
			if(minutes < 10)
				time.innerHTML = "0"+hours + " : "+"0"+minutes;
			else
				time.innerHTML = "0"+hours + " : "+minutes;
		}
		else
		{
			if(minutes < 10)
				time.innerHTML = hours + " : "+"0"+minutes;
			else
				time.innerHTML = hours + " : "+minutes;
		}


		
		$('.calendar__col')[day].style.backgroundColor = "#008B45";
		$('.calendar__col')[day].style.color = "#ebdc3c";
		$('.calendar__col')[day].style.boxShadow = "0 0 5px white";
		
	}	
});
