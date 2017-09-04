var mongoose=require('mongoose');
var Attendee = require('../models/AttendeeModel.js');
var Address = require('../models/AddressModel.js');
var Feedback = require('../models/FeedbackModel.js');

var eventSchema=mongoose.Schema({
  Name:String,
  EventDate:Date,
  Duration:Number,
  Type:String,
  Topic:String,
  Title:String,
  Host:Attendee,
  DetailedDescription:String,
  MaxAttendees:Number,
  Venue:Address,
  Attendees:[Attendee],
  Feedback:[Feedback],
  Queries:[Query]
});

var eventModel=mongoose.model('Event',eventSchema);
module.exports.Event = eventModel;
