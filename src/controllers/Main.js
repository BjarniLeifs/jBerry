app.controller("MainController", ["$scope", "$location", function($scope, $location) {
	$scope.templates = [{url: '/templates/statistic.html'}];
	$scope.isSideBar = true;

	$scope.setTemplate = function(path, hide) {
		$scope.templates = [{url: "/templates/" + path}];

		if(hide !== undefined)
			$scope.isSideBar = hide;
	};

	$scope.getTemplate = function() {
		return name;
	};
}]);