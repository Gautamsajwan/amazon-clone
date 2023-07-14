import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51MA6P7SIdz2j5vhyG2Nfuut0HJTNKk6CORuu6woWnIiisI903z90PasmtE7Pu3eqz9aPRjkYrUuimZ66sGnZSAPI00iJLlsthQ');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(()=> {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      //onAuthStateChanged is a func. which whenever the authentication state changes pass an authUser arrow func. as a parameter
      console.log('the user is >>> ', authUser);

      if(authUser) {
        // every time the user logs in, dispatch method will shoot the credentials into the datalayer and eradicate it when logged out
        dispatch({
          type: 'SET_USER',
          user: authUser // here user is the action we dispatched to the datalayer
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="App">
        {/* to render the home and header based upon the route we are in, we can use routes */}
        <Routes>
          <Route path = "/login" element={<Login/>} />
        </Routes>

        <Routes>
          <Route path = "/" element={[<Header />,<Home />]} />
        </Routes>

        <Routes>
          <Route path = "/checkout" element={[<Header />,<Checkout/>]} />
        </Routes>

        <Routes>
          <Route path= "/payment" element={[<Header />, <Elements stripe={promise}> <Payment/> </Elements>]} />
        </Routes>

        <Routes>
          <Route path= "/orders" element={[<Header />, <Orders />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
