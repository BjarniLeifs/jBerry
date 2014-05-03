var express = require('express'),
  http = require('http'),
  path = require('path'),
  MongoStore = require('connect-mongo')(express),
  passport = require('passport'),
  mongodb = require('mongodb'),
  mongoose = require('mongoose'),
  LocalStrategy = require('passport-local').Strategy,
  app = express();


var clientDir = path.join(__dirname, '/');

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.cookieParser('Xwf434FwWDww22a'));
  app.use(express.session());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(clientDir));
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// passport config
var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// mongoose
//mongoose.connect('mongodb://localhost:27017');

app.get('/', function(req, res) {
  res.sendfile(path.join(clientDir, 'index.html'));
});

var server = http.createServer(app);


//---Connect to database and search for BLÓMKÁL, hrátt. Then print out the result---
//var MongoClient = require('mongodb').MongoClient, format = require('util').format;

//MongoClient.connect('mongodb://127.0.0.1:27017/matisGagnagrunnur', function(err, db) {
  //  if(err) throw err;

    //var collection = db.collection('mainGrunnur');

    // Locate all the entries using find
    //var item = collection.find({"Nafn":foodItem}).toArray(function(err, results) {
        // Let's close the db
      //  db.close();
        //return results;
    //});
//});





server.listen(app.get('port'), function(){
  console.log("Web server listening in  on port %d", app.get('port'));
});
