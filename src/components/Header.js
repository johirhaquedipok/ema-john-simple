import React from 'react';
import logo from '../images/logo.png';
import './Header.css';

const header = () => {
    return (
        <div className='Header'>
           <img src={logo} alt=""/>
           <nav>
               <a href="/shop">Shop</a>
               <a href="/review">Order Review</a>
               <a href="/manage">Manager</a>
           </nav>
        </div>
    );
};

export default header;