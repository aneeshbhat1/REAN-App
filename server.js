var express = require('express'),
	mongojs = require('mongojs'),
	mongoose = require('mongoose'),
	app = express(),
	bodyParser = require('body-parser'),
	eventController = require('./server/controllers/EventController.js')

mongoose.connect('mongodb://localhost:27017/EventDataBase');

app.use(bodyParser());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use(express.static(__dirname + '/client'));

app.get("/Events", eventController.getAllEvents);

//app.post("/SaveAxisData", barGraphController.saveAxisData);

app.listen(3000, function (req, res) {
    console.log('I\'m listening');
});
