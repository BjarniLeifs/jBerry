app.controller("MainController", ["$scope", "$location", function($scope, $location) {
	$scope.templates = [{url: '/templates/home.html', lastPath:'home.html'}];
	$scope.isSideBar = true;

	$scope.setTemplate = function(path, hide) {
		if($scope.templates[0].lastPath != path)
			$scope.templates = [{url: "/templates/" + path, lastPath:path}];

		if(hide !== undefined)
			if($scope.isSideBar !== hide)
				$scope.isSideBar = hide;
	};

	$scope.getTemplate = function() {
		return name;
	};
}]);