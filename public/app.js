angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/land.html',
        controller: 'LandController'
      })
      .when('/shows/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
      })
      .when('/trackr', {
        templateUrl: 'views/trackr.html',
        controller: 'TrackrController'
      })
      .when('/learning', {
        templateUrl: 'views/learning.html',
        controller: 'LearningController'
      })
      .when('/testHacks', {
        templateUrl: 'views/testHacks.html',
        controller: 'StudentController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);