import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let time;
    if (this.props.cycle === "Work") {
      time = this.props.workTime;
    } else if (this.props.cycle === "Break") {
      time = this.props.breakTime;
    }
    return (
      <React.Fragment>
        <h1 className="text-center clock-text">
          {time}:{this.props.seconds}
        </h1>
      </React.Fragment>
    );
  }
}

export default Timer;
