import React from "react";
export default function Dashbord(){
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
                    <li><i className="fa-solid fa-cart-shopping" style={{marginRight:"10px"}}></i><a href="commend" style={{textDecoration:"none",color:"white"}}>Commend</a></li>
                    <li><i className="fa-solid fa-gear" style={{marginRight:"10px"}}></i><a href="" style={{textDecoration:"none",color:"white"}}>Settings</a></li>
                    <li><i className="fa-solid fa-file" style={{marginRight:"10px"}}></i><a href="" style={{textDecoration:"none",color:"white"}}>logs</a></li>
                </ul>
            </div>
            <div style={{background:"#f6f6f6",paddingBottom:"20px",width:"85%",display:"grid",gridTemplateColumns:"repeat(2,400px)",gap:"40px"}}>
                <div style={{background:"#1E1E47",color:"white",width:"240px",padding:"70px 50px",textAlign:"center",margin:"0 176px",marginTop:"30px"}}>
                    <h2>1500</h2>
                    <p>New user</p>
                </div>
                <div style={{background:"#DADD1E",color:"white",width:"240px",padding:"70px 50px",textAlign:"center",margin:"0 176px",marginTop:"30px"}}>
                    <h2>44</h2>
                    <p>Request</p>
                </div>
                <div style={{background:"#13C527",color:"white",width:"240px",padding:"70px 50px",textAlign:"center",margin:"0 176px"}}>
                    <h2>10</h2>
                    <p>Prodact</p>
                </div>
                <div style={{background:"#C90303",color:"white",width:"240px",padding:"70px 50px",textAlign:"center",margin:"0 176px"}}>
                    <h2>50</h2>
                    <p>Fedbaak</p>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}