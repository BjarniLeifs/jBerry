// userR.j

var User = require('../models/user');
var Blog = require('../models/blog');

module.exports = function(app, passport, mongoose) {

  //Blogs

  app.post('/api/blog', function(req, res) {
    var newBlog = new Blog();
    newBlog.title = req.body.title;
    newBlog.body = req.body.body;
    newBlog.author = req.user.local.name;
    newBlog.edited = false;
    newBlog.meta.votes = 0;
    newBlog.meta.favs = 0;
    newBlog.tags = req.body.tags;

    // save the blog
    newBlog.save(function(err) {
        if (err)
            throw err;
    });
  });

  app.get('/api/blog', function(req, res) {
    Blog.find({}, function(err, data){
      console.log(data);
      res.send(data);
    }).sort({title : 'desc'});
  });

  // Comments

  app.put('/api/blog/comment', function(req, res) {
    Blog.findOne({_id : req.body._id}, function(err, data){
      var newComment = {
        commenter : req.user.local.name,
        body: req.body.comment
      };
      data.comments.push(newComment);
      data.save(function(err) {
        if (err)
            throw err;
      });
    });
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
