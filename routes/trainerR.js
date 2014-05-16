// trainerR.j

var User = require('../models/user');

module.exports = function(app, passport, mongoose) {

  app.get('/api/trainers', function(req, res) {
    User.find({"isTrainer" : "true"}, function(err, data){
      res.send(data);
    });
  });

  app.put('/api/settrainer', function(req, res) {
    User.update({"_id" : req.body.ID}, {"isTrainer" : "true"});
  });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/notLoggedIn');
}
