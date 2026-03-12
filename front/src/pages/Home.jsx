import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import CompareTable from "../components/CompareTable";
import "./Home.css";


const Home = () => {
  const [products, setProducts] = useState([]); // Products from backend
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedProducts, setSelectedProducts] = useState([]); // For comparison

  const API_URL = "http://localhost:5000/api/products"; // Your backend

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(API_URL);
        setProducts(res.data);
      } catch (err) {
        setError("Failed to fetch products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Compare logic
  const toggleCompare = (product) => {
    const exists = selectedProducts.find((p) => p._id === product._id);

    if (exists) {
      setSelectedProducts(
        selectedProducts.filter((p) => p._id !== product._id)
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
      <h1>Product Comparison App</h1>

      {/* Loading / Error */}
      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Products Grid */}
      {!loading && !error && (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product._id} // backend uses _id
              product={product}
              toggleCompare={toggleCompare}
            />
          ))}
        </div>
      )}

      {/* Comparison Table */}
      {selectedProducts.length > 0 && (
        <CompareTable products={selectedProducts} />
      )}
    </div>
  );
};

export default Home;