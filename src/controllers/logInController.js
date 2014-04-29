app.controller("loginController", ["$scope", "$location", "$http", "loginFactory",function($scope, $location, $http, loginFactory){
		$scope.user = "";
		$scope.pass = "";

		$scope.connect = function(){
			userFactory.validUser($scope.user, $scope.pass).success(function(data, status, headers, config){
				if(status == 200) {
					userFactory.setUser(data);
					$location.path("/#");
					$scope.$apply();
				}
			}).error(function(){
			
			});
		};
}]);
