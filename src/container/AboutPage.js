import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AboutPage extends Component {
  render() {
    return (
      <div className="aboutpage">
        { this.props.children }
        How are you?
      </div>
    )
  }
}

export default AboutPage;
