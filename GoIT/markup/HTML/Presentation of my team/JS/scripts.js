var fUA = 0.0;
var iterrator = 0;
var interval;
var intervalArrow;
var speed = 1;
var speedInterval = 0.01;
var point = true;

var text = "asd"; 
var i = 0;
var arr = "";
function start () {
	interval = setInterval(opasityFlag, speed);
}
function opasityFlag()
{
	document.getElementById('FirstBlock').style.opacity = fUA;
	fUA += speedInterval;
	 if(document.getElementById('FirstBlock').style.opacity > 1)
	{
		clearInterval(interval);
		fUA = 0.0;
	}
}
function on_click_right_button()
{
	
	if(point)
	{
		if(iterrator == 5)
			iterrator = 0;
		else
			iterrator++;
		
		fUA = 1;
		switch(iterrator)
		{
			case 5: 
				interval = setInterval(UOFBLeft, speed, 'FiveBlock', 'SixBlock', 'SixH1');
				break;
			case 4:
				interval = setInterval(UOFBLeft, speed, 'FourBlock', 'FiveBlock', 'FiveH1');
				break;
			case 3:
				interval = setInterval(UOFBLeft, speed, 'ThreeBlock', 'FourBlock', 'FourH1');
				break;
			case 2:
				interval = setInterval(UOFBLeft, speed, 'TwoBlock', 'ThreeBlock', 'FourH1');
				break;
			case 1:
				interval = setInterval(UOFBLeft, speed, 'FirstBlock', 'TwoBlock', 'TwoBH1');
				break;
			case 0:
				interval = setInterval(UOFBLeft, speed, 'SixBlock', 'FirstBlock', 'TwoBH1');
				break;
		}
	}
}
function on_click_left_button()
{
	if(point)
	{
		if(!iterrator)
			iterrator = 5;
		else
			iterrator--;

		fUA = 1;
		switch(iterrator)
		{
			case 5: 										
				interval = setInterval(UOFBLeft, speed, 'FirstBlock', 'SixBlock', 'SixH1');
				break;
			case 4:										
				interval = setInterval(UOFBLeft, speed, 'SixBlock', 'FiveBlock', 'FiveH1');
				break;
			case 3:	
				interval = setInterval(UOFBLeft, speed, 'FiveBlock', 'FourBlock', 'FourH1');	
				break;
			case 2:
				interval = setInterval(UOFBLeft, speed, 'FourBlock', 'ThreeBlock', 'FourH1');
				break;
			case 1:
				interval = setInterval(UOFBLeft, speed, 'ThreeBlock', 'TwoBlock', 'TwoBH1');
				break;
			case 0:
				interval = setInterval(UOFBLeft, speed, 'TwoBlock', 'FirstBlock', 'TwoBH1');
				break;
		}
	}
}
function UOFBLeft(from1, from2, from3)
{
	point = false;
	document.getElementById(from1).style.opacity = fUA;
	fUA -= speedInterval;

	 if(document.getElementById(from1).style.opacity < 0)
	{
		clearInterval(interval);
		document.getElementById(from3).style.opacity = 0;	
		fUA = 0.0;
		if(iterrator == 0 || iterrator == 2)
			interval = setInterval(OTB, speed, from2);
		else
			interval = setInterval(OSB, speed, from2, from3);

	}
}
function OSB(from, from2)
{
	document.getElementById(from).style.opacity = fUA;
	fUA += speedInterval;
	 if(document.getElementById(from).style.opacity > 1)
	{
		clearInterval(interval);
		fUA = 0.0;
		text = document.getElementById(from2).innerHTML;
		interval = setInterval(textgo, 10, from2);
		
	}
}
function OTB(from)
{
	document.getElementById(from).style.opacity = fUA;
	fUA += speedInterval;
	 if(document.getElementById(from).style.opacity > 1)
	{
		clearInterval(interval);
		fUA = 0.0;
		point = true;
	}
}
function textgo(from)
{
	document.getElementById(from).style.opacity = 1;
	arr += text[i];
	if(!text[i])
	{
		clearInterval(interval);
		i = 0;
		arr = "";
		point = true;
	}
	else
	{
		document.getElementById(from).innerHTML = arr;
		i++;
	}
}
/******************---------------------------********************/
function changeArrowOver(id){
	document.getElementById(id).style.border = "thin solid gold";
	document.getElementById(id).style.borderRadius = "25px";
}
function changeArrowOut(id){
	document.getElementById(id).style.border = "thin solid black";
}




