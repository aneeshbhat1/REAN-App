var mongojs = require('mongojs'),
   db = mongojs("EventDatabse", ["EventData"]),
   Event = require('../models/EventModel.js'),
   url = require('url'),
   mongoose = require('mongoose');

module.exports.getAllEvents = function (req, res) {
    // var url_parts = url.parse(req.url, true);
    // var query = url_parts.query;
    // db.EventData.findOne(
        // { year: parseInt(query.year) },
        // { country: 1, population: 1, year: 1, _id: 0 },
         // function (err, docs) {
             // res.json(docs);
             // //             for (var key in docs) {
             // //                 console.log(key);
             // //                 console.log(value);
             // //             }
         // });
};

module.exports.saveAxisData = function (req, res) {
    // var axisData = new models.axisDataModel(req.body);
    // axisData.save(function (err, result) {
        // console.log(result);
        // axisData.find({}, function (err, results) {
            // res.json(results);
        // });
    // });
};
