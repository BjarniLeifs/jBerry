// routes.js

var User = require('./models/user');
var Profile = require('./models/profile');

module.exports = function(app, passport, mongoose) {

// Account 

  // =====================================
  // HOME PAGE (with login links) ========
  // =====================================
  app.get('/', function(req, res) {
    res.sendfile(path.join(clientDir, 'index.html'));
  });

  // process the login form
  // app.post('/login', do all our passport stuff here);
  app.post('/api/login', passport.authenticate('local-login', {
    successRedirect : '/IamLogIn', // redirect to the secure profile section
    failureRedirect : '/NoDiceLogIn', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));
 

  // process the signup form
  app.post('/api/register',  passport.authenticate('local-signup'), 
    function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
      res.redirect('/api/users/' + req.body.name);
  });

  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.get('/ping', isLoggedIn, function(req, res) {
    res.send("Pong!");
  });


// Profile

  app.post('/api/profile/update/:name', function(req, res) {
    res.send("Updating: " + req.params.name);
        var newProfile = new Profile();
    console.log(req.body);
    // set the user's local credentials
    newProfile.fNname = req.body.fName;
    newProfile.email = req.body.email;
    newProfile.birthDay = new Date();
    newProfile.height = req.body.height;
    newProfile.weight = req.body.weight;

    // save the user
    newProfile.save(function(err) {
        if (err)
            throw err;
    });
  });

  app.get('/api/profile/:name', function(req, res) {

  });

  app.get('/api/profile/public/:name', function(req, res) {
    Profile.findOne({}, function(err, data){
      console.log(data);
    })
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
