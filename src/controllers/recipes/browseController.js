app.controller("browseController", ["$scope", "$location", function($scope, $location) {
	$scope.selected = undefined;
	$scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
	$scope.$item = undefined;
	$scope.$model = undefined;
	$scope.$label = undefined;

	$scope.option = {A:10, B:15, C:20, D:0};
	$scope.optionD = {min: 200, max: 700};

	$scope.demoVals = {
		sliderExample3:     14,
		sliderExample4:     14,
		sliderExample5:     50,
		sliderExample8:     0.34,
		sliderExample9:     [-0.52, 0.54],
		sliderExample10:     -0.37
	};

	$scope.food = [{ "Nafn":"SKYR", "Name":"Skyr, pasteurized", "Fæðuflokkur":"Mjólkurvara", "Aðalfl.":1, "Undirfl.":2, "Ætur hluti":100, "Protein":11.5, "Fita":0.25, "Mettaðar fitusýrur":0.12, "cis-Einómettaðar fitusýrur":0.05, "cis-Fjölómettaðar fitusýrur":0, "cis-Fjölómettaðar fitus. n-3 langar":0, "trans-Fitusýrur":0.01, "Kólesteról":2, "Kolvetni, alls":3, "Sykrur":3, "Viðbættur sykur":0, "Trefjaefni":0, "Alkóhól":0, "Steinefni, alls":0.8, "Vatn":83.3, "A-vítamín, RJ":1.9, "Retinol":1.8, "Beta-karótín":0.9, "D-vítamín":0.007, "E-vítamín, alfa-TJ":0.005, "B1-vítamín":0.077, "B2-vítamín":0.202, "Níasín-jafngildi":2.8, "Níasín":0.13, "B6-vítamín":0.067, "Fólat, alls":28.3, "B-12 vítamín":0.36, "C-vítamín":0.1, "Kalk":100, "Fosfór":192, "Magnesíum":9.4, "Natríum":32, "Kalíum":123, "Járn":0.045, "Sink":0.521, "Kopar":0.016, "Joð":23, "Selen":6.43, "cis-Fjölómettaðar fitus. n-6":null, "cis-Fjölómettaðar fitus. n-3":null}];

	$scope.onSelect = function ($item, $model, $label) {
		$scope.$item = $item;
		$scope.$model = $model;
		$scope.$label = $label;

		console.log("Item:" + $item + ", Model:" + $model + ", label:" + $label);
	};

	$scope.currencyFormatting = function(value) { 
		return value.toString() + " $"; 
	};

	$scope.getName = function(name, index) {
		if(name.indexOf(", ") <= -1)
			return name.toLowerCase();

		var names = name.split(", ");
		$scope.food[index].subName = names[1];

		return (names[0].toLowerCase()).charAt(0).toUpperCase() + names[0].slice(1);
	};

}]);