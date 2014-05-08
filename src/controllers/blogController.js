app.controller("blogController", ["$scope", "$location", "$http", "blogFactory",
	function($scope, $location, $http, blogFactory){

		$scope.blogs="";
		var id = "";
		var favs = "";
		
		

	console.log("AFLDFNLMDLKFS");
		blogFactory.getBlogs().success(function(data, status, headers, config){
			if(status === 200) {
				console.log(status);
				console.log(data);
				$scope.blogs = data;
				
				
			}
		}).error(function(){
			console.log("Error");
		}); 

		$scope.favsCounter = function(_id){
			
			console.log("id: " + _id);
			favs += 1;
			console.log("favs: " + favs);
			var data = {
				id   : _id,
				favs : favs
			};
			console.log("data in favsCount: " + data);
			blogFactory.addFavs(data).success(function(data, status, headers, config){
				console.log(status);
				}).error(function(){
					console.log("Error");
				});

		};
}]);

