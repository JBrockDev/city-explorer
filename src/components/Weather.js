import { Component } from 'react';
import Forecast from './Forecast';

class Weather extends Component {
  render() {
    return (
      <>
        <Forecast forecast={this.props.forecast} />
      </>
    )
  }
}

export default Weather;