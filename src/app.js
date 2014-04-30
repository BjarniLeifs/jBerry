var app = angular.module("BerryApp", ["ngRoute"]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl: "templates/Main.html",
		controller: "MainController",
	}).when("/LogIn", {
		templateUrl: "templates/LogIn.html",
		controller: "LogInController",
	}).when("/createBlog", {
		templateUrl: "templates/createBlog.html",
		controller: "blogController",
	}).otherwise({ redirectTo: "/" });
	
	//$locationProvider.html5Mode(true);
}]);

