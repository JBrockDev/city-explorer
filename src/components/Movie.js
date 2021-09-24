import { Component } from "react";

class Movie extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.movie);
  }

  format = (inputDate) => { // to change yyyy-mm-dd to mm/dd/yyyy
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
        return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    }
}

  render() {
    return (
      <>
        <div>{this.props.movie.title}</div>
        {/* not every movie has a poster image returned */}
        { this.props.movie.image_url && <div><img class="poster-image" alt="movie-image" src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + this.props.movie.image_url}></img></div>}
        <div>Released: {this.format(this.props.movie.released_on)}</div>
        <div>Total Votes: {this.props.movie.total_votes}</div>
        <div>Average Votes: {this.props.movie.average_votes}</div>
        <div>Popularity: {this.props.movie.popularity}</div>
        <div>Overview: <p>{this.props.movie.overview}</p></div>
      </>
    );
  }
}

export default Movie;
