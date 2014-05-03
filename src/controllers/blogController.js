app.controller("blogController", ["$scope", "$location", "$http", "blogFactory",
	function($scope, $location, $http, blogFactory){
		

		$scope.jBerry = {
			title: "",
			tags : [],
			textbox : "",
			blogs : []
		};


		blogFactory.getBlogs().
		then(function(data){
			$scope.blogs = data;
			console.log("got some Blogs: " + data.title);
		}, function(errorMessage){
			console.log("Error geting blogs in controller " + errorMessage);
		});



		$scope.submitblog = function(){
			console.log("Submitting blog check from controller");
			blogFactory.postBlog($scope.jBerry).then(function(data){
				blogFactory.setData($scope.jBerry);
			}, function(errorMessage){
				console.log("Error posting blog: " + errorMessage);
			});
		};




	}]);