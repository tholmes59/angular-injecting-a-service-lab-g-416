function ContactController($scope, $timeout) {
	$scope.name = 'Tom Holmes';
	$timeout(function() {
		$scope.name = 'Jack'
	}, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);