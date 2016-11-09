var express = require("express"),
    router = express.Router();
var CarCtrl = require("../controllers/carcontroller.js");

module.exports = function(app) {
  router.route('/')
    .post(CarCtrl.createCar)
    .get(CarCtrl.getAllCars)

  app.use('/api', router);
}