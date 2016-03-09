define(
	'controller',
	['model', 'view'],
	function(){
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
					var index = $(this).parent().index();
					var text = view.elements.input.val();
					model.editItem(index, text);
					view.renderList(model.data);
				}
				else
				{
					var element = $('.hint');
					if(element.css('opacity') === '0')
					{
						element.animate({
						opacity: 1
						}, 2000, function(){
							element.animate({
								opacity: 0
							},1500)

						});
					}
					
				}
			}
		}
		return Controller;
	}	
);
