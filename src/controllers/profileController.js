app.controller("profileController", ["$scope", "$location", "$http", "profileFactory", 
	function($scope, $location, $http, profileFactory) {
	
	$scope.profiles = "";
	$scope.timeline = "";

	$scope.fuck = "FUUUUUUCK!";
console.log("in controller");



	profileFactory.getBlogsData().success(function(data, status,headers,config){
		if(status === 200) {
				console.log(status);
				console.log(data);
				$scope.timeline = data;
		}
	}).error(function(){
			console.log("Error");
	}); 

	profileFactory.getProfile().success(function(data, status,headers,config){
		if(status === 200){
			console.log("got some profiles in controller" + user.user);
			$scope.profiles = data;
		}
		
	}).error(function(){
			console.log("Error");
	});
}]);