var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/flarebnb')

db.connection();


const bookingSchema = new mongoose.Schema({
  unavailability: [Date],
  check_in: Date,
  check_out: Date,
  guest_count: Number,
  views: Number,
  rating: Float32Array,
  rating_count: Number
})

const Booking = db.model('bookings', bookingSchema );

module.exports = Booking;