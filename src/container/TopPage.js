import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TopPage extends Component {
  render() {
    return (
      <div className="toppage">
        { this.props.children }
        this is TopPage
      </div>
    )
  }
}

export default TopPage;
