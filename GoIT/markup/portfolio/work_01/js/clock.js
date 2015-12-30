$(function(){
	var hours = 0;
	var minutes = 0;
	var second = 0;
	var time = document.getElementById('timeOfClock');
	var interval = setInterval(moveSecond, 1)//1000
	function moveSecond(){
		second++;
		if(second > 59)
		{
			second = 0
			minutes+=10;//++
			if(minutes > 59)
			{
				minutes = 0;
				hours++;
				if(hours > 23)
				{
					hours = 0;
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
	}
});
