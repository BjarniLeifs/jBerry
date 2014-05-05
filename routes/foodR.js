var Matis = require('../models/food');

module.exports = function(app, mongoose) {

	//---able to search the database by querying part of a name, in upper- and lowercase----
	app.get('/api/food/getByName', function(req, res) {
	  var re = new RegExp(req.query.name, 'i');
	  Matis.find({Nafn:re}, function(err, results) {
	    res.send(results);
	  });
	});

};