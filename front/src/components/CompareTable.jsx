import React from "react";
import "./CompareTable.css";

function CompareTable({ products }) {
  return (
    <div className="table-container">
      <h2>Comparison</h2>

      <table>
        <thead>
          <tr>
            <th>Feature</th>
            {products.map((p) => (
              <th key={p.id}>{p.name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Price</td>
            {products.map((p) => (
              <td key={p.id}>Rs{p.price}</td>
            ))}
          </tr>

          <tr>
            <td>Rating</td>
            {products.map((p) => (
              <td key={p.id}>{p.rating}</td>
            ))}
          </tr>

          <tr>
            <td>Brand</td>
            {products.map((p) => (
              <td key={p.id}>{p.brand}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CompareTable;