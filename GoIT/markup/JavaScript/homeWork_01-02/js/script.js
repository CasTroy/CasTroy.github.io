/*homeWork 01*/
	function pow(num, power){
		var result = num;
		for(var i = 1; i < power; i++)
			result *= num;
		return result;
	}
	console.log('myFunction - ', pow(7,10));
	console.log('Math.pow   - ', Math.pow(7,10));
	console.log('-----------------------');
	console.log('myFunction - ', pow(3,11));
	console.log('Math.pow   - ', Math.pow(3,11));
	console.log('-----------------------');
	console.log('myFunction - ', pow(8,34));
	console.log('Math.pow   - ', Math.pow(8,34));
	console.log('-----------------------');
	console.log('myFunction - ', pow(74,3));
	console.log('Math.pow   - ', Math.pow(74,3));
/*homeWork 02*/
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
