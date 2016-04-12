require(['app', 'objects/user'], function(app, user){
	app.controller('MainCtrl', function(){
		this.user = user;
	})
})