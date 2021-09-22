import { Component } from "react";
import Card from "react-bootstrap/Card";
import Weather from './Weather';

class City extends Component {
  render() {
    return (
      <>
        <Card style={{ width: "30rem" }}>
          <Card.Body>
            <Card.Title>{this.props.location.display_name}</Card.Title>
            <Card.Text>The latitude is: {this.props.location.lat}</Card.Text>
            <Card.Text>The longitude is: {this.props.location.lon}</Card.Text>
          </Card.Body>
          {this.props.map && (
            <Card.Img variant="top" src={this.props.map} alt="map" />
          )}
        </Card>
        <Card style={{ width: "30rem" }}>
          <Card.Body>
            <Weather forecast={this.props.forecast} />
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default City;