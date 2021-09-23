import { Component } from 'react';
import Forecast from './Forecast';
import Card from 'react-bootstrap/Card';

class Weather extends Component {
  render() {
    return (
      <>
        <Card.Title>16 Day Forecast</Card.Title>
        <Forecast forecast={this.props.forecast} />
      </>
    )
  }
}

export default Weather;