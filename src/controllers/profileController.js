	app.controller("profileController", ["$scope", "$location", "$http", "profileFactory", "userFactory", 
	function($scope, $location, $http, profileFactory, userFactory) {
		console.log("in controller");

	$scope.profile = {
		user : "",
		firstName : "",
		lastName : "",
		email : "",
		height : "",
		weight : "",
		birthday : ""
	};

	$scope.posts = "";
	$scope.timeline = "";

	$scope.post = function(){
		var data = $scope.timeline;
		console.log(data);
		profileFactory.pushPost(data).success(function(data,status, headers,config){
			console.log(status);

		}).error(function(){
				console.log("error posting");
			});
	};



	profileFactory.getProfile().then(function(respond) {
		if(respond[0].status == 200 && respond[1].status == 200) {
			$scope.profile = respond[0].data;
			$scope.posts = respond[1].data;
		} else {
			$location.path("/login");
		}
	});

	$scope.changeInfo = function(){
		var data = $scope.profile;
		console.log(data.firstName);

		profileFactory.changeProfile(data).success(function(data, status,headers,config){
			console.log(status);
			$location.path("/");
		}).error(function(){
			console.log("Error");
		});
	};

	// Put user as a trainer
	$scope.trainer = function(){
		profileFactory.ImTrainer().then(function(){
			console.log("controller trainer");
		});
			
		
	};
}]);




