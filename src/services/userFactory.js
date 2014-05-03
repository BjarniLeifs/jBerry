app.factory("userFactory", ["$location", "$http", "$q",function($location, $http, $q){
	var user;

	return {
		validUser: function(email, pass){
			return $http.post("http://localhost:3000/api/login", {email : email, password : pass});
		},
		getToken: function(){
			return user.Token;
		},
		setUser: function(newUser) {
			console.log("Inside factory");
			console.log(newUser);
			return $http.post("http://localhost:3000/api/register", {name : newUser.name, email : newUser.email, password : newUser.password});
		},
		getUserName: function(){
			return user.User.Username;
		}
	};
}]);

