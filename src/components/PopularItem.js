import React, { Component } from 'react'
import { Container, Grid, Image } from 'semantic-ui-react'
import BEMHelper from 'react-bem-helper'
import {Link } from "react-router-dom"

  const classes = new BEMHelper ({
    name: 'popular-cake'
  })

class PopularItem extends Component {

  render() {
    return (
      <Container>
        <div className="popular-list">
          <Grid columns={3}>
            {
              this.props.popularList.map(item => (
                <Grid.Column key={item.id} className="column-modifi">
                  <div {...classes()}>
                    <div {...classes('thumb')}>
                      <div className="entry-thumb">
                        <Link to="/">
                        <Image className="img" src={item.imageUrl}/>
                        </Link>
                      </div>
                    </div>
                    <div {...classes('detail')}>
                      <h2 className="title mg-b--3">
                        <Link to="/">{item.title}</Link>
                      </h2>
                      <p className="content">{item.content}</p>
                    </div>
                  </div>
                </Grid.Column>
              ))
            }
          </Grid>
        </div>
      </Container>
    )
  }
}

export default  PopularItem 