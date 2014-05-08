app.factory("profileFactory", ["$location", "$http", "$q", 
	function($location, $http, $q){
		var data;

		return { 

			getBlogsData: function(data){
				return $http.get("http://localhost:3000/api/blog");
		},

			addFavs: function(data){
				console.log("id: " + data.id);	
				return $http.put("http://localhost:3000/api/blog/meta/favs",
				{_id : data.id});
			},

			addComments: function(data){
				console.log("dataFactory: " + data.comment);	
				return $http.put("http://localhost:3000/api/blog/comment",
				{	_id		:data.id, 
					comment	:data.comment
				});
			},

			getProfile: function(data, user){
				console.log("get user factory" + data + " " + user);
				return $http.get("http://localhost:3000/api/profile/:" + user);
			},

			changeProfile: function(data, user){
				console.log("change profile factory" + data + " " + user);
				return $http.put("http://localhost:3000/api/profile/update");
			}


		};
	}]);