app.factory("foodFactory", ["$location", "$http", "$q",function($location, $http, $q){
	
	return {
		getFoodByName: function(itemName) {
			return $http.get({url: 'http://localhost:3000/api/food/getByName', params: {name: itemName}});
		}
	};
}]);

