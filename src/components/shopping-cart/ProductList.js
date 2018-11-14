import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProductList extends Component {
  render() {
    const {title, children} = this.props
    return (
      <div className="productlist">
        <h3>{title}</h3>
        { children }
      </div>
    )
  }
}

ProductList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}


export default ProductList
