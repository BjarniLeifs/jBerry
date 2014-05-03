app.controller("loginController", ["$scope", "$location", "$http", "userFactory",function($scope, $location, $http, userFactory){
	$scope.reg = {name: '', email: '', password:'', conpassword: ''};
	$scope.email = "";
	$scope.pass = "";

	$scope.connect = function(){
		if(!($scope.email && $scope.pass))
			return;
		console.log($scope.email);
		userFactory.validUser($scope.email, $scope.pass).success(function(data, status, headers, config){
			console.log(status);
			if(status === 200) {
				//$location.path("/#/");
			}
		}).error(function(){
			console.log("Error");
		});
	};

	$scope.register = function(){
		console.log("Inside loginController");
		if(!$scope.reg)
			return;

		userFactory.setUser($scope.reg).success(function(data, status, headers, config){
			if (status === 200) {
				userFactory.setUser(data);
				$location.path("/#");
				$scope.$apply();
			}
		}).error(function(){
			console.log("Error");
		});

	};
}]);
