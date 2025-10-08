import react from "react";
import dashbord from "./dashbord";
export default function prodacte(){
    return(
    <>
        <section id="prodacte">
                <div style={{display:"flex",alignItems:"center",textAlign:"center"}}>
                <div style={{background:"#3A365E",color:"white",padding:"28px",width:"134px"}}>
                <h2>ADMIN</h2>
            </div>
            <div style={{display:"flex",padding:"0 50px",alignItems:"center"}}>
                <h2 style={{marginRight:"9px"}}>Prodacte</h2>
                <span style={{marginLeft:"250px"}}><i className="fa-solid fa-magnifying-glass" style={{position: "absolute",top:"36px",left: "620px",color: "#888"}}></i><input type="search" placeholder="Search" style={{ paddingLeft: "70px", width: "100%", height: "30px",borderRadius:"40px",background:"#f6f6f6",border:"1px solid #000000",outline:"none"}}/></span>
                <button style={{marginLeft:"190px",width: "200px", height: "31px",borderRadius:"20px",border:"none",cursor:"pointer",background:"#13C527",color:"white"}}>+ add your prodacte</button>
            </div>
            </div>
            <div style={{display:"flex"}}>
            <div style={{background:"#1E1E47",color:"white",width:"190px",height:"85vh",lineHeight:"40px"}}>
                <ul style={{paddingTop:"30px",marginLeft:"30px",listStyle:"none"}}>
                    <li><i className="fa-solid fa-house" style={{marginRight:"10px"}}></i><a href="dashbord" style={{textDecoration:"none",color:"white"}}>Dashbord</a></li>
                    <li><i className="fa-solid fa-cart-shopping" style={{marginRight:"10px"}}></i><a href="prodacte" style={{textDecoration:"none",color:"white"}}>Prodact</a></li>
                    <li><i className="fa-solid fa-bag-shopping" style={{marginRight:"10px"}}></i><a href="" style={{textDecoration:"none",color:"white"}}>Commend</a></li>
                    <li><i className="fa-solid fa-gear" style={{marginRight:"10px"}}></i><a href="" style={{textDecoration:"none",color:"white"}}>Settings</a></li>
                    <li><i className="fa-solid fa-file" style={{marginRight:"10px"}}></i><a href="" style={{textDecoration:"none",color:"white"}}>logs</a></li>
                </ul>
            </div>
            <div style={{background:"#f6f6f6",paddingBottom:"20px",width:"85%",display:"grid",gridTemplateColumns:"repeat(2,400px)",gap:"40px"}}>
                
            </div>
            </div>
        </section>
    </>
    )
}