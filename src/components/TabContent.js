import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link } from "react-router-dom"
import { Grid, Image, Rating, Button, Icon } from 'semantic-ui-react'

class TabContent extends Component {
  render() {
    const {title, img, price, sale, quantity, proType, proVendor, addCart, addWish, } = this.props
    return (
      <div className="tabcontent">
       <Grid>
          <Grid.Row>
            <Grid.Column width={8} className="content-left">
            <h2 className="title mg-b--6">{title}</h2>
            <Rating icon='star' defaultRating={3} maxRating={5} />
            <div className="best-price">
              <del className="sale-price">${sale}</del>
              <span className="price">${price}</span>
            </div>
              <div className="quantity-box mg-b--6">
                <label  className="label"for="Quality">Quantity</label>
                <input type="number" name="quantity" value={quantity} min="1" className="quantity-selector" />
                <div className="quantity-arrow">
                  <span className="qtyplus">
                    <i className="fa fa-caret-up" aria-hidden="true"></i></span>
                  <span className="qtyminus">
                    <i className="fa fa-caret-down" aria-hidden="true"></i></span>
                </div>  
              </div>
              <p className="product-type product-info mg-b--6">
                <label className="label">Product Type:</label>
                <span className="display-block">{proType}</span>
              </p>
              <p className="product-vendor product-info mg-b--6">
                <label className="label">Product Vendor:</label>
                <span className="display-block">{proVendor}</span>
              </p>
              <Button className="btn-primary mg-b--6" onClick={addCart}>Add to Cart
                <Icon name='shop'/>
              </Button>
              <div className="add-cart">
                <Link className="ui button btn-primary" to="/" onClick={addWish}>
                  <Icon name="heart" />
                  Add to wishlist
                </Link>
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <Image src={img}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
        { this.props.children }
      </div>
    )
  }
}

TabContent.protoTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  sale: PropTypes.string.isRequired,
  proType: PropTypes.string.isRequired,
  proVendor: PropTypes.string.isRequired,
  addCart: PropTypes.func.isRequired,
  addWish: PropTypes.func.isRequired
}

export default TabContent
