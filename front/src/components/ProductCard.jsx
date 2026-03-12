import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, toggleCompare }) => {
  return (
    <div className="card">

      <img src={product.image} alt={product.name} className="product-image" />

      <h3>{product.name}</h3>

      <p>Price: {product.price}</p>
      <p>Brand: {product.brand}</p>
      <p>Rating: {product.rating}</p>

      <button onClick={() => toggleCompare(product)}>
        Compare
      </button>

    </div>
  );
};

export default ProductCard;