var myApp = angular.module('myApp', []);

myApp.controller('TrackrController', ['$scope', function($scope) {
	$scope.streak = 0;
}]);