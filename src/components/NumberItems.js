import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import BEMHelper from 'react-bem-helper'
import {Link } from "react-router-dom"

class NumberItems extends Component {
  render() {
    const { numberList } = this.props
    return (
      <div className="numberitems bg-item">
        <Grid container columns={4}>
          {
            numberList.map(item => (
              <Grid.Column key={item.id}>
                <span className="number-text">{item.number}</span>
                <h3>{item.name}</h3>
              </Grid.Column>
            ))
          }
        </Grid>
      </div>
    )
  }
}


export default NumberItems
