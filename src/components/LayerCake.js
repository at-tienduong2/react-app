import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react'
import Tabs from './Tabs'

class LayerCake extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tabList: []
    }
  }

  componentWillMount() {
    const data = "http://localhost:3002/contentTabs"
      fetch(data)
        .then(resp => resp.json())
        .then(data => {
            this.setState({tabList: data})
      })
  }

  renderFunc = () => {
    if (this.state.tabList.length > 0) {
      return (
      <Tabs>
        {
          this.state.tabList.map((item) => {
            return (
            <div ref={item.id} key={item.id} className={item.class}>
              <Image src={item.urlImage}/>
              <Image src={item.imageTab}/>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.sale}</p>
              <p>{item.productType}</p>
              <p>{item.productVendor}</p>
              <p>{item.quanlity}</p>
            </div>
            )
          })
        }
      </Tabs>
      )
    }
  }
  render() {
    return (
    
      <Container>
        <div className="layercake">
          <div>
            {
                this.renderFunc()
            }
          </div>
        </div>
      </Container>
    )
  }
}

export default LayerCake
