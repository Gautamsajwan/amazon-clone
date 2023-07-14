import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

  const[{basket, user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className="checkout-left">
            <img className='checkout-ad' src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/9/AmazonStores/A21TJRUUN4KGV/2c50621e8a4190221b9de6799c0a01d1.w3000.h1500._CR0%2C0%2C3000%2C1500_SX1500_.jpg" alt="banner-ad" />

            <div>
              <h3 className='hello-user'>Hello, {user? user.email: 'guest'}</h3>
              <h2 className='checkout-title'> Your shopping Basket </h2>
              
              {basket.map(item =>(
                <CheckoutProduct
                  id = {item.id}
                  title = {item.title}
                  image = {item.image}
                  price = {item.price}
                  rating = {item.rating}
                />
              ))}

            </div>
        </div>

        <div className="checkout-right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout