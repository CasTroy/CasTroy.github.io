'use strict'
$(function(){
	var windowOn = false;
	$('.form').on('click', function(event){
		event.preventDefault();
		if(!windowOn)
		{
			windowOn = true;
			var wnd = $('<div class = "modalWindow"></div>')
			$('body').append(wnd);
		//header	
			var wHeader = $('<header class = "modalWindow__header header">Выберите людей, чтобы пригласить их на "Соревнования Workout"</header>')
			wnd.append(wHeader);
		//contaner
			var wContainer = $('<section class = "modalWindow__container container"></section>');
			wnd.append(wContainer);
		//left	
			var left = $('<article class = "container__left left"></article>');
			wContainer.append(left);
			//searche
			var searche = $('<div class = "left__searche searche"></div>');
			left.append(searche);

			var formSearche = $('<form action="" class = "searche__sForm sForm"></form>');
			searche.append(formSearche);
			var textInput = $('<input type="text" class = "sForm__text text" placeholder="Поиск людей">');
			formSearche.append(textInput);
			//users
			var user = $('<div class = "left__users users"></div>');
			left.append(user);
			var list = $('<ul class = "users__list list list--friends"></ul>');
			user.append(list);
			for(var index in usersFriends)
			{
				var item = $('<li class = "list__item item item--set"></li>');
				list.append(item);
				var photo = $('<img src="'+usersFriends[index].photo+'" alt="photo" class = "item__photo photo">');
				item.append(photo);
				var name = $('<p class = "item__name name"></p>');
				item.append(name);
				name.html(usersFriends[index].name + ' '+ usersFriends[index].surname);
				var stream = $('<p class = "item__stream stream">общих потоков</p>');
				item.append(stream);
				stream.before('<span class = "item__streamNumber streamNumber">'+usersFriends[index].stream+'</span>');
			}
			var listStream = $('<ul class = "users__list list list--stream"></ul>');
			user.append(listStream);
			for(var index in usersStream)
			{
				var item = $('<li class = "list__item item item--set"></li>');
				listStream.append(item);
				var photo = $('<img src="'+usersStream[index].photo+'" alt="photo" class = "item__photo photo">');
				item.append(photo);
				var name = $('<p class = "item__name name"></p>');
				item.append(name);
				name.html(usersStream[index].name + ' '+ usersStream[index].surname);
				var stream = $('<p class = "item__stream stream">общих потоков</p>');
				item.append(stream);
				stream.before('<span class = "item__streamNumber streamNumber">'+usersStream[index].stream+'</span>');
			}

		//right
			var right = $('<article class = "container__right right"></article>');
			wContainer.append(right);
			var addFriendList = $('<ul class = "right__list list"></ul>');
			right.append(addFriendList);
			//events
			$('.stream').hover(function(){
				var help = $('<span class = "item__help help">Подсказка <img src="../result/images/kut.png" alt="" class = "help__kut kut"></span>')
				$(this).append(help);
				help.animate({
					opacity: "1"
				}, 1000);
			},
			function(){
				$(this).find('.help').remove();
			})
			$('.item--set').on('click', function(){
				
				if(!$(this).hasClass('checked'))
				{
					$(this).addClass("checked");
					$(this).css('opacity', "0.5");
					//photo
					var thisPhoto = $(this).find('.photo').attr('src');
					//name
					var thisName = $(this).find('.name').html();
					//num
					var thisNum = $(this).find('.streamNumber').html();
					var item = $('<li class = "list__item item item--delete"></li>');
					addFriendList.append(item);
					$('.item--delete').click(function(){	
						var name =  $(this).find('.name').html();
						$('.checked').each(function(i, element){
							if($(this).find('.name').html() === name)
							{
								$(this).css('opacity', "1");
								$(this).removeClass('checked');
							}
						});
						$(this).remove();
					})
					var photo = $('<img src="'+thisPhoto+'" alt="photo" class = "item__photo photo">');
					item.append(photo);
					var name = $('<p class = "item__name name"></p>');
					item.append(name);
					name.html(thisName);
					var stream = $('<p class = "item__stream stream">общих потоков</p>');
					item.append(stream);
					stream.before('<span class = "item__streamNumber streamNumber">'+thisNum+'</span>');
				}	
			})
		//buttons
			var form = $('<form action="" class = "container__mform mForm"></form>');
			wContainer.append(form);
			//friends
			var friends = $('<input type="submit" value="Друзья" class = "mForm__button button button--invisibility">');
			form.append(friends);
			friends.click(function(event){
				event.preventDefault();
				$(this).css("background","#eeeff5");
				member.css("background", "none");
				$('.list--stream').css("display", "none");
				$('.list--friends').css("display", "block");
			})
			//member
			var member = $('<input type="submit" value="Участники потока" class = "mForm__button button button--invisibility">');
			form.append(member);
			member.css("background", "#eeeff5");
			member.click(function(event){
				event.preventDefault();
				$(this).css("background", "#eeeff5");
				friends.css("background", "none");
				$('.list--friends').css("display", "none");
				$('.list--stream').css("display", "block");
			})
			//add
			var add = $('<input type="submit" value="Добавить людей" class = "mForm__button button button--add">');
			form.append(add);
		}
	})
});



