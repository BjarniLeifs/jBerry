app.controller("blogController", ["$scope", "$location", "$http", "blogFactory",
	function($scope, $location, $http, blogFactory){

		$scope.newBlog = {
			title : "",
			body : "",
			tags : ""

		};


		blogFactory.getBlogs().
		then(function(data){
			$scope.jBerry = data;
			console.log("got some Blogs: " + data.title);
		}, function(errorMessage){
			console.log("Error geting blogs in controller " + errorMessage);
		});


		
		$scope.AddBlog = function(){
			if(!($scope.newBlog.title || $scope.newBlog.body)){
				return;
			}
			var tagArray = $scope.newBlog.tags.split(" ");
			var data = {
				title : $scope.newBlog.title,
				body : $scope.newBlog.body,
				tags : tagArray
			};
			console.log(data);
			blogFactory.postBlog(data).success(function(data, status, headers, config){
				console.log(status);
				if(status === 200) {
					$location.path("/blogs");
					$scope.$apply();
				}
				}).error(function(){
					console.log("Error");
				});
			};

	}]);