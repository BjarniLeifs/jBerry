app.factory("foodFactory", ["$location", "$http", "$q",function($location, $http, $q){
	
	return {
		getFoodByName: function(itemName) {
			return $http.get('http://localhost:3000/api/food/getByName/'+itemName);
		}
	};
}]);

