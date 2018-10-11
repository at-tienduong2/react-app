import React, { Component } from 'react'
import LPbanner01 from './../components/LPBanner01'
import CakeItem from './../components/CakeItem'
import SectionHeader from './../components/sectionHeader'

class TopPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listCake: [],
      // title: '',
      imgUrlHeader: [],
      imgUrlHeader1: [],
      imgUrlHeader2: [],
      imgUrlHeader3: []
    }
  }

  componentDidMount() {

    const data = "http://localhost:3002/specialties"
      fetch(data)
        .then(resp => resp.json())
        .then(data => {
          if (data) {
            this.setState({listCake: data})
          }

      })

    const childData = "http://localhost:3002/sectionHeader"
      fetch(childData)
        .then(resp => resp.json())
        .then(childData => {
          if (childData) {

            if (childData.length > 0) {
              this.setState({imgUrlHeader1: childData[0]})
            }
            if (childData.length > 1) {
              this.setState({imgUrlHeader2: childData[1]})
            }
            if (childData.length > 2) {
              this.setState({imgUrlHeader3: childData[2]})
            }
          }
        })

  }
  render() {
    return (
      <div className="toppage">
        <div className="menu-wave"></div>
        <LPbanner01 banner={true}/>
        <CakeItem listCake={this.state.listCake}/>
        <div className="parallax has-bground bg-popular">
          <SectionHeader imgUrlHeader={this.state.imgUrlHeader1} />
        </div>

        <div className="parallax has-bground bg-best">
          <SectionHeader imgUrlHeader={this.state.imgUrlHeader2} />
        </div>

        <div className="parallax has-bground bg-layerCakes">
          <SectionHeader imgUrlHeader={this.state.imgUrlHeader3} />
        </div>
      </div>
    )
  }
}

export default TopPage;
