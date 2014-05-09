// userR.js

var User = require('../models/user');
var Profile = require('../models/profile');

module.exports = function(app, passport, mongoose) {

// Account 

  // =====================================
  // HOME PAGE (with login links) ========
  // =====================================
  app.get('/', function(req, res) {
    res.sendfile(path.join(clientDir, 'index.html'));
  });

  // process the login form
  app.post('/api/login', passport.authenticate('local-login', {
    successRedirect : '/IamLogIn', // redirect to the secure profile section
    failureRedirect : '/NoDiceLogIn', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));
 

  // process the signup form
  app.post('/api/register', passport.authenticate('local-signup'), function(req, res) {
    console.log("Inn i register");
    console.log(req.user);
    var newProfile = new Profile();
    newProfile.userID = req.user._id;
    newProfile.email = req.body.email;
    newProfile.save(function(err) {
      if (err)
          throw err;
    });
    res.send("User: " + req.body.name + " registered");
  });

  // LOGOUT
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.get('/ping', function(req, res) {
    console.log(req.user);
    res.send("Pong!");
  });


// Profile

  app.put('/api/profile/update', function(req, res) {
    Profile.findOne({"glas@glas.is" : "glas@glas.is"}, function(err, data) {
      if(err)
        throw err;

      // set profile variables
      var newProfile = new Profile();
      newProfile.firstName = req.body.firstName;
      newProfile.lastName = req.body.lastName;
      newProfile.birthDay = req.body.birthDay;
      newProfile.height = req.body.height;
      newProfile.weight = req.body.weight;

      // save the user
      newProfile.save(function(err) {
          if (err)
              throw err;
      });
      console.log(data);
      res.send(200, "Profile updated");
    });
  });

  app.get('/api/profile/:name', function(req, res) {
    Profile.findOne({"userName" : req.params.name}, function(err, data) {
      if(err)
        throw err;

      var sendData = {
        "firstName" : data.firstName,
        "lastName"  : data.lastName,
        "birthDay"  : data.birthDay
      };
      res.send(sendData);
    });
  });

  app.get('/api/profile', function(req, res) {
    console.log("USER: " + req.user);
    Profile.findOne({"userID" : req.user.id}, function(err, data) {
      console.log("USER: " + req.user);
      if(err)
        throw err;
      
      // if(req.params.id === req.user._id) {
      //   res.send(data);
      // }
      // else {
      //   res.redirect('/');
      // }
    });
  });

  app.get('/api/isLoggedIn', isLoggedIn, function(req, res) {
    res.send(200);
  });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
