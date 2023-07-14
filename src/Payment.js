import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import './Payment.css'
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { total } from './Reducer';
import axios from './axios';
import { db } from './firebase';

function Payment() {
    const[{basket, user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();

    const navigate = useNavigate();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const[error, setError] = useState(null); // for capturing the error
    const[disabled, setDisabled] = useState(true);
    const[clientSecret, setClientSecret] = useState(true);

    useEffect(()=> {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async() => {
            const response = await axios({
                method: 'post',
                // stripe expects the total in a currencies subunits
                url: `/payments/create?total=${total(basket) * 100}`
                //this url is an api call powered by axios
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret(); // this is how we write a async function inside useEffect
    },[basket]) // basket determines that every time it changes it will fire the useEffect

    console.log('the secret is >>>', clientSecret)

    const handleSubmit = async (e) => {
        // do all the fancy stripe stuff
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent is a response which marks payment confirmation
            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                basket: basket, 
                amount: paymentIntent.amount,
                created: paymentIntent.created
              })

            setSucceeded(true);
            setError(false);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders', { replace: true });
        })
    }

    const handleChange = (e) => {
        // listen for changes in the CardElement and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error? e.error.message : "");
    }
    
  return (
    <div className='payment'>
        <div className='pay-container'>

            <h1>
                Checkout ({<Link to='/checkout'>{basket?.length} items</Link>})
            </h1>

            <div className='pay-section'>
                <div className='title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='address'>
                    <p>{user?.email}</p>
                    <p>chamba, tehri</p>
                    <p>Uttrakhand, 249145</p>
                </div>
            </div>

            <div className='pay-section'>
                <div className='title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment-items'>
                    {basket.map(item=>( // here item is the callback parameter
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className='pay-section'>
                <div className='title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment-details'>
                    {/* stripe magic */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />

                        <div className="price-container">
                            <CurrencyFormat
                                renderText={(value) => (
                                  <h3 className='total'>Order Total: {value}</h3>
                                )}
                                decimalScale={2} // it can show the price upto 2 decimal                    places
                                value={total(basket)} // initial value is 0
                                displayType={"text"}
                                thousandSeparator={true} // add commas to the total e.g.                    $1,000
                                prefix={"$"} // currency sign
                            />

                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                            </button>
                            
                        </div>
                        
                        {/* errors */}
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment