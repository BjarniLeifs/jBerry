app.controller("profileController", ["$scope", "$location", 
	function($scope, $location) {
	$scope.user = {
		user:"",
		firstName: "",
		lastName: "",
		email: "",
		height: "",
		weight: ""
	};

	$scope.timeline = {
		autor: "",
		title: "",
		text: "",
		date: "",
		tags: []
	};

	profileFactory.getTimelineData().
	then(function(data){
		$scope.timeline = data;
		console.log("got some timeline blog" + data.title);
	}, function(errorMessage){
		console.log("Error getting blog to timeline in controller: " + errorMessage);
	});

	profileFactory.getUser().
	then(function(datsa){
		$scope.user = data;
		console.log("got some user in controller" + user.user);
	},function(errorMessage){
		console.log("Error geting user in controller: " + errorMessage);
	});




}]);