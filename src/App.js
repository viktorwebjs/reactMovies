import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0,
  };

  handleClickPlus = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleClickMinus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App" style={{ margin: '0 auto', width: '200px' }}>
        <p>React </p>
        <button onClick={this.handleClickPlus}>+</button>
        <span style={{ margin: '0 0.75rem', display: 'inline-block' }}>
          {this.state.count}
        </span>
        <button onClick={this.handleClickMinus}>- </button>
      </div>
    );
  }
}

export default App;
