import { Component } from 'react';
import createOscillator from './createOscillator';

class Tone extends Component {
  oscillator = createOscillator();

  componentDidMount() {
    this.operate();
  }

  componentDidUpdate() {
    this.operate();
  }

  operate() {
    const { isPlaying, pitch, volume } = this.props;
    if (isPlaying) {
      this.oscillator.play();
    } else {
      this.oscillator.stop();
    }
    this.oscillator.setPitchBend(pitch);
    this.oscillator.setVolume(volume);
  }

  render() {
    return null;
  }
}

export default Tone;
