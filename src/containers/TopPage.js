import React, { Component } from 'react'
import LPbanner01 from './../components/LPBanner01'
import CakeItem from './../components/CakeItem'
import SectionHeader from './../components/sectionHeader'
import PopularItem from './../components/PopularItem'
import BestList from './../components/BestList'
import Footer from './../components/Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import LayerCake from './../components/LayerCake'
import NumberItems from './../components/NumberItems'

class TopPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listCake: [],
      popularList: [],
      imgUrlHeader: [],
      imgUrlHeader1: [],
      imgUrlHeader2: [],
      imgUrlHeader3: [],
      numberList: []
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

      const childrenData = "http://localhost:3002/popular"
        fetch(childrenData)
          .then(resp => resp.json())
          .then(childrenData => {
            if (childrenData) {
              this.setState({popularList: childrenData})
            }
          })

      const numberData = "http://localhost:3002/numberItems"
          fetch(numberData)
            .then(resp => resp.json())
            .then(numberData => {
              if (numberData) {
                this.setState({numberList: numberData})
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
          <PopularItem popularList={this.state.popularList}/>
        </div>

        <div className="parallax has-bground bg-best">
          <SectionHeader imgUrlHeader={this.state.imgUrlHeader2} />
          <BestList />
        </div>

        <div className="parallax has-bground bg-layerCakes">
          <SectionHeader imgUrlHeader={this.state.imgUrlHeader3} />
          <LayerCake />
        </div>

        <NumberItems numberList={this.state.numberList}/>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

export default TopPage;
