import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import momentPropTypes from 'moment';
import Guests from './components/Guests.jsx';
import Axios from 'axios'

import {Button} from 'react-bootstrap'




class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      listing_id: null,
      calendarFocused: true,
      pricePerNight: 0,
      rating: 0,
      numbOfViews: 0,
      numbOfRatings: 0,
      currentNumberOfGuests: 0,
      maxGuests: 0,
      numbOfAdults: 0,
      numbOfChildren: 0,
      startDate: null,
      endDate: null

    }
    this.getStaticBookingData = this.getStaticBookingData.bind(this);
   
    this.handleButtonClickAddAdults = this.handleButtonClickAddAdults.bind(this)
    this.handleButtonClickAddChildren = this.handleButtonClickAddChildren.bind(this)
    this.handleButtonClickSubtractAdults = this.handleButtonClickSubtractAdults.bind(this)
    this.handleButtonClickSubtractChildren = this.handleButtonClickSubtractChildren.bind(this)
    this.handleBookClick = this.handleBookClick.bind(this)
  }

  componentDidMount() {
    this.setState({listing_id: Number(window.location.href.split('/')[window.location.href.split('/').length - 1].slice(1, 4))}, () => {
      this.getStaticBookingData(this.state.listing_id)
    });
  }
  getStaticBookingData(listing_id) {
    Axios.get('/bookings', {params: {id: listing_id}})
    .then((data) => {
      this.setState({pricePerNight: data.data[0].price,
        rating: data.data[0].rating,
        numbOfViews: data.data[0].views,
        numbOfRatings: data.data[0].numbOfRatings,
        maxGuests: data.data[0].maxGuests
      })
    })
  }
 
  // getStars(rating) {

  //   // Round to nearest half
  //   rating = Math.round(rating * 2) / 2;
  //   let output = [];
  
  //   // Append all the filled whole stars
  //   for (var i = rating; i >= 1; i--)
  //     output.push(<i class="fa fa-star" aria-hidden="true"> </i>);
  
  //   // If there is a half a star, append it
  //   if (i == .5) output.push(<i class="fa fa-star-half-o" aria-hidden="true" > </i>);
  
  //   // Fill the empty stars
  //   for (let i = (5 - rating); i >= 1; i--)
  //     output.push(<i class="fa fa-star-o" aria-hidden="true"> </i>);
  
  //   return output;
  
  // }

  handleButtonClickSubtractAdults() {
    console.log('subtracting adult');
    if(this.state.currentNumberOfGuests > 0 && this.state.numbOfAdults > 0)
      {this.setState({currentNumberOfGuests: --this.state.currentNumberOfGuests,
        numbOfAdults: --this.state.numbOfAdults});}
    
  }

  handleButtonClickSubtractChildren() {
    if(this.state.currentNumberOfGuests > 0 && this.state.numbOfChildren > 0)
      {this.setState({currentNumberOfGuests: --this.state.currentNumberOfGuests,
        numbOfChildren: --this.state.numbOfChildren});}
  }


  handleButtonClickAddAdults() {
    
    if(this.state.currentNumberOfGuests < this.state.maxGuests)
      {this.setState({currentNumberOfGuests: ++this.state.currentNumberOfGuests,
                    numbOfAdults: ++this.state.numbOfAdults});}
  }

  handleButtonClickAddChildren() {
    if(this.state.currentNumberOfGuests < this.state.maxGuests)
      {this.setState({currentNumberOfGuests: ++this.state.currentNumberOfGuests,
        numbOfChildren: ++this.state.numbOfChildren});}
    
  }

  handleBookClick() {
    
    var cost = this.state.endDate.diff(this.state.startDate, 'days') * this.state.pricePerNight;
    Axios.post('/bookings', {listing_id: this.state.listing_id, startDate: this.state.startDate._d, endDate: this.state.endDate._d, guests: this.state.currentNumberOfGuests, cost: cost})
    .then((doc) => {
      console.log("posted doc", doc)
    })
    .catch((err) => {
      console.error(err)
    })
  }



  render() {
    return (
      <div className="test">
      <span> ${this.state.pricePerNight} per night</span>
      <br></br>
      <span>  {this.state.numbOfRatings}</span>

  <br></br>
  <DateRangePicker
  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
  startDatePlaceholderText= {"check-in"}
  endDatePlaceholderText= {"check-out"}
  showClearDates= {true}
  />
  <Guests
    currentNumberOfGuests={this.state.currentNumberOfGuests}
    maxGuests={this.state.maxGuests}
    numbOfAdults={this.state.numbOfAdults}
    numbOfChildren={this.state.numbOfChildren}
    handleButtonClickAddAdults={this.handleButtonClickAddAdults}
    handleButtonClickAddChildren={this.handleButtonClickAddChildren}
    handleButtonClickSubtractAdults={this.handleButtonClickSubtractAdults}
    handleButtonClickSubtractChildren={this.handleButtonClickSubtractChildren}
  
  
  />
  <br></br>
   <Button onClick={this.handleBookClick}>Request To Book</Button>
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));