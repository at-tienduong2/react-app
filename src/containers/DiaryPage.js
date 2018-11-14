import React, { Component } from 'react'
import { increase, decrement } from './../actions/counter'

class DiaryPage extends Component {
  constructor(props){
    super(props);
    this.state = ({ value: ''})

  }

  render() {
    return (
      <div className="diary">

      </div>
    )
  }
  
}

export default DiaryPage;
