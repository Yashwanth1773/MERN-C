import React from "react";
import "./ProductCard.css";

function ProductCard({ product, toggleCompare }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>Price: rs{product.price}</p>
      <p>Rating: {product.rating}</p>

      <button onClick={() => toggleCompare(product)}>
        Compare
      </button>
    </div>
  );
}

export default ProductCard;