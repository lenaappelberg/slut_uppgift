import React from 'react'
import { Link } from 'react-router'

const Productcard = ({product}) => {
  return (
    <Link to={`/products/${product._id}`} className='linkbox'>
    <div className='productCard'>
      <img src={product.images[0]} alt={product.name} className='product-img' />
    </div>
    <div className='productTextbox'>
      <p className='titletext'>{product.name}</p>
      <p>{product.price}SEK</p>
    </div>
    </Link>
    
  )
}

export default Productcard
