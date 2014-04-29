if (!process.env.NODE_ENV) process.env.NODE_ENV='development'

var express = require('express')
  , http = require('http')
  , path = require('path')
  //, cars = require('./server/api/cars')

var app = express()

var clientDir = path.join(__dirname, '/')

app.configure(function() {
  app.set('port', process.env.PORT || 3000)
  app.use(express.favicon())
  app.use(express.logger('dev'))
  app.use(express.bodyParser()) 
  app.use(app.router) 
  app.use(express.static(clientDir)) 
})

app.configure('development', function(){
  app.use(express.errorHandler());
})

app.get('/', function(req, res) {
  res.sendfile(path.join(clientDir, 'index.html'))
})

/*
app.get('/api/cars', cars.list) 

app.get('/api/cars/total', cars.total) //placement matters

app.get('/api/cars/:id', cars.read) //sometimes called 'show'
app.post('/api/cars', cars.create)
app.put('/api/cars/:id', cars.update)
app.del('/api/cars/:id', cars.del)
*/
app.get('/api/login', function(req, res) {
  res.send(true);
  console.log("User: " + req.uname + " logged in.");
});

var server = http.createServer(app)


server.listen(app.get('port'), function(){
  console.log("Web server listening in  on port %d", app.get('port'));
});


