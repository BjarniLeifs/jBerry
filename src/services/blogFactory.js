app.factory("blogFactory", ["$location", "$http", "$q", 
	function($location, $http, $q){
		var data;
        return {
			postBlog: function(data){
				return $http.post("http://localhost:3000/api/blog", 
					{title : data.title, body : data.body, tags : data.tags});
			},
			getBlogs: function(){
				return $http.get("http://localhost:3000/api/blog");
			},
			addFavs: function(data){
				console.log("factory: " + data.favs + " id: " + data.id);	
				return $http.post("http://localhost:3000/api/blog",
				{ data: {_id : data.id, favs : data.favs }});
			},
	};

}]);