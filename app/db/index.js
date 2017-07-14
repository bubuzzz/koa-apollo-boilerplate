var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceSchema = new Schema({
  name: String,
});

module.exports = {
  Service: mongoose.model('service', ServiceSchema)
}
