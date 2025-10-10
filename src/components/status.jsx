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

    return ( <>
        <section id="dashbord">
                <div style={{display:"flex",alignItems:"center",textAlign:"center"}}>
                <div style={{background:"#3A365E",color:"white",padding:"28px",width:"134px"}}>
                <h2>ADMIN</h2>
            </div>
            <div style={{display:"flex",padding:"0 50px",alignItems:"center"}}>
                <h2>Dashbord</h2>
                <span style={{marginLeft:"250px"}}><i className="fa-solid fa-magnifying-glass" style={{position: "absolute",top:"36px",left: "620px",color: "#888"}}></i><input type="search" placeholder="Search" style={{ paddingLeft: "70px", width: "100%", height: "30px",borderRadius:"40px",background:"#f6f6f6",border:"1px solid #000000",outline:"none"}}/></span>
                <img src="https://static.vecteezy.com/ti/photos-gratuite/t1/5346410-gros-plan-portrait-de-souriant-beau-jeune-homme-caucasien-visage-regardant-camera-sur-fond-studio-gris-clair-isole-photo.jpg" style={{width:"35px",height:"35px",marginLeft:"220px",borderRadius:"70px"}}></img><h4 style={{marginLeft:"20px"}}>Youssef Labnine</h4>
            </div>
            </div>
            <div style={{display:"flex"}}>
            <div style={{background:"#1E1E47",color:"white",width:"190px",height:"85vh",lineHeight:"40px"}}>
                <ul style={{paddingTop:"30px",marginLeft:"30px",listStyle:"none"}}>
                    <li><i className="fa-solid fa-house" style={{marginRight:"10px"}}></i><a href="dashbord" style={{textDecoration:"none",color:"white"}}>Dashbord</a></li>
                    <li><i className="fa-solid fa-bag-shopping" style={{marginRight:"10px"}}></i><a href="prodacte" style={{textDecoration:"none",color:"white"}}>prodacte</a></li>
                    <li><i className="fa-solid fa-gear" style={{marginRight:"10px"}}></i><a href="status" style={{textDecoration:"none",color:"white"}}>Status</a></li>
                    <li><i className="fa-solid fa-cart-shopping" style={{marginRight:"10px"}}></i><a href="commend" style={{textDecoration:"none",color:"white"}}>Commend</a></li>
                    <li><i className="fa-solid fa-file" style={{marginRight:"10px"}}></i><a href="" style={{textDecoration:"none",color:"white"}}>logs</a></li>
                </ul>
            </div>
            <div style={{background:"#f6f6f6",paddingBottom:"20px",width:"85%",display:"grid",gridTemplateColumns:"repeat(2,400px)",gap:"40px"}}>
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
                justifyContent: "space-between"
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
                style={{ cursor: "pointer", color: "red", fontSize: "20px" }}
                onClick={() => handleRemoveProduct(product.id)}
              ></i>
            </div>
          ))
        )}
      </div>
    </section>
  );
            </div>
            </div>
        </section>
        </>
    )
}