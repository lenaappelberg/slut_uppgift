import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../store/features/shoppingCart/shoppingCartSlice';

const Kopa = () => {
  const cart = useSelector(state => state.shoppingCart.cart);
  const dispatch = useDispatch();
  const [processOrders,setProcessorders]=useState([])
  useEffect(() => {
    setProcessorders(cart)
    return () => {
      dispatch(clearCart())
    }
  }, [dispatch])
  console.log(cart)
  return (
    <div>
        <h2>Tack för köpet</h2>
        {processOrders.length>0 ? (
          processOrders.map(item => (
            <div key={item.product._id}>
              <p>{item.product.name}</p>
              <p>{item.quantity}</p>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
    </div>
  )
}

export default Kopa

    
