// /models/recipe.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our recipe model
var recipeSchema = mongoose.Schema({

	userID		: String,
    title       : String,
    body		: String,
    lastName    : String,
    age         : Number,
    birthDay    : Date,
    height      : Number,
    weight      : Number,
    steps		: [],
    ingredients	: []

}, {collection : 'Recipes'});

module.exports = mongoose.model('Recipes', recipeSchema);
