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