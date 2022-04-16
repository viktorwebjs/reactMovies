import React from 'react';

function Movie(props) {
  // const {
  //   Title: title,
  //   Year: year,
  //   imdbID: id,
  //   Type: type,
  //   Poster: poster,
  // } = props;
  const { albumId, id, title, url } = props;

  return (
    <div id={id} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {url === 'N/A' ? (
          <img
            className="activator"
            src={`https://via.placeholder.com/300x400?text=${title}`}
            alt=""
          />
        ) : (
          <img className="activator" src={url} alt="" />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {albumId}
          {/* <span className="right">{type}</span> */}
        </p>
      </div>
    </div>
  );
}

export default Movie;
