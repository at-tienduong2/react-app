import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link } from "react-router-dom"
import { Image, Icon, Rating } from 'semantic-ui-react'

class BestItem extends Component {
  
  badgeSale(item) {
    if (item) {
      return (
        <div className="badge-sale box">
          <span className="ribbon">Sale</span>
        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }

  render() {
  
    const {product} = this.props
    return (
      <div className="best-item product-best ">
        <div className="thumb">
          <div className="entry-thumb">
            <Link to="/">
              <Image className="img" src={product.imgUrl} />
            </Link>
            {this.badgeSale(product.sale)}
          </div>
          <div className="best-button">
            <Link className="quick-view" to="/">
              <Icon className="icon-customize" name='eye' />
            </Link>
            <div className="add-to-wishlist dis-inline">
              <div className="show">
              <Link className="quick-view" to="/">
                <Icon className="icon-customize" name='heart' />
              </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="detail">
          <h3 className="title">{product.title}</h3>
          <div className="content">
            <div className="best-price">
              <del className="sale-price">{product.sale}</del>
              <span className="price">{product.price}</span>
            </div>
            <Rating icon='star' defaultRating={3} maxRating={5} />
            <button className="ui button btn-primary">Buy now</button>
          </div>
        </div>

      </div>
    )
  }

}

BestItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default BestItem