import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'
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
              <Grid.Column key={item.id} className="item-circle">
                <div className="item-content">
                  <span className="number-text">{item.number}</span>
                  <div className="number-icon">
                    <span className="number-img">
                      <Image src={item.img}/>
                    </span>
                  </div>
                  <h3 className="title">{item.name}</h3>

                </div>
              </Grid.Column>
            ))
          }
        </Grid>
      </div>
    )
  }
}


export default NumberItems
