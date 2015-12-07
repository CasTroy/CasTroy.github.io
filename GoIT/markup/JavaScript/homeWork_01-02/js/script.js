/*homeWork 01*/
	function pow(num, power){
		var result = num;
		for(var i = 1; i < power; i++)
			result *= num;
		return result;
	}
	function main(){
		var number = prompt('Введите число');
		var power = prompt('Введите степень');
		alert(number+ " в степени "+power+" равно: "+ pow(number, power));
		
	}
	main();
/*homeWork 02
	function main(){
		var numberOfPeople = 5;
		var arrayHumans = [];
		var user;
		var presence = false;

		for(var i = 1; i < numberOfPeople+1; ++i)
			arrayHumans[i] = prompt('Введите имя '+i+'-го человека');
		user = prompt('Введите имя пользователя');

		for(var i = 0; i < numberOfPeople; ++i)
			if(arrayHumans[i] === user)
				presence = true;

		presence ? alert(user + ", вы успешно вошли") : alert("Такого имени нет!");
		return 0;
	}
	main();
*/



