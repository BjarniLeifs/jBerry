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
  app.use(express.cookieParser());
  app.use(express.session({ cookie: { maxAge: 9000000 }, secret: 'Xwf434FwWDww22a' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(clientDir));
});


app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res) {
  res.sendfile(path.join(clientDir, 'index.html'));
});

app.post('/api/login', function(req, res) {
  console.log("User: " + req.uname + " logged in.");
  res.send(true);
});

var server = http.createServer(app);



