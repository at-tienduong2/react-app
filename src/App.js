import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainRouter from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainRouter />
      </div>
    );
  }
}

export default App;
