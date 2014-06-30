var myApp = angular.module('MyApp', [])

//Controller to contain data for streak
myApp.controller('TrackrController', ['$scope', function($scope) {
	$scope.streak = 0;
}]);