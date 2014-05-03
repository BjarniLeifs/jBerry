app.factory("userFactory", ["$location", "$http", "$q",function($location, $http, $q){
	var user;

	return {
		validUser: function(user, pass){
			return $http.post({method: "POST", url: "http://localhost:3000/api/login", data: {user:user, password:pass}});
		},
		getToken: function(){
			return user.Token;
		},
		setUser: function(newUser) {
			console.log("Inside factory");
			console.log(newUser);
			return $http.post({method: "POST", url: "http://localhost:3000/api/register", data: {user:newUser}});
		},
		getUserName: function(){
			return user.User.Username;
		}
	};
}]);

