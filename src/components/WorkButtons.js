import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import { Button } from "reactstrap";

class WorkButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.changeCycleToWork();
    this.props.startWorkClock();
    this.props.resetBreakButton();
    this.props.disableWorkButton();
  };

  render() {
    return (
      <React.Fragment>
        <Button
          className="btn btn-warning card-button transparent"
          onClick={this.props.upWorkTime}
          disabled={this.props.workClicked}
        >
          +
        </Button>
        <Button
          className="btn btn-warning card-button"
          onClick={this.handleClick}
          disabled={this.props.workClicked}
          block
        >
          Фигачить {this.props.workTime} мин.
        </Button>
        <Button
          className="btn btn-warning card-button transparent"
          onClick={this.props.downWorkTime}
          disabled={this.props.workClicked}
        >
          -
        </Button>
      </React.Fragment>
    );
  }
}

export default WorkButtons;
