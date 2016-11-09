var mongoose = require("mongoose");
var Car = require('../models/carmodel.js');

module.exports = {
  getAllCars: function(req, res) {
    Car.find({}, function(err, cars) {
      if (err) {
        res.status(400).json(err);
      }
      res.status(200).json(cars);
    });
  },

  createCar: function(req, res) {
    var newCar = new Car({
      name: req.body.name,
      color: req.body.color,
      details: req.body.details
    })
    newCar.save(function(err, newCar) {
      if(err) {
        console.log("kdsksg");
        res.status(400).json(err);
      }
       res.status(200).json({
        success: "car created",
        data: newCar
      });
    });
  }
}
