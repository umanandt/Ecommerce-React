import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import './shop.css';

export const Shop =() => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1> Tech Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </div>
  );
}


