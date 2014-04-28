var app = angular.module("BerryApp", ["ngRoute"]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl: "templates/Main.html",
		controller: "MainController",
	}).when("/LogIn", {
		templateUrl: "templates/LogIn.html",
		controller: "LogInController",
	}).otherwise({ redirectTo: "/" });
	
	//$locationProvider.html5Mode(true);
}]);

