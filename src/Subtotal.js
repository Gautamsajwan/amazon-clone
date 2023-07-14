import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { total } from './Reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {

  const navigate = useNavigate();
  const[{basket}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2} // it can show the price upto 2 decimal places
        value={total(basket)} // initial value is 0
        displayType={"text"}
        thousandSeparator={true} // add commas to the total e.g. $1,000
        prefix={"$"} // currency sign
      />

      <button onClick={e => navigate('/payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal