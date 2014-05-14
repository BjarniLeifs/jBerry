app.controller("MainController", ["$scope", "$location", "userFactory", function($scope, $location, userFactory) {
	$scope.templates = [{url: '/templates/home.html', lastPath:'home.html'}];
	$scope.isSideBar = true;
	$scope.events = [];
	$scope.eventSource = {};

	$scope.calendarConfig = {
		height: $(document).height(),
		editable: false,
		defaultView: 'agendaDay', 
		header: {
			left: '',
			center: '',
			right: ''
		},
	};


	userFactory.getUser().success(function(data, status, headers,config) {
		if (data === "Not logged in") {
			$location.path("/login");
		}
		
		$scope.user = data.local;
		userFactory.saveUser(data.local);
	}).error(function(){
		$location.path("/login");
	});

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

	$scope.eventSources = [$scope.events];
}]);