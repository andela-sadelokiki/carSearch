var mongoose = require("mongoose"),
    Schema = mongoose.Schema

var carSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('cars', carSchema);

