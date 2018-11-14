import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

class Counter extends Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div className="count">
        <Button onClick={onIncrement}>Increase</Button>
        <Button onClick={onDecrement}>Decrease</Button>
        <h2>{value}</h2>
      </div>
    )
  }
}
 Counter.PropTypes = {
   value: PropTypes.number.isRequired,
   onIncrement: PropTypes.func.isRequired,
   onDecrement: PropTypes.func.isRequired
 }


export default Counter
