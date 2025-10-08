import react from "react";
export default function Commend(){
    return(
    <>
        <section id="commend">
                <div style={{display:"flex",alignItems:"center",textAlign:"center"}}>
                <div style={{background:"#3A365E",color:"white",padding:"29px",width:"135px"}}>
                <h2>ADMIN</h2>
            </div>
            <div style={{display:"flex",padding:"0 50px",alignItems:"center"}}>
                <h2 style={{marginRight:"9px"}}>Commend</h2>
                <span style={{marginLeft:"250px"}}><i className="fa-solid fa-magnifying-glass" style={{position: "absolute",top:"36px",left: "620px",color: "#888"}}></i><input type="search" placeholder="Search" style={{ paddingLeft: "70px", width: "100%", height: "30px",borderRadius:"40px",background:"#f6f6f6",border:"1px solid #000000",outline:"none"}}/></span>
                <button style={{marginLeft:"190px",width: "200px", height: "31px",borderRadius:"20px",border:"none",cursor:"pointer",background:"#13C527",color:"white"}}>+ add your prodacte</button>
            </div>
            </div>
            <div style={{display:"flex"}}>
            <div style={{background:"#1E1E47",color:"white",width:"190px",height:"85vh",lineHeight:"40px"}}>
                <ul style={{paddingTop:"30px",marginLeft:"30px",listStyle:"none"}}>
                    <li><i className="fa-solid fa-house" style={{marginRight:"10px"}}></i><a href="dashbord" style={{textDecoration:"none",color:"white"}}>Dashbord</a></li>
                    <li><i className="fa-solid fa-bag-shopping" style={{marginRight:"10px"}}></i><a href="prodacte" style={{textDecoration:"none",color:"white"}}>prodacte</a></li>
                    <li><i className="fa-solid fa-cart-shopping" style={{marginRight:"10px"}}></i><a href="commend" style={{textDecoration:"none",color:"white"}}>Commend</a></li>
                    <li><i className="fa-solid fa-gear" style={{marginRight:"10px"}}></i><a href="" style={{textDecoration:"none",color:"white"}}>Settings</a></li>
                    <li><i className="fa-solid fa-file" style={{marginRight:"10px"}}></i><a href="" style={{textDecoration:"none",color:"white"}}>logs</a></li>
                </ul>
            </div>
            <div style={{background:"#f6f6f6",paddingBottom:"20px",width:"85%",display:"grid",gridTemplateColumns:"repeat(2,400px)",gap:"40px",alignItems:"center"}}>
                <div style={{display: "grid",gridTemplateColumns: "repeat(2, 1fr)",gap: "70px",background: "white",padding: "70px",borderRadius: "20px",width: "700px",margin: "17px 90px",boxShadow: "0 0 10px rgba(0,0,0,0.1)"}}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label style={{ marginBottom: "8px", fontWeight: "bold" }}>Enter your name</label>
                        <input type="text" placeholder="Enter your name"style={{padding: "10px",borderRadius: "10px",border: "1px solid #ccc",outline: "none"}}/>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label style={{ marginBottom: "8px", fontWeight: "bold" }}>Select product</label>
                    <select style={{padding: "10px",borderRadius: "10px",border: "1px solid #ccc",outline: "none"}}>
                        <option value="">Choose...</option>
                        <option value="prodacte1">Prodacte 1</option>
                        <option value="prodacte2">Prodacte 2</option>
                        <option value="prodacte2">Prodacte 3</option>
                        <option value="prodacte2">Prodacte 4</option>
                    </select>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column"}}>
                        <label style={{ marginBottom: "8px", fontWeight: "bold" }}>Enter email</label>
                        <input type="email" placeholder="Enter your email"style={{padding: "10px",borderRadius: "10px",border: "1px solid #ccc",outline: "none"}}/>
                    </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                        <label style={{ marginBottom: "8px", fontWeight: "bold" }}>Enter phone</label>
                        <input type="text" placeholder="Enter your phone"style={{padding: "10px",borderRadius: "10px",border: "1px solid #ccc",outline: "none"}}/>
                    </div>
                    <button style={{textAlign:"center",padding:"13px",background:"#13C527",color:"white",fontSize:"15px",fontWeight:"bold",border:"none",borderRadius:"30px",cursor:"pointer"}}> <i className="fa-solid fa-cart-shopping" style={{marginRight:"30px",fontSize:"20px"}}></i>Send commend</button>
                </div>
            </div>
            </div>
        </section>
    </>
    )
}