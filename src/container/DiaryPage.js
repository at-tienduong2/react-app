import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class DiaryPage extends Component {
  render() {
    return (
      <div className="diarypage">
        { this.props.children }
      </div>
    )
  }
}

export default DiaryPage;
