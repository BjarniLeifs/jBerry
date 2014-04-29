angular.module("BerryApp").factory("loginFactory", [
	"$location", "$http", "$q",
 	function($location, $http, $q){
 		//User data
 		var data = {
 			Token: "",
 			User: {
 				Email: "",
 				FullName: "",
 				ImageURL: "",
 				Role: "",
 				SSN: "",
 				Username: ""
 			}
 		};
		
		var obj = {
			//Checkar á user
			checkUserByUsername: function(user, pass){
				var loginData = {
					"user": user,
					"pass": pass
				};
				var deferred = $q.defer();
				var request = $http({
					method: "POST", 
					url: "http://dispatch.ru.is/h24/api/v1/login",
					data: loginData
				});
				data = data.data;
				deferred.resolve(request);
				return deferred.promise;
			},
				setData: function(user){
					data = user;
				},

				getToken: function(){
					return data.Token;
				},

				getUser: function(){
					return data.User.Username;
				}
			} 
		return obj;
	 	}]);