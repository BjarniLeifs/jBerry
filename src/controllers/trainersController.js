app.controller("trainersController", ["$scope", "$location", "trainersFactory", 
	function($scope, $location, trainersFactory) {

		$scope.trainers = "";


		trainersFactory.getTrainers().then(function(data){
			if(data.status == 200){
				console.log(data.data);
				$scope.trainers = data.data;
			}
		});
	}]);
