$(function(){
//click enter
	var switcherForRegister = false;
	var createUser = false;
	$('.enter').on('click', function(){
		if(createUser)
		{
			$('.headeformRegister').animate({
				left: '-=100'+'%', 
				opacity: 0 
			},"fast");
		}
		switchEnterWindow();
		createUser = false;
	});
	//switc enter window
		function switchEnterWindow(){
			switcherForRegister ? switcherForRegister = false : switcherForRegister = true ;
			if(switcherForRegister)
			{
				$('.headeform').animate({
					marginLeft: '-=100'+'%',
					opacity: 1 
				},"fast")
			}
			else
			{
				$('.headeform').animate({
					left: '+=100'+'%', 
					opacity: 0 
				},"fast")
			}		
		}
//click register
	 $('.headeform__LinkReister').on('click', function(){
	 	createUser = true;
	 	switcherForRegister ? switcherForRegister = false : switcherForRegister = true ;
 		$('.headeform').animate({
				left: '+=100'+'%', 
				opacity: 0 
			},"fast")
 		$('.headeformRegister').animate({
				left: '+=100'+'%', 
				opacity: 1 
			},"fast");
	 	});

//click navigation
	var switcherForNavigation = false;
	$('.panel__left').on('click', function(){
		if(switcherForSearch)
		{
			switchSearch();
			switchNavigation();
		}
		else
			switchNavigation();
			
	});
	//switch navigation
		function switchNavigation(){
			switcherForNavigation ? switcherForNavigation = false : switcherForNavigation = true;
			if(switcherForNavigation)
			{
				$('.panel__list').animate({
						left: '-=100'+'%',
						opacity: 1 
				},"fast")
			}
			else{
				$('.panel__list').animate({
						left: '+=100'+'%',
						opacity: 0 
				},"fast")
			}
		}
//click search
	var switcherForSearch = false;
	$('.panel__right').on('click', function(){
		if(switcherForNavigation)
		{
			switchNavigation();
			switchSearch();
		}
		else
			switchSearch();
	});
	//switch search
		function switchSearch(){
			switcherForSearch ? switcherForSearch = false : switcherForSearch = true;
			if(switcherForSearch){
				$('.search').animate({
					left: '+=100'+'%',
					opacity: 1 
				},"fast");
			}
			else
			{
				$('.search').animate({
					left: '-=100'+'%',
					opacity: 1 
				},"fast");
			}
		}
});