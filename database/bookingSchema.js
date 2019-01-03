var mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
  id: Number,
  check_in: Date,
  check_out: Date,
  guest_count: Number,
  views: Number,
  rating: Number,
  rating_count: Number
})

const Booking = mongoose.model('bookings', bookingSchema );

module.exports = Booking;