/**
	Main app Javascript file. This is where the app is declared and the controllers injected.
*/

var shahzainApp = angular.module('shahzainApp', ['ngRoute', 'ngAnimate', 'shahzainAppControllers']);

shahzainApp.config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider){
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeController'
			})
			.otherwise({ redirectTo: '/' });
	}
]);

var shahzainAppControllers = angular.module('shahzainAppControllers', []);