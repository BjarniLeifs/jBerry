app.factory("userFactory", ["$location", "$http", "$q",function($location, $http, $q){
	var user;

	return {
		validUser: function(user, pass){
			return $http.post({method: "POST", url: "http://api/login", data: {user:user, password:pass}});
		},
		getToken: function(){
			return user.Token;
		},
		setUser: function(newUser) {
			return $http.post({method: "POST", url: "http://api/register"})
		},
		getUserName: function(){
			return user.User.Username;
		}
	};
}]);

