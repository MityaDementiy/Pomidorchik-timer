import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import Sound from "react-sound";
import music from "../music.wav";

class Audio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let signalOn = this.props.signal;

    if (signalOn) {
      return (
        <React.Fragment>
          <Sound url={music} playStatus={Sound.status.PLAYING} autoLoad={true}/>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Sound url={music} playStatus={Sound.status.STOPPED} />
        </React.Fragment>
      );
    }
  }
}

export default Audio;
