import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import { Button } from "reactstrap";

class BreakButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.changeCycleToBreak();
    this.props.startBreakClock();
    this.props.resetWorkButton();
    this.props.disableBreakButton();
  };

  render() {
    return (
      <React.Fragment>
        <Button
          className="btn btn-warning card-button transparent"
          onClick={this.props.upBreakTime}
          disabled={this.props.breakClicked}
        >
          +
        </Button>
        <Button
          className="btn btn-warning card-button"
          onClick={this.handleClick}
          disabled={this.props.breakClicked}
          block
        >
          Отдыхать {this.props.breakTime} мин.
        </Button>
        <Button
          className="btn btn-warning card-button transparent"
          onClick={this.props.downBreakTime}
          disabled={this.props.breakClicked}
        >
          -
        </Button>
      </React.Fragment>
    );
  }
}

export default BreakButtons;
