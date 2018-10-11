import React, { Component } from 'react'
import BEMHelper from 'react-bem-helper'
import { Image } from 'semantic-ui-react'

const classes = new BEMHelper ({
  name: 'section-header'
});

class SectionHeader extends Component {


  render() {

    return (
      <div {...classes()}>
        <h2 {...classes('title', '', 'center')}>{this.props.imgUrlHeader.title}</h2>
        <Image {...classes('image')}src={this.props.imgUrlHeader.imgUrl} />
      </div>
    )
  }
}


export default SectionHeader