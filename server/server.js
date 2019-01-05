var express = require("express");
var bodyparser = require("body-parser");
var { Booking } = require("../database/bookingSchema.js");
var { Listing } = require("../database/bookingSchema.js");
var { Price } = require("../database/bookingSchema.js");
var path = require("path");
const cors = require('cors')

var db = require("../database/db.js");

var app = express();

app.listen(3004, () => {
  console.log("app listening on port 3004");
});

app.use(bodyparser.json());
app.use("/", express.static(path.join(__dirname, "../react_client/dist")));
app.use(cors())

// app.get('/', (req, res) => {
//   res.send('ok')
// })
app.get("/bookings", (req, res) => {
  var id = req.query.id;

  Listing.find({ id: id })
    .then(doc => {
      res.send(doc);
    })
    .catch(err => {
      console.error(err);
    });
});

app.post("/bookings", (req, res) =>{
  var data = req.body;
  Booking.create(data)
  .then((doc) => {
    console.log("created new doc", doc)
  })
  .catch((err) =>{
    console.error(err)
  })
});

// app.get('/bookings', (req, res) => {
//   console.log('req', req)
//   var id = req.query.id;
//   console.log('id', id)

//   Booking.find({id: id})
//   .then((doc) => {
//     console.log('app.get doc', doc)
//     res.send(doc)
//   })
//   .catch((err) => {
//     console.error(err)
//   })
// })

app.post("booking/:id/checkin", (req, res) => {
  var id = req.params.id;
  console.log("id", id);
  var checkin = req.body;
  console.log("checkin", checkin);

  Booking.findOneAndUpdate({ id: id }, { checkin: checkin })
    .then(doc => {
      console.log("successfully updated booking: ", id, " with ", doc);
    })
    .catch(err => {
      console.error(err);
    });
});
