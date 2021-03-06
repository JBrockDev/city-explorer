import { Component } from "react";
import City from "./City";

class SearchResult extends Component {
  render() {
    return (
      <>
        {this.props.location.place_id && (
          <City
            location={this.props.location}
            map={this.props.map}
            forecast={this.props.forecast}
            movies={this.props.movies}
          />
        )}
      </>
    );
  }
}

export default SearchResult;
