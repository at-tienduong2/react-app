import React from 'react';
import PropTypes from 'prop-types'
import Product from './Product'
import { Button } from 'semantic-ui-react'


const ProductItem = (props) => {
  const {product, onAddToCartClicked} = props

    return (
      <div className="productitem">
        <Product 
          title={product.title}
          price={product.price}
          quantity={product.inventory}/>
        <Button 
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}/>
          {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
      </div>
    )

}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked:PropTypes.func.isRequired
}

export default ProductItem
