define(
['angular', 'model'],
function (angular, model){
	console.log(model.top.panel.logo.imgUrl);
	angular.module('MyApp').controller('MyController', function($scope) {
		$scope.data = model;
	})
});