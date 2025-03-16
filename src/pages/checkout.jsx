import React from 'react'
import CartItems from '../components/cartItems'

 const Checkout = () => {
  return (
    <div  className='container'>
      <CartItems isCheckoutPage></CartItems>
    </div>
  )
}
export default Checkout