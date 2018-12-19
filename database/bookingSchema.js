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

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function generateRandomDates(numberOfDates) {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  var numbOfDaysInMonthExc = 0;

  if(mm === 2) {
    numbOfDaysInMonth = 29;
    var randomDay = getRandomIntInclusive(dd, numbOfDaysInMonthExc);
    var randomMonth = getRandomIntInclusive(1, 13);
    var randomYear = getRandomIntInclusive(yyyy, (yyyy + 3));

    

  } else if (mm === 4 || mm === 6 || mm === 9 || mm === 11) {
    numbOfDaysInMonth = 31;
    var randomDay = getRandomIntInclusive(dd, numbOfDaysInMonthExc);
  } else {
    numbOfDaysInMonth = 32;
    var randomDay = getRandomIntInclusive(dd, numbOfDaysInMonthExc);

  }

}