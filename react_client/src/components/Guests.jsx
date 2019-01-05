import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import {Button} from "react-bootstrap"
import {ButtonToolbar} from "react-bootstrap";
import {DropdownButton} from 'react-bootstrap'
import {MenuItem} from 'react-bootstrap'
import {Dropdown} from 'react-bootstrap'

class Guests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      numbOfInfants: 0,
      menuOpen: false,

      
    };
    this.handleButtonClickAddInfants = this.handleButtonClickAddInfants.bind(this)
    this.handleButtonClickSubtractInfants = this.handleButtonClickSubtractInfants.bind(this)
    this.handleClick = this.handleClick.bind(this)
    
  }

  componentDidMount() {
    console.log(this.props.numbOfAdults, this.props.numbOfChildren)
  }

  handleButtonClickSubtractInfants() {
    if(this.state.numbOfInfants > 0) this.setState({numbOfInfants: --this.state.numbOfInfants})
  }


  handleButtonClickAddInfants() {
    if((this.state.numbOfInfants) < (this.props.maxGuests + 1)) this.setState({numbOfInfants: ++this.state.numbOfInfants})
  }

  handleClick(isOpen, event, string) {
    this.setState({isOpen: !isOpen})
  }



  renderDropdownButton(Currguests) {
    return (

      <DropdownButton className = "dropdownbuttonTitle"
        title={Currguests + (this.props.currentNumberOfGuests > 1? " guests": " guest")}
        //onToggle={this.handleClick}
        // open={this.state.isOpen}
      >
      
        <MenuItem eventKey="1">
        <Button onClick={this.props.handleButtonClickSubtractAdults}>-</Button>
        <Button onClick={this.props.handleButtonClickAddAdults}>+</Button>
        Adult {this.props.numbOfAdults}
        </MenuItem>
        <MenuItem eventKey="2">

        <Button name="SubtractChildren" onClick={this.props.handleButtonClickSubtractChildren} >-</Button>
        Children {this.props.numbOfChildren}
        <Button onClick={this.props.handleButtonClickAddChildren}>+</Button>
        </MenuItem>
        <MenuItem eventKey="3" active>
        <Button onClick={this.handleButtonClickSubtractInfants}>-</Button>
        Infants {this.state.numbOfInfants}
        <Button onClick={this.handleButtonClickAddInfants}>+</Button>
        </MenuItem>
        <MenuItem eventKey="4">
        {this.props.maxGuests} guests maximum. Infants don’t count toward the number of guests.
        </MenuItem>
      
      </DropdownButton>
    );
  }

  render() {
    
    
      return (
      
        <ButtonToolbar>
          {this.renderDropdownButton(this.props.currentNumberOfGuests)}
        </ButtonToolbar>
        
      );
    
  }
}

export default Guests;
