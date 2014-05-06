var Matis = require('../models/food');

module.exports = function(app, mongoose) {

	//---able to search the database by querying part of a name, in upper- and lowercase----
	app.get('/api/food/getByName/:name', function(req, res) {
	  var re = new RegExp(req.params.name, 'i');
	  Matis.find({Nafn:re}, function(err, results) {
	    res.send(results);
	  });
	});

};