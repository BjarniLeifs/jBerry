app.factory("messagesFactory", ["$location", "$http", "$q", 
	function($location, $http, $q){
		return {

			sendMessage: function(data){
				return $http.post("http://localhost:3000/api/blog", 
					{	title	: data.title, 
						message	: data.body,
						recID	: data.recID
					}
				);
			},

			getMessages: function(){
				return $http.get("http://localhost:3000/api/messages");
			},

			getUsers: function(){
				return $http.get("http://localhost:3000/api/userpublicinfo");
			}
		};

	}]);