import React, { Component } from 'react';
import Tone from './Tone';
import SineWave from './SineWave';

class App extends Component {
  state = {
    isPlaying: false,
    pitch: 0,
    volume: 0
  };

  play = () => {
    this.setState({ isPlaying: true });
  };

  stop = () => {
    this.setState({ isPlaying: false, pitch: 0, volume: 0 });
  };

  changeTone = event => {
    const { clientX, clientY } = event;
    const { top, right, bottom, left } = event.target.getBoundingClientRect();
    const pitch = (clientX - left) / (right - left);
    const volume = 1 - (clientY - top) / (bottom - top);
    this.setState({ pitch, volume });
  };

  render() {
    const { isPlaying, pitch, volume } = this.state;
    return (
      <div className="app">
        <div
          className="theremin"
          onMouseEnter={this.play}
          onMouseLeave={this.stop}
          onMouseMove={this.changeTone}
        >
          <SineWave
            width="400px"
            height="400px"
            draw={isPlaying}
            amplitude={volume}
            frequency={pitch}
          />
          <Tone isPlaying={isPlaying} pitch={pitch} volume={volume} />
          <Tone isPlaying={isPlaying} pitch={pitch / 2} volume={volume} />
        </div>
        <div className="label pitch">◀︎ pitch ▶︎</div>
        <div className="label volume">◀︎ volume ▶︎</div>
      </div>
    );
  }
}

export default App;
