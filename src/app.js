var app = angular.module("BerryApp", ['ngRoute', 'ui.bootstrap', 'ui.slider']);

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
		templateUrl: "templates/newBlog.html",
		controller: "blogController",
	}).when("/blogs", {
		templateUrl: "templates/blogs.html",
		controller: "blogController",
	}).when("/checkin", {
		templateUrl: "templates/checkin.html",
		controller: "checkinController",
	}).when("/nutritionopz", {
		templateUrl: "templates/nutritionopz.html",
		controller: "nutritionopzController",
	}).when("/recipes/browse", {
		templateUrl: "templates/recipes/browse.html",
		controller: "browseController",
	}).when("/recipes/add", {
		templateUrl: "templates/recipes/add.html",
		controller: "addController",
	});
	
	//$locationProvider.html5Mode(true);
}]);
