import React, { Component } from "react";

class Event extends Component {
  toggleDetails = () => {
    let string = this.state.show ? "View details" : "Hide details";
    this.setState({ buttonText: string, show: !this.state.show });
  };

  render() {
    return <div></div>;
  }
}
export default Event;
