function Timer(){
	var seconds = 0;
	var minutes = 0;
	var hours = 0;
	var step = 0;
	var buttonStart = true;
	var size = 0;
	var interval;
	var move = true;
	//Create body
		this._createBody = function(){
			this._body = document.body;
			this._body.style.backgroundColor = "black";
		}
		//Create container
			this._createContainer = function(){
				this._container = document.createElement('section');
				this._body.appendChild(this._container);
				this._container.style.width = "1000px";
				this._container.style.position = "relative";
				this._container.style.height = "100%";
				this._container.style.margin = "20% auto";
			}
			//create timer
				this._createTimer = function(){
					this._Timer = document.createElement('div');
					this._container.appendChild(this._Timer);
					this._Timer.style.width = "100%";
					this._Timer.style.textAlign = "center";
					this._Timer.style.fontSize = "76px";
					this._Timer.style.fontWeight = "900";
					this._Timer.style.color = "red";
					this._Timer.innerHTML = "0"+hours+":"+"0"+minutes+":"+"0"+seconds+"."+"00"+step;
				}
			//create box for butons
				this._createBoxButtons = function(){
					this._createBoxButtons = document.createElement('ul');
					this._container.appendChild(this._createBoxButtons);
					this._createBoxButtons.style.paddingLeft = "35%";
				}
				//create button
					this._createButton = function(name, className){
						this._button = document.createElement('li');
						this._createBoxButtons.appendChild(this._button);
						this._button.style.listStyle = "none"
						this._button.innerHTML = name;
						this._button.style.border = "1px solid #707070";
						this._button.style.backgroundColor = "#e6e6e6";
						this._button.style.cursor = "pointer";
						this._button.style.float = "left";
						this._button.style.color = "black";
						this._button.style.fontSize = "36px";
						this._button.style.padding = "0px 10px";
						this._button.style.marginRight = "2px";
						this._button.id = className;
						this._button.addEventListener('mouseover', function(){_bgButtonBlue(className)});
						this._button.addEventListener('mouseout', function(){_bgButtonGray(className)});
						this._button.addEventListener('click', function(){_startButon(className)});
						if(className == "start")
							this._button.style.width = "100px";
					}
					this._bgButtonBlue = function(nameClass){
						var but = document.getElementById(nameClass);
						but.style.backgroundColor = "#a6f4ff";
						but.style.border = "1px solid #26a0da";

					}
					this._bgButtonGray = function(nameClass){
						var but = document.getElementById(nameClass);
						but.style.backgroundColor = "#e6e6e6";
						but.style.border = "1px solid #707070";

					}
					this._startButon = function(nameClass){
						//start
							if(nameClass === "start")
								{
									var but = document.getElementById(nameClass);
									if(buttonStart)
									{
										if(move)
										{
											move = false;
											but.innerHTML = "Stop";
											buttonStart = false;
											interval = setInterval(_timerGo, 5);
										}
										
									}
									else
									{
										move = true;
										clearInterval(interval);
										_createSplit("Stop");	
									 	but.innerHTML = "Start";
									 	buttonStart = true;
									}
								}
						//reset
							if(nameClass === "reset")
							{
								var but = document.getElementById("start");
								but.innerHTML = "Start";
								buttonStart = true;

								for(i = 0; i < size; ++i)
									_container.removeChild(_container.children[2]);
								size = 0;

								move = true;
								clearInterval(interval);
								step = 0;
								minutes = 0;
								seconds = 0;
								hours = 0;
								this._Timer.innerHTML = "0"+hours+":"+"0"+minutes+":"+"0"+seconds+"."+"00"+step;
							}
						//split
						if(nameClass === "split")
						{
							_createSplit("Split");			
						}
					}
					//timer go
						this._timerGo = function(){
							if(step === 995)
							{
								step = 0;
								seconds++;
								if(seconds === 60)
								{
									seconds = 0;
									minutes++;
									if(minutes === 60)
									{
										minutes = 0;
										hours++;
									}
								}
							}
							step+=5;

							_showTimer(_Timer);	
						}
					//create p
						this._createSplit = function(name){
							this._split = document.createElement('p');
							this._container.appendChild(this._split);
							size++;
							//this._split.innerHTML = size+" "+name+": "+"0"+hours+":"+"0"+minutes+":"+"0"+seconds+"."+"00"+step;
							this._split.style.textAlign = "center";
							this._split.style.clear = "both";
							this._split.style.color = "gray";
							this._split.style.fontSize = "36px";
							_showSplit(_split);
						} 
					//show split 
						this._showSplit = function(name)
						{
							if(hours < 10)
								{
									if(minutes < 10)
									{
										if(seconds < 10)
										{
											if(step < 10)
												name.innerHTML = size+". "+"0"+hours+":"+"0"+minutes+":"+"0"+seconds+".00"+step;
											else if(step > 10 && step < 100)
												name.innerHTML = size+". "+"0"+hours+":"+"0"+minutes+":"+"0"+seconds+".0"+step;
											else if(step > 100)
												name.innerHTML = size+". "+"0"+hours+":"+"0"+minutes+":"+"0"+seconds+"."+step;
										}
										else
										{
											if(step < 10)
												name.innerHTML = size+". "+"0"+hours+":"+"0"+minutes+":"+seconds+".00"+step;
											else if(step > 10 && step < 100)
												name.innerHTML = size+". "+"0"+hours+":"+"0"+minutes+":"+seconds+".0"+step;
											else if(step > 100)
												name.innerHTML = size+". "+"0"+hours+":"+"0"+minutes+":"+seconds+"."+step;
										}
									}
									else
									{
										if(seconds < 10)
										{
											if(step < 10)
												name.innerHTML = size+". "+"0"+hours+":"+minutes+":"+"0"+seconds+".00"+step;
											else if(step > 10 && step < 100)
												name.innerHTML = size+". "+"0"+hours+":"+minutes+":"+"0"+seconds+".0"+step;
											else if(step > 100)
												name.innerHTML = size+". "+"0"+hours+":"+minutes+":"+"0"+seconds+"."+step;
										}
										else
										{
											if(step < 10)
												name.innerHTML = size+". "+"0"+hours+":"+minutes+":"+seconds+".00"+step;
											else if(step > 10 && step < 100)
												name.innerHTML = size+". "+"0"+hours+":"+minutes+":"+seconds+".0"+step;
											else if(step > 100)
												name.innerHTML = size+". "+"0"+hours+":"+minutes+":"+seconds+"."+step;
										}
									}
								}
								else
								{
									if(minutes < 10)
									{
										if(seconds < 10)
										{
											if(step < 10)
												name.innerHTML = size+". "+hours+":"+"0"+minutes+":"+"0"+seconds+".00"+step;
											else if(step > 10 && step < 100)
												name.innerHTML = size+". "+hours+":"+"0"+minutes+":"+"0"+seconds+".0"+step;
											else if(step > 100)
												name.innerHTML = size+". "+hours+":"+"0"+minutes+":"+"0"+seconds+"."+step;
										}
										else
										{
											if(step < 10)
												name.innerHTML = size+". "+hours+":"+"0"+minutes+":"+seconds+".00"+step;
											else if(step > 10 && step < 100)
												name.innerHTML = size+". "+hours+":"+"0"+minutes+":"+seconds+".0"+step;
											else if(step > 100)
												name.innerHTML = size+". "+hours+":"+"0"+minutes+":"+seconds+"."+step;
										}
									}
									else
									{
										if(seconds < 10)
										{
											if(step < 10)
												name.innerHTML = size+". "+hours+":"+minutes+":"+"0"+seconds+".00"+step;
											else if(step > 10 && step < 100)
												name.innerHTML = size+". "+hours+":"+minutes+":"+"0"+seconds+".0"+step;
											else if(step > 100)
												name.innerHTML = size+". "+hours+":"+minutes+":"+"0"+seconds+"."+step;
										}
										else
										{
											if(step < 10)
												name.innerHTML = size+". "+hours+":"+minutes+":"+seconds+".00"+step;
											else if(step > 10 && step < 100)
												name.innerHTML = size+". "+hours+":"+minutes+":"+seconds+".0"+step;
											else if(step > 100)
												name.innerHTML = size+". "+hours+":"+minutes+":"+seconds+"."+step;
										}
									}
								}
						}
					//show timer
						this._showTimer = function(name){
							if(hours < 10)
							{
								if(minutes < 10)
								{
									if(seconds < 10)
									{
										if(step < 10)
											name.innerHTML = "0"+hours+":"+"0"+minutes+":"+"0"+seconds+".00"+step;
										else if(step > 10 && step < 100)
											name.innerHTML = "0"+hours+":"+"0"+minutes+":"+"0"+seconds+".0"+step;
										else if(step > 100)
											name.innerHTML = "0"+hours+":"+"0"+minutes+":"+"0"+seconds+"."+step;
									}
									else
									{
										if(step < 10)
											name.innerHTML = "0"+hours+":"+"0"+minutes+":"+seconds+".00"+step;
										else if(step > 10 && step < 100)
											name.innerHTML = "0"+hours+":"+"0"+minutes+":"+seconds+".0"+step;
										else if(step > 100)
											name.innerHTML = "0"+hours+":"+"0"+minutes+":"+seconds+"."+step;
									}
								}
								else
								{
									if(seconds < 10)
									{
										if(step < 10)
											name.innerHTML = "0"+hours+":"+minutes+":"+"0"+seconds+".00"+step;
										else if(step > 10 && step < 100)
											name.innerHTML = "0"+hours+":"+minutes+":"+"0"+seconds+".0"+step;
										else if(step > 100)
											name.innerHTML = "0"+hours+":"+minutes+":"+"0"+seconds+"."+step;
									}
									else
									{
										if(step < 10)
											name.innerHTML = "0"+hours+":"+minutes+":"+seconds+".00"+step;
										else if(step > 10 && step < 100)
											name.innerHTML = "0"+hours+":"+minutes+":"+seconds+".0"+step;
										else if(step > 100)
											name.innerHTML = "0"+hours+":"+minutes+":"+seconds+"."+step;
									}
								}
							}
							else
							{
								if(minutes < 10)
								{
									if(seconds < 10)
									{
										if(step < 10)
											name.innerHTML = hours+":"+"0"+minutes+":"+"0"+seconds+".00"+step;
										else if(step > 10 && step < 100)
											name.innerHTML = hours+":"+"0"+minutes+":"+"0"+seconds+".0"+step;
										else if(step > 100)
											name.innerHTML = hours+":"+"0"+minutes+":"+"0"+seconds+"."+step;
									}
									else
									{
										if(step < 10)
											name.innerHTML = hours+":"+"0"+minutes+":"+seconds+".00"+step;
										else if(step > 10 && step < 100)
											name.innerHTML = hours+":"+"0"+minutes+":"+seconds+".0"+step;
										else if(step > 100)
											name.innerHTML = hours+":"+"0"+minutes+":"+seconds+"."+step;
									}
								}
								else
								{
									if(seconds < 10)
									{
										if(step < 10)
											name.innerHTML = hours+":"+minutes+":"+"0"+seconds+".00"+step;
										else if(step > 10 && step < 100)
											name.innerHTML = hours+":"+minutes+":"+"0"+seconds+".0"+step;
										else if(step > 100)
											name.innerHTML = hours+":"+minutes+":"+"0"+seconds+"."+step;
									}
									else
									{
										if(step < 10)
											name.innerHTML = hours+":"+minutes+":"+seconds+".00"+step;
										else if(step > 10 && step < 100)
											name.innerHTML = hours+":"+minutes+":"+seconds+".0"+step;
										else if(step > 100)
											name.innerHTML = hours+":"+minutes+":"+seconds+"."+step;
									}
								}
							}
						}

	//Выполнение
		_createBody();
		_createContainer();
		_createTimer();
		_createBoxButtons();
		//buttons
			this._createButton("Start", "start");
			this._createButton("Split", "split");
			this._createButton("Reset", "reset");

}
Timer();