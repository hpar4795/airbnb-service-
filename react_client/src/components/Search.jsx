import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios'



class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj:{},
      id: 3
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    
    Axios.get('/bookings')
    .then((res) => {
      console.log('response from handleClick', res);
    })
    .catch((err) => {
      console.error(err);
    })
  }

  render() {
    return (
      <div>
        <label> Put in id number </label>
          <input type = "text" 
            value = {this.state.id}
            onChange = {(e) => {this.setState({id: e.target.value})}}
          ></input>
          <button onClick = {() => {this.handleClick(this.state.id)}}> Submit </button>
      </div>
    )
  }
}

export default Search;