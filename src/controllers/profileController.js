app.controller("profileController", ["$scope", "$location", "$http", "profileFactory", "userFactory", 
	function($scope, $location, $http, profileFactory, userFactory) {
		console.log("in controller");

	$scope.profile = {
		user : "",
		firstName : "",
		lastName : "",
		email : "",
		height : "",
		weight : ""
	};

	$scope.timeline = "";

	profileFactory.getProfile().then(function(respond) {
		if(respond[0].status == 200 && respond[1].status == 200) {
			$scope.profile = respond[0];
			$scope.timeline = respond[1];
		} else {
			$location.path("/login");
		}
	});

	$scope.changeInfo = function(){
		var data = $scope.profile;
		console.log(data.firstName);

		profileFactory.changeProfile(data).success(function(data, status,headers,config){
			console.log(status);
		}).error(function(){
			console.log("Error");
		});
	};
}]);