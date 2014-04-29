app.controller("MainController", ["$scope", "$location", "$timeout", "UserService", "EvaluationsService", "HtmlService", function($scope, $location, $timeout, UserService, EvaluationsService, HtmlService) {
	$scope.user = UserService.getUser();
	$scope.checked = [];
	$scope.template = "";
	$scope.results = "";

	EvaluationsService.getData().then(function(respond) {
		if(respond[0].status == 200 && respond[1].status == 200 && respond[2].status == 200) {
			$scope.userStruct = EvaluationsService.setStruct(respond[0].data, respond[1].data, respond[2].data);
		}
	});
	
	$scope.isAdmin = function(){
		return UserService.isAdmin();
	};
	
	$scope.goBuild = function () {
		$location.path("/builder");
	};
	
	$scope.templateExists = function() {
		return $scope.template !== "";
	};
	
	$scope.resultExists = function() {
		return $scope.results !== "";
	};
	
	$scope.submitEval = function() {
	
		EvaluationsService.saveForm($scope.template.course, $scope.template.ID, $scope.evaluationResults).then(function(respond) {
			if(respond.status == 200) {
				$scope.template = "";
			} else {
				console.log("Error on submit");
			}
		});
	};
	
	
	

}]);