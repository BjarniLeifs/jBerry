mongoose.connect('mongodb://localhost:27017');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('Connected to DB');
});
var userSchema = mongoose.Schema({
    username: String,
    password: String
});
userSchema.methods.validPassword = function (password) {
  if (password === this.password) {
    return true; 
  } else {
    return false;
  }
};

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username : String,
    password : String
});

mongoose.model('Document', UserSchema);
var User = mongoose.model('Document');

var user = new User();

user.username = 'Jim';
user.password = '123';
user.save(function(err, new_user){
  if(err) return console.error("Error while saving data to MongoDB: " + err); // <- this gets executed when there's an error
   console.error(new_user); // <- this never gets logged, even if there's no error.
});

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new LocalStrategy(function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { 
        return done(err); 
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash: true
  })
);