import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import '../components/navbar.css'

function navbar() {
  return (
    <div className="navbar">
      <div className="navbar">
        <div className="links">
          <Link to="/">Shop</Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default navbar;
