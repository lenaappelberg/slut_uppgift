import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import Shoppingitem from './Shoppingitem'
import { clearCart } from '../store/features/shoppingCart/shoppingCartSlice'
import { postAll } from '../store/features/products/productService'
import Kopa from '../pages/Kopa'


const CartItems = ({setIsOpen,isCheckoutPage}) => {
  const{cart,totalPrice}=useSelector(state=>state.shoppingCart)
  const dispatch=useDispatch()
  const handleclick=(e)=>{
    cart.map(item=>{console.log(cart)
      console.log(item)
        try {
          postAll(item.product._id,item.quantity)
          
        } catch (error) {
          console.log(error)
          return error
        }
        //dispatch(clearCart())
        console.log(cart)
    })
  }
  return (
    <div>
      <div className=''>
      {cart.length<=0 && (
            <div>
              <p>your cart is empty</p>
            </div>
          )}
          {
            cart.map(item=>{console.log(cart)
              console.log(item)
            return(
              <Shoppingitem key={'cart_'+item.product._id} item={item}/>
            )
            })
          }
      </div>
      <div className='checkoutdesc'>
        <div className=''>
          <p>Total:{totalPrice}</p>
          <p>inc tax</p>
        </div>
        {
          isCheckoutPage
          ?<Link onClick={handleclick} to={{ pathname: "/kopa", state: { data: cart } }} className='linkbutton' >Place order</Link>
          :<Link onClick={()=>setIsOpen(false)} to="/checkout" className="checkoutText linkbutton">Checkout</Link>
        }
      </div>
    </div>
  )
}

export default CartItems