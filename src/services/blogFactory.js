app.factory("blogFactory", ["$location", "$http", "$q", 
	function($location, $http, $q){
		var data = "";
                
		var obj = {
			postBlog: function(data){
				console.log("in blogFactory");
				var deferred = $q.defer();

				var request = $http({
					url: "http://#",
					method: "POST",
					data: data,
				}).success(function(data, status, headers, config){
					console.log("postBlog Successful YEJ in factory");
					console.log(data);
					deferred.resolve(data);
				}).error(function(data, status, header, config){
					console.log("Fail posting blog :( in factory ");
						deferred.reject(request);
				});
				return deferred.promise;
			},

			setData: function(info){
				data = info;
			},

			getBlogs: function(){
				var deferred = $q.defer();
				var request = $http({
					method: "GET",
					url: "http://#",
				}).success(function(data, status, headers, config){
					console.log("success geting all blogs from factory");
					console.log(data);
					deferred.resolve(data);
				}).error(function(data, status, headers, config){
					console.log("fail geting blogs in factory");
					deferred.reject(request);
				});
				return deferred.promise;
			},
		};
		return obj;
	}]);