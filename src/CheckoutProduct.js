import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, image, title, price, rating, hideButton}) {

    const[{basket}, dispatch] = useStateValue();

    const removeFromBasket = ()=> {
        // here we will dispatch an action (Remove_From_Basket) and listen to it in the reducer
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    
  return (
    <div className='checkoutProduct'>
        <img className='ckProductImage' src={image} alt="product-image" />

        <div className='ckProductInfo'>
            <p className='ckProductTitle'>{title}</p>
            <p className='ckProductPrice'>
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className='ckProductRating'>
                {/* this snippet just means that create an empty array of size = rating and then fill it with an empty element and then then through iterator i map each element to a star */}
                {
                    Array(rating).fill().map((_, i) =>(
                        <span> <img src="https://www.transparentpng.com/thumb/instagram-heart/5AVRiZ-instagram-heart-background.png" alt="rating star" /> </span>
                    ))                
                }
            </div>

            {!hideButton && (
                <button onClick={removeFromBasket}>Remove</button>
            )}
        </div>
    </div>
  )
}

export default CheckoutProduct