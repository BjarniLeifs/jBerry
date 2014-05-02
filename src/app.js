var app = angular.module("BerryApp", ["ngRoute"]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl: "templates/Main.html",
		controller: "MainController",
	}).when("/login", {
		templateUrl: "templates/LogIn.html",
		controller: "loginController",
	}).when("/createBlog", {
		templateUrl: "templates/createBlog.html",
		controller: "blogController",
	}).when("/blogs", {
		templateUrl: "templates/blogs.html",
		controller: "blogController",
	}).when("/profile", {
		templateUrl: "templates/profile.html",
		controller: "profileController",
	}).when("/checkin", {
		templateUrl: "templates/checkin.html",
		controller: "checkinController",
	}).when("/nutritionopz", {
		templateUrl: "templates/nutritionopz.html",
		controller: "nutritionopzController",
	}).otherwise({ redirectTo: "/" });
	//$locationProvider.html5Mode(true);
}]);
