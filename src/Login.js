import './Login.css'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            navigate("/", { replace: true })
        }).catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();

        //the snippet below will create a user with email and password and then return with an auth object 
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            navigate("/", { replace: true })
        }).catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to="/">
            <img className='login-logo' src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo-700x394.png" alt="amazon-logo" />
        </Link>

        <div className='login-wrapper'>
            <div className='login-container'>
                <h1>Sign in</h1>
                <form>
                    <h5>Email or mobile phone number</h5>
                    <input className='email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input className='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='continue'>Continue</button>
                </form>
                <p>By continuing, you agree to Amazon's clone Conditions of Use and Privacy Notice.</p>
            </div>

            <div className='newToAmazon'>
                <h5>New to Amazon?</h5>
                <div className='divider'></div>
            </div>
            <button onClick={register} className='create-account'>Create your Amazon account</button>
        </div>

    </div>
  )
}

export default Login