define(
['angular'],
function (){
	angular.module('MyApp').controller('MyController', function($scope) {
		$scope.message = 'Hello WORLD';
	})
});