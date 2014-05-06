app.factory("blogFactory", ["$location", "$http", "$q", 
	function($location, $http, $q){
		var data = "";
                //			return $http.post("http://localhost:3000/api/register", {name : newUser.name, email : newUser.email, password : newUser.password});

		var obj = {
			postBlog: function(data){
				console.log("in blogFactory");
				console.log(data.title);
				var deferred = $q.defer();

				var request = $http({
					url: "http://localhost:3000/api/blog",
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
					url: "http://localhost:3000/api/blog",
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