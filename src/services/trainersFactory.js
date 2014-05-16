app.factory("trainersFactory", ["$location", "$http", "$q", 
	function($location, $http, $q){
		return{
			
			getTrainers: function(data){
				return $http.put("http://localhost:3000/api/trainers");
			}
		};
	}]);