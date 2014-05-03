var app = angular.module("BerryApp", ["ngRoute"]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl: "templates/Main.html",
		controller: "MainController",
	}).when("/login", {
		templateUrl: "templates/LogIn.html",
		controller: "loginController",
<<<<<<< HEAD
	}).when("/newblog", {
		templateUrl: "templates/newBlog.html",
		controller: "blogController",
	}).when("/blogs", {
		templateUrl: "templates/blogs.html",
=======
	}).when("/createBlog", {
		templateUrl: "templates/createBlog.html",
>>>>>>> 512ca18c28b13ca8eb0660272b1d43900bb799db
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
	}).when("/measurements", {
		templateUrl: "templates/measurements.html",
		controller: "measurementsController",
	}).when("/food", {
		templateUrl: "templates/food.html",
		controller: "foodController",
	}).otherwise({ redirectTo: "/" });
	//$locationProvider.html5Mode(true);
}]);
