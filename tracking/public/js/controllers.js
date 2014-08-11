'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

    $scope.test = function($scope){
      alert("test");
    };

    $scope.inputDate = "";
    $scope.inputVal = "";

    $scope.dateConvert = function($scope){
      var theDate = new Date(this.inputDate).getTime() / 1000;
      alert(theDate);
      return new Date("2014.08.07").getTime() / 1000;


    };


  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here


  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
