import moment from 'moment'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import CheckoutProduct from './CheckoutProduct'
import './Order.css'

function Order({ order }) {
  return (
    <div className='order'>
        <h2>Order</h2>
        <p>
            {moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}
        </p>

        <p className='order-id'>
            <small>{order.id}</small>
        </p>
        {order.data.basket?.map(item =>{
            <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hideButton
            />
        })}

        <CurrencyFormat
            renderText={(value) => (
              <h3 className='order-total'>Order Total: {value}</h3>
            )}
            decimalScale={2} // it can show the price upto 2 decimal places
            value={order.data.amount / 100} // initial value is 0
            displayType={"text"}
            thousandSeparator={true} // add commas to the total e.g. $1,000
            prefix={"$"} // currency sign
        />
    </div>
  )
}

export default Order