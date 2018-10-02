import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ContactPage extends Component {
  render() {
    return (
      <div className="contactpage">
        { this.props.children }
      </div>
    )
  }
}

export default ContactPage;
