// /models/profile.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our profile model
var profileSchema = mongoose.Schema({

    email       : String,
    firstName   : String,
    lastName    : String,
    age         : Number,
    birthDay    : Date,
    height      : Number,
    weight      : Number

}, {collection : 'Profiles'});

// methods ======================
// generating a hash
/*
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};
*/
// create the model for users and expose it to our app


module.exports = mongoose.model('Profile', profileSchema);
