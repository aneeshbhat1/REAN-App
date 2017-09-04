var mongoose=require('mongoose');
var Attendee = require('../models/AttendeeModel.js');
var Answer = require('../models/AnswerModel.js');

var querySchema=mongoose.Schema({
  Question:String,
  Y:String,
  Time:Date,
  By:Attendee,
  Answers:[Answer]
});

var queryModel=mongoose.model('Query',querySchema);
module.exports.Query = queryModel;
