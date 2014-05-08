// /models/profile.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our profile model
var profileSchema = mongoose.Schema({

	userID		: String,
	userName	: String,
    email       : String,
    firstName   : String,
    lastName    : String,
    birthDay    : Date,
    height      : Number,
    weight      : Number,
    trainerID	: String
    messages	: [{senderID : String, title : String, message : String, time : {type : Date, default: Date.now}}]

}, {collection : 'Profiles'});

module.exports = mongoose.model('Profile', profileSchema);
