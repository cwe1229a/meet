import React, { Component } from "react";

class Event extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  toggleDetails = () => {
    let string = this.state.show ? "View details" : "Hide details";
    this.setState({ buttonText: string, show: !this.state.show });
  };

  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <h1 className="event-title">{event.summary}</h1>
        <div className="event-info"></div>
        <button
          className="event-details-btn"
          onClick={this.toggleDetails}
        ></button>
        <div className="event-location">{event.location}</div>
        <div className="event-dateTime">{event.start.dateTime}</div>
      </div>
    );
  }
}
export default Event;
