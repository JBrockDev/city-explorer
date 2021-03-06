import { Component } from "react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";
import Error from "./Error";
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      forecast: [],
      movies: [],
      error: "",
      searchQuery: "",
    };
  }

  handleApiError = (errorCode, errorMessage) => {
    this.setState({
      error: `Error ${errorCode}: ${errorMessage}`,
      location: {},
      map: null,
      forecast: [],
    });
  };

  changeSearchQuery = (searchQuery) => {
    this.setState({ searchQuery });
  };

  changeLocation = (location) => {
    this.setState({ location }, this.getAllCityInfo);
  };

  getCityInfo = async () => {
    this.setState({ map: undefined, forecast: [], error: "" });
    let cityResult;
    let locationResponse = await this.getLocationData();
    if (locationResponse) {
      cityResult = locationResponse.data[0];
    }
    if (cityResult) {
      this.changeLocation(cityResult);
    }
    this.setState({ searchQuery: "" });
  };

  getLocationData = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
    try {
      const response = await axios.get(url);
      return response;
    } catch {
      this.handleApiError(
        500,
        "There was an issue with the locationiq API call. :: Try another city or try again later."
      );
    }
  };

  getAllCityInfo = async () => {
    this.getForecast();
    this.getMovies();
    this.setState(
      {
        map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=13`,
      }
    );
  };

  getForecast = async () => {
    const url = `${process.env.REACT_APP_WEATHER_URL}/weather?searchQuery=${this.state.searchQuery}&lon=${this.state.location.lon}&lat=${this.state.location.lat}`;
    try {
      const response = await axios.get(url);
      this.setState({ forecast: response.data.data },);
    } catch (error) {
      if (error.response) {
        this.handleApiError(
          error.response.status,
          error.response.data
        );
      } else {
        this.handleApiError(500, "Unhandled error Forecast GET");
      }
    }
  };

  getMovies = async () => {
    const url = `${process.env.REACT_APP_WEATHER_URL}/movies?searchQuery=${this.state.searchQuery}`;
    try {
      const response = await axios.get(url);
      this.setState({ movies: response.data.data }, x => console.log(this.state.movies));
    } catch (error) {
      if (error.response) {
        this.handleApiError(
          error.response.status,
          error.response.data
        );
      } else {
        this.handleApiError(500, "Unhandled error Movies GET");
      }
    }
  }

  render() {
    return (
      <>
        <SearchForm
          getCityInfo={this.getCityInfo}
          searchQuery={this.state.searchQuery}
          changeSearchQuery={(searchQuery) =>
            this.changeSearchQuery(searchQuery)
          }
        />
        {this.state.error && <Error error={this.state.error} />}
        <SearchResult
          location={this.state.location}
          map={this.state.map}
          forecast={this.state.forecast}
          movies={this.state.movies}
        />
      </>
    );
  }
}

export default Main;
