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
<<<<<<< HEAD
			return $http.post({method: "POST", url: "http://api/register", data: {user:newUser}});
=======
			console.log("Inside factory");
			console.log(newUser);
			return $http.post({method: "POST", url: "http://localhost:3000/api/register", data: {user:newUser}});
>>>>>>> 512ca18c28b13ca8eb0660272b1d43900bb799db
		},
		getUserName: function(){
			return user.User.Username;
		}
	};
}]);

