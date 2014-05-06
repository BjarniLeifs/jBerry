app.factory("profileFactory", ["$location", "$http", "$q", 
	function($location, $http, $q){


		var obj = {

			getTimelineData: function(){
				var deferred = $q.defer();
				var request = $http({
					method: "GET",
					url: "http://#",
				}).success(function(data, status, headers, config){
					console.log("success geting all timelineBLOGS from factory");
					console.log(data);
					deferred.resolve(data);
				}).error(function(data, status, headers, config){
					console.log("fail geting timelineBLOGS in factory");
					deferred.reject(request);
				});
				return deferred.promise;
			},

			getTimelineData: function(){
				var deferred = $q.defer();
				var request = $http({
					method: "GET",
					url: "http://#",
				}).success(function(data, status, headers, config){
					console.log("success geting all userProfile from factory");
					console.log(data);
					deferred.resolve(data);
				}).error(function(data, status, headers, config){
					console.log("fail geting userProfile in factory");
					deferred.reject(request);
				});
				return deferred.promise;
			},


		};

		return obj;

		}]);