import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import BestItem from './BestItem'


class BestList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bestDealFirst: [],
      bestDealList:  []
    }
  }

  componentDidMount() {
    const bestData = "http://localhost:3002/bestDealFirst"
      fetch(bestData)
        .then(resp => resp.json())
        .then(bestData => {
          if (bestData) {
            this.setState({bestDealFirst: bestData})

            // this.setState({bestDealFirst: [...this.state.bestDealFirst, ...[1,2,3] ]})
          }
      })

    const data = "http://localhost:3002/bestDeals"
      fetch(data)
        .then(resp => resp.json())
        .then(data => {
          if (data) {
            this.setState({bestDealList: data})
          }
        })
  }

  render() {
    return (
      <Container>
        <div className="best-list best-first">
          <Grid columns={2}>
            {
              this.state.bestDealFirst.map(item => (
                <Grid.Column key={item.id} className="column-modifi">
                  <BestItem product={item}/>
                </Grid.Column>
              ))
            }
          </Grid>

          { this.props.children }
        </div>

        <div className="best-list">
          <Grid columns={3}>
            {
              this.state.bestDealList.map(item => (
                <Grid.Column key={item.id} className="column-best-list">
                  <BestItem product={item}/>
                </Grid.Column>
              ))
            }
          </Grid>
        </div>
      </Container>
    )
  }
}

export default BestList
