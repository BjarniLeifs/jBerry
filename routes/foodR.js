var Matis = require('../models/food');

module.exports = function(app) {

	//Search name 
	app.get('/api/food/getByName/:name', function(req, res) {
		//var ret = new RegExp('^'+req.params.name, 'i');

		var re = new RegExp(req.params.name, 'i');

		var q = Matis.find({Name: {$regex : ".*"+ req.params.name +".*"}}).limit(50);

		q.exec(function(err, results) {
			res.send(results);
		});
	});
};