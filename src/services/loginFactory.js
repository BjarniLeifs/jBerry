<<<<<<< HEAD
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
					url: "/api/login",
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
			};
		return obj;
		}]);
=======
app.factory("loginFactory", ["$location", "$http", "$q",function($location, $http, $q){
	var user;

	return {
		validUser: function(user, pass){
			return $http.post({method: "POST", url:"http://dispatch.ru.is/h24/api/v1/login", data: {user:user, password:pass}});
		},
		getToken: function(){
			return user.Token;
		},
		setUser: function(newUser) {
			user = newUser;
		},
		getUserName: function(){
			return user.User.Username;
		}
	};
}]);
>>>>>>> 401422cff2f83b5ecb3d485e0b71af11ae11b4bc