//objects
var usersFriends = [{
	name: "Aleksandr",
	surname: "Vechkutov",
	photo: '../result/images/photo/alexandr.jpg',
	stream: 3,
	friend: false
},
{
	name: "Olya",
	surname: "Seteykina",
	photo: '../result/images/photo/olya.jpg',
	stream: 5,
	friend: false
},
{
	name: "Slava",
	surname: "Komissarenko",
	photo: '../result/images/photo/slava.jpg',
	stream: 1,
	friend: false
},
{
	name: "Mariya",
	surname: "Kozhevnikova",
	photo: '../result/images/photo/maria.jpg',
	stream: 5,
	friend: false
},
{
	name: "Kseniya",
	surname: "Borodina",
	photo: '../result/images/photo/ksusha.jpg',
	stream: 4,
	friend: false
},
{
	name: "Kostya",
	surname: "Pavlov",
	photo: '../result/images/photo/kostya.jpg',
	stream: 5,
	friend: false
},
{
	name: "Lera",
	surname: "Kondra",
	photo: '../result/images/photo/lera.jpg',
	stream: 2,
	friend: false
},
{
	name: "Katya",
	surname: "Sambuka",
	photo: '../result/images/photo/katya.jpg',
	stream: 3,
	friend: false
},
{
	name: "Anton",
	surname: "Petryaev",
	photo: '../result/images/photo/Anton.jpg',
	stream: 1,
	friend: false
}]

var usersStream = [{
	name: "Anton",
	surname: "Petryaev",
	photo: '../result/images/photo/Anton.jpg',
	stream: 1,
	friend: false
},
{
	name: "Katya",
	surname: "Sambuka",
	photo: '../result/images/photo/katya.jpg',
	stream: 3,
	friend: false
},
{
	name: "Lera",
	surname: "Kondra",
	photo: '../result/images/photo/lera.jpg',
	stream: 2,
	friend: false
},
{
	name: "Kostya",
	surname: "Pavlov",
	photo: '../result/images/photo/kostya.jpg',
	stream: 5,
	friend: false
},
{
	name: "Kseniya",
	surname: "Borodina",
	photo: '../result/images/photo/ksusha.jpg',
	stream: 4,
	friend: false
},
{
	name: "Mariya",
	surname: "Kozhevnikova",
	photo: '../result/images/photo/maria.jpg',
	stream: 5,
	friend: false
},
{
	name: "Slava",
	surname: "Komissarenko",
	photo: '../result/images/photo/slava.jpg',
	stream: 1,
	friend: false
},
{
	name: "Olya",
	surname: "Seteykina",
	photo: '../result/images/photo/olya.jpg',
	stream: 5,
	friend: false
},
{
	name: "Aleksandr",
	surname: "Vechkutov",
	photo: '../result/images/photo/alexandr.jpg',
	stream: 3,
	friend: false
}]

