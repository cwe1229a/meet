import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      fontSize: "17px"
    };
  };

  render() {
    return (
      <>
        <div className="Alert" style={this.getStyle()}>
          {this.props.text}
        </div>
      </>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "blue";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "green";
  }
}

class OfflineAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "red";
  }
}

export { InfoAlert, ErrorAlert, OfflineAlert };
