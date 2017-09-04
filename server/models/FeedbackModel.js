var mongoose=require('mongoose');
var Attendee = require('../models/AddressModel.js');

var feedbackSchema=mongoose.Schema({
  By:Attendee,
  Rating:Number,
  MaxRating:Number,
  Comments:String,
  Time:Date
});

var feedbackModel=mongoose.model('Feedback',feedbackSchema);
module.exports.Feedback = feedbackModel;
