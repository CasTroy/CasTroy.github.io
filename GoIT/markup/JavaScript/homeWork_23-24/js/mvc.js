//M
function Model(data) {
	var self = this;

	self.data = data;

	self.addItem = function(item) {
		if (item.length === 0) {
			return;
		}
		self.data.push(item);
		return self.data;
	};

	self.removeItem = function(item) {
		var index = self.data.indexOf(item);
		self.data.splice(index, 1);
		return self.data;
	}
	self.editItem = function(item, text) {
		var index = self.data.indexOf(item);
		self.data[index] = text;
	}
}
//V
function View(model) {
	var self = this;

	function init() {
		var wrapper = tmpl($('#wrapper_template').html());
		$('body').append(wrapper);

		self.elements = {
			input: $('.item__value'),
			addBtn: $('.item__add'),
			listContainer: $('.item')
		};
		self.renderList(model.data);
	};

	self.renderList = function (data) {
		var list = tmpl($('#list_template').html(), {data: data});
		self.elements.listContainer.html(list);
	};
	init();
}
//C
function Controller(model, view) {
	var self = this;
	
	view.elements.addBtn.on('click', addItem);
	view.elements.listContainer.on('click', '.img--delete', removeItem);
	view.elements.listContainer.on('click', '.img--edit', editItem);
	function addItem() {
		var newItem = view.elements.input.val();
		model.addItem(newItem);
		view.renderList(model.data);
		view.elements.input.val('');
	}

	function removeItem() {
		var itemDelete = $(this).attr('data-value');
		model.removeItem(itemDelete);
		view.renderList(model.data);
	}
	function editItem(){
		if(view.elements.input.val())
		{
			var itemEdit = $(this).attr('data-value');
			model.editItem(itemEdit, view.elements.input.val());
			view.renderList(model.data);
			console.log(itemEdit);
		}
		else
		{
			var element = $('.hint');
			if(element.css('opacity') === '0')
			{
				element.animate({
				opacity: 1
				}, 1000, function(){
					element.animate({
						opacity: 0
					},1500)

				});
			}
			
		}
	}
}
$(function(){
	var first = ['test 1','test 2','test 3'];
	var model = new Model(first);
	var view = new View(model);
	var controller = new Controller(model, view);
});

