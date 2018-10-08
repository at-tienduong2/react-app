import React, { Component } from 'react'
import LPbanner01 from './../components/LPBanner01'
import CakeItem from './../components/CakeItem'

class TopPage extends Component {
  render() {

    return (
      <div className="toppage">
        <div className="menu-wave"></div>
        <LPbanner01 banner={true}/>
        jollydiem
        <CakeItem />
      </div>
    )
  }
}

export default TopPage;
