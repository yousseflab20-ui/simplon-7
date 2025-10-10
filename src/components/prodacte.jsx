import React, { useState } from "react";
import { products } from "../data/Cardprodacte";
import { useNavigate } from "react-router-dom";

export default function Prodacte() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const navigate = useNavigate();

  const handleCheckboxChange = (product) => {
    if (selectedProducts.find((item) => item.id === product.id)) {
      // remove if already selected
      setSelectedProducts(selectedProducts.filter((item) => item.id !== product.id));
    } else {
      // add if not selected
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  function ProductCard({ product }) {
    const isChecked = selectedProducts.find((item) => item.id === product.id);
    return (
      <div style={{
        background: "#fff",
        color: "black",
        padding: "25px",
        margin: "0 70px",
        border: "1px solid black",
        borderRadius: "15px",
        width: "80%",
        display: "flex",
        gap: "30px"
      }}>
        <input
          type="checkbox"
          checked={!!isChecked}
          onChange={() => handleCheckboxChange(product)}
          style={{ marginRight: "30px" }}
        />
        <h3>{product.name}</h3>
        <p style={{ marginLeft: "20px" }}>{product.category}</p>
        <p style={{ marginLeft: "20px" }}>{product.price} MAD</p>
        <input type="number" min={0} style={{ width: "40px" }} />
        <p style={{ fontSize: "20px", color: "black", marginLeft: "20px" }}>{product.description}</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
  e.preventDefault();

  const cleanProducts = selectedProducts.map(({ id, name, price, category, description }) => ({
    id,
    name,
    price,
    category,
    description,
  }));

  navigate("/status", { state: { selectedProducts: cleanProducts } });
};


  return (
    <section id="prodacte">
      {/* header */}
      <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <div style={{ background: "#3A365E", color: "white", padding: "28px", width: "134px" }}>
          <h2>ADMIN</h2>
        </div>
        <div style={{ display: "flex", padding: "0 50px", alignItems: "center" }}>
          <h2 style={{ marginRight: "9px" }}>Product</h2>
          <span style={{ marginLeft: "250px" }}>
            <i className="fa-solid fa-magnifying-glass"
              style={{ position: "absolute", top: "36px", left: "620px", color: "#888" }}></i>
            <input
              type="search"
              placeholder="Search"
              style={{
                paddingLeft: "70px",
                width: "100%",
                height: "30px",
                borderRadius: "40px",
                background: "#f6f6f6",
                border: "1px solid #000000",
                outline: "none"
              }}
            />
          </span>
          <button
            style={{
              marginLeft: "190px",
              width: "200px",
              height: "31px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              background: "#13C527",
              color: "white"
            }}
          >
            + add your product
          </button>
        </div>
      </div>

      {/* sidebar + products */}
      <div style={{ display: "flex" }}>
        <div style={{ background: "#1E1E47", color: "white", width: "190px", height: "85vh", lineHeight: "40px" }}>
          <ul style={{ paddingTop: "30px", marginLeft: "30px", listStyle: "none" }}>
            <li><i className="fa-solid fa-house" style={{ marginRight: "10px" }}></i><a href="dashbord" style={{ textDecoration: "none", color: "white" }}>Dashboard</a></li>
            <li><i className="fa-solid fa-bag-shopping" style={{ marginRight: "10px" }}></i><a href="prodacte" style={{ textDecoration: "none", color: "white" }}>Product</a></li>
            <li><i className="fa-solid fa-gear" style={{ marginRight: "10px" }}></i><a href="status" style={{ textDecoration: "none", color: "white" }}>Status</a></li>
            <li><i className="fa-solid fa-cart-shopping" style={{ marginRight: "10px" }}></i><a href="commend" style={{ textDecoration: "none", color: "white" }}>Commend</a></li>
          </ul>
        </div>

        {/* product list */}
        <div style={{ background: "#f6f6f6", width: "85%", gap: "60px" }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginTop: "30px" }}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <button
              type="submit"
              style={{
                padding: "15px 60px",
                borderRadius: "20px",
                background: "#13C527",
                border: "none",
                marginTop: "20px",
                fontSize: "15px",
                color: "white",
                fontWeight: "bold",
                marginLeft: "400px",
                cursor: "pointer"
              }}
            >
              <i className="fa-solid fa-cart-shopping" style={{ marginRight: "30px", fontSize: "20px" }}></i>
              Send commend
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
