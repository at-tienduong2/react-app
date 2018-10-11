import React, { Component} from 'react'
import { Grid } from 'semantic-ui-react'
import BEMHelper from 'react-bem-helper'
import {Link } from "react-router-dom"


  const classes = new BEMHelper ({
    name: 'cake'
    // prefix: 'c-'
  });

class CakeItem extends Component {

  render() {
    const data = "http://localhost:3002/specialties"
    fetch(data)
      .then(resp => resp.json())
      .then(data => {
        
      })

    return (
      <div className="list-item">
        <Grid container columns={3}>
          {
            this.props.listCake.map(item => (
              <Grid.Column key={item.id}>
              <div {...classes()}>
                <div {...classes('icon')}>
                  <img className="icon-img" src={item.imageUrl} alt="cake-item"/>
                </div>
                <h2 {...classes('title')}>
                  <Link to="/">{item.title}</Link>
                </h2>
                <p {...classes('des', 'modifier')}>{item.description}</p>
              </div>
              </Grid.Column>
            ))
          }
        </Grid>
      </div>
    )
  }
}

export default CakeItem;
