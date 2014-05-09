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

			getProfile: function(data){
				return $http.get("http://localhost:3000/api/profile/");
			},

			changeProfile: function(data){
				//console.log("change profile factory: " + data.firstName);
				return $http.put("http://localhost:3000/api/profile/update",
					{
						firstName	: data.firstName,
						lastName	: data.lastName,
						height		: data.height,
						weight		: data.weight,
						email		: data.email 
					});

			},


		};
	}]);