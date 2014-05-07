app.factory("blogFactory", ["$location", "$http", "$q", 
	function($location, $http, $q){
		var data;
        return {
			postBlog: function(data){
				return $http.post("http://localhost:3000/api/blog", 
					{title : data.title, body : data.body, tags : data.tags});
			},
			getBlogs: function(){
				return $http.post("http://localhost:3000/api/blog");
			}
        };
	}]);