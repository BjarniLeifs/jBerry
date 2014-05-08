var Matis = require('../models/food');

module.exports = function(app) {

	//---able to search the database by querying part of a name, in upper- and lowercase----
	app.get('/api/food/getByName/:name', function(req, res) {
		var re = new RegExp(req.params.name, 'i');

		var q = Matis.find({Name:re}, {Name:1, _id:0, Fita:1}).limit(50);
		//.sort([[Name.indexOf(re),'1']])
		q.exec(function(err, results) {
			res.send(results);
		});
	});
};