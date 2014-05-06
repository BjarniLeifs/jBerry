// /models/profile.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our profile model
var profileSchema = mongoose.Schema({

	userID		: String,
    email       : String,
    firstName   : String,
    lastName    : String,
    age         : Number,
    birthDay    : Date,
    height      : Number,
    weight      : Number

}, {collection : 'Profiles'});

module.exports = mongoose.model('Profile', profileSchema);
