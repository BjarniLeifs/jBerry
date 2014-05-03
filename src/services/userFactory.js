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
<<<<<<< HEAD
			console.log(newUser);
			return $http.post("http://localhost:3000/api/register", {name : newUser.name, email : newUser.email, password : newUser.password});
=======
			return $http.post({method: "POST", url: "http://localhost:3000/api/register", data: {user:newUser}});

>>>>>>> b78231eb3320a380b487a39dd7c24dbd4df621bd
		},
		getUserName: function(){
			return user.User.Username;
		}
	};
}]);

