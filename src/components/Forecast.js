import { Component } from "react";
import Card from "react-bootstrap/Card";

class Forecast extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.forecast.map((dailyForecast) => {
          return (
            <>
              <Card.Title className="date">{dailyForecast.date}</Card.Title>
              <Card.Text className="description">{dailyForecast.description}</Card.Text>
            </>
          );
        })}
      </>
    );
  }
}

export default Forecast;
