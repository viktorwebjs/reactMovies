import React, { Component } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';
class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=dadea754&s=matrix`)
      .then((response) => response.json())

      .then((data) => this.setState({ movies: data.Search }));
  }
  // componentDidMount() {
  //   fetch(`https://jsonplaceholder.typicode.com/photos`)
  //     .then((response) => response.json())

  //     // .then((data) => this.setState({ movies: data.Search }));
  //     .then((data) => this.setState({ movies: data }));
  // }

  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=dadea754&s=${str}`)
      .then((response) => response.json())

      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />

        {movies.length ? <Movies movies={this.state.movies} /> : <Preloader />}
      </main>
    );
  }
}

export default Main;
