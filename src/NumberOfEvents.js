import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      renderNumber: 32,
      errorText: ""
    };
  }
  handleInputChanged = (event) => {
    if (event.target.value <= 0 || event.target.value > 32) {
      this.setState({
        renderNumber: event.target.value,
        errorText: "Please enter a number between 1 and 32"
      });
    } else {
      this.props.updateEvents(undefined, event.target.value);
      this.setState({
        renderNumber: event.target.value,
        errorText: ""
      });
    }
  };

  render() {
    const { renderNumber, errorText } = this.state;

    return (
      <div className="number-of-events">
        <p className="input-label">Number of Events:</p>
        <input
          id="render-number"
          type="number"
          className="render-number"
          value={renderNumber}
          onChange={this.handleInputChanged}
        ></input>
        <ErrorAlert text={errorText} />
      </div>
    );
  }
}
export default NumberOfEvents;
