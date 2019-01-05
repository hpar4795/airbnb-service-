var mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  id: Number,
  views: Number,
  rating: Number,
  maxGuests: Number,
  price: Number,
  numbOfRatings: Number,
  cleaningFee: Number,
  serviceFee: Number
})

const bookingSchema = new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  guests: Number,
  cost: Number,
  listing_id: Number
})

const priceSchema = new mongoose.Schema({
  start: Date,
  end: Date,
  price: Number,
  listing_id: Number
})

const Booking = mongoose.model('bookings', bookingSchema );
const Listing = mongoose.model('listing', listingSchema );
const Price = mongoose.model('price', priceSchema );

module.exports =  {
  Booking: Booking,
  Listing: Listing,
  Price: Price
}