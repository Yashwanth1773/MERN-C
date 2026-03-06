import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import CompareTable from "../components/CompareTable";
import products from "../data/products";
import "./Home.css"

const Home = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const toggleCompare = (product) => {
    const exists = selectedProducts.find((p) => p.id === product.id);

    if (exists) {
      setSelectedProducts(
        selectedProducts.filter((p) => p.id !== product.id)
      );
    } else {
      if (selectedProducts.length < 3) {
        setSelectedProducts([...selectedProducts, product]);
      } else {
        alert("You can compare only 3 products");
      }
    }
  };

  return (
    <div className="container">

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            toggleCompare={toggleCompare}
          />
        ))}
      </div>

      {selectedProducts.length > 0 && (
        <CompareTable products={selectedProducts} />
      )}
    </div>
  );
};

export default Home;