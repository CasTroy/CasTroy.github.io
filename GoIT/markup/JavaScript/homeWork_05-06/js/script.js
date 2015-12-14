
function Timer(){
//Описание методов обьекта

	//Create body
		this._createBody = function(){
			this._body = document.body;
		}
	//Create container
		this._createContainer = function(){
			this._container = document.createElement('section');
			this._body.appendChild(this._container);
			this._container.style.width = "1000px";
			this._container.style.position = "relative";
			this._container.style.overflow = "hidden"
			this._container.style.height = "100%";
			this._container.style.margin = "0 auto";
		}
	//Create center block
		this._createCentrBlock = function(){
			this._buttons = document.createElement('div');
			this._container.appendChild(this._buttons);
			this._buttons.style.position = "absolute";
			this._buttons.style.width = "100%";
			this._buttons.style.zIndex = "0";
		}
		//Create c left block
			this._createLeftBlock = function(){
			 	this.leftBlock = document.createElement('div');
			 	this._buttons.appendChild(this.leftBlock);
			 	this.leftBlock.style.width = "50%";
			 	this.leftBlock.style.float = "left";
			 	this.leftBlock.style.marginTop = "5%";
			 	this.leftBlock.style.paddingBottom = "10%";

			}
			var step = 0;
			var interval; 
			var move = true;
			//Create c left button
				this._createCBLeftButton = function(){
					this._leftH1 = document.createElement('h1');
					this.leftBlock.appendChild(this._leftH1);
					this._leftH1.innerHTML = "Stop Watch";
					this._leftH1.style.textAlign = "center";
					this._leftH1.style.fontSize = "66px";

					this._leftButton = document.createElement('img');
					this._leftButton.setAttribute('src', 'img/arrow.png');
					this.leftBlock.appendChild(this._leftButton);
					this._leftButton.style.width = "40%";
					this._leftButton.style.cursor = "pointer";
					this._leftButton.style.marginLeft = "30%";
					this._leftButton.style.marginTop = "15%";
					this._leftButton.style.transform = "rotate(90deg)";
					this._leftButton.addEventListener('click', _moveLeft);
					this._leftButton.addEventListener('mouseover', _bgGreen);
					this._leftButton.addEventListener('mouseout', function(){_bgWhite(leftBlock)});
				}
				//mouseover bg green 
				this._bgGreen = function(){
					leftBlock.style.background = "rgba(20,167,20,0.3)";
				}
				this._bgWhite= function(varible){
					varible.style.background = "white";
				}
				this._bgRed = function(){
					rightBlock.style.background = "rgba(164,23,23,0.3)";
				}
				// move left
					this._moveLeft = function(){		
						if(move)
							interval = setInterval(_movePointLeft, 10);
					}
					this._movePointLeft = function(){
						move = false;
						this._buttons.style.marginLeft = step+"%";
						//this._container.style.marginLeft = step+"%";
						if(step === 100)
						{
							clearInterval(interval);
							move = true;
							step = 0;
							return;
						}
						step += 5;
					}
		//Create c right block
			this._createRightBlock = function(){
				this.rightBlock = document.createElement('div');
			 	this._buttons.appendChild(this.rightBlock);
			 	this.rightBlock.style.width = "50%";
			 	this.rightBlock.style.float = "right";
			 	this.rightBlock.style.marginTop = "5%";
			 	this.rightBlock.style.paddingBottom = "10%";
			}
			//Create c right button
				this._createCBRightButton = function(){
					this._rightH1 = document.createElement('h1');
					this.rightBlock.appendChild(this._rightH1);
					this._rightH1.innerHTML = "Count Down";
					this._rightH1.style.textAlign = "center";
					this._rightH1.style.fontSize = "66px";

					this._rightButton = document.createElement('img');
					this._rightButton.setAttribute('src', 'img/arrow.png');
					this.rightBlock.appendChild(this._rightButton);
					this._rightButton.style.width = "40%";
					this._rightButton.style.cursor = "pointer";
					this._rightButton.style.transform = "rotate(-90deg)";
					this._rightButton.style.marginLeft = "30%";
					this._rightButton.style.marginTop = "15%";
					this._rightButton.addEventListener('mouseover', _bgRed);
					this._rightButton.addEventListener('mouseout', function(){_bgWhite(rightBlock)});
					this._rightButton.addEventListener('click', _moveRight);
				}
				// move right
					this._moveRight = function(){		
						if(move)
							interval = setInterval(_movePointRight, 10);
					}
					this._movePointRight = function(){
						move = false;
						this._buttons.style.marginLeft = step+"%";
						//this._container.style.marginLeft = step+"%";
						if(step === -100)
						{
							clearInterval(interval);
							move = true;
							step = 0;
							return;
						}
						step -= 5;
					}
	/*-------------------------*/
	//Create Stop Watch(timer up)
		this._createTimerUp = function(){
			this._timerUp = document.createElement('div');
			this._buttons.appendChild(this._timerUp);
			this._timerUp.style.marginTop = "10%";
			this._timerUp.style.marginLeft = "10%";
		}
		//Create blue line 
			this._createBlueLine = function(){
				this._blueLine = document.createElement('div');
				this._timerUp.appendChild(this._blueLine);
				this._blueLine.style.width = "1000px";
				this._blueLine.style.height = "80px";
				this._blueLine.style.marginBottom = "40%";
				this._blueLine.style.marginLeft = "-123%";
				this._blueLine.style.backgroundColor = "#003399";
			}
		//Create Timer up numbers
			this._createTUNumbers = function(){
				this._timerUpNumbers = document.createElement('div');
				this._timerUp.appendChild(this._timerUpNumbers);
				this._timerUpNumbers.style.position = "absolute";
				this._timerUpNumbers.style.minWidth = "80%";
				this._timerUpNumbers.style.marginLeft = "-100%";
				this._timerUpNumbers.style.border = "10px solid black";
				this._timerUpNumbers.style.borderRadius = "50px";
				this._timerUpNumbers.style.backgroundColor = "#e1e3ff";
				this._timerUpNumbers.style.top = "20%";		
			}
			//Create Timer up text
				this._createTUText =  function(){
					this._timerUpText = document.createElement('p');
					this._timerUpNumbers.appendChild(this._timerUpText);
					this._timerUpText.style.textAlign = "center";
					this._timerUpText.style.margin = "0 auto";
					this._timerUpText.innerHTML = "0"+hours +" : "+"0"+minutes +" : "+"0"+seconds; 
					this._timerUpText.style.fontSize = "120px";
					this._timerUpText.style.color = "black";
					this._timerUpText.style.fontWeight = "900";

				}
			//Create count
				this._createCount = function(){
					this._count = document.createElement('p');
					this._timerUpNumbers.appendChild(this._count);
					this._count.style.fontSize = "36px"
					this._count.style.marginTop = "-35px";
					this._count.style.textAlign = "right";
					this._count.style.fontWeight = "900";
					this._count.style.paddingRight = "6%";	
					this._count.style.color = "black";				
					this._count.innerHTML = count;
				}
			//Create buttons box
				this._createButtonsBox = function(){
					this._createBox = document.createElement('div');
					this._timerUp.appendChild(this._createBox);
					this._createBox.style.width = "80%";
					this._createBox.style.marginLeft = "-100%";
					this._createBox.style.position = "absolute";
					this._createBox.style.marginTop = "-10%";
				}
				//Create buttons Start
					this._createButtonStart = function(){
						this.buttonStart = document.createElement('div');
						this._createBox.appendChild(this.buttonStart);
						this.buttonStart.innerHTML = "Start";
						this.buttonStart.style.width = "25%";
						this.buttonStart.style.border = "10px solid black";
						this.buttonStart.style.borderRadius = "25px";
						this.buttonStart.style.textAlign = "center";
						this.buttonStart.style.fontSize = "36px";
						this.buttonStart.style.color = "black";
						this.buttonStart.style.fontWeight = "900";
						this.buttonStart.style.cursor = "pointer";
						this.buttonStart.style.backgroundColor = "#14a714";
						this.buttonStart.style.float = "left";
						this.buttonStart.addEventListener('mousedown',_bgGreenButtonGrey);
						this.buttonStart.addEventListener('mouseup', _bgGreenButton);
						this.buttonStart.addEventListener('click', _StartTimer);
						
					}
					var hours = 0;
					var minutes = 0;
					var seconds = 0;
					var startButton = 0;
					var startTimer = true;
					var count = 0;
					this._StartTimer = function(){

						if(startButton === 0)
							startButton = 1;
						else if(startButton === 1)
						{
							startButton = 2;
							clearInterval(interval);
						}
						else if(startButton === 2)
						{
							startButton = 1;
							interval = setInterval(_timerGo, 5);
						}

						switch(startButton){
							case 0 : 
								buttonStart.innerHTML = "Start";
								break;
							case 1 : 
								buttonStart.innerHTML = "Pause";
								buttonStart.style.backgroundColor = "#1E90FF";
								break;
							case 2 : 
								buttonStart.innerHTML = "Cont...";
								break;
						}


						if(startTimer)
						{
							startTimer = false;
							if(seconds === 0)
								_timerUpText.innerHTML = "0"+hours +" : "+"0"+minutes +" : "+"0"+(++seconds);
							interval = setInterval(_timerGo, 5);
						}
						
					}
					this._timerGo = function(){		
						if(count > 999)
						{

							if (hours <= 9)
							{
								if(minutes <= 9)
								{
									if(seconds <= 8)
										_timerUpText.innerHTML = "0"+hours +" : "+"0"+minutes +" : "+"0"+(++seconds);
									else
										_timerUpText.innerHTML = "0"+hours +" : "+"0"+minutes +" : "+(++seconds);
								}else
								{
									if(seconds <= 8)
										_timerUpText.innerHTML = "0"+hours +" : "+minutes +" : "+"0"+(++seconds);
									else
										_timerUpText.innerHTML = "0"+hours +" : "+minutes +" : "+(++seconds);
								}
							}
							else
							{
								if(minutes <= 9)
								{
									if(seconds <= 8)
										_timerUpText.innerHTML = hours +" : "+"0"+minutes +" : "+"0"+(++seconds);
									else
										_timerUpText.innerHTML = hours +" : "+"0"+minutes +" : "+(++seconds);
								}else
								{
									if(seconds <= 8)
										_timerUpText.innerHTML = hours +" : "+minutes +" : "+"0"+(++seconds);
									else
										_timerUpText.innerHTML = hours +" : "+minutes +" : "+(++seconds);
								}
							}


							if(seconds === 59)
							{
								seconds = 0;
								minutes +=1;
							}
							if(minutes === 60)
							{
								minutes = 0;
								hours += 1;
							}
							if(hours === 24)
								hours = 0;
							count = 0;
				

						}
							
						count +=5
						_count.innerHTML = count;
						//_timerUpText.innerHTML = "0"+hours +" : "+"0"+minutes +" : "+"0"+seconds;
						
					}





					this._bgGreenButton= function(){
						buttonStart.style.background = "#14a714";
					}
					this._bgGreenButtonGrey = function(){
						buttonStart.style.background = "gray";//"rgba(164,23,23,0.3)";
					}
				//Create buttons Clear
					this._createButtonClear = function(){
						this.buttonClear = document.createElement('div');
						this._createBox.appendChild(this.buttonClear);
						this.buttonClear.innerHTML = "Clear";
						this.buttonClear.style.width = "25%";
						this.buttonClear.style.border = "10px solid black";
						this.buttonClear.style.borderRadius = "25px";
						this.buttonClear.style.textAlign = "center";
						this.buttonClear.style.fontSize = "36px";
						this.buttonClear.style.color = "black";
						this.buttonClear.style.fontWeight = "900";
						this.buttonClear.style.cursor = "pointer";
						this.buttonClear.style.backgroundColor = "#a41717";
						this.buttonClear.style.float = "right";
						this.buttonClear.addEventListener('mousedown', _bgRedButtonGrey);
						this.buttonClear.addEventListener('mouseup', _bgRedButton);
						this.buttonClear.addEventListener('click', _ClearTimer);
					}
					this._ClearTimer = function(){
						clearInterval(interval);
						hours = 0;
						minutes = 0;
						seconds = 0;
						step = 0;
						count = 0;
						startButton = 0;
						startTimer = true;
						_timerUpText.innerHTML = "0"+hours +" : "+"0"+minutes +" : "+"0"+seconds;
						_count.innerHTML = 0;
						buttonStart.innerHTML = "Start";
						buttonStart.style.background = "#14a714";
					}
					this._bgRedButton= function(){
						buttonClear.style.background = "#a41717";
					}
					this._bgRedButtonGrey = function(){
						buttonClear.style.background = "gray";//"rgba(164,23,23,0.3)";
					}
			//Create arrow
				this._createArrow = function(){
					this._arrow = document.createElement('img');
					this._timerUp.appendChild(this._arrow);
					this._arrow.setAttribute('src', 'img/arrow.png');
					this._arrow.style.marginLeft = "-58%";
					this._arrow.style.marginTop = "5px";
					this._arrow.style.position = "absolute";
					this._arrow.style.width = "7%";
					this._arrow.style.transform = "scale(-1,-1)";
					this._arrow.style.cursor = "pointer";
					this._arrow.addEventListener('click', _moveRightToCenterBlock);
				}
				// move to center block
					this._moveRightToCenterBlock = function(){		
						if(move)
						{
							_ClearTimer();
							step = 100;
							interval = setInterval(_moveRightTo, 10);

						}
					}
					this._moveRightTo= function(){
						move = false;
						this._buttons.style.marginLeft = step+"%";
						if(step === 0)
						{
							clearInterval(interval);
							move = true;
							step = 0;
							return;
						}
						step -= 5;
					}
	/*-------------------------*/
	//Create Count Down
		this._createCountDown = function(){
			this._countDown = document.createElement('div');
			this._buttons.appendChild(this._countDown);
		}
		//Create blue line Count Down 
			this._createTopBlueLineCountDown = function(){
				this._blueLineCD = document.createElement('div');
				this._countDown.appendChild(this._blueLineCD);
				this._blueLineCD.style.position = "absolute";
				this._blueLineCD.style.minWidth = "1000px";
				this._blueLineCD.style.marginLeft = "100%";
				this._blueLineCD.style.height = "80px";
				this._blueLineCD.style.backgroundColor = "#003399";
				this._blueLineCD.style.top = "10%";
				this._blueLineCD.style.zIndex = "0";
			}
			this._createBottomBlueLineCountDown = function(){
				this._blueLineCD = document.createElement('div');
				this._countDown.appendChild(this._blueLineCD);
				this._blueLineCD.style.position = "absolute";
				this._blueLineCD.style.minWidth = "1000px";
				this._blueLineCD.style.marginLeft = "100%";
				this._blueLineCD.style.height = "80px";
				this._blueLineCD.style.backgroundColor = "#003399";
				this._blueLineCD.style.top = "65%";
			}
		//Create arrow
			this._createArrowCD = function(){
				this._arrowCD = document.createElement('img');
				this._countDown.appendChild(this._arrowCD);
				this._arrowCD.setAttribute('src', 'img/arrow.png');
				this._arrowCD.style.position = "absolute";
				this._arrowCD.style.zIndex = "1";
				this._arrowCD.style.marginTop = "-34%";
				this._arrowCD.style.marginLeft = "101%";
				this._arrowCD.style.width = "7%";
				this._arrowCD.style.cursor = "pointer";
				this._arrowCD.addEventListener('click', _moveLeftToCenterBlock);	
			}
			var moveArrow = true;
			this._moveLeftToCenterBlock = function(){		
						if(moveArrow)
						{
							_ClearCDTimer();
							step = 100;
							interval = setInterval(_moveLefttTo, 10);

						}
					}
					this._moveLefttTo= function(){
						moveArrow = false;
						this._buttons.style.marginLeft = "-"+step+"%";
						if(step === 0)
						{
							clearInterval(interval);
							moveArrow = true;
							step = 0;
							return;
						}
						step -= 5;
					}
		//Create Count Down timer
			this._createCDTimer = function(){
				this._CDTimer = document.createElement('div');
				this._countDown.appendChild(this._CDTimer);
				this._CDTimer.style.position = "absolute";
				this._CDTimer.style.minWidth = "80%";
				this._CDTimer.style.marginLeft = "110%";
				this._CDTimer.style.border = "10px solid black";
				this._CDTimer.style.borderRadius = "50px";
				this._CDTimer.style.backgroundColor = "#e1e3ff";
				this._CDTimer.style.top = "20%";		
			}
			//Create Count Down timer text
				this._createCDTText =  function(){
					this._CDTText = document.createElement('p');
					this._CDTimer.appendChild(this._CDTText);
					this._CDTText.style.textAlign = "center";
					this._CDTText.style.margin = "0 auto";
					this._CDTText.innerHTML = "0"+hours +" : "+"0"+minutes +" : "+"0"+seconds; 
					this._CDTText.style.fontSize = "120px";
					this._CDTText.style.color = "black";
					this._CDTText.style.fontWeight = "900";
				}
			//Create Count Down timer small text
				this._createCDTTextSmall = function(){
					this._CDTTextSmall = document.createElement('p');
					this._CDTimer.appendChild(this._CDTTextSmall);
					this._CDTTextSmall.innerHTML = "0";
					this._CDTTextSmall.style.textAlign = "right";
					this._CDTTextSmall.style.fontSize = "36px";
					this._CDTTextSmall.style.marginTop = "-3%";
					this._CDTTextSmall.style.paddingRight = "5%";
					this._CDTTextSmall.style.color = "black";
					this._CDTTextSmall.style.fontWeight = "900";
				}
		//Create Count Down timer buttons
			this._createCDTimerButtons = function(){
				this._CDTimerButtons = document.createElement('div');
				this._countDown.appendChild(this._CDTimerButtons);
				this._CDTimerButtons.style.top = "45%";
				this._CDTimerButtons.style.marginLeft = "110%";
				this._CDTimerButtons.style.minWidth = "80%";
				this._CDTimerButtons.style.position = "absolute";
			}
			//left
				this._createCDTButtonsLeft = function(){
					this._CDTButtonsLeft = document.createElement('ul');
					this._CDTimerButtons.appendChild(this._CDTButtonsLeft);
					this._CDTButtonsLeft.style.width = "70%";
					this._CDTButtonsLeft.style.padding = "0";
					this._CDTButtonsLeft.style.display = "inline-block";
				}
				//Button
					this._CDTButton = function(name){
						this._button = document.createElement('li');
						this._CDTButtonsLeft.appendChild(this._button);
						this._button.style.width = "80px";
						this._button.style.height = "80px";
						this._button.style.border = "10px solid black";
						this._button.style.borderRadius = "15px";
						this._button.style.listStyle = "none";
						this._button.style.fontWeight = "900";
						this._button.style.color = "black";
						this._button.style.background = "#14a714";
						this._button.style.cursor = "pointer";
						this._button.style.float = "left";
						this._button.style.marginTop = "1%";
						this._button.style.marginRight = "5%";
						this._button.id = name;
					}
					this._findNumbers = function(){
						this.num_1 = document.getElementById('_one');
						this.num_2 = document.getElementById('_two');
						this.num_3 = document.getElementById('_three');
						this.num_4 = document.getElementById('_four');
						this.num_5 = document.getElementById('_five');
						this.num_6 = document.getElementById('_six');
						this.num_7 = document.getElementById('_seven');
						this.num_8 = document.getElementById('_eight');
						this.num_9 = document.getElementById('_nine');
						this.num_0 = document.getElementById('_null');
						num_1.addEventListener('click', function(){_setNumber(1)});
						num_2.addEventListener('click', function(){_setNumber(2)});
						num_3.addEventListener('click', function(){_setNumber(3)});
						num_4.addEventListener('click', function(){_setNumber(4)});
						num_5.addEventListener('click', function(){_setNumber(5)});
						num_6.addEventListener('click', function(){_setNumber(6)});
						num_7.addEventListener('click', function(){_setNumber(7)});
						num_8.addEventListener('click', function(){_setNumber(8)});
						num_9.addEventListener('click', function(){_setNumber(9)});
						num_0.addEventListener('click', function(){_setNumber(0)});	
					}
					var second_1 = true;
					var second_2 = true;
					var minute_1 = true;
					var minute_2 = true;
					var hour_1 = true;
					var hour_2 = true;
					var	number_1 = 0;
					var	number_2 = 0;
					var number_3 = 0;
					var	number_4 = 0;
					var	number_5 = 0;
					var	number_6 = 0;
					this._setNumber = function(number){
						if(intervalGo)
						{
							if(second_1)
							{
								second_1 = false;
								number_1 = number;
								this._CDTText.innerHTML = "0"+hours +" : "+"0"+minutes +" : "+"0"+number_1; 
								seconds = number_1;
							}
							else if(second_2)
							{
								second_2 = false;
								number_2 = number;
								if(!number_1)
									seconds = number_2;
								else
									seconds = parseInt(number_1.toString() + number_2.toString());
								if(seconds > 9)
									this._CDTText.innerHTML = "0"+hours +" : "+"0"+minutes +" : "+seconds; 
								else
									this._CDTText.innerHTML = "0"+hours +" : "+"0"+minutes +" : "+"0"+seconds;
								
							}
							else if(minute_1){
								minute_1 = false;
								number_3 = number;
								if(seconds > 9)
									this._CDTText.innerHTML = "0"+hours +" : "+"0"+number_3+" : "+seconds; 
								else
									this._CDTText.innerHTML = "0"+hours +" : "+"0"+number_3+" : "+"0"+seconds;
								minutes = number_3;
							}
							else if(minute_2){
								minute_2 = false;
								number_4 = number;
								if(!number_3)
									minutes = number_4;
								else
									minutes = parseInt(number_3.toString() + number_4.toString());
								if(minutes > 9){
									if(seconds > 9)
										this._CDTText.innerHTML = "0"+hours +" : "+minutes+" : "+seconds; 
									else
										this._CDTText.innerHTML = "0"+hours +" : "+minutes+" : "+"0"+seconds;
								}
								else
								{
									if(seconds > 9)
										this._CDTText.innerHTML = "0"+hours +" : "+"0"+minutes+" : "+seconds; 
									else
										this._CDTText.innerHTML = "0"+hours +" : "+"0"+minutes+" : "+"0"+seconds;
								}
							}
							else if(hour_1){
								hour_1 = false;
								number_5 = number;
								if(minutes > 9){
									if(seconds > 9)
										this._CDTText.innerHTML = "0"+number_5+" : "+minutes+" : "+seconds; 
									else
										this._CDTText.innerHTML = "0"+number_5+" : "+minutes+" : "+"0"+seconds;
								}
								else
								{
									if(seconds > 9)
										this._CDTText.innerHTML = "0"+number_5+" : "+"0"+minutes+" : "+seconds; 
									else
										this._CDTText.innerHTML = "0"+number_5+" : "+"0"+minutes+" : "+"0"+seconds;
								}
								hours = number_5;

							}
							else if(hour_2){
								hour_2 = false;
								number_6 = number;
								if(!number_5)
									hours = number_6;
								else
									hours = parseInt(number_5.toString() + number_6.toString());
								if(hours > 9)
								{
									if(minutes > 9){
										if(seconds > 9)
											this._CDTText.innerHTML = hours+" : "+minutes+" : "+seconds; 
										else
											this._CDTText.innerHTML = hours+" : "+minutes+" : "+"0"+seconds;
									}
									else
									{
										if(seconds > 9)
											this._CDTText.innerHTML = hours+" : "+"0"+minutes+" : "+seconds; 
										else
											this._CDTText.innerHTML = hours+" : "+"0"+minutes+" : "+"0"+seconds;
									}
								}else{
									if(minutes > 9){
										if(seconds > 9)
											this._CDTText.innerHTML = "0"+hours+" : "+minutes+" : "+seconds; 
										else
											this._CDTText.innerHTML = "0"+hours+" : "+minutes+" : "+"0"+seconds;
									}
									else
									{
										if(seconds > 9)
											this._CDTText.innerHTML = "0"+hours+" : "+"0"+minutes+" : "+seconds; 
										else
											this._CDTText.innerHTML = "0"+hours+" : "+"0"+minutes+" : "+"0"+seconds;
									}
								}
							}
						}
					}
				//Button text
					this._CDTButtonText = function(button){
						this._ButtonText = document.createElement('p');
						this._button.appendChild(this._ButtonText);
						this._ButtonText.innerHTML = button; 
						this._ButtonText.style.fontSize = "56px";
						this._ButtonText.style.margin = "-10px 0 0 12px";
					}
			//right
				this._createCDTButtonsRight = function(){
					this._CDTButtonsRight = document.createElement('ul');
					this._CDTimerButtons.appendChild(this._CDTButtonsRight);
					this._CDTButtonsRight.style.width = "30%";
					this._CDTButtonsRight.style.float = "right";
					this._CDTButtonsRight.style.display = "inline-block";
				}
				//Button
					//set
						this._CDTButtontSet = function(){
							this._buttonSet = document.createElement('li');
							this._CDTButtonsRight.appendChild(this._buttonSet);
							this._buttonSet.style.border = "10px solid black";
							this._buttonSet.innerHTML = "Set";
							this._buttonSet.style.listStyle = "none";
							this._buttonSet.style.fontSize = "56px";
							this._buttonSet.style.fontWeight = "900";
							this._buttonSet.style.color = "black";
							this._buttonSet.style.textAlign = "center";
							this._buttonSet.style.borderRadius = "20px";
							this._buttonSet.style.marginTop = "2%";
							this._buttonSet.style.background = "#14a714";	
							this._buttonSet.style.cursor = "pointer";
							this._buttonSet.addEventListener('click', _setCDTimer);
						}
						var intervalGo = true;
						var setButton = 0;
						this._setCDTimer = function(){
							if(!seconds && !minutes && !hours)
								return;

							if(setButton === 0)
								setButton = 1;
							else if(setButton === 1)
							{
								setButton = 2;
								clearInterval(interval);
							}
							else if(setButton === 2)
							{
								setButton = 1;
								interval = setInterval(_CDTimerGo, 5);
							}

							switch(setButton){
							case 0 : 
								buttonStart.innerHTML = "Start";
								break;
							case 1 : 
								_buttonSet.style.background = "#1E90FF";
								_buttonSet.innerHTML = "Pause";
								break;
							case 2 : 
								_buttonSet.style.background = "#a41717";
								_buttonSet.innerHTML = "Cont...";
								break;
							}


							if(move){
								intervalGo = false;
								move = false;
								step = 1000;
								interval = setInterval(_CDTimerGo, 10);
							}	
						}

						this._CDTimerGo = function(){
							if(step === 0)
							{
								step = 1000;

								if(seconds)
									seconds--;
								else
								{
									if(minutes === 0 && hours === 0)
									{
										clearInterval(interval);
										_ClearCDTimer();
									}
									else{
										seconds = 59;
										if(minutes)
											minutes--;
										else
										{
											minutes = 59;
											if(hours)
												hours--;
										}

									}
								}
							}
							
							if(seconds > 9)
								_CDTText.innerHTML = "0"+hours +" : "+"0"+minutes+" : "+seconds;
							else
								_CDTText.innerHTML = "0"+hours +" : "+"0"+minutes+" : "+"0"+seconds;
							
							if(minutes > 9)
							{
								if(seconds > 9)
									_CDTText.innerHTML = "0"+hours +" : "+minutes+" : "+seconds;
								else
									_CDTText.innerHTML = "0"+hours +" : "+minutes+" : "+"0"+seconds;
							}
							else
							{
								if(seconds > 9)
									_CDTText.innerHTML = "0"+hours +" : "+"0"+minutes+" : "+seconds;
								else
									_CDTText.innerHTML = "0"+hours +" : "+"0"+minutes+" : "+"0"+seconds;
							}

							if(hours > 9)
							{
								if(minutes > 9)
								{
									if(seconds > 9)
										_CDTText.innerHTML = hours +" : "+minutes+" : "+seconds;
									else
										_CDTText.innerHTML = hours +" : "+minutes+" : "+"0"+seconds;
								}
								else
								{
									if(seconds > 9)
										_CDTText.innerHTML = hours +" : "+"0"+minutes+" : "+seconds;
									else
										_CDTText.innerHTML = +hours +" : "+"0"+minutes+" : "+"0"+seconds;
								}
							}
							else
							{
								if(minutes > 9)
								{
									if(seconds > 9)
										_CDTText.innerHTML = "0"+hours +" : "+minutes+" : "+seconds;
									else
										_CDTText.innerHTML = "0"+hours +" : "+minutes+" : "+"0"+seconds;
								}
								else
								{
									if(seconds > 9)
										_CDTText.innerHTML = "0"+hours +" : "+"0"+minutes+" : "+seconds;
									else
										_CDTText.innerHTML = "0"+hours +" : "+"0"+minutes+" : "+"0"+seconds;
								}
							}





							//_CDTText.innerHTML = hours +" : "+minutes+" : "+seconds; 
							_CDTTextSmall.innerHTML = step;
							step -=500;
						}
					//clear
						this._CDTButtontClear =  function(){
							this._buttonClear = document.createElement('li');
							this._CDTButtonsRight.appendChild(this._buttonClear);
							this._buttonClear.style.border = "5px solid black";
							this._buttonClear.innerHTML = "Clear";
							this._buttonClear.style.textAlign = "center";
							this._buttonClear.style.listStyle = "none";
							this._buttonClear.style.fontSize = "36px";
							this._buttonClear.style.color = "black";
							this._buttonClear.style.fontWeight = "600";
							this._buttonClear.style.background = "gray";
							this._buttonClear.style.borderRadius = "10px";
							this._buttonClear.style.marginTop = "2%";
							this._buttonClear.style.cursor = "pointer";
							this._buttonClear.addEventListener('click', _ClearCDTimer);
						}
						this._ClearCDTimer = function(){
							setButton = 0;
							intervalGo = true;
							move = true;
							step = 0;
							second_1 = true;
							second_2 = true;
							minute_1 = true;
							minute_2 = true;
							hour_1 = true;
							hour_2 = true;
							number_1 = 0;
							number_2 = 0;
							number_3 = 0;
							number_4 = 0;
							number_5 = 0;
							number_6 = 0;
							minutes = 0;
							seconds = 0;
							hours = 0;
							_buttonSet.innerHTML = "Set";
							_buttonSet.style.background = "#14a714";
							_CDTText.innerHTML = "0"+hours +" : "+"0"+minutes+" : "+"0"+seconds; 
							_CDTTextSmall.innerHTML = step;
						}


//Исполнениe конструктора обьекта
	this._createBody();
	this._createContainer();
	/*arrows*/
		this._createCentrBlock();
		this._createLeftBlock();
		this._createRightBlock();
		this._createCBLeftButton();
		this._createCBRightButton();
	/*TimerUp*/
		this._createTimerUp();
		//------------------------
		this._createBlueLine();
		this._createTUNumbers();
		this._createTUText();
		this._createCount();
		//buttons box
			this._createButtonsBox();
			//buttonstart
				this._createButtonStart();
			//button clear
				this._createButtonClear();
		//arrow		
			this._createArrow();
		//------------------------
		this._createBlueLine();
	/*Count Down*/
		this._createCountDown();

		this._createTopBlueLineCountDown();
		this._createBottomBlueLineCountDown();
		this._createArrowCD();
		this._createCDTimer(); 
		this._createCDTText();
		this._createCDTTextSmall();
		this._createCDTimerButtons();
		this._createCDTButtonsLeft();
			//button
				//left
					this._CDTButton('_null');
					this._CDTButtonText(0);
					this._CDTButton('_one');
					this._CDTButtonText(1); 
					this._CDTButton('_two');
					this._CDTButtonText(2);
					this._CDTButton('_three');
					this._CDTButtonText(3);
					this._CDTButton('_four');
					this._CDTButtonText(4); 
					this._CDTButton('_five');
					this._CDTButtonText(5); 
					this._CDTButton('_six');
					this._CDTButtonText(6); 
					this._CDTButton('_seven');
					this._CDTButtonText(7); 
					this._CDTButton('_eight');
					this._CDTButtonText(8); 
					this._CDTButton('_nine');
					this._CDTButtonText(9);
					this._findNumbers(); 
				//right
					this._createCDTButtonsRight();
					this._CDTButtontSet();
					this._CDTButtontClear();
				
				
				

		
		//---------------------
			
}

//Создаём таймер
var timer = Timer();

