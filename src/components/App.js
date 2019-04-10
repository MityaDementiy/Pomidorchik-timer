import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Card,
  CardBody,
  Navbar,
  NavbarBrand
} from "reactstrap";

import Timer from "./Timer";
import WorkButtons from "./WorkButtons";
import BreakButtons from "./BreakButtons";
import Audio from "./Audio";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workTime: 25,
      breakTime: 5,
      seconds: "00",
      cycle: "Work",
      workClicked: false,
      breakClicked: false,
      signal: false
    };

    this.upWorkTime = this.upWorkTime.bind(this);
    this.downWorkTime = this.downWorkTime.bind(this);
    this.upBreakTime = this.upBreakTime.bind(this);
    this.downBreakTime = this.downBreakTime.bind(this);
    this.changeCycleToBreak = this.changeCycleToBreak.bind(this);
    this.changeCycleToWork = this.changeCycleToWork.bind(this);
    this.startWorkClock = this.startWorkClock.bind(this);
    this.workClock = this.workClock.bind(this);
    this.startBreakClock = this.startBreakClock.bind(this);
    this.breakClock = this.breakClock.bind(this);
    this.resetWorkButton = this.resetWorkButton.bind(this);
    this.resetBreakButton = this.resetBreakButton.bind(this);
    this.disableWorkButton = this.disableWorkButton.bind(this);
    this.disableBreakButton = this.disableBreakButton.bind(this);
  }


  workClock = () => {
    let min = Math.floor(this.secondsRemaining / 60);
    let sec = this.secondsRemaining - min * 60;

    this.setState({
      workTime: min,
      seconds: sec
    });

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      });
    }

    if (min < 10) {
      this.setState({
        workTime: "0" + min
      });
    }

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
      this.setState({
        signal: true
      });
    }

    if (min < 0) {
      alert("Вы серьезно? Перезагрузите страницу и не ломайте сайт.");
    }

    this.secondsRemaining--;
  };

  startWorkClock() {
    this.intervalHandle = setInterval(this.workClock, 1000);
    let time = this.state.workTime;
    this.secondsRemaining = time * 60;
  }

  breakClock = () => {
    let min = Math.floor(this.secondsRemaining / 60);
    let sec = this.secondsRemaining - min * 60;

    this.setState({
      breakTime: min,
      seconds: sec
    });

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      });
    }

    if (min < 10) {
      this.setState({
        breakTime: "0" + min
      });
    }

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
      this.setState({
        signal: true
      });
    }

    if (min < 0) {
      alert("Вы серьезно? Перезагрузите страницу и не ломайте сайт.");
    }

    this.secondsRemaining--;
  };

  startBreakClock() {
    this.intervalHandle = setInterval(this.breakClock, 1000);
    let time = this.state.breakTime;
    this.secondsRemaining = time * 60;
  }

  upWorkTime = () => {
    this.setState({
      workTime: this.state.workTime + 1
    });
  };

  downWorkTime = () => {
    this.setState({
      workTime: this.state.workTime - 1
    });
  };

  upBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime + 1
    });
  };

  downBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime - 1
    });
  };

  changeCycleToBreak = () => {
    this.setState({
      cycle: "Break"
    });
    clearInterval(this.intervalHandle);
  };

  changeCycleToWork = () => {
    this.setState({
      cycle: "Work"
    });
    clearInterval(this.intervalHandle);
  };

  resetWorkButton = () => {
    this.setState({
      workTime: 25,
      seconds: "00",
      workClicked: false,
      signal: false
    });
  };

  resetBreakButton = () => {
    this.setState({
      breakTime: 5,
      seconds: "00",
      breakClicked: false,
      signal: false
    });
  };

  disableWorkButton = () => {
    this.setState({
      workClicked: true
    });
  };

  disableBreakButton = () => {
    this.setState({
      breakClicked: true
    });
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <Jumbotron fluid />
              <Audio signal={this.state.signal} />
            </Col>
          </Row>

          <Row>
            <Col>
              <Jumbotron fluid>
                <Container fluid>
                  <Timer
                    workTime={this.state.workTime}
                    breakTime={this.state.breakTime}
                    cycle={this.state.cycle}
                    seconds={this.state.seconds}
                  />
                  <Row>
                    <Col sm="3" />
                    <Col sm="3">
                      <Card>
                        <CardBody>
                          <WorkButtons
                            upWorkTime={this.upWorkTime}
                            downWorkTime={this.downWorkTime}
                            changeCycleToWork={this.changeCycleToWork}
                            workTime={this.state.workTime}
                            startWorkClock={this.startWorkClock}
                            resetBreakButton={this.resetBreakButton}
                            workClicked={this.state.workClicked}
                            disableWorkButton={this.disableWorkButton}
                          />
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="3">
                      <Card>
                        <CardBody>
                          <BreakButtons
                            upBreakTime={this.upBreakTime}
                            downBreakTime={this.downBreakTime}
                            changeCycleToBreak={this.changeCycleToBreak}
                            breakTime={this.state.breakTime}
                            startBreakClock={this.startBreakClock}
                            resetWorkButton={this.resetWorkButton}
                            breakClicked={this.state.breakClicked}
                            disableBreakButton={this.disableBreakButton}
                          />
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="3" />
                  </Row>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col>
              <Navbar className="navbar fixed-bottom navbar-light bg-light">
                <NavbarBrand>
                  <a
                    href="https://twitter.com/De_Mityai"
                    className="navbar-brand text-center"
                  >
                    Mitya Dementiy with love
                  </a>
                </NavbarBrand>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
