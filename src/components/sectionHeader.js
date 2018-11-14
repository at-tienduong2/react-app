import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import classNames from 'classnames'

class SectionHeader extends Component {
  
  render() {

    const titleClasses = classNames({
      'title-header': true,
      'text-pink': this.props.imgUrlHeader.colortitle,
      'center': true
    })

    return (
      <Container>
        <div className="section-header">
          <h2 className={titleClasses}>{this.props.imgUrlHeader.title}</h2>
          <Image className="image" src={this.props.imgUrlHeader.imgUrl} />
        </div>
      </Container>
    )
  }
}


export default SectionHeader