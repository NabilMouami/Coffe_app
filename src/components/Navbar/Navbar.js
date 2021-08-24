import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import './Navbar.css'
import {Link} from "react-router-dom"

export const Navbar = ({cart}) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
    return (
        <nav className="navbar">
         <Link to="/">
           <div className="navbar__logo">
               <h2>MERN Shopping Cart</h2>
           </div>
        </Link>
           <ul className="navbar__links">
             <li>
                 <Link to="/cart" className="cart__link">
                   <i className="fas fa-shopping-cart"></i>
                    <span>
                       Cart
                       <span className="cartlogo__badge">{cartCount}</span>
                    </span>
                 </Link>
             </li>
             <li>
                 <Link to="/">
                   Shop
                 </Link>
             </li>
           </ul>
        </nav>
    );
}
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);