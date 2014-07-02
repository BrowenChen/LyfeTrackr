var myApp = angular.module('MyApp', [])

//Controller to contain data for streak
myApp.controller('hacksController', ['$scope', function($scope) {
	alert("Test Hacks");
	$scope.hacks = 0;
	$scope.output = 0;

	//When to start a new number or when to concatenate
	$scope.newNumber = true;
	$scope.pendingOperation = null; 

	//Current Total 
	$scope.runningTotal = 0;

	$scope.operation = "";


	var addOp = "+";
	var subOp = "-";
	var ADD = 'adding';
	var SUBTRACT = 'subtracting';




}]);