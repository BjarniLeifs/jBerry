var Matis = require('../models/food');
var Recipe = require('../models/recipe');

module.exports = function(app) {

	//Search name 
	app.get('/api/food/getByName/:name', function(req, res) {
		var q = Matis.find({Name: {$regex : ".*"+ req.params.name +".*"}}).limit(50);

		q.exec(function(err, results) {
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