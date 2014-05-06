var Matis = require('../models/food');

module.exports = function(app) {

	//---able to search the database by querying part of a name, in upper- and lowercase----
	app.get('/api/food/getByName/:name', function(req, res) {
		var val = req.params.name;
		//var re = new RegExp('^'+val, 'i'); ---results have 'val' as prefix
		var re = new RegExp(val, 'i');
		Matis.find({Nafn:re}, {Nafn:1, _id:0}, {sort:'Nafn'}, function(err, results) {
			res.send(results);
		});
	});
};