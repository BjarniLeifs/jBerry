module.exports = function(app) {

  app.get('/foo', function(req, res) {
    res.send("bar");
  });

};