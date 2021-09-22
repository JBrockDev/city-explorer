import { Component } from "react";
import Card from "react-bootstrap/Card";

class Forecast extends Component {
  render() {
    return (
      <>
        {this.props.forecast.map((dailyForecast, index) => {
          return (
            <div key={"forecast-" + index}>
              <Card.Title className="date">{dailyForecast.date}</Card.Title>
              <Card.Text className="description">{dailyForecast.description}</Card.Text>
            </div>
          );
        })}
      </>
    );
  }
}

export default Forecast;
