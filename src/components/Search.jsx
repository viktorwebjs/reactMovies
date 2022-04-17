import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: '',
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search);
    }
  };
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field ">
            <input
              id="search"
              type="search"
              placeholder="search"
              className="validate"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
            <button
              className="btn search-btn"
              onClick={() => this.props.searchMovies(this.state.search)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
