var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/base_node');

module.exports = mongoose;
