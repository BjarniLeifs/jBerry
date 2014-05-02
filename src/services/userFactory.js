app.factory("userFactory", ["$location", "$http", "$q",function($location, $http, $q){
	var user;

	return {
		validUser: function(user, pass){
<<<<<<< HEAD
			return $http.post({method: "POST", url: "http://api/login", data: {user:user, password:pass}});
=======
			return $http.post({method: "POST", url: "http://localhost:3000/api/login", data: {user:user, password:pass}});
>>>>>>> 85bbeef411ac9fecab312fae133d85caa419e74a
		},
		getToken: function(){
			return user.Token;
		},
		setUser: function(newUser) {
<<<<<<< HEAD
			return $http.post({method: "POST", url: "http://api/register"});
=======
			console.log("Inside factory");
			console.log(newUser);
			return $http.post({method: "POST", url: "http://localhost:3000/api/register", data: {user:newUser}});
>>>>>>> 85bbeef411ac9fecab312fae133d85caa419e74a
		},
		getUserName: function(){
			return user.User.Username;
		}
	};
}]);

