import { Component } from "react";
import Card from "react-bootstrap/Card";
import Weather from "./Weather";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class City extends Component {
  render() {
    return (
      <>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>{this.props.location.display_name}</Card.Title>
                <Card.Text>
                  The latitude is: {this.props.location.lat}
                </Card.Text>
                <Card.Text>
                  The longitude is: {this.props.location.lon}
                </Card.Text>
              </Card.Body>
              {this.props.map && (
                <Card.Img variant="top" src={this.props.map} alt="map" />
              )}
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20rem" }}>
              <Card.Body>
                <Weather forecast={this.props.forecast} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default City;
