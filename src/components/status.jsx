import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function StatusCommend() {
  const location = useLocation();

  const [selectedProducts, setSelectedProducts] = useState(
    location.state?.selectedProducts || []
  );

  const handleRemoveProduct = (id) => {
    setSelectedProducts((prev) => prev.filter((item) => item.id !== id));
  };

  const [showCard, setShowCard] = useState(false);
  const [productName, setProductName] = useState("");
  const handleAddProduct = () => {
    if (!productName.trim()) {
      alert("Please enter a product name!");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: productName,
      category: "Default", 
      price: 0,
      quantity: 1,
    };

    setSelectedProducts((prev) => [...prev, newProduct]); 
    setProductName(""); 
    setShowCard(false); 
  };

  return (
    <>
      <section id="dashbord">
        <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
          <div
            style={{
              background: "#3A365E",
              color: "white",
              padding: "28px",
              width: "134px",
            }}
          >
            <h2>ADMIN</h2>
          </div>

          <div style={{ display: "flex", padding: "0 50px", alignItems: "center" }}>
            <h2>Dashboard</h2>
            <span style={{ marginLeft: "250px" }}>
              <i
                className="fa-solid fa-magnifying-glass"
                style={{
                  position: "absolute",
                  top: "36px",
                  left: "620px",
                  color: "#888",
                }}
              ></i>
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
                  outline: "none",
                }}
              />
            </span>
          </div>
          <button
            onClick={() => setShowCard(true)}
            style={{
              marginLeft: "190px",
              width: "200px",
              height: "31px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              background: "#13C527",
              color: "white",
            }}
          >
            + add your product
          </button>
        </div>
        {showCard && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
            onClick={() => setShowCard(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "350px",
                background: "white",
                borderRadius: "20px",
                boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                padding: "20px",
                textAlign: "center",
                animation: "fadeIn 0.3s ease",
              }}
            >
              <h3 style={{ color: "#3A365E", marginBottom: "10px" }}>
                Add New Product
              </h3>

              <input
                type="text"
                placeholder="Product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                style={{
                  width: "100%",
                  height: "35px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  paddingLeft: "10px",
                  marginBottom: "15px",
                }}
              />

              <button
                onClick={handleAddProduct}
                style={{
                  width: "100%",
                  height: "35px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  background: "#0A7AFF",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Save
              </button>
            </div>
          </div>
        )}

        <div style={{ display: "flex" }}>
          <div
            style={{
              background: "#1E1E47",
              color: "white",
              width: "190px",
              height: "85vh",
              lineHeight: "40px",
            }}
          >
            <ul
              style={{ paddingTop: "30px", marginLeft: "30px", listStyle: "none" }}
            >
              <li>
                <i className="fa-solid fa-house" style={{ marginRight: "10px" }}></i>
                <a href="dashbord" style={{ textDecoration: "none", color: "white" }}>
                  Dashbord
                </a>
              </li>
              <li>
                <i
                  className="fa-solid fa-bag-shopping"
                  style={{ marginRight: "10px" }}
                ></i>
                <a href="prodacte" style={{ textDecoration: "none", color: "white" }}>
                  Prodacte
                </a>
              </li>
              <li>
                <i className="fa-solid fa-gear" style={{ marginRight: "10px" }}></i>
                <a href="status" style={{ textDecoration: "none", color: "white" }}>
                  Status
                </a>
              </li>
              <li>
                <i
                  className="fa-solid fa-cart-shopping"
                  style={{ marginRight: "10px" }}
                ></i>
                <a href="commend" style={{ textDecoration: "none", color: "white" }}>
                  Commend
                </a>
              </li>
            </ul>
          </div>
          <div
            style={{
              background: "#f6f6f6",
              paddingBottom: "20px",
              width: "85%",
              display: "grid",
              gridTemplateColumns: "repeat(2,400px)",
              gap: "40px",
            }}
          >
            <section id="StatusCommend">
              <div style={{ background: "#3A365E", color: "white", padding: "28px" }}>
                <h2>Selected Products</h2>
              </div>

              <div style={{ padding: "20px" }}>
                {selectedProducts.length === 0 ? (
                  <p>No products selected.</p>
                ) : (
                  selectedProducts.map((product) => (
                    <div
                      key={product.id}
                      style={{
                        background: "#fff",
                        border: "1px solid #000",
                        borderRadius: "10px",
                        marginBottom: "10px",
                        padding: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <h3>{product.name}</h3>
                        <p>Category: {product.category}</p>
                        <p>Price: {product.price} MAD</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Total: {product.price * product.quantity} MAD</p>
                      </div>

                      <i
                        className="fa-solid fa-trash"
                        style={{
                          cursor: "pointer",
                          color: "black",
                          fontSize: "20px",
                        }}
                        onClick={() => handleRemoveProduct(product.id)}
                      ></i>
                    </div>
                  ))
                )}
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
