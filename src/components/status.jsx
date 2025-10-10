import React from "react";
import { useLocation } from "react-router-dom";

export default function StatusCommend() {
  const location = useLocation();
  const selectedProducts = location.state?.selectedProducts || [];

  return (
    <section id="StatusCommend">
      <div style={{ background: "#3A365E", color: "white", padding: "28px" }}>
        <h2>Selected Products</h2>
      </div>

      <div style={{ padding: "20px" }}>
        {selectedProducts.length === 0 ? (
          <p>No products selected.</p>
        ) : (
          selectedProducts.map((product) => (
            <div key={product.id} style={{
              background: "#fff",
              border: "1px solid #000",
              borderRadius: "10px",
              marginBottom: "10px",
              padding: "15px"
            }}>
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <p>{product.price} MAD</p>
              <p>{product.description}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
