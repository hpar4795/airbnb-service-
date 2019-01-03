import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import {Button} from "react-bootstrap"
import {ButtonToolbar} from "react-bootstrap";
import {DropdownButton} from 'react-bootstrap'
import {MenuItem} from 'react-bootstrap'

class Guests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxGuests: 4,
      currentNumberOfGuests: 0,
      numbOfAdults: 0,
      numbOfChildren: 0,
      numbOfInfants: 0,
      menuOpen: false,

      
    };
    this.handleButtonClickAddAdults = this.handleButtonClickAddAdults.bind(this)
    this.handleButtonClickAddChildren = this.handleButtonClickAddChildren.bind(this)
    this.handleButtonClickAddInfants = this.handleButtonClickAddInfants.bind(this)
    this.handleButtonClickSubtractAdults = this.handleButtonClickSubtractAdults.bind(this)
    this.handleButtonClickSubtractChildren = this.handleButtonClickSubtractChildren.bind(this)
    this.handleButtonClickSubtractInfants = this.handleButtonClickSubtractInfants.bind(this)
    
  }

  handleButtonClickSubtractAdults() {
    if(this.state.currentNumberOfGuests > 0 && this.state.numbOfAdults > 0)
      {this.setState({currentNumberOfGuests: --this.state.currentNumberOfGuests,
        numbOfAdults: --this.state.numbOfAdults});}
    
  }

  handleButtonClickSubtractChildren() {
    if(this.state.currentNumberOfGuests > 0 && this.state.numbOfChildren > 0)
      {this.setState({currentNumberOfGuests: --this.state.currentNumberOfGuests,
        numbOfChildren: --this.state.numbOfChildren});}
  }

  handleButtonClickSubtractInfants() {
    if(this.state.numbOfInfants > 0)
      this.setState({numbOfInfants: --this.state.numbOfInfants})
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

  handleButtonClickAddInfants() {
    if((this.state.numbOfInfants) < (this.state.maxGuests + 1))
      this.setState({numbOfInfants: ++this.state.numbOfInfants})
  }

  dropdownToggle(newValue){
    if (this._forceOpen){
        this.setState({ menuOpen: true });
        this._forceOpen = false;
    } else {
        this.setState({ menuOpen: newValue });
    }
  }
  menuItemClickedThatShouldntCloseDropdown(){
      this._forceOpen = true;
  }

  renderDropdownButton(Currguests) {
    console.log(Currguests)
    return (
      <DropdownButton
        title={Currguests + " Guests"}
        
        
      >
        <MenuItem eventKey="1">
        <Button onClick={this.handleButtonClickSubtractAdults}>-</Button>
        <Button onClick={this.handleButtonClickAddAdults}>+</Button>
        Adult {this.state.numbOfAdults}
        </MenuItem>
        <MenuItem eventKey="2">

        <Button name="SubtractChildren" onClick={this.handleButtonClickSubtractChildren} >-</Button>
        Children {this.state.numbOfChildren}
        <Button onClick={this.handleButtonClickAddChildren}>+</Button>
        </MenuItem>
        <MenuItem eventKey="3" active>
        <Button onClick={this.handleButtonClickSubtractInfants}>-</Button>
        Infants {this.state.numbOfInfants}
        <Button onClick={this.handleButtonClickAddInfants}>+</Button>
        </MenuItem>
        <MenuItem eventKey="4">
        {this.state.maxGuests} guests maximum. Infants don’t count toward the number of guests.
        </MenuItem>
      </DropdownButton>
    );
  }

  render() {
    
    
      return (
      
        <ButtonToolbar>
          {this.renderDropdownButton(this.state.currentNumberOfGuests)}
        </ButtonToolbar>
        
      );
    
  }
}

export default Guests;
