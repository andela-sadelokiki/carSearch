var app = require("../server.js")
var mongoose = require("mongoose");
var request = require("supertest")(app);
var Car = require("../app/models/carmodel.js");
var CarCtrl = require("../app/controllers/carcontroller.js");

describe('Car Routes', function() {
  beforeEach(function(done) {
    Car.remove({}, function() {
      var newCar = new Car({
        name: 'honda',
        color: 'red',
        details: 'all about this car'
      });
      newCar.save(function(err, newCar) {
        if (err) {
          return err;
        }
        done();
      });
    });
  });

  afterEach(function(done) {
    Car.remove({}, function() {
      done()
    });
  })

  it('should check POST route', function(done) {
    var newCar = {
      name: 'honda',
      color: 'red',
      details: 'all about this car'
    }
    request
      .post('/api')
      .set('Content-Type', 'application/json')
      .send(newCar)
      .expect(200)
      .end(function(err, res) {
        expect(err).toBeNull();
        done();
      });
  });

  it('should check GET route', function(done) {
    request
      .get('/api')
      .set('Content-Type', 'application/json')
      .end(function(err, res) {
        if(err) {
          return err;
        }
        console.log(res.body);
        expect(res.body).toBeDefined();
        done();
      });
  });


});
