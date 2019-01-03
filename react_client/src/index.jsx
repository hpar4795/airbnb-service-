import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import momentPropTypes from 'moment';
import Guests from './components/Guests.jsx'



class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      calendarFocused: true
    }
  }

  render() {
    return (
      <div >
        
  <Guests/>
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

   
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));