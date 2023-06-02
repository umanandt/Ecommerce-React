import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItems } from "./cart-items";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalCartAmout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmout();

  return (
    <div className="cart">
      <div>
        <h1>Your cart Items</h1>
      </div>

      <div className="cartItems">
        {PRODUCTS.map((product, index) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems key={index} data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}> Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1> Your cart is empty</h1>
      )}
    </div>
  );
};
