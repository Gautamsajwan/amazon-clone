import React from 'react'
import { Link } from 'react-router-dom';
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {

  const [{basket}, dispatch] = useStateValue();
  // here dispatch basically determines how we are gonna manipulate the data layer

  const addToCart = () => { // addToCart is a onclick function👇
    // dispatch shoots the item into the data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }

  return (
    <div className='product'>
        <div className="product-info">
            <p>{title}</p>
            <p className='product-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product-rating">
              {/* this snippet just means that create an empty array of size = rating and then fill it with an empty element and then then through iterator i map each element to a star */}
                {
                 Array(rating).fill().map((_, i) =>(
                      <span> <img src="https://www.transparentpng.com/thumb/instagram-heart/5AVRiZ-instagram-heart-background.png" alt="rating star" /> </span>
                  ))
               }
            </div>
        </div>

       <img src={image} alt="product-photo" />

       <button onClick={addToCart} >Add to Cart</button>
       <Link to='/checkout' className='linked'>
          <button onClick={addToCart} className='buy'>Buy Now</button>
       </Link>

    </div>
  )
}

export default Product