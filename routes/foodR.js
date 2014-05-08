var Matis = require('../models/food');
var Recipe = require('../models/recipe');

module.exports = function(app) {

	//Search name 
	app.get('/api/food/getByName/:name', function(req, res) {

		var re = new RegExp(req.params.name, 'i');

		Matis.find({Name:re}, {Name:1, Adalfl:1, _id:0}).limit(50).setOptions({lean:true}).exec(function(err, results) {
			results.sort(function(a, b) {
				console.log(a.Name.toLowerCase().indexOf(req.params.name.toLowerCase()));
				console.log(re);
				return a.Name.toLowerCase().indexOf(req.params.name.toLowerCase()) - b.Name.toLowerCase().indexOf(req.params.name.toLowerCase());
			});
			res.send(results);
		});
	});

	app.post('/api/recipe', function(req, res) {
		var newRecipe = new Recipe();
		newRecipe.userID = req.user._id;
		newRecipe.title = req.body.title;
		newRecipe.steps = req.body.steps;
		newRecipe.ingredients = req.body.ingredients;
		newRecipe.tags = req.body.tags;

		newRecipe.save(function(err) {
			if (err)
				throw err;
		});
		res.send(200, "OK");
	});
};