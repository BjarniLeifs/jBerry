var Matis = require('../models/food');

module.exports = function(app) {

	//---able to search the database by querying part of a name, in upper- and lowercase----
	app.get('/api/food/getByName/:name', function(req, res) {
		//var ret = new RegExp('^'+req.params.name, 'i');
		var re = new RegExp(req.params.name, 'i');
		var q = Matis.find({Nafn:re}, {Nafn:1, _id:0}).sort('Nafn').limit(50);
		q.exec(function(err, results) {
			res.send(results);
		});
	});
};