var point = 0;

function BorderShow(id){
	document.getElementById(id).style.backgroundColor = "#60dffe";
	document.getElementById(id).style.color = "white";
}
function BorderDontShow(id){
	document.getElementById(id).style.backgroundColor = "#ffffff";
	document.getElementById(id).style.color = "#bfbfbf";
}
function YellowButton(id){
	document.getElementById(id).style.backgroundColor = "#feb548";
}

function BlueButton(id){
	document.getElementById(id).style.backgroundColor = "#60dffe";
}


function whiteArrow(id){
	document.getElementById(id).src = "img/arrow2.png";
}

function greenArrow(id){
	document.getElementById(id).src = "img/arrow.png";
}
function StrongPointLeft(){
	point == 0?point = 2:point--;

	switch(point)
	{
		case 0: 
			document.getElementById('OnePoint').style.fontWeight = "900";
			document.getElementById('TwoPoint').style.fontWeight = "200";
			break;
		case 1: 
			document.getElementById('TwoPoint').style.fontWeight = "900";
			document.getElementById('ThreePoint').style.fontWeight = "200";
			break;
		case 2: 
			document.getElementById('ThreePoint').style.fontWeight = "900";
			document.getElementById('OnePoint').style.fontWeight = "200";
			break;
	}
}
function StrongPointRight(){
	point == 2?point = 0:point++;
	switch(point)
	{
		case 0: 
			document.getElementById('OnePoint').style.fontWeight = "900";
			document.getElementById('ThreePoint').style.fontWeight = "200";
			break;
		case 1: 
			document.getElementById('TwoPoint').style.fontWeight = "900";
			document.getElementById('OnePoint').style.fontWeight = "200";
			break;
		case 2: 
			document.getElementById('ThreePoint').style.fontWeight = "900";
			document.getElementById('TwoPoint').style.fontWeight = "200";
			break; 
	}
}