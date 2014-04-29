angular.module("BerryApp").controller("loginController", 
	["$scope", "$location", "$http", "loginFactory",
	function($scope, $location, $http, loginFactory){
		$scope.user = "";
		$scope.pass = "";


		//TALAR VIÐ FACTORY TIL AÐ ATH HVORT USER ER TIL
		$scope.connect = function(){
			console.log("in connect");

			loginFactory.checkUserByUsername($scope.user, $scope.pass).
				success(function(user, pass){
				console.log("SUCCESS FUNCTION");
				$location.path("/#");
				$scope.$apply();

			}).error(function(){
				console.log("error function");
					// ERROR WINDOW
				});
		};	
}]);
