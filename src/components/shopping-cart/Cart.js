import React, { Component } from 'react';
import Product from './Product';
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

class Cart extends Component {

  render() {
    const {products, total, onCheckoutClicked} = this.props
    const hasProducts = products.length > 0

    const nodes = hasProducts ? (
      products.map(product => 
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id} 
        />
      )
        
    ) : (
      <em>Please add some products to cart.</em>
    )
    return (
      <div className="cart">
        <div>Total: {total}</div>
        <Button 
          onClick={onCheckoutClicked}
          disabled={hasProducts ? '' : 'disabled'}/>
         Checkout
      </div>
    )
  }
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}


export default Cart
