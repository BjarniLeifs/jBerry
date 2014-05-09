app.controller("profileController", ["$scope", "$location", "$http", "profileFactory", 
	function($scope, $location, $http, profileFactory) {
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
	
	profileFactory.getBlogsData().success(function(data, status,headers,config){
		if(status === 200) {
				console.log(status);
				console.log(data);
				$scope.timeline = data;
		}
	}).error(function(){
			console.log("getBlogsData Error");
	}); 

	profileFactory.getProfile().
	success(function(data, status, headers,config){
	
			console.log("geting user: " + data);
			$scope.profile = data;
			console.log("got some profiles in controller");
			//$scope.profile = data;

	}).error(function(){
			console.log("getProfile Error");
		});

	$scope.changeInfo = function(){
		var data = $scope.profile;
		console.log(data.firstName);

		profileFactory.changeProfile(data)
		.success(function(data, status,headers,config){
			console.log(status);
		}).error(function(){
					console.log("Error");
				});
	};
}]);