function Model() {
	var self = this;
	self.data = ['test 1','test 1','test 1'];
//add	
	self.add = function (item){
		if(item.length === 0)
			return;

		self.data.push(item);
		return self.data;
	}
//remove	
	self.remove = function(item){
		var index = self.data.indexOf(item);

		if(index === -1)
			return;

		self.data.splice(index,1);
		return self.data;
	}
//edit
	self.edit = function(item){

	}
}

function View() {
}

function Controller() {
}

$(function(){
	
});