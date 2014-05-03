// routes.js
module.exports = function(app, passport) {

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

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/notLoggedIn');
}
