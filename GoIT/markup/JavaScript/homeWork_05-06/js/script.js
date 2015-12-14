
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
			//delete
			//this._container.style.background = "green";
			//this._container.style.margin = "0 auto";
		}
	//Create center block
		this._createCentrBlock = function(){
			this._buttons = document.createElement('div');
			this._container.appendChild(this._buttons);
			this._buttons.style.position = "absolute";
			this._buttons.style.width = "100%";
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
					this._rightButton.style.transform = "scale(-1,-1)";
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
						if(step === 100)
						{
							clearInterval(interval);
							move = true;
							step = 0;
							return;
						}
						step -= 5;
					}
	/*-------------------------*/
	
	//Create timer up
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
}

//Создаём таймер
var timer = Timer();

