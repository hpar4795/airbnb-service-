const mongoose = require("mongoose");
var db = mongoose.connect("mongodb://hpar4795:watermelon1@ds133746.mlab.com:33746/flairbnb", {useNewUrlParser: true})

module.exports = db