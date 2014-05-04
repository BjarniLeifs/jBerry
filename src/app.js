var app = angular.module("BerryApp", ["ngRoute", "ui.bootstrap"]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl: "templates/Main.html",
		controller: "MainController",
	}).when("/login", {
		templateUrl: "templates/LogIn.html",
		controller: "loginController",
	}).when("/newblog", {
		templateUrl: "templates/newBlog.html",
		controller: "blogController",
	}).when("/blogs", {
		templateUrl: "templates/blogs.html",
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
	}).when("/recipes/browse", {
		templateUrl: "templates/recipes/browse.html",
		controller: "browseController",
	}).when("/measurements", {
		templateUrl: "templates/measurements.html",
		controller: "measurementsController",
	}).when("/food", {
		templateUrl: "templates/food.html",
		controller: "foodController",
	}).when("/statistic", {
		templateUrl: "templates/statistic.html",
		controller: "statisticController",
	}).otherwise({ redirectTo: "/" });
	
	//$locationProvider.html5Mode(true);
}]);
