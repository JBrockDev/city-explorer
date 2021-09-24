import { Component } from "react";
import Movie from "./Movie";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

class Movies extends Component {
  render() {
    return (
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        {this.props.movies.map((movie, index) => {
          return (
            <Tab eventKey={index} title={index}>
              <Movie key={"movie-" + index} movie={movie} />
            </Tab>
          );
        })}
      </Tabs>
    );
  }
}

export default Movies;
