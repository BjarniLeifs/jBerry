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
	}).when("/profile", {
		templateUrl: "templates/profile.html",
		controller: "profileController",
	}).when("/checkin", {
		templateUrl: "templates/checkin.html",
		controller: "checkinController",
	}).otherwise({ redirectTo: "/" });
	//$locationProvider.html5Mode(true);
}]);

