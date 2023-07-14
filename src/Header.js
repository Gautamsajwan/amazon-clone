import React from 'react'
import './Header.css'
import logo from './images/amazon-logo.png';
import SearchIcon from '@mui/icons-material/Search';
import menu from './images/menu.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user) {
        auth.signOut();
    }
  }

  return (
    <div className='header'>
        <Link to="/">
            <img className='header-logo' src={logo} alt="amazonlogo" />
        </Link>

        <div className="header-search">
            <input className='search-box' type="text" />
            <SearchIcon className='search-icon' />
        </div>

        <button className='menu'> <img src={menu} alt="menu" /> </button>

        <div className="header-nav">
            <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className="option">
                    <span className='lineOne'>Hello {user? user.email: 'guest'}</span>
                    <span className='lineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>

            <Link to="/orders">
                <div className="option">
                    <span className='lineOne'>Returns</span>
                    <span className='lineTwo'>& Orders</span>
                </div>
            </Link>

            <div className="option">
                <span className='lineOne'>Your</span>
                <span className='lineTwo'>Prime</span>
            </div>
            
            <Link to="/checkout">
                <div className="basket">
                    <ShoppingCartIcon className='cart-icon'/>
                    <span className='lineTwo item-count'>{ basket?.length }</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header