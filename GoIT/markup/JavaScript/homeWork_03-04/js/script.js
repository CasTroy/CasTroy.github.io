/*Object test*/
	test = {
	/*Поля object*/
		m_body: 0,
		//m_container: 0,
		m_h4: 0,
		m_ol: 0,
		m_ol_item: 0,
		m_ul: 0,
		m_ul_item: 0,
		m_checkBox: 0, 
		m_form: 0,
		m_div: 0,
		m_span: 0,
		m_button: 0,
	/*Создание теста*/
		createTest: function(){
			this.m_body = document.body;
			this.createForm();
		},
	/*Общий контейнер для всего*/
		createForm: function(){
			this.m_form = document.createElement('form');
			this.m_form.setAttribute('action', '#');
			this.m_form.classList.add('container');
			this.m_body.appendChild(this.m_form);
			this.createH4();
			this.createOl();
			this.createButton();
		},
	/*Заголовок теста*/
		createH4: function(){
			this.m_h4 = document.createElement('h4');
			this.m_h4.innerHTML = "Тест по программированию";
			this.m_h4.style.marginLeft = "270px";
			this.m_form.appendChild(this.m_h4);
		},
	/*Создание нумированного списка*/	
		createOl: function(){
			this.m_ol = document.createElement('ol');
			this.m_ol.style.marginLeft = "100px";
			this.m_ol.style.marginBottom = "60px";
			this.m_ol.style.marginTop = "40px";
			this.m_form.appendChild(this.m_ol);
			for(var i = 0; i < 3; ++i)
				this.createOlItem(i+1);
		},
	/*Создание одного елемента нумерованого списка*/
		createOlItem: function(number){
			this.m_ol_item = document.createElement('li');
			this.m_ol_item.style.marginTop = "10px";
			this.m_ol_item.style.marginBottom = "10px";
			this.m_ol.appendChild(this.m_ol_item);
			this.m_ol_item.innerHTML = "<strong>Вопрос №"+number+"</strong>";
			this.creatUl();
		},
	/*Создание не нумерованного списка*/
		creatUl: function(){
			this.m_ul = document.createElement('ul');
			this.m_ul.style.padding = "0px";
			this.m_ol_item.appendChild(this.m_ul);
			for(var i = 0; i < 3; ++i)
				this.createUlItem(i+1);
		},
	/*Создание одного елемента не нумерованого списка*/
		createUlItem: function(number){
			this.m_ul_item = document.createElement('li');
			this.m_ul_item.style.marginTop = "5px";
			this.m_ul_item.style.listStyleType = "none";
			this.m_ul.appendChild(this.m_ul_item);
			this.createDiv(number);
		},
	/*Создание блока не нумерованого списка*/
		createDiv: function(number){
			this.m_div = document.createElement('div');
			this.m_ul_item.appendChild(this.m_div);
			this.createCheckBox();
			this.createSpan(number);
		},
	/*Создание checkbox в форме не нумерованого списка*/
		createCheckBox: function(){
			this.m_checkBox = document.createElement('input');
			this.m_checkBox.setAttribute('type', 'checkbox');
			this.m_div.appendChild(this.m_checkBox); 
		},
	/*Создание span в форме не нумерованого списка*/
		createSpan: function(number){
			this.m_span = document.createElement('span');
			this.m_span.innerHTML = "Вариант ответа №"+number;
			this.m_div.appendChild(this.m_span); 
		},
	/*Создание кнопки*/
		createButton: function(){
			this.m_button = document.createElement('button');
			this.m_button.onclick = function(){
				alert("submit");
			}
			this.m_button.style.width = "325px";
			this.m_button.style.height = "50px";
			this.m_button.style.fontSize = "20px"
			this.m_button.style.border = "2px solid black";
			this.m_button.style.borderRadius = "3px";
			this.m_button.style.marginLeft = "250px";
			this.m_button.innerHTML = "Проверить мои результаты";
			this.m_form.appendChild(this.m_button); 
		},
	}

test.createTest();