const mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost:27017/flarebnb')

module.exports = mongoose.connection