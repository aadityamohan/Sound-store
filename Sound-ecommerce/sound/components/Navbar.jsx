import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

import { useUser } from '@auth0/nextjs-auth0';


const Navbar = () => {

  
  
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const{user, isLoading, error} = useUser();

    return (
      <div className="navbar-container">
        <p className="logo">
          <Link href="/">Sound Store </Link>
        </p>

        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
       {showCart && <Cart />}

       <div className= "logo">
      {user ? (
        <>
        {/*<img className='userpicture' src={user.picture}></img>*/}
        <p className='username'>{user.name}</p>
        <a href='/api/auth/logout'>Logout </a>
        </>
        ) : (
          <a href='/api/auth/login'>Login </a>
        )}
         </div>
        

      </div>
    );
}

export default Navbar

