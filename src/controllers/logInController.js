<<<<<<< HEAD
app.controller("loginController", ["$scope", "$location", "$http", "loginFactory",function($scope, $location, $http, loginFactory){
		$scope.user = "";
		$scope.pass = "";
		$scope.realName = "";

		$scope.connect = function(){
			userFactory.validUser($scope.user, $scope.pass)
			.success(function(data, status, headers, config){
				if(status == 200) {
					userFactory.validUser(data);
					$location.path("/#");
					$scope.$apply();
				}
			}).error(function(){
			
			});
		};

		$scope.register = function(){
			userFactory.setUser($scope.realName, $scope.user, $scope.pass)
			.success(function(data, status, headers, config){
				if (status == 200) {
					userFactory.setUser(data);
					$location.path("/#");
					$scope.$apply();
				}
			}).error(function(){
				
			});

		};
=======
app.controller("loginController", ["$scope", "$location", "$http", "userFactory",function($scope, $location, $http, userFactory){
	$scope.reg = {name: '', email: '', password:'', conpassword: ''};
	$scope.email = "";
	$scope.pass = "";

	$scope.connect = function(){
		if(!($scope.email && $scope.pass))
			return;


		userFactory.validUser($scope.email, $scope.pass).success(function(data, status, headers, config){
			if(status === 200) {
				userFactory.validUser(data);
				$location.path("/#/");
				$scope.$apply();
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
>>>>>>> 85bbeef411ac9fecab312fae133d85caa419e74a
}]);
