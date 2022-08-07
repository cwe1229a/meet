import React, { Component } from "react";

class Event extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      buttonText: "Look at details"
    };
  }

  toggleDetails = () => {
    let string = this.state.show ? "View details" : "Hide details";
    this.setState({ buttonText: string, show: !this.state.show });
  };

  render() {
    const { event } = this.props;
    const { show, buttonText } = this.state;

    return (
      <div className="event">
        <h1 className="event-title">{event.summary}</h1>
        <div className="event-info"></div>
        <button className="event-details-btn" onClick={this.toggleDetails}>
          {buttonText}
        </button>
        <div className="event-location">{event.location}</div>
        <div className="event-dateTime">{event.start.dateTime}</div>
        {show && <div className="events-details">{event.description}</div>}
      </div>
    );
  }
}
export default Event;
