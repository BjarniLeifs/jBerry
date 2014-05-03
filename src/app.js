var app = angular.module("BerryApp", ["ngRoute"]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl: "templates/Main.html",
		controller: "MainController",
	}).when("/login", {
		templateUrl: "templates/LogIn.html",
<<<<<<< HEAD
		controller: "LogInController",
	}).when("/createBlog", {
		templateUrl: "templates/createBlog.html",
		controller: "blogController",
=======
		controller: "loginController",
	}).when("/createBlog", {
		templateUrl: "templates/createBlog.html",
		controller: "blogController",
	}).when("/blogs", {
		templateUrl: "templates/blogs.html",
		controller: "blogController",
>>>>>>> 85bbeef411ac9fecab312fae133d85caa419e74a
	}).when("/profile", {
		templateUrl: "templates/profile.html",
		controller: "profileController",
	}).when("/checkin", {
		templateUrl: "templates/checkin.html",
		controller: "checkinController",
	}).when("/nutritionopz", {
		templateUrl: "templates/nutritionopz.html",
		controller: "nutritionopzController",
	}).when("/food", {
		templateUrl: "templates/food.html",
		controller: "foodController",
	}).otherwise({ redirectTo: "/" });
	//$locationProvider.html5Mode(true);
<<<<<<< HEAD
}]);

=======
}]);
>>>>>>> 85bbeef411ac9fecab312fae133d85caa419e74a
