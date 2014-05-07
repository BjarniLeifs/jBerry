app.controller("browseController", ["$scope", "$location", "foodFactory", function($scope, $location, foodFactory) {
	$scope.selected = undefined;
	
	$scope.$item = undefined;
	$scope.$model = undefined;
	$scope.$label = undefined;

	$scope.option = {A:10, B:15, C:20, D:[5.5, 30]};
	$scope.optionD = {min: 200, max: 700};

	$scope.onSelect = function ($item, $model, $label) {
		$scope.$item = $item;
		$scope.$model = $model;
		$scope.$label = $label;

		console.log("Item:" + $item + ", Model:" + $model + ", label:" + $label);
	};

	$scope.currencyFormatting = function(value) { 
		return value.toString() + " $";
	};

	$scope.getName = function(name) {
		var names = name.split(", ");

		return $scope.toTitle(names[0]);
	};

	$scope.getSubName = function(name) {
		if(name.indexOf(", ") <= -1)
			return "";

		var names = name.split(", ");
		var subTitle = names[1];

		for (var i = 2; i < names.length; i++) {
			subTitle += '/' + names[i];
		}

		return $scope.toTitle(subTitle);
	};

	$scope.toTitle = function(name) {
		return (name.toLowerCase()).charAt(0).toUpperCase() + name.slice(1);
	};

	$scope.updateTypeHead = function() {
		foodFactory.getFoodByName($scope.selected).success(function(data, status, headers, config){
			if(status === 200) {
				$scope.food = data;
			}
		}).error(function(){
			console.log("Error");
		});
	};
}]);