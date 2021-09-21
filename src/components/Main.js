import { Component } from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import Error from './Error'
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      error: "",
    }
  }

  changeLocation = (location) => {
    this.setState({location}, this.getCityMap);
  }

  getCityInfo = async (queryString, eu, us) => {
<<<<<<< HEAD
=======
    console.log(queryString);
>>>>>>> cb89790 (completed all cards, edited readme)
    this.setState({map: undefined, error: ""});
    try {
      let cityResult;
      let neitherRegionChecked = !us && !eu;
      if (us === true || neitherRegionChecked) {
        const usUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${queryString}&format=json`;
        const usResponse = await axios.get(usUrl);
        if (usResponse.data) {
          cityResult = usResponse.data[0];
        }
      }
      if (eu === true) {
        const euUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${queryString}&format=json`;
        const euResponse = await axios.get(euUrl);
        if (euResponse.data) {
          cityResult = euResponse.data[0];
        }
      }
      if (cityResult) {
<<<<<<< HEAD
=======
        console.log(cityResult);
>>>>>>> cb89790 (completed all cards, edited readme)
        this.changeLocation(cityResult);
      } else {
        this.setState({error: "Please enter a valid city."});
      }
    } catch(error) {
<<<<<<< HEAD
      this.setState({error, location: {}, map: false});
=======
      this.setState({error});
>>>>>>> cb89790 (completed all cards, edited readme)
    }
  }

  getCityMap = async () => {
    const url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=13`;
    const response = await axios.get(url);
<<<<<<< HEAD
=======
    console.log(response);
    console.log(response.config.url);
>>>>>>> cb89790 (completed all cards, edited readme)
    this.setState({map: response.config.url});
  }

  render() {
    return (
      <>
        <SearchForm getCityInfo={(queryString, eu, us) => this.getCityInfo(queryString, eu, us)} />
        {this.state.error && <Error error={this.state.error} />}
        <SearchResult location={this.state.location} map={this.state.map} />
      </>
    )
  }
}

export default Main;