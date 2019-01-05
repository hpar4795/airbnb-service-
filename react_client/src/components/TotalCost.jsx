import React from "react";
import ReactDOM from "react-dom";

function TotalCost(props) {
  const renderTotalCost = props.renderTotalCost;
  if(renderTotalCost) {
    var numbOfNights = props.endDate.diff(props.startDate, 'days');
    var costAllNights = props.pricePerNight * numbOfNights;
    return (
      <div>
        <div>
          <span>${props.pricePerNight}x{numbOfNights}</span>
          <span>{costAllNights}</span>
        </div>
        <div>
          <span>Cleaning Fee</span>
          <span>{props.cleaningFee}</span>
        </div>
        <div>
          <span>Service Fee</span>
          <span>{props.serviceFee}</span>
        </div>
        <div>
          <span>Total</span>
          <span>{costAllNights + props.cleaningFee + props.serviceFee}</span>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default TotalCost;