import React from "react";
import "./style-nav.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Nav1 = () => {
  const { cartItems } = useSelector((state) => state);
  return (
    <nav className="nav1">
      <div className="nav1-container">
        <Link className="link" to="/">
          EGY <span>STORE</span>
        </Link>
        <div>
          <Link to="/cart">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span className="length"> {cartItems.cart.length} </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Nav1;
