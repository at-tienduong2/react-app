import React, { Component} from 'react'
import BEMHelper from 'react-bem-helper'


  const classes = new BEMHelper ({
    name: 'cake',
    prefix: 'c-'
  });

class CakeItem extends Component {



  render() {
    const data = "http://localhost:3002/specialties"
    fetch(data)
      .then(resp => resp.json())
      .then(data => {
        
      })
    const {
      title,
      imageUrl,
      description
    } = this.props


    return (
      <div {...classes()}>
        <img {...classes('img')} src={imageUrl} alt="cake-item"/>
        <h2 {...classes('title', '', 'center')}>{title}</h2>
        <p {...classes('des', 'modifier')}>{description}</p>
      </div>
    )
  }
}

export default CakeItem;
