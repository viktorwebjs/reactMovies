import React from 'react';
import Movie from './Movie';

function Movies(props) {
  const { movies } = props;

  return (
    <div className="movies">
      {movies.map((movie) => (
        <Movie key={movie.imdbId} {...movie} />
        // <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default Movies;
